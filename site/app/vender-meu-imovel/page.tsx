import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFab from "../components/WhatsAppFab";
import Reveal from "../components/Reveal";
import AvaliarImovelForm from "../components/AvaliarImovelForm";

export const metadata: Metadata = {
  title: "Anuncie seu imóvel | Kipe Imóveis",
  description:
    "Quer vender ou alugar seu imóvel em Balneário Camboriú? Avaliação gratuita e divulgação com a Kipe Imóveis.",
};

const BENEFICIOS = [
  {
    title: "Avaliação sem compromisso",
    body: "Analisamos o imóvel e o mercado do bairro antes de sugerir um valor — sem enrolação.",
  },
  {
    title: "Atendimento inteligente",
    body: "Interessados são qualificados automaticamente antes de chegar até você — só fala com quem tá pronto pra negociar.",
  },
  {
    title: "Divulgação com identidade",
    body: "Seu imóvel entra no site com a mesma qualidade visual dos destaques da Kipe, não como mais um anúncio genérico.",
  },
];

export default function VenderMeuImovelPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden gradient-hero dotted-bg-dark">
          <div className="relative mx-auto max-w-4xl px-6 pt-40 pb-20 text-center md:px-8 md:pt-52 md:pb-24">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                Pra proprietários
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-white md:text-5xl">
                Quer vender ou alugar seu imóvel em BC?
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                Avaliação gratuita e sem compromisso. Você fala com a gente,
                a gente cuida do resto.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {BENEFICIOS.map((b, i) => (
                <Reveal key={b.title} delay={i * 90}>
                  <div className="rounded-2xl bg-lavender p-6">
                    <p className="font-display text-base font-semibold text-ink">
                      {b.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 max-w-3xl">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Conte sobre o imóvel
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                  Preencha e a gente entra em contato
                </h2>
              </Reveal>
              <Reveal delay={100} className="mt-8">
                <AvaliarImovelForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
