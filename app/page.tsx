import Image from "next/image";
import Link from "next/link";
import { paintings } from "@/data/paintings";
import PaintingCard from "@/components/PaintingCard";

export default function Home() {
  const featured = paintings.filter((p) => p.featured).slice(0, 3);
  const hero = paintings[0];

  return (
    <div>
      <section className="relative flex h-[70vh] min-h-[420px] w-full items-end overflow-hidden">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            Original paintings by GK
          </p>
          <h1 className="mt-3 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            Paintings that hold still and let you look longer.
          </h1>
          <Link
            href="/gallery"
            className="mt-6 inline-block border border-white/70 px-6 py-3 text-sm tracking-wide transition-colors hover:bg-white hover:text-foreground"
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
