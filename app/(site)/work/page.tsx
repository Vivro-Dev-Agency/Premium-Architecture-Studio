import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { featuredProjects } from "@/lib/data/projects";
import { DEFAULT_QUALITY, imageSizes } from "@/lib/image";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Explore our portfolio of residential, commercial, and hospitality architecture and interior design projects across Morocco.",
  path: "/work",
  keywords: [
    "architecture portfolio Morocco",
    "interior design Agadir",
    "luxury residential Souss-Massa",
    "Taghazout architecture",
  ],
});

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        label="Portfolio"
        title="Selected Work"
        description="A curated collection of environments shaped by material honesty, spatial clarity, and an enduring sense of place across southern Morocco."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <StaggerReveal className="grid gap-12 sm:grid-cols-2 lg:gap-16">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              data-stagger-item
              className="group flex flex-col gap-6"
              id={`project-${project.id}`}
            >
              <Link
                href={`/work#project-${project.id}`}
                className="relative block aspect-4/3 overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={DEFAULT_QUALITY}
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-105"
                  sizes={imageSizes.card}
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-foreground/0 motion-safe:transition-colors motion-safe:duration-500 motion-safe:group-hover:bg-foreground/10" />
              </Link>
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-2xl font-light tracking-wide lg:text-3xl">
                    {project.title}
                  </h2>
                  <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {project.id}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[0.7rem] tracking-[0.15em] text-muted-foreground uppercase">
                  <span>{project.category}</span>
                  <span className="size-1 rounded-full bg-bronze" />
                  <span>{project.location}</span>
                  <span className="size-1 rounded-full bg-bronze" />
                  <span>{project.year}</span>
                </div>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </section>

      <Reveal as="section" className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-24">
          <div className="flex flex-col gap-3">
            <span className="section-label">Commission</span>
            <h2 className="font-display text-3xl font-light lg:text-4xl">
              Begin your project
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              We accept a limited number of commissions each year to ensure
              every project receives our full creative attention.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-foreground/20 px-8 py-4 text-[0.65rem] tracking-[0.2em] uppercase transition-colors hover:border-bronze hover:text-bronze"
          >
            Inquire
            <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
