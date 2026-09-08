import type { Metadata } from "next";
import Link from "next/link";
import { paintings, getCategories } from "@/data/paintings";
import PaintingCard from "@/components/PaintingCard";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse all available original paintings, filterable by category.",
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const categories = getCategories();
  const active = category && categories.includes(category) ? category : undefined;

  const shown = active
    ? paintings.filter((p) => p.category === active)
    : paintings;

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-10">
        <h1 className="font-serif text-3xl text-foreground">Gallery</h1>
        <p className="mt-2 text-muted">
          {paintings.length} painting{paintings.length === 1 ? "" : "s"}, browsable by category.
        </p>
      </div>

      {categories.length > 1 && (
        <div className="mb-10 flex flex-wrap gap-2">
          <FilterPill href="/gallery" active={!active} label="All" />
          {categories.map((c) => (
            <FilterPill
              key={c}
              href={`/gallery?category=${encodeURIComponent(c)}`}
              active={active === c}
              label={c}
            />
          ))}
        </div>
      )}

      {shown.length === 0 ? (
        <p className="text-muted">No paintings in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {shown.map((painting) => (
            <PaintingCard key={painting.slug} painting={painting} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
        active
          ? "border-accent bg-accent text-white"
          : "border-line text-muted hover:border-accent hover:text-accent"
      }`}
    >
      {label}
    </Link>
  );
}
