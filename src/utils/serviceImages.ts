export function getServiceImageUrl(filename?: string): string | undefined {
  if (!filename) return undefined;

  const normalized = filename.trim();

  return normalized.startsWith("gallery/")
    ? new URL(`../assets/${normalized}`, import.meta.url).href
    : new URL(`../assets/gallery/${normalized}`, import.meta.url).href;
}