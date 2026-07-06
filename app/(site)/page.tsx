
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
