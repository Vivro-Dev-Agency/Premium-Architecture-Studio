import type { Metadata } from "next";

export const siteConfig = {
  name: "Atelier Meridian",
  legalName: "Atelier Meridian SARL",
  tagline: "Architecture & Interior Design",
  description:
    "Award-winning architecture and interior design studio in Agadir, Morocco — crafting spaces of quiet luxury shaped by Atlantic light, local craft, and enduring form.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atelier-meridian.vercel.app",
  locale: "en_MA",
  email: "studio@atelier-meridian.ma",
  phone: "+212 528 84 12 30",
  ogImage: "/opengraph-image",
  twitterHandle: "@atelier_meridian",
  developer: {
    name: "vivro.dev",
    url: "https://vivro.dev",
  },
  keywords: [
    "architecture studio Agadir",
    "interior design Morocco",
    "luxury architecture Morocco",
    "premium interiors Agadir",
    "residential architecture Souss-Massa",
    "hospitality design Taghazout",
    "Moroccan architecture",
    "Agadir architects",
  ],
  addresses: [
    {
      city: "Agadir",
      country: "Morocco",
      street: "Boulevard Hassan II, Immeuble Al Amal",
      postalCode: "80000",
      region: "Souss-Massa",
    },
    {
      city: "Taghazout",
      country: "Morocco",
      street: "Route d'Essaouira, Km 17",
      postalCode: "80600",
      region: "Agadir-Ida Ou Tanane",
    },
  ],
} as const;

export function buildOgImageUrl(title: string, description: string): string {
  const params = new URLSearchParams({
    title,
    description: description.slice(0, 140),
    label: "Agadir, Morocco",
  });
  return `/og?${params.toString()}`;
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s — ${siteConfig.name}`,
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [
    { name: siteConfig.name, url: siteConfig.url },
    { name: siteConfig.developer.name, url: siteConfig.developer.url },
  ],
  creator: siteConfig.developer.name,
  publisher: siteConfig.name,
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — architectural studio in Agadir, Morocco`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords,
  image,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? buildOgImageUrl(title, description);

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: siteConfig.locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${siteConfig.name}`,
      description,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
    robots: noIndex ? { index: false, follow: false } : defaultMetadata.robots,
  };
}
