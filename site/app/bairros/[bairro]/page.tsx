import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFab from "../../components/WhatsAppFab";
import Reveal from "../../components/Reveal";
import PropertyCard from "../../components/PropertyCard";
import JsonLd from "../../components/JsonLd";
import { BAIRROS, PROPERTIES } from "@/lib/data";
import { WHATSAPP_NUMBER } from "@/lib/site";

type Props = {
  params: Promise<{ bairro: string }>;
};

export function generateStaticParams() {
  return BAIRROS.map((b) => ({ bairro: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bairro: slug } = await params;
  const bairro = BAIRROS.find((b) => b.slug === slug);
  if (!bairro) return {};
  return {
    title: `Imóveis no ${bairro.name} — Balneário Camboriú | Kipe Imóveis`,
    description: bairro.intro,
  };
}

const FAQ_TEMPLATE = (nome: string, range: string) => [
  {
    q: `Quanto custa o m² no ${nome}?`,
    a: `A faixa média fica entre ${range}, variando conforme distância da praia, andar e padrão do empreendimento.`,
  },
  {
    q: `O ${nome} é bom para investir?`,
    a: `Sim — assim como o restante de Balneário Camboriú, o bairro vem em trajetória de valorização, com procura tanto de moradores quanto de investidores de fora do estado.`,
  },
  {
    q: `O ${nome} tem praia?`,
    a: `Sim, como a maioria dos bairros nobres de BC, o ${nome} tem acesso à orla — a distância exata varia conforme o empreendimento.`,
  },
];

export default async function BairroPage({ params }: Props) {
  const { bairro: slug } = await params;
  const bairro = BAIRROS.find((b) => b.slug === slug);
  if (!bairro) notFound();

  const imoveis = PROPERTIES.filter((p) => p.bairroSlug === bairro.slug);
  const faq = FAQ_TEMPLATE(bairro.name, bairro.range);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden gradient-hero dotted-bg-dark">
          <div className="relative mx-auto max-w-4xl px-6 pt-40 pb-20 md:px-8 md:pt-52 md:pb-24">
            <Reveal>
              <Link
                href="/bairros"
                className="text-xs font-medium text-white/60 hover:text-white"
              >
                ← Todos os bairros
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-white md:text-5xl">
                {bairro.name}
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-3 text-white/70">
                {bairro.tag} · {bairro.range} · Balneário Camboriú, SC
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
                {bairro.intro}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Imóveis no {bairro.name}
              </p>
            </Reveal>

            {imoveis.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {imoveis.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 90}>
                    <PropertyCard property={p} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal delay={60}>
                <div className="mt-8 rounded-2xl border border-dashed border-accent/30 bg-lavender p-10 text-center">
                  <p className="text-sm text-muted">
                    Nenhum imóvel cadastrado no {bairro.name} no momento.
                    Fale com a gente pra ser avisado assim que entrar um.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        <section className="bg-lavender py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Perguntas frequentes
              </p>
            </Reveal>
            <div className="mt-8 space-y-6">
              {faq.map((f, i) => (
                <Reveal key={f.q} delay={i * 80}>
                  <div className="rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(17,17,20,0.06)]">
                    <p className="font-display text-base font-semibold text-ink">
                      {f.q}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {f.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="gradient-hero dotted-bg-dark py-20">
          <div className="mx-auto max-w-2xl px-6 text-center md:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
                Quer conhecer imóveis no {bairro.name}?
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Olá! Quero saber mais sobre imóveis no ${bairro.name}, Balneário Camboriú.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-[10px] gradient-accent px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(108,60,233,0.4)] transition-transform hover:-translate-y-0.5"
              >
                Falar no WhatsApp
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
