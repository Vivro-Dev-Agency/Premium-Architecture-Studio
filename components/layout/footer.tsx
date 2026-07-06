import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { footerLinks, siteCredit } from "@/lib/data/navigation";
import { contactInfo, offices } from "@/lib/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Link href="/" className="group inline-flex flex-col gap-1">
              <span className="font-display text-3xl font-light tracking-[0.12em] uppercase lg:text-4xl">
                Atelier Meridian
              </span>
              <span className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                Architecture & Interiors
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Crafting environments of enduring beauty across the Souss-Massa
              region — from Agadir to Taghazout and beyond.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-bronze"
            >
              {contactInfo.email}
              <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div className="flex flex-col gap-5">
              <span className="section-label">Studio</span>
              <ul className="flex flex-col gap-3">
                {footerLinks.studio.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <span className="section-label">Services</span>
              <ul className="flex flex-col gap-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 flex flex-col gap-5 sm:col-span-1">
              <span className="section-label">Offices</span>
              <address className="flex flex-col gap-4 not-italic">
                {offices.map((office) => (
                  <div key={office.city} className="flex flex-col gap-1">
                    <span className="text-sm font-medium">{office.city}</span>
                    <span className="text-sm text-muted-foreground">
                      {office.address[0]}
                      <br />
                      {office.address[2]}
                    </span>
                  </div>
                ))}
              </address>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border/60" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[0.65rem] tracking-[0.15em] text-muted-foreground uppercase">
              &copy; {currentYear} Atelier Meridian. All rights reserved.
            </p>
            <p className="text-[0.65rem] tracking-[0.15em] text-muted-foreground uppercase">
              Website by{" "}
              <a
                href={siteCredit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-bronze"
              >
                {siteCredit.label}
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-6">
            {footerLinks.connect.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/privacy"
                className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
