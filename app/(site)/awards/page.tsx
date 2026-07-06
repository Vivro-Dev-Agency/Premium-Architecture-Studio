import Link from "next/link";

import { PageHeader } from "@/components/layout/page-header";
import { StaggerReveal } from "@/components/motion/reveal";
import { awards } from "@/lib/data/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Awards",
  description: "Design awards and recognition received by Atelier Meridian across architecture and interior design in Morocco.",
  path: "/awards",
});

export default function AwardsPage() {
  return (
    <main>
      <PageHeader
        label="Recognition"
        title="Awards & Honors"
        description="Our work has been recognized by leading institutions in Moroccan and international architecture and design."
        dark
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <StaggerReveal className="flex flex-col">
          {awards.map((award) => (
            <article
              key={`${award.year}-${award.title}`}
              data-stagger-item
              className="group grid gap-4 border-b border-border/60 py-10 sm:grid-cols-12 sm:items-center sm:gap-8"
            >
              <span className="font-display text-3xl font-light text-muted-foreground sm:col-span-2 lg:text-4xl">
                {award.year}
              </span>
              <div className="flex flex-col gap-2 sm:col-span-6">
                <h2 className="font-display text-2xl font-light transition-colors group-hover:text-bronze lg:text-3xl">
                  {award.title}
                </h2>
                <p className="text-sm text-muted-foreground">{award.organization}</p>
              </div>
              {award.project && (
                <div className="sm:col-span-4 sm:text-right">
                  <Link
                    href="/work"
                    className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-bronze"
                  >
                    {award.project}
                  </Link>
                </div>
              )}
            </article>
          ))}
        </StaggerReveal>
      </section>
    </main>
  );
}
