import { siteConfig } from "@/lib/seo";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: siteConfig.ogImage,
    priceRange: "$$$$",
    areaServed: [
      { "@type": "Place", name: "Agadir, Morocco" },
      { "@type": "Place", name: "Souss-Massa, Morocco" },
    ],
    serviceType: [
      "Architecture",
      "Interior Design",
      "Landscape Architecture",
      "Design Consulting",
    ],
    address: siteConfig.addresses.map((address) => ({
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressCountry: address.country,
      addressRegion: address.region,
    })),
    sameAs: [
      "https://instagram.com",
      "https://pinterest.com",
      "https://linkedin.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    creator: {
      "@type": "Organization",
      name: siteConfig.developer.name,
      url: siteConfig.developer.url,
    },
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
