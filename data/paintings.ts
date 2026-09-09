// All of the artwork shown on the site lives in this one file.
//
// HOW TO ADD A NEW PAINTING (no coding needed beyond copy/paste):
// 1. Add your photo to the /public/paintings/ folder (e.g. sunset-ridge.jpg).
// 2. Copy one of the entries below, paste it into the "paintings" list,
//    and change the details to match your new piece.
// 3. "slug" is the web-address-friendly version of the title — lowercase,
//    words separated by hyphens, no spaces or punctuation.
//
// The "price", "type", "sizes", and "sold" fields are here now, set to
// placeholder/empty values, so that Phase 2 (selling paintings and prints)
// can be turned on later just by filling these in — no redesign needed.
// They are not shown anywhere on the site yet.

export type PrintSize = {
  label: string; // e.g. "8x10 in"
  price: number | null;
  stock: number | null; // null = not tracked yet
};

export type Painting = {
  slug: string;
  title: string;
  category: string;
  medium: string;
  dimensions: string;
  year: number;
  description: string;
  image: string; // path under /public
  featured?: boolean;

  // Reserved for Phase 2 (selling) — not used yet:
  price: number | null;
  type: "original" | "print";
  sold: boolean;
  prints: PrintSize[];
};

export const paintings: Painting[] = [
  {
    slug: "garden-pathway",
    title: "Garden Pathway",
    category: "Landscape",
    medium: "Crayon on heavy paper",
    dimensions: "8 x 10 in",
    year: 2000,
    description:
      "Richly textured scene depicting a warm brick pathway leading toward a sunlit country estate, flanked by lush flowerbeds in vibrant red, white, and yellow hues.",
    image: "/paintings/garden-pathway.jpg",
    featured: true,
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "the-snake-charmer",
    title: "The Snake Charmer",
    category: "Figure Study / Portrait",
    medium: "Colored pencil on toned paper",
    dimensions: "10 x 14 in",
    year: 1990,
    description:
      "Monochromatic, expressive study capturing a seated snake charmer playing his instrument over a woven basket, rendered in delicate line work and warm sepia tones.",
    image: "/paintings/snake-charmer-study.jpg",
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "crimson-and-gold",
    title: "Crimson and Gold",
    category: "Abstract",
    medium: "Acrylic pour on canvas",
    dimensions: "8 x 10 in",
    year: 2026,
    description:
      "Dynamic fluid acrylic composition featuring organic, swirling currents of deep red, bright yellow, and metallic gold set against a dark contrasting background.",
    image: "/paintings/crimson-and-gold.jpg",
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "bald-eagle-overlook",
    title: "Bald Eagle Overlook",
    category: "Wildlife / Landscape",
    medium: "Acrylic on canvas",
    dimensions: "10 x 14 in",
    year: 2000,
    description:
      "Detailed wildlife portrayal of a majestic bald eagle perched atop a weathered fallen log overlooking a serene pine forest and mirrored lake.",
    image: "/paintings/bald-eagle-overlook.jpg",
    featured: true,
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "coastal-waves",
    title: "Coastal Waves",
    category: "Seascape",
    medium: "Mixed crayon on paper",
    dimensions: "8 x 10 in",
    year: 2000,
    description:
      "Atmospheric coastal view showcasing cresting ocean waves breaking onto a sandy shore beneath a dramatic sky blended with pastel tones.",
    image: "/paintings/coastal-waves.jpg",
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "bamboo-branches",
    title: "Bamboo Branches",
    category: "Still Life / Botanical",
    medium: "Acrylic on black heavy stock paper",
    dimensions: "8 x 10 in",
    year: 2024,
    description:
      "Striking minimalist study of vibrant green bamboo stalks and delicate leaves, bold against a deep black background.",
    image: "/paintings/bamboo-branches.jpg",
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "carnation-bouquet",
    title: "Carnation Bouquet",
    category: "Still Life / Floral",
    medium: "Acrylic on canvas",
    dimensions: "10 x 14 in",
    year: 2000,
    description:
      "Soft floral arrangement of red, white, and yellow carnation blossoms set against a muted green backdrop with delicate fern foliage.",
    image: "/paintings/carnation-bouquet.jpg",
    featured: true,
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
];

export function getCategories(): string[] {
  const set = new Set(paintings.map((p) => p.category));
  return Array.from(set).sort();
}

export function getPaintingBySlug(slug: string): Painting | undefined {
  return paintings.find((p) => p.slug === slug);
}
