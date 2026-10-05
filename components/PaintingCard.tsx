import Image from "next/image";
import Link from "next/link";
import type { Painting } from "@/data/paintings";

export default function PaintingCard({ painting }: { painting: Painting }) {
  return (
    <Link href={`/gallery/${painting.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-line">
        <Image
          src={painting.image}
          alt={painting.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {painting.sold && (
      <span className="absolute top-3 right-3 z-10 bg-foreground/90 px-3 py-1 text-xs uppercase tracking-wider text-background">Sold</span>
      )}
      </div>
      <div className="mt-3">
        <h3 className="font-serif text-lg text-foreground">{painting.title}</h3>
        <p className="text-sm text-muted">
          {painting.category} &middot; {painting.year}
        </p>
      </div>
    </Link>
  );
}
