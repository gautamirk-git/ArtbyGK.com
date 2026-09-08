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
            {/*
              Placeholder bio — replace this paragraph with your own story:
              how you started painting, what draws you to your subjects, and
              what you want a visitor to feel standing in front of a piece.
            */}
            I&rsquo;m a painter working primarily in oil and acrylic, drawn to
            quiet landscapes, still life, and the occasional abstract
            departure. Every piece here is painted by hand, one at a time,
            in my home studio — this paragraph is a placeholder, so replace
            it with your own story whenever you&rsquo;re ready.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/90">
            Originals are one-of-a-kind; select paintings are also available
            as printed reproductions. Browse the{" "}
            <Link href="/gallery" className="text-accent hover:underline">
              gallery
            </Link>{" "}
            to see current work, or{" "}
            <Link href="/contact" className="text-accent hover:underline">
              get in touch
            </Link>{" "}
            with any questions.
          </p>
        </div>
      </div>
    </div>
  );
}
