export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  aspectRatio: "portrait" | "landscape" | "square";
};

export const featuredProjects: Project[] = [
  {
    id: "01",
    title: "Villa Atlantique",
    category: "Residential Architecture",
    location: "Agadir, Morocco",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=75&auto=format",
    aspectRatio: "landscape",
  },
  {
    id: "02",
    title: "Riad Lumière",
    category: "Interior Design",
    location: "Taroudant, Morocco",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=75&auto=format",
    aspectRatio: "portrait",
  },
  {
    id: "03",
    title: "Horizon Pavilion",
    category: "Commercial",
    location: "Taghazout, Morocco",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=75&auto=format",
    aspectRatio: "landscape",
  },
  {
    id: "04",
    title: "Serene Atrium",
    category: "Hospitality",
    location: "Marrakech, Morocco",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=75&auto=format",
    aspectRatio: "portrait",
  },
  {
    id: "05",
    title: "Coastal Sanctuary",
    category: "Residential Architecture",
    location: "Essaouira, Morocco",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=75&auto=format",
    aspectRatio: "landscape",
  },
  {
    id: "06",
    title: "The Gallery Loft",
    category: "Interior Design",
    location: "Casablanca, Morocco",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=75&auto=format",
    aspectRatio: "square",
  },
];
