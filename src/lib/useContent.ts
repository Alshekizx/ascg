import { useEffect, useState } from "react"
import { supabase } from "./supabase"

export function useContent<T extends object>(kind: string, fallback: T[]) {
  const [items, setItems] = useState<T[]>(fallback)
  const [loading, setLoading] = useState(Boolean(supabase))
  const [error, setError] = useState("")
  useEffect(() => {
    const client = supabase
    if (!client) return
    let active = true
    let revision = 0
    const load = async () => {
      const current = ++revision
      const { data, error } = await client
        .from("asgc_content")
        .select("id,slug,title,data")
        .eq("kind", kind)
        .eq("status", "published")
        .order("sort_order")
        .order("updated_at", { ascending: false })
      if (!active || current !== revision) return
      if (error)
        setError("Content could not be refreshed. Please try again shortly.")
      else {
        setItems(
          (data ?? []).map((row) => ({
            ...row.data,
            id: row.id,
            slug: row.slug,
            title: row.title,
          })) as T[],
        )
        setError("")
      }
      setLoading(false)
    }
    void load()
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
        () => {
          void load()
        },
      )
      .subscribe()
    const refresh = () => {
      void load()
    }
    window.addEventListener("focus", refresh)
    // Anonymous realtime notifications cannot always reveal deleted or unpublished rows.
    const poll = window.setInterval(refresh, 30000)
    return () => {
      active = false
      clearInterval(poll)
      window.removeEventListener("focus", refresh)
      void client.removeChannel(channel)
    }
  }, [kind])
  return { items, loading, error }
}
