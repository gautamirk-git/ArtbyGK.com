import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About the artist behind ArtbyGK.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-[240px_1fr] sm:items-start">
        <div className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-full">
          <Image
            src="/artist-placeholder.jpg"
            alt="Portrait of the artist (placeholder)"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-serif text-3xl text-foreground">About the Artist</h1>
          <p className="mt-6 leading-relaxed text-foreground/90">
            Art was never something I studied in a classroom—it is a gift
            inherited from my mother. Working primarily in rich oils and
            vivid acrylics, I&rsquo;m drawn to the calm of quiet landscapes,
            intimate still lifes, and the occasional expressive abstract.
            Every single piece is handcrafted, one brushstroke at a time,
            right from my home studio.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/90">
            Each original painting is a true one-of-a-kind creation, with
            select artwork also available as high-quality fine art prints.
            Take a moment to explore the{" "}
            <Link href="/gallery" className="text-accent hover:underline">
              gallery
            </Link>
            , immerse yourself in the collection, and feel free to{" "}
            <Link href="/contact" className="text-accent hover:underline">
              reach out
            </Link>
            —I&rsquo;d love to connect with you!
          </p>
        </div>
      </div>
    </div>
  );
}
