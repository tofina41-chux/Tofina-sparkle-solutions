export function getServiceImageUrl(filename?: string): string | undefined {
  if (!filename) return undefined;

  const normalized = filename.trim();
  const relativePath = normalized.startsWith("gallery/")
    ? `../../assets/${normalized}`
    : `../../assets/services/${normalized}`;

  return new URL(relativePath, import.meta.url).href;
}
