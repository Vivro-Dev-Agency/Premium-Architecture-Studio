import type { Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";

export { defaultMetadata as metadata } from "@/lib/metadata";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#2C2A28" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="min-h-full">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  );
}
