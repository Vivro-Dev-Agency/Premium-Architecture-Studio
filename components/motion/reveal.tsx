"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { createGsapMatchMedia, getRevealDefaults, prefersReducedMotion } from "@/lib/gsap/config";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Readonly<RevealProps>) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const defaults = getRevealDefaults();

      gsap.from(el, {
        ...defaults,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  childSelector?: string;
  stagger?: number;
};

export function StaggerReveal({
  children,
  className,
  childSelector = "[data-stagger-item]",
  stagger = 0.1,
}: Readonly<StaggerRevealProps>) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = ref.current;
      if (!container || prefersReducedMotion()) return;

      const items = container.querySelectorAll(childSelector);
      if (!items.length) return;

      const defaults = getRevealDefaults();

      gsap.from(items, {
        ...defaults,
        stagger: window.innerWidth < 768 ? stagger * 0.6 : stagger,
        scrollTrigger: {
          trigger: container,
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

type PageRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageReveal({ children, className }: Readonly<PageRevealProps>) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = ref.current;
      if (!container || prefersReducedMotion()) return;

      const mm = createGsapMatchMedia();
      const defaults = getRevealDefaults();

      mm.add("(min-width: 768px)", () => {
        gsap.from(container.querySelectorAll("[data-page-reveal]"), {
          ...defaults,
          stagger: 0.12,
          scrollTrigger: {
            trigger: container,
            start: "top 92%",
            once: true,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.from(container.querySelectorAll("[data-page-reveal]"), {
          ...defaults,
          stagger: 0.06,
          scrollTrigger: {
            trigger: container,
            start: "top 94%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

type AnimatedPageHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
};

export function AnimatedPageHeader({ label, title, description, className, dark = false }: Readonly<AnimatedPageHeaderProps>) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const header = ref.current;
      if (!header || prefersReducedMotion()) return;

      const defaults = getRevealDefaults();
      const tl = gsap.timeline({ defaults: { ease: defaults.ease } });

      tl.from(header.querySelector("[data-header-label]"), {
        y: 16,
        opacity: 0,
        duration: defaults.duration * 0.7,
      })
        .from(
          header.querySelector("[data-header-title]"),
          {
            y: defaults.y,
            opacity: 0,
            duration: defaults.duration,
          },
          "-=0.35",
        )
        .from(
          header.querySelector("[data-header-desc]"),
          {
            y: 20,
            opacity: 0,
            duration: defaults.duration * 0.8,
          },
          "-=0.45",
        );
    },
    { scope: ref },
  );

  return (
    <header
      ref={ref}
      className={cn(
        "border-b border-border/60 pt-32 pb-16 lg:pt-40 lg:pb-24",
        dark ? "bg-foreground text-background" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:px-10">
        <span data-header-label className={cn("section-label", dark && "text-background/50")}>
          {label}
        </span>
        <h1
          data-header-title
          className="font-display max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-light tracking-tight"
        >
          {title}
        </h1>
        {description && (
          <p
            data-header-desc
            className={cn(
              "max-w-2xl text-base leading-relaxed lg:text-lg",
              dark ? "text-background/60" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
