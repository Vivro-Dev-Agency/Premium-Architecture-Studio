"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ButtonLink } from "@/components/ui/button-link";
import { studioInfo } from "@/lib/data/site";
import {
  createGsapMatchMedia,
  prefersReducedMotion,
} from "@/lib/gsap/config";
import { DEFAULT_QUALITY, imageSizes } from "@/lib/image";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const mm = createGsapMatchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from("[data-hero-label]", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
        })
          .from(
            "[data-hero-line]",
            { y: 80, opacity: 0, duration: 1.1, stagger: 0.12 },
            "-=0.4"
          )
          .from("[data-hero-desc]", { y: 30, opacity: 0, duration: 0.9 }, "-=0.5")
          .from(
            "[data-hero-cta]",
            { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 },
            "-=0.4"
          )
          .from(
            "[data-hero-image]",
            { scale: 1.06, opacity: 0, duration: 1.4, ease: "power2.out" },
            "-=1.2"
          )
          .from(
            "[data-hero-accent]",
            { scaleX: 0, duration: 1.2, ease: "power3.inOut" },
            "-=1"
          );
      });

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.from("[data-hero-label]", { y: 12, opacity: 0, duration: 0.5 })
          .from(
            "[data-hero-line]",
            { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 },
            "-=0.2"
          )
          .from("[data-hero-desc]", { y: 16, opacity: 0, duration: 0.5 }, "-=0.25")
          .from(
            "[data-hero-cta]",
            { y: 12, opacity: 0, duration: 0.4, stagger: 0.06 },
            "-=0.2"
          )
          .from("[data-hero-image]", { opacity: 0, duration: 0.7 }, "-=0.3");
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-svh items-end overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/95 to-background/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-end gap-12 px-6 pb-16 pt-12 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="flex flex-col gap-8 lg:col-span-5 lg:gap-10">
          <p data-hero-label className="section-label">
            Est. {studioInfo.founded} — {studioInfo.tagline}
          </p>

          <div className="flex flex-col gap-1">
            <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-light tracking-tight text-foreground">
              <span data-hero-line className="block">
                Spaces of
              </span>
              <span data-hero-line className="block italic text-bronze">
                Quiet Luxury
              </span>
              <span data-hero-line className="block">
                &amp; Enduring Form
              </span>
            </h1>
          </div>

          <div data-hero-accent className="h-px w-16 origin-left bg-bronze" />

          <p
            data-hero-desc
            className="max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg"
          >
            An award-winning studio rooted in Agadir — shaping environments
            defined by Atlantic light, Moroccan craft, spatial clarity, and
            timeless refinement.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink
              data-hero-cta
              href="/work"
              className="h-11 rounded-none px-8 text-[0.65rem] tracking-[0.2em] uppercase"
            >
              View Selected Work
            </ButtonLink>
            <ButtonLink
              data-hero-cta
              href="/studio"
              variant="ghost"
              className="h-11 rounded-none px-6 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground"
            >
              Our Philosophy
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div
            data-hero-image
            className="relative aspect-4/5 w-full overflow-hidden lg:aspect-3/4"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=75&auto=format"
              alt="Minimalist architectural interior with natural light and refined materials"
              fill
              priority
              quality={DEFAULT_QUALITY}
              className="object-cover"
              sizes={imageSizes.hero}
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden flex-col gap-1 bg-background/90 p-6 backdrop-blur-sm lg:flex">
            <span className="section-label">Recognition</span>
            <span className="font-display text-2xl font-light">
              ONAM Excellence Award
            </span>
            <span className="text-sm text-muted-foreground">2025</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
          Scroll
        </span>
        <div className="h-12 w-px bg-linear-to-b from-bronze to-transparent" />
      </div>
    </section>
  );
}
