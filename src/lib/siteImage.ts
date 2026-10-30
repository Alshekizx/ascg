import { sitePhotos } from "./sitePhotos";

/** Static decoration only; CMS-owned image fields should keep their Supabase URLs. */
export function siteImage(index: number) {
  return sitePhotos[((index % sitePhotos.length) + sitePhotos.length) % sitePhotos.length];
}
