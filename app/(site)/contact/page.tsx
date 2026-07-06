import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { contactInfo, offices } from "@/lib/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Atelier Meridian in Agadir, Morocco to discuss your architecture or interior design project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        label="Contact"
        title="Let's create something enduring"
        description="We welcome inquiries for residential, commercial, and hospitality commissions across the Souss-Massa region. Share your vision — we respond within two business days."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="flex flex-col gap-12">
            {offices.map((office) => (
              <Reveal key={office.city} className="flex flex-col gap-4">
                <span className="section-label">{office.city}</span>
                <address className="flex flex-col gap-1 not-italic">
                  {office.address.map((line) => (
                    <span key={line} className="text-sm text-muted-foreground">
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="text-sm transition-colors hover:text-bronze"
                >
                  {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="text-sm transition-colors hover:text-bronze"
                >
                  {office.email}
                </a>
              </Reveal>
            ))}

            <Reveal className="flex flex-col gap-4 border-t border-border/60 pt-8">
              <span className="section-label">General Inquiries</span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm transition-colors hover:text-bronze"
              >
                {contactInfo.email}
              </a>
              <p className="text-sm leading-relaxed text-muted-foreground">
                For press, partnerships, and media requests, please include
                &ldquo;Press&rdquo; in your subject line.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
