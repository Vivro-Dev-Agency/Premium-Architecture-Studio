import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ limitCallbacks: true });

export const MOBILE_BREAKPOINT = 768;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function createGsapMatchMedia() {
  return gsap.matchMedia();
}

export const revealDefaults = {
  y: 32,
  opacity: 0,
  duration: 0.85,
  ease: "power3.out",
} as const;

export const mobileRevealDefaults = {
  y: 16,
  opacity: 0,
  duration: 0.55,
  ease: "power2.out",
} as const;

export function getRevealDefaults() {
  if (typeof window === "undefined") return revealDefaults;
  return window.innerWidth < MOBILE_BREAKPOINT || prefersReducedMotion()
    ? mobileRevealDefaults
    : revealDefaults;
}
