import { ArrowUpRightIcon } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { openPositions } from "@/lib/data/content";
import { contactInfo } from "@/lib/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Join Atelier Meridian — open positions in architecture, interior design, and studio operations in Agadir, Morocco.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <main>
      <PageHeader
        label="Careers"
        title="Build with us"
        description="We seek thoughtful, rigorous designers who value craft over trend — people who understand that the best work requires patience, precision, and collaboration."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="mb-16 flex flex-col gap-4 lg:max-w-2xl">
          <span className="section-label">Culture</span>
          <p className="font-display text-2xl leading-relaxed font-light lg:text-3xl">
            A studio where design is practiced as a discipline — not a
            deliverable.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            We offer competitive compensation, flexible studio hours, and the
            opportunity to work on recognized projects from Agadir and
            Taghazout along Morocco&apos;s Atlantic coast.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          <span className="section-label">Open Positions</span>
          <StaggerReveal className="flex flex-col gap-6">
            {openPositions.map((position) => (
              <article
                key={position.title}
                data-stagger-item
                className="group flex flex-col gap-4 border border-border/60 p-8 transition-colors hover:border-bronze/40 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex flex-col gap-3">
                  <h2 className="font-display text-2xl font-light">
                    {position.title}
                  </h2>
                  <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    <span>{position.location}</span>
                    <span className="size-1 rounded-full bg-bronze" />
                    <span>{position.type}</span>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {position.description}
                  </p>
                </div>
                <a
                  href={`mailto:${contactInfo.careersEmail}`}
                  className="group/link inline-flex shrink-0 items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase transition-colors hover:text-bronze"
                >
                  Apply
                  <ArrowUpRightIcon className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <Reveal as="section" className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-4 lg:max-w-xl">
            <span className="text-[0.65rem] tracking-[0.3em] text-background/50 uppercase">
              Speculative Applications
            </span>
            <p className="font-display text-2xl font-light">
              Don&apos;t see the right role? We welcome speculative applications
              from exceptional designers.
            </p>
            <a
              href={`mailto:${contactInfo.careersEmail}`}
              className="mt-2 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] text-background/60 uppercase transition-colors hover:text-bronze"
            >
              {contactInfo.careersEmail}
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
