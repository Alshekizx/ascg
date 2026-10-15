import { useEffect, useState } from "react";
import { requireSupabase } from "./supabase";
export function useStatistics() {
  const [counts, setCounts] = useState<{
    mandates: number;
    partners: number;
    programmes: number;
    registrations: number;
  } | null>(null);
  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data, error } = await requireSupabase().rpc(
        "asgc_public_statistics",
      );
      if (active && !error) setCounts(data);
    };
    void load();
    const timer = setInterval(() => void load(), 30000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);
  return counts;
}
