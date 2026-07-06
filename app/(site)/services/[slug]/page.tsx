import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { getServiceBySlug, services } from "@/lib/data/services";
import { DEFAULT_QUALITY, imageSizes } from "@/lib/image";
import { createPageMetadata } from "@/lib/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.description.slice(0, 160),
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: Readonly<ServicePageProps>) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <main>
      <PageHeader
        label="Services"
        title={service.title}
        description={service.tagline}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative aspect-4/3 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              quality={DEFAULT_QUALITY}
              className="object-cover"
              sizes={imageSizes.card}
              priority
            />
          </Reveal>
          <Reveal className="flex flex-col gap-8" delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
              {service.description}
            </p>
            <div className="flex flex-col gap-4">
              <span className="section-label">Capabilities</span>
              <ul className="flex flex-col gap-3">
                {service.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-bronze" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink
              href="/contact"
              className="mt-4 h-11 w-fit rounded-none px-8 text-[0.65rem] tracking-[0.2em] uppercase"
            >
              Discuss a Project
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <span className="section-label">Other Services</span>
          <StaggerReveal className="mt-8 grid gap-6 sm:grid-cols-3">
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  data-stagger-item
                  className="group flex flex-col gap-2 border border-border/60 p-6 transition-colors hover:border-bronze/40"
                >
                  <span className="font-display text-xl font-light">
                    {s.title}
                  </span>
                  <span className="flex items-center gap-2 text-[0.65rem] tracking-[0.15em] text-muted-foreground uppercase transition-colors group-hover:text-bronze">
                    Explore
                    <ArrowUpRightIcon className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
          </StaggerReveal>
        </div>
      </Reveal>
    </main>
  );
}
