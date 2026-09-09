import Link from "next/link";
import { paintings } from "@/data/paintings";
import PaintingCard from "@/components/PaintingCard";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
  const featured = paintings.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      <section className="relative flex h-[70vh] min-h-[420px] w-full items-end overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14">
          <p className="text-lg text-foreground/80">
            Original paintings by{" "}
            <span className="signature text-3xl text-accent">GK</span>
          </p>
          <h1 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Paintings that comfort the soul and feel like home — a piece for
            your wall, and an asset for years to come.
          </h1>
          <Link
            href="/gallery"
            className="mt-6 inline-block border border-accent px-6 py-3 text-sm tracking-wide text-accent transition-colors hover:bg-accent hover:text-white"
          >
            View the gallery
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-2xl text-foreground">Featured work</h2>
          <Link href="/gallery" className="text-sm text-muted hover:text-accent">
            See all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {featured.map((painting) => (
            <PaintingCard key={painting.slug} painting={painting} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white/40">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-serif text-2xl text-foreground">A bit about the work</h2>
          <p className="mt-4 text-muted">
            Each piece is painted by hand, one at a time, and photographed as
            closely to true color as possible. Browse the full gallery for
            medium, size, and story behind each painting.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm tracking-wide text-accent hover:underline"
          >
            More about the artist &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
