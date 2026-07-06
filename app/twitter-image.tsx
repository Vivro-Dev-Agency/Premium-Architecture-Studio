import { ImageResponse } from "next/og";

import { loadGoogleFont } from "@/lib/brand/fonts";
import { OgImageContent } from "@/lib/brand/og-image";

export const alt = "Atelier Meridian — Architecture & Interior Design in Agadir, Morocco";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const [cormorant, inter] = await Promise.all([
    loadGoogleFont("Cormorant+Garamond", 300),
    loadGoogleFont("Inter", 400),
  ]);

  return new ImageResponse(<OgImageContent />, {
    ...size,
    fonts: [
      {
        name: "Cormorant",
        data: cormorant,
        style: "normal",
        weight: 300,
      },
      {
        name: "Inter",
        data: inter,
        style: "normal",
        weight: 400,
      },
    ],
  });
}
