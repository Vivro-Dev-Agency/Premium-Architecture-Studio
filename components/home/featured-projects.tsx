"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRightIcon } from "lucide-react";

import { featuredProjects } from "@/lib/data/projects";
import { createGsapMatchMedia, prefersReducedMotion } from "@/lib/gsap/config";
import { DEFAULT_QUALITY, imageSizes } from "@/lib/image";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const aspectClasses = {
  portrait: "w-[min(42vw,380px)] aspect-3/4",
  landscape: "w-[min(55vw,520px)] aspect-4/3",
  square: "w-[min(38vw,360px)] aspect-square",
} as const;

type ProjectCardProps = {
  project: (typeof featuredProjects)[number];
  mobile?: boolean;
};
function ProjectCard({ project, mobile = false }: Readonly<ProjectCardProps>) {
  return (
    <article data-project-card data-stagger-item className={cn("group shrink-0", mobile && "w-full shrink")}>
      <Link href={`/work#project-${project.id}`} className="flex flex-col gap-5">
        <div className={cn("relative overflow-hidden", mobile ? "aspect-4/3 w-full" : aspectClasses[project.aspectRatio])}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={DEFAULT_QUALITY}
            className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-105"
            sizes={mobile ? "100vw" : imageSizes.cardCompact}
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent opacity-0 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:group-hover:opacity-100" />
          <div className="absolute right-4 bottom-4 hidden size-10 translate-y-2 items-center justify-center border border-background/30 bg-background/10 opacity-0 backdrop-blur-sm motion-safe:transition-all motion-safe:duration-500 motion-safe:group-hover:translate-y-0 motion-safe:group-hover:opacity-100 md:flex">
            <ArrowUpRightIcon className="size-4 text-background" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-light tracking-wide lg:text-3xl">{project.title}</h3>
            <span className="text-[0.65rem] tracking-[0.2em] text-background/40 uppercase">{project.id}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[0.7rem] tracking-[0.15em] text-background/50 uppercase">
            <span>{project.category}</span>
            <span className="size-1 rounded-full bg-bronze" />
            <span>{project.location}</span>
            <span className="size-1 rounded-full bg-bronze" />
            <span>{project.year}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileListRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const mm = createGsapMatchMedia();

      mm.add("(min-width: 768px)", () => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        gsap.from(headerRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            once: true,
          },
        });

        const getScrollDistance = () => Math.max(track.scrollWidth - window.innerWidth, 0);

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        const list = mobileListRef.current;
        if (!list) return;

        gsap.from(headerRef.current, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            once: true,
          },
        });

        gsap.from(list.querySelectorAll("[data-stagger-item]"), {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: list,
            start: "top 92%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden bg-foreground text-background">
      <div
        ref={headerRef}
        className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-12 md:items-end md:justify-between md:py-10 lg:flex-row lg:px-10"
      >
        <div className="flex flex-col gap-4">
          <span className="text-[0.65rem] font-medium tracking-[0.3em] text-background/50 uppercase">Selected Work</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-light tracking-tight">
            Featured Projects
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-background/60">
          A curated selection across Agadir, Taghazout, and Morocco — each a dialogue between light, material, and place.
        </p>
      </div>

      {/* Desktop: pinned horizontal scroll */}
      <div className="hidden min-h-[80svh] flex-col justify-center md:flex">
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex items-center gap-6 px-6 lg:gap-10 lg:px-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            <div className="flex shrink-0 items-center pr-10">
              <Link
                href="/work"
                className="group flex flex-col items-start gap-4 border border-background/20 p-10 transition-colors hover:border-bronze/60 hover:bg-background/5"
              >
                <span className="font-display text-3xl font-light">
                  View All
                  <br />
                  Projects
                </span>
                <span className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] text-background/50 uppercase transition-colors group-hover:text-bronze">
                  Explore Portfolio
                  <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-8 lg:px-10">
          <span className="text-[0.65rem] tracking-[0.25em] text-background/40 uppercase">Scroll to explore</span>
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-bronze" />
            <span className="text-[0.65rem] tracking-[0.25em] text-background/40 uppercase">Scroll</span>
          </div>
        </div>
      </div>

      {/* Mobile: lightweight vertical stack (no pin / horizontal scrub) */}
      <div className="flex flex-col gap-12 px-6 pb-20 md:hidden">
        <div ref={mobileListRef} className="flex flex-col gap-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} mobile />
          ))}
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 self-start border border-background/20 px-6 py-4 text-[0.65rem] tracking-[0.2em] uppercase"
        >
          View All Projects
          <ArrowUpRightIcon className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}
