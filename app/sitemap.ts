import { navLinks, footerLinks } from "@/lib/data/navigation";
import { journalArticles } from "@/lib/data/content";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    ...navLinks.map((link) => link.href),
    ...footerLinks.studio.map((link) => link.href),
    ...footerLinks.services.map((link) => link.href),
    "/privacy",
  ];

  const uniqueRoutes = [...new Set(staticRoutes)];

  const staticEntries: MetadataRoute.Sitemap = uniqueRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/work" ? 0.9 : 0.7,
  }));

  const journalEntries: MetadataRoute.Sitemap = journalArticles.map((article) => ({
    url: `${siteConfig.url}/journal/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...journalEntries, ...serviceEntries];
}
