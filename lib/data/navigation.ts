export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Services", href: "/services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  studio: [
    { label: "About", href: "/studio" },
    { label: "Team", href: "/team" },
    { label: "Awards", href: "/awards" },
    { label: "Careers", href: "/careers" },
  ],
  services: [
    { label: "Architecture", href: "/services/architecture" },
    { label: "Interiors", href: "/services/interiors" },
    { label: "Landscape", href: "/services/landscape" },
    { label: "Consulting", href: "/services/consulting" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;

export const siteCredit = {
  label: "vivro.dev",
  href: "https://vivro.dev",
} as const;
