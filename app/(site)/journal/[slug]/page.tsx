import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { getArticleBySlug, journalArticles } from "@/lib/data/content";
import { DEFAULT_QUALITY, imageSizes } from "@/lib/image";
import { createPageMetadata } from "@/lib/metadata";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/journal/${slug}`,
    keywords: [article.category, "architecture journal Morocco", "design essays Agadir"],
  });
}

export default async function ArticlePage({
  params,
}: Readonly<ArticlePageProps>) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <main>
      <PageHeader label={article.category} title={article.title} />

      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
        <Reveal className="relative mb-12 aspect-video overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            quality={DEFAULT_QUALITY}
            className="object-cover"
            sizes={imageSizes.article}
            priority
          />
        </Reveal>

        <Reveal delay={0.05} className="mb-10 flex items-center gap-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="size-1 rounded-full bg-bronze" />
          <span>{article.readTime} read</span>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p className="font-display text-xl text-foreground lg:text-2xl">
            {article.excerpt}
          </p>
          <p>
            At Atelier Meridian in Agadir, we approach every project as an
            opportunity to deepen our understanding of how people inhabit space
            along Morocco&apos;s Atlantic coast. This essay reflects on the
            principles that guide our daily practice — from the first sketch to
            the final installation.
          </p>
          <p>
            Design, for us, is not a stylistic exercise. It is a rigorous
            process of discovery — uncovering what a place wants to become, and
            having the discipline to remove everything that obscures that
            vision.
          </p>
          <p>
            We invite you to explore our portfolio and reach out if our approach
            resonates with your own aspirations for the spaces you inhabit.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 border-t border-border/60 pt-10">
          <Link
            href="/journal"
            className="group inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase transition-colors hover:text-bronze"
          >
            Back to Journal
            <ArrowUpRightIcon className="size-3.5 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </Link>
        </Reveal>
      </article>
    </main>
  );
}
