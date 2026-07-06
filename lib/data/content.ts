export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Youssef Amrani",
    role: "Founding Principal, Architecture",
    bio: "Registered architect with twenty years shaping residential and cultural projects across the Souss-Massa region and beyond.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=75&auto=format",
  },
  {
    name: "Salma Bennani",
    role: "Principal, Interior Design",
    bio: "Brings a material-first approach rooted in Moroccan craft traditions — zellige, tadelakt, and locally sourced timber.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=75&auto=format",
  },
  {
    name: "Karim Idrissi",
    role: "Director, Landscape",
    bio: "Landscape architect specializing in drought-tolerant Atlantic coast gardens and courtyard oasis design.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=75&auto=format",
  },
  {
    name: "Nora El Fassi",
    role: "Senior Architect",
    bio: "Leads our Agadir studio with expertise in climate-responsive residential design for coastal Morocco.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=75&auto=format",
  },
  {
    name: "Amine Tazi",
    role: "Lead Interior Designer",
    bio: "Known for restrained palettes and bespoke furniture collaborations with artisans from Marrakech and Essaouira.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=75&auto=format",
  },
  {
    name: "Leila Ouazzani",
    role: "Project Director",
    bio: "Oversees construction administration and client relations for hospitality projects along the Atlantic coast.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=75&auto=format",
  },
];

export type Award = {
  year: string;
  title: string;
  organization: string;
  project?: string;
};

export const awards: Award[] = [
  {
    year: "2025",
    title: "Moroccan Order of Architects — Excellence Award",
    organization: "Ordre National des Architectes du Maroc",
    project: "Villa Atlantique",
  },
  {
    year: "2024",
    title: "African Architecture Award",
    organization: "Africa Architecture Awards",
    project: "Riad Lumière",
  },
  {
    year: "2024",
    title: "Best Hospitality Interior",
    organization: "Design Middle East Awards",
    project: "Horizon Pavilion",
  },
  {
    year: "2023",
    title: "Souss-Massa Heritage Prize",
    organization: "Région Souss-Massa",
    project: "Serene Atrium",
  },
  {
    year: "2023",
    title: "Coastal Design Recognition",
    organization: "Atlantic Cities Forum",
    project: "Coastal Sanctuary",
  },
  {
    year: "2022",
    title: "Emerging Studio of the Year",
    organization: "Morocco Design Council",
  },
];

export type CareerPosition = {
  title: string;
  location: string;
  type: string;
  description: string;
};

export const openPositions: CareerPosition[] = [
  {
    title: "Senior Interior Designer",
    location: "Agadir",
    type: "Full-time",
    description:
      "Lead interior design development for residential and hospitality projects across the Souss-Massa region.",
  },
  {
    title: "Project Architect",
    location: "Taghazout",
    type: "Full-time",
    description:
      "Manage design and documentation for coastal residential and boutique hospitality builds near Taghazout Bay.",
  },
  {
    title: "Design Intern",
    location: "Agadir / Taghazout",
    type: "Internship",
    description:
      "Six-month placement supporting the studio across research, modeling, and presentation preparation.",
  },
];

export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "material-honesty",
    title: "The Philosophy of Material Honesty",
    excerpt:
      "Why we choose local stone, argan-wood, and hand-troweled tadelakt over synthetic alternatives — and how material integrity shapes spatial experience in Moroccan contexts.",
    category: "Philosophy",
    date: "2025-03-12",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=75&auto=format",
  },
  {
    slug: "light-as-architecture",
    title: "Light as Architecture",
    excerpt:
      "Exploring how Atlantic light and traditional courtyard typologies define form, create rhythm, and transform interior spaces throughout the day.",
    category: "Process",
    date: "2025-02-08",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=75&auto=format",
  },
  {
    slug: "agadir-studio",
    title: "Inside Our Agadir Studio",
    excerpt:
      "A look at our Hassan II boulevard atelier — a light-filled space overlooking the bay that embodies our design ethos and connection to the Atlantic coast.",
    category: "Studio",
    date: "2025-01-20",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=75&auto=format",
  },
  {
    slug: "sustainable-luxury",
    title: "Sustainable Luxury in Practice",
    excerpt:
      "How passive cooling, local sourcing, and long-life materials converge in our approach to environmentally responsible architecture in southern Morocco.",
    category: "Sustainability",
    date: "2024-12-04",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=75&auto=format",
  },
];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return journalArticles.find((a) => a.slug === slug);
}
