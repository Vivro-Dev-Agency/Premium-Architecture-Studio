"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MenuIcon } from "lucide-react";

import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data/navigation";
import {
  createGsapMatchMedia,
  prefersReducedMotion,
} from "@/lib/gsap/config";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        setScrolled(window.scrollY > 40);
        return;
      }

      const mm = createGsapMatchMedia();

      mm.add("(min-width: 768px)", () => {
        const trigger = ScrollTrigger.create({
          start: "top top",
          end: "max",
          onUpdate: () => setScrolled(window.scrollY > 40),
        });
        setScrolled(window.scrollY > 40);
        return () => trigger.kill();
      });

      mm.add("(max-width: 767px)", () => {
        const update = () => setScrolled(window.scrollY > 24);
        update();
        const trigger = ScrollTrigger.create({
          start: "top top",
          end: "max",
          onUpdate: update,
        });
        return () => trigger.kill();
      });

      return () => mm.revert();
    },
    { scope: headerRef, dependencies: [pathname], revertOnUpdate: true }
  );

  const showSolidHeader = scrolled || pathname !== "/";

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        showSolidHeader
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="group flex flex-col gap-0.5 transition-opacity hover:opacity-80"
          aria-label="Atelier Meridian — Home"
        >
          <span className="font-display text-xl font-light tracking-[0.18em] text-foreground uppercase lg:text-2xl">
            Atelier Meridian
          </span>
          <span className="hidden text-[0.6rem] font-medium tracking-[0.35em] text-muted-foreground uppercase sm:block">
            Architecture & Interiors
          </span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                className="nav-link"
                activeClassName="text-foreground after:scale-x-100"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink
            href="/contact"
            variant="outline"
            className="h-9 rounded-none border-foreground/20 px-6 text-[0.65rem] font-medium tracking-[0.2em] uppercase hover:border-bronze hover:bg-transparent hover:text-foreground"
          >
            Inquire
          </ButtonLink>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-l border-border/60 bg-background sm:max-w-md"
          >
            <SheetHeader className="border-b border-border/60 pb-6">
              <SheetTitle className="font-display text-2xl font-light tracking-[0.15em] uppercase">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pt-6" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-border/40 py-5 transition-colors hover:text-bronze"
                  activeClassName="text-bronze"
                >
                  <span className="font-display text-3xl font-light tracking-wide">
                    {link.label}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.25em] text-muted-foreground uppercase transition-colors group-hover:text-bronze">
                    0{index + 1}
                  </span>
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto border-t border-border/60 p-4">
              <ButtonLink
                href="/contact"
                onClick={() => setOpen(false)}
                className="h-12 w-full rounded-none text-[0.65rem] tracking-[0.2em] uppercase"
              >
                Start a Project
              </ButtonLink>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
