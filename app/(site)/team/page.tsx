import Image from "next/image";
import Link from "next/link";

import { PageHeader } from "@/components/layout/page-header";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { teamMembers } from "@/lib/data/content";
import { DEFAULT_QUALITY, imageSizes } from "@/lib/image";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Team",
  description:
    "Meet the architects, interior designers, and project directors at Atelier Meridian in Agadir, Morocco.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        label="People"
        title="The team behind the work"
        description="A collective of architects, interior designers, and landscape specialists united by a shared commitment to Moroccan craft, material integrity, and spatial excellence."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <StaggerReveal className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              data-stagger-item
              className="group flex flex-col gap-5"
            >
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  quality={DEFAULT_QUALITY}
                  className="object-cover motion-safe:transition-all motion-safe:duration-700 motion-safe:group-hover:scale-105 md:grayscale md:motion-safe:group-hover:grayscale-0"
                  sizes={imageSizes.team}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-2xl font-light">
                  {member.name}
                </h2>
                <p className="text-[0.65rem] tracking-[0.2em] text-bronze uppercase">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </section>

      <Reveal as="section" className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-24">
          <div className="flex flex-col gap-3">
            <span className="section-label">Join Us</span>
            <h2 className="font-display text-3xl font-light lg:text-4xl">
              Work with us
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              We are always interested in hearing from talented designers who
              share our values across the Souss-Massa region.
            </p>
          </div>
          <Link
            href="/careers"
            className="border border-foreground/20 px-8 py-4 text-[0.65rem] tracking-[0.2em] uppercase transition-colors hover:border-bronze hover:text-bronze"
          >
            View Open Positions
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
