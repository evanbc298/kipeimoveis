"use client";

import { useMemo, useState } from "react";
import PropertyCard from "./PropertyCard";
import type { Property } from "@/lib/data";

const TIPOS = ["Todos", "Apartamento", "Cobertura", "Casa", "Studio"] as const;

export default function ImoveisListing({ properties }: { properties: Property[] }) {
  const [tipo, setTipo] = useState<(typeof TIPOS)[number]>("Todos");

  const filtered = useMemo(
    () => (tipo === "Todos" ? properties : properties.filter((p) => p.tipo === tipo)),
    [properties, tipo]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {TIPOS.map((t) => (
          <button
            key={t}
            onClick={() => setTipo(t)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              tipo === t
                ? "gradient-accent text-white"
                : "bg-lavender text-ink-soft hover:bg-white hover:shadow-[0_1px_3px_rgba(17,17,20,0.08)]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-muted">
          Nenhum imóvel desse tipo no momento.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      )}
    </div>
  );
}
