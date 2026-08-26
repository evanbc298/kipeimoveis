import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/data";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/imoveis/${property.slug}`} className="block">
      <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(17,17,20,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(108,60,233,0.16)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-lavender">
          <Image
            src={property.images[0]}
            alt={`${property.title}, ${property.bairro}`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-md bg-dark/85 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {property.badge}
          </span>
        </div>
        <div className="p-5">
          <p className="font-display text-base font-semibold text-ink">
            {property.title}
          </p>
          <p className="mt-1 text-sm text-muted">{property.bairro}, BC</p>
          <p className="mt-3 font-display text-xl font-semibold text-accent-2">
            {property.price}
          </p>
          {property.specs && (
            <p className="mt-1 text-xs text-muted">{property.specs}</p>
          )}
        </div>
      </article>
    </Link>
  );
}
