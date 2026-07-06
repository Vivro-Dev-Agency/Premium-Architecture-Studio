import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { studioInfo } from "@/lib/data/site";
import { DEFAULT_QUALITY, imageSizes } from "@/lib/image";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Studio",
  description:
    "Learn about Atelier Meridian — our philosophy, history, and approach to architecture and interior design in Agadir, Morocco.",
  path: "/studio",
});

const values = [
  {
    title: "Material Honesty",
    description:
      "We specify local stone, argan-wood, zellige, and tadelakt for their inherent beauty — never as surface decoration.",
  },
  {
    title: "Spatial Clarity",
    description:
      "Every room is composed with intention, drawing on courtyard typologies and Atlantic light to reveal essential character.",
  },
  {
    title: "Enduring Form",
    description:
      "Our work is designed to age gracefully in Morocco's coastal climate — buildings that grow more beautiful with time.",
  },
];

export default function StudioPage() {
  return (
    <main>
      <PageHeader
        label="About"
        title="A studio devoted to quiet excellence"
        description={`Founded in ${studioInfo.founded}, Atelier Meridian operates from Agadir and Taghazout — rooted in the Souss-Massa region, where Atlantic light, Berber craft, and cosmopolitan refinement converge.`}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative aspect-4/5 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=75&auto=format"
              alt="Atelier Meridian studio workspace in Agadir"
              fill
              quality={DEFAULT_QUALITY}
              className="object-cover"
              sizes={imageSizes.card}
            />
          </Reveal>
          <Reveal className="flex flex-col justify-center gap-8">
            <span className="section-label">Our Story</span>
            <p className="font-display text-2xl leading-relaxed font-light lg:text-3xl">
              We believe the most luxurious spaces are those that feel inevitable
              — as though they have always belonged to this coast.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Atelier Meridian was established by Youssef Amrani and Salma
              Bennani with a shared conviction: that architecture and interior
              design are not separate disciplines, but a single, continuous act
              of creation shaped by place and climate.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Today, our team collaborates across Agadir and Taghazout,
              delivering projects recognized by the Ordre National des
              Architectes du Maroc and the Africa Architecture Awards.
            </p>
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-bronze"
            >
              Meet the team
              <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <span className="text-[0.65rem] font-medium tracking-[0.3em] text-background/50 uppercase">
              Philosophy
            </span>
          </Reveal>
          <StaggerReveal className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-16">
            {values.map((value, index) => (
              <div key={value.title} data-stagger-item className="flex flex-col gap-4">
                <span className="font-display text-5xl font-light text-background/20">
                  0{index + 1}
                </span>
                <h3 className="font-display text-2xl font-light">{value.title}</h3>
                <p className="text-sm leading-relaxed text-background/60">
                  {value.description}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <StaggerReveal className="grid gap-8 lg:grid-cols-3">
          {[
            { label: "Projects Completed", value: "85+" },
            { label: "Regions Served", value: "12" },
            { label: "Design Awards", value: "28" },
          ].map((stat) => (
            <div
              key={stat.label}
              data-stagger-item
              className="flex flex-col gap-2 border border-border/60 p-8"
            >
              <span className="font-display text-4xl font-light lg:text-5xl">
                {stat.value}
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </StaggerReveal>
      </section>
    </main>
  );
}
