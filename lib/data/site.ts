export const offices = [
  {
    city: "Agadir",
    region: "Souss-Massa",
    address: [
      "Immeuble Al Amal, Boulevard Hassan II",
      "Quartier Administratif",
      "80000 Agadir, Morocco",
    ],
    phone: "+212 528 84 12 30",
    email: "agadir@atelier-meridian.ma",
  },
  {
    city: "Taghazout",
    region: "Côte Atlantique",
    address: [
      "Route d'Essaouira, Km 17",
      "80600 Taghazout Bay",
      "Morocco",
    ],
    phone: "+212 528 19 45 80",
    email: "taghazout@atelier-meridian.ma",
  },
] as const;

export const contactInfo = {
  email: "studio@atelier-meridian.ma",
  careersEmail: "careers@atelier-meridian.ma",
  phone: "+212 528 84 12 30",
} as const;

export const studioInfo = {
  founded: 2008,
  tagline: "Agadir & Taghazout",
  region: "Souss-Massa, Morocco",
} as const;
