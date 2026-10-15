import { useSyncExternalStore } from "react";
import { requireSupabase } from "./supabase";
interface Snapshot {
  items: object[];
  loading: boolean;
  error: string;
}
function makeStore(kind: string) {
  let snapshot: Snapshot = { items: [], loading: true, error: "" };
  const listeners = new Set<() => void>();
  let stop: (() => void) | undefined;
  let revision = 0;
  const notify = (next: Snapshot) => {
    snapshot = next;
    listeners.forEach((listener) => listener());
  };
  const start = () => {
    const client = requireSupabase();
    let active = true;
    const load = async () => {
      const current = ++revision;
      try {
        const { data, error } = await client
          .from("asgc_content")
          .select("id,slug,title,data")
          .eq("kind", kind)
          .eq("status", "published")
          .order("sort_order")
          .order("updated_at", { ascending: false });
        if (!active || current !== revision) return;
        if (error) throw error;
        notify({
          items: (data ?? []).map((row) => ({
            ...row.data,
            id: row.id,
            slug: row.slug,
            title: row.title,
          })),
          loading: false,
          error: "",
        });
      } catch {
        if (active && current === revision)
          notify({
            ...snapshot,
            loading: false,
            error: "Content could not be loaded. Please try again shortly.",
          });
      }
    };
    void load();
    const refresh = () => {
      void load();
    };
    const channel = client
      .channel(`public-${kind}-${crypto.randomUUID()}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "asgc_content",
          filter: `kind=eq.${kind}`,
        },
        refresh,
      )
      .subscribe();
    const timer = setInterval(refresh, 30000);
    window.addEventListener("focus", refresh);
    return () => {
      active = false;
      revision++;
      clearInterval(timer);
      window.removeEventListener("focus", refresh);
      void client.removeChannel(channel);
    };
  };
  return {
    snapshot: () => snapshot,
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      if (listeners.size === 1) stop = start();
      return () => {
        listeners.delete(listener);
        if (!listeners.size) {
          stop?.();
          stop = undefined;
        }
      };
    },
  };
}
const stores = new Map<string, ReturnType<typeof makeStore>>();
export function useContent<T extends object>(kind: string) {
  let store = stores.get(kind);
  if (!store) {
    store = makeStore(kind);
    stores.set(kind, store);
  }
  const state = useSyncExternalStore(
    store.subscribe,
    store.snapshot,
    store.snapshot,
  );
  return { ...state, items: state.items as T[] };
}
