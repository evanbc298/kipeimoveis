import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFab from "../../components/WhatsAppFab";
import Reveal from "../../components/Reveal";
import JsonLd from "../../components/JsonLd";
import { PROPERTIES, BAIRROS } from "@/lib/data";
import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);
  if (!property) return {};
  return {
    title: `${property.title} — ${property.bairro}, BC | Kipe Imóveis`,
    description: property.description,
  };
}

export default async function ImovelPage({ params }: Props) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);
  if (!property) notFound();

  const message = encodeURIComponent(
    `Olá! Tenho interesse no imóvel "${property.title}" em ${property.bairro} (${property.price}). Podemos conversar?`
  );

  const similares = PROPERTIES.filter(
    (p) => p.bairroSlug === property.bairroSlug && p.slug !== property.slug
  ).slice(0, 3);

  const priceNumber = Number(property.price.replace(/[^\d]/g, ""));
  const areaMatch = property.specs?.match(/(\d+)m²/);
  const temPaginaDoBairro = BAIRROS.some((b) => b.slug === property.bairroSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    url: `${SITE_URL}/imoveis/${property.slug}`,
    datePosted: new Date().toISOString().slice(0, 10),
    image: property.images[0],
    price: priceNumber || undefined,
    priceCurrency: "BRL",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Balneário Camboriú",
      addressRegion: property.bairro,
      addressCountry: "BR",
    },
    ...(areaMatch
      ? { floorSize: { "@type": "QuantitativeValue", value: Number(areaMatch[1]), unitCode: "MTK" } }
      : {}),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden gradient-hero dotted-bg-dark">
          <div className="relative mx-auto max-w-5xl px-6 pt-40 pb-16 md:px-8 md:pt-52 md:pb-20">
            <Reveal>
              <Link
                href="/imoveis"
                className="text-xs font-medium text-white/60 hover:text-white"
              >
                ← Voltar pra listagem
              </Link>
            </Reveal>
            <Reveal delay={60}>
              <span className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                {property.badge}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                {property.title}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-3 text-white/70">
                {property.bairro}, Balneário Camboriú
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr]">
              <Reveal>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-lavender">
                  <Image
                    src={property.images[0]}
                    alt={`${property.title}, ${property.bairro}`}
                    fill
                    priority
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {property.images.length > 1 && (
                  <div className="mt-3 grid grid-cols-4 gap-3">
                    {property.images.slice(1, 5).map((src, i) => (
                      <div
                        key={src}
                        className="relative aspect-square overflow-hidden rounded-lg bg-lavender"
                      >
                        <Image
                          src={src}
                          alt={`${property.title} — foto ${i + 2}`}
                          fill
                          sizes="15vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-10">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Descrição
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {property.description}
                  </p>
                </div>

                {property.specs && (
                  <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {property.specs.split(" · ").map((spec) => (
                      <div
                        key={spec}
                        className="rounded-xl bg-lavender px-4 py-3 text-center text-sm font-medium text-ink"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>

              <Reveal delay={100}>
                <div className="sticky top-28 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_3px_rgba(17,17,20,0.06)]">
                  <p className="font-display text-2xl font-semibold text-accent-2">
                    {property.price}
                  </p>
                  <p className="mt-1 text-sm text-muted">{property.bairro}, BC</p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 rounded-[10px] gradient-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(108,60,233,0.3)] transition-transform hover:-translate-y-0.5"
                  >
                    Quero mais informações
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center rounded-[10px] border border-black/10 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-lavender"
                  >
                    Agendar visita
                  </a>

                  {temPaginaDoBairro && (
                    <Link
                      href={`/bairros/${property.bairroSlug}`}
                      className="mt-5 block text-center text-xs font-medium text-accent-2 hover:text-accent"
                    >
                      Ver mais sobre {property.bairro} →
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>

            {similares.length > 0 && (
              <div className="mt-20 border-t border-black/5 pt-16">
                <Reveal>
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Imóveis similares
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                    Também em {property.bairro}
                  </h2>
                </Reveal>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {similares.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 90}>
                      <Link
                        href={`/imoveis/${p.slug}`}
                        className="block rounded-2xl border border-black/5 p-5 transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(108,60,233,0.14)]"
                      >
                        <p className="font-display text-base font-semibold text-ink">
                          {p.title}
                        </p>
                        <p className="mt-2 font-display text-lg font-semibold text-accent-2">
                          {p.price}
                        </p>
                        {p.specs && (
                          <p className="mt-1 text-xs text-muted">{p.specs}</p>
                        )}
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
