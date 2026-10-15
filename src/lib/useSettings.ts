import { useContent } from "./useContent";
import type { Settings } from "../types/content";
export function useSettings() {
  const result = useContent<Settings>("settings");
  return { ...result, settings: result.items[0] };
}
