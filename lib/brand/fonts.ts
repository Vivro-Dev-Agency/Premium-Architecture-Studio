export async function loadGoogleFont(fontFamily: string, weight: number): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${weight}&display=swap`;

  const css = await fetch(cssUrl, {
    next: { revalidate: 60 * 60 * 24 * 7 },
  }).then((res) => res.text());

  const regex = /src: url\((.+?)\) format\('(?:opentype|truetype|woff2)'\)/;

  const match = regex.exec(css);

  if (!match?.[1]) {
    throw new Error(`Failed to load font: ${fontFamily}`);
  }

  return fetch(match[1]).then((res) => res.arrayBuffer());
}
