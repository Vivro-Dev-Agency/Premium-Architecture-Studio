import { ImageResponse } from "next/og";

import { IconContent } from "@/lib/brand/og-image";
import { loadGoogleFont } from "@/lib/brand/fonts";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const cormorant = await loadGoogleFont("Cormorant+Garamond", 300);

  return new ImageResponse(<IconContent size={32} />, {
    ...size,
    fonts: [
      {
        name: "Cormorant",
        data: cormorant,
        style: "normal",
        weight: 300,
      },
    ],
  });
}
