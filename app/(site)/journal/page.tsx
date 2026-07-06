import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { journalArticles } from "@/lib/data/content";
import { DEFAULT_QUALITY, imageSizes } from "@/lib/image";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Journal",
  description:
    "Essays on architecture, interior design, materiality, and the creative process from Atelier Meridian in Agadir, Morocco.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <main>
      <PageHeader
        label="Journal"
        title="Thoughts & Perspectives"
        description="Essays on design philosophy, Moroccan materiality, and the ideas that shape our practice."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-16">
          {journalArticles.map((article, index) => (
            <Reveal
              key={article.slug}
              as="article"
              className="group grid gap-8 border-b border-border/60 pb-16 lg:grid-cols-12 lg:gap-12"
              delay={index * 0.04}
            >
              <Link
                href={`/journal/${article.slug}`}
                className={`relative overflow-hidden ${index === 0 ? "aspect-video lg:col-span-12" : "aspect-4/3 lg:col-span-5"}`}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  quality={DEFAULT_QUALITY}
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"
                  sizes={index === 0 ? imageSizes.full : imageSizes.cardCompact}
                  priority={index === 0}
                />
              </Link>
              <div
                className={`flex flex-col justify-center gap-4 ${index === 0 ? "lg:col-span-12 lg:max-w-2xl" : "lg:col-span-7"}`}
              >
                <div className="flex flex-wrap items-center gap-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  <span>{article.category}</span>
                  <span className="size-1 rounded-full bg-bronze" />
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="size-1 rounded-full bg-bronze" />
                  <span>{article.readTime}</span>
                </div>
                <h2
                  className={`font-display font-light tracking-tight ${index === 0 ? "text-4xl lg:text-5xl" : "text-2xl lg:text-3xl"}`}
                >
                  <Link
                    href={`/journal/${article.slug}`}
                    className="transition-colors hover:text-bronze"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <Link
                  href={`/journal/${article.slug}`}
                  className="group/link inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase transition-colors hover:text-bronze"
                >
                  Read article
                  <ArrowUpRightIcon className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
