import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFab from "../components/WhatsAppFab";
import Reveal from "../components/Reveal";
import ImoveisListing from "../components/ImoveisListing";
import { PROPERTIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Imóveis à venda em Balneário Camboriú | Kipe Imóveis",
  description:
    "Apartamentos, coberturas e casas de alto padrão à venda em Balneário Camboriú. Veja os imóveis selecionados pela Kipe Imóveis.",
};

export default function ImoveisPage() {
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
                Imóveis à venda
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                Apartamentos, coberturas e casas de alto padrão, selecionados
                bairro a bairro.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <Reveal>
              <ImoveisListing properties={PROPERTIES} />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
