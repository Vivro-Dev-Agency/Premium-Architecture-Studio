export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "architecture",
    title: "Architecture",
    tagline: "Built environments shaped by place and climate",
    description:
      "From villas in Agadir to riads in Taroudant, we design architecture that responds to Morocco's light, coastal winds, and cultural context. Every project begins with listening — to the land, the climate, and the life intended within.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=75&auto=format",
    capabilities: [
      "Master planning & feasibility",
      "Conceptual & schematic design",
      "Construction documentation",
      "Heritage & riad restoration",
      "Passive cooling & sustainable design",
    ],
  },
  {
    slug: "interiors",
    title: "Interiors",
    tagline: "Material narratives rooted in Moroccan craft",
    description:
      "Our interior practice extends the architectural vision into every tactile detail — zellige tilework, tadelakt plaster, custom argan-wood millwork, and lighting compositions that honour Atlantic coastal living.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=75&auto=format",
    capabilities: [
      "Full-service interior design",
      "Custom furniture & millwork",
      "Art curation & styling",
      "Lighting design",
      "Material & finish selection",
    ],
  },
  {
    slug: "landscape",
    title: "Landscape",
    tagline: "Outdoor rooms in dialogue with the Atlantic coast",
    description:
      "Landscape architecture at Atelier Meridian treats the garden as an extension of the interior — drought-tolerant native plantings, courtyard water features, and terraced living spaces suited to the Agadir climate.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=75&auto=format",
    capabilities: [
      "Garden & terrace design",
      "Pool & water feature integration",
      "Native & drought-tolerant planting",
      "Outdoor kitchen & entertaining",
      "Site grading & drainage",
    ],
  },
  {
    slug: "consulting",
    title: "Consulting",
    tagline: "Strategic guidance for exceptional projects",
    description:
      "For developers, hospitality groups, and private clients across the Souss-Massa region, our consulting practice offers design direction, feasibility analysis, and creative oversight from inception to completion.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=75&auto=format",
    capabilities: [
      "Design advisory & peer review",
      "Brand environment strategy",
      "Feasibility & zoning analysis",
      "Project management oversight",
      "Vendor & contractor coordination",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
