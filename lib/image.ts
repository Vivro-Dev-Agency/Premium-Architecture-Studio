const DEFAULT_QUALITY = 75;
const MOBILE_MAX_WIDTH = 768;

export function imageUrl(
  base: string,
  width: number,
  quality = DEFAULT_QUALITY
): string {
  const url = new URL(base);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality));
  url.searchParams.set("auto", "format");
  return url.toString();
}

export const imageSizes = {
  hero: "(max-width: 768px) 100vw, 60vw",
  card: "(max-width: 768px) 100vw, 50vw",
  cardCompact: "(max-width: 768px) 85vw, 40vw",
  team: "(max-width: 768px) 100vw, 33vw",
  article: "(max-width: 768px) 100vw, 768px",
  full: "100vw",
} as const;

export function shouldPriorityLoad(index: number, max = 2): boolean {
  return index < max;
}

export { DEFAULT_QUALITY, MOBILE_MAX_WIDTH };
