import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { paintings, getPaintingBySlug } from "@/data/paintings";

export function generateStaticParams() {
  return paintings.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const painting = getPaintingBySlug(slug);
  if (!painting) return {};
  return {
    title: painting.title,
    description: painting.description,
  };
}

export default async function PaintingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const painting = getPaintingBySlug(slug);
  if (!painting) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <Link href="/gallery" className="text-sm text-muted hover:text-accent">
        &larr; Back to gallery
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-line">
          <Image
            src={painting.image}
            alt={painting.title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.15em] text-accent">
            {painting.category}
          </p>
          <h1 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
            {painting.title}
          </h1>
          <dl className="mt-6 space-y-2 text-sm text-muted">
            <div className="flex gap-2">
              <dt className="w-24 shrink-0 text-foreground/70">Medium</dt>
              <dd>{painting.medium}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-24 shrink-0 text-foreground/70">Size</dt>
              <dd>{painting.dimensions}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-24 shrink-0 text-foreground/70">Year</dt>
              <dd>{painting.year}</dd>
            </div>
          </dl>
          <p className="mt-6 max-w-prose leading-relaxed text-foreground/90">
            {painting.description}
          </p>
          <p className="mt-8 text-sm text-muted">
            Interested in this piece?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
