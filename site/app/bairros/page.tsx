import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFab from "../components/WhatsAppFab";
import Reveal from "../components/Reveal";
import { BAIRROS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bairros de Balneário Camboriú | Kipe Imóveis",
  description:
    "Conheça os principais bairros de alto padrão de Balneário Camboriú: Centro, Barra Sul, Pioneiros, Praia do Estaleiro, Barra Norte e Nações.",
};

export default function BairrosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden gradient-hero dotted-bg-dark">
          <div className="relative mx-auto max-w-4xl px-6 pt-40 pb-20 text-center md:px-8 md:pt-52 md:pb-24">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                Balneário Camboriú · SC
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-white md:text-5xl">
                Explore os bairros
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                Cada bairro de BC tem identidade, preço e perfil de morador
                diferentes. Veja qual combina com o que você procura.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BAIRROS.map((b, i) => (
                <Reveal key={b.slug} delay={i * 80}>
                  <Link
                    href={`/bairros/${b.slug}`}
                    className="group block h-full rounded-2xl bg-dark-surface p-6 transition-transform hover:-translate-y-1"
                  >
                    <p className="font-display text-xl font-semibold text-white">
                      {b.name}
                    </p>
                    <p className="mt-1 text-sm text-white/60">{b.tag}</p>
                    <p className="mt-3 text-sm font-medium text-accent-soft">
                      {b.range}
                    </p>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/50">
                      {b.intro}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
