import { ImageResponse } from "next/og";

import { loadGoogleFont } from "@/lib/brand/fonts";
import { OgImageContent } from "@/lib/brand/og-image";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? siteConfig.name;
  const description =
    searchParams.get("description") ?? siteConfig.tagline;
  const label = searchParams.get("label") ?? "Agadir, Morocco";

  const [cormorant, inter] = await Promise.all([
    loadGoogleFont("Cormorant+Garamond", 300),
    loadGoogleFont("Inter", 400),
  ]);

  return new ImageResponse(
    <OgImageContent title={title} description={description} label={label} />,
    {
      width: 1200,
      height: 630,
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
    }
  );
}
