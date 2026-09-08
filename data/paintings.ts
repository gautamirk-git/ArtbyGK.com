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
    slug: "golden-hour-fields",
    title: "Golden Hour Fields",
    category: "Landscape",
    medium: "Oil on canvas",
    dimensions: "24 x 36 in",
    year: 2024,
    description:
      "Late-afternoon light moving across an open field, built up in warm, layered brushwork.",
    image: "/paintings/golden-hour-fields.jpg",
    featured: true,
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "coastal-morning",
    title: "Coastal Morning",
    category: "Landscape",
    medium: "Acrylic on canvas",
    dimensions: "18 x 24 in",
    year: 2023,
    description:
      "A quiet shoreline just after sunrise, painted in cool blues and soft, misted greys.",
    image: "/paintings/coastal-morning.jpg",
    featured: true,
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "fragments-in-blue",
    title: "Fragments in Blue",
    category: "Abstract",
    medium: "Mixed media on canvas",
    dimensions: "30 x 30 in",
    year: 2025,
    description:
      "Overlapping forms in indigo and slate, exploring balance between structure and drift.",
    image: "/paintings/fragments-in-blue.jpg",
    featured: true,
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "quiet-tension",
    title: "Quiet Tension",
    category: "Abstract",
    medium: "Oil on canvas",
    dimensions: "20 x 20 in",
    year: 2024,
    description:
      "A study in restraint — a single warm accent held against a field of muted charcoal.",
    image: "/paintings/quiet-tension.jpg",
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "peonies-and-linen",
    title: "Peonies and Linen",
    category: "Still Life",
    medium: "Oil on panel",
    dimensions: "12 x 16 in",
    year: 2023,
    description:
      "Loose, blush-toned peonies against pale linen, painted directly from life over a single sitting.",
    image: "/paintings/peonies-and-linen.jpg",
    price: null,
    type: "original",
    sold: false,
    prints: [],
  },
  {
    slug: "citrus-study-no-2",
    title: "Citrus Study No. 2",
    category: "Still Life",
    medium: "Watercolor on paper",
    dimensions: "9 x 12 in",
    year: 2025,
    description:
      "The second in a small series of citrus studies, focused on light passing through thin peel and pith.",
    image: "/paintings/citrus-study-no-2.jpg",
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
