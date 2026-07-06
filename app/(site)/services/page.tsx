import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/data/services";
import { DEFAULT_QUALITY, imageSizes } from "@/lib/image";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Architecture, interior design, landscape, and consulting services from Atelier Meridian in Agadir, Morocco.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        label="What We Do"
        title="Integrated design services"
        description="From master planning to the final furnishing detail, our Agadir-based practice delivers cohesive environments attuned to Morocco's light, climate, and craft traditions."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-24">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              as="article"
              className="group grid gap-10 lg:grid-cols-2 lg:gap-16"
              delay={index * 0.05}
            >
              <div
                className={`relative aspect-4/3 overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  quality={DEFAULT_QUALITY}
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"
                  sizes={imageSizes.card}
                />
              </div>
              <div
                className={`flex flex-col justify-center gap-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <span className="section-label">0{index + 1}</span>
                <h2 className="font-display text-3xl font-light lg:text-4xl">
                  {service.title}
                </h2>
                <p className="font-display text-xl font-light italic text-bronze">
                  {service.tagline}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="group/link inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase transition-colors hover:text-bronze"
                >
                  Learn more
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
