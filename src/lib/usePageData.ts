import { useContent } from "./useContent";
export function usePageData<T>(slug: string) {
  const { items, loading, error } = useContent<{
    slug: string;
    blocks: Record<string, string>;
    arrays: T extends { arrays: infer A } ? A : Record<string, never>;
    values: Record<string, string>;
  }>("page");
  return { page: items.find((item) => item.slug === slug), loading, error };
}
