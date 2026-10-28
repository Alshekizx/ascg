const sitePhotos = Array.from({ length: 11 }, (_, index) =>
  `/images/asgc-photo-${String(index + 1).padStart(2, "0")}.jpeg`,
);

/** Select a supplied ASGC photo consistently for each piece of site content. */
export function siteImage(key: string | number | undefined, fallbackIndex = 0) {
  if (key === undefined || key === "") return sitePhotos[fallbackIndex % sitePhotos.length];
  const value = String(key);
  let hash = 0;
  for (let index = 0; index < value.length; index++) {
    hash = (hash * 31 + value.charCodeAt(index)) | 0;
  }
  return sitePhotos[Math.abs(hash) % sitePhotos.length];
}
