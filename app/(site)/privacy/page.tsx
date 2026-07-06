import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { contactInfo, offices } from "@/lib/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Atelier Meridian — how we collect, use, and protect your personal information.",
  path: "/privacy",
  noIndex: true,
});

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you submit an inquiry through our contact form, we collect your name, email address, project details, and any information you choose to provide. We may also collect anonymous usage data through standard analytics tools to improve our website experience.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information you provide solely to respond to your inquiry, discuss potential projects, and communicate about our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
  },
  {
    title: "Data Retention",
    content:
      "Inquiry data is retained for up to three years unless a client relationship is established, in which case records are maintained in accordance with our professional obligations and applicable Moroccan law.",
  },
  {
    title: "Cookies & Analytics",
    content:
      "Our website may use essential cookies and privacy-respecting analytics to understand how visitors interact with our content. You can disable cookies through your browser settings at any time.",
  },
  {
    title: "Your Rights",
    content: `You may request access to, correction of, or deletion of your personal data at any time by contacting ${contactInfo.email}. We will respond to all requests within 30 days.`,
  },
  {
    title: "Contact",
    content: `For privacy-related inquiries, please contact us at ${contactInfo.email} or write to Atelier Meridian, ${offices[0].address[0]}, ${offices[0].address[2]}.`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        description="Last updated: January 2025. This policy describes how Atelier Meridian handles your personal information."
      />

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-12">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.05} className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-light">
                {section.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {section.content}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
