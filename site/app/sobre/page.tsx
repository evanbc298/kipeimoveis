import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFab from "../components/WhatsAppFab";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Sobre | Kipe Imóveis",
  description:
    "Conheça a Kipe Imóveis: imobiliária digital de alto padrão em Balneário Camboriú, feita pra tirar o atrito de comprar imóvel.",
};

const NUMEROS = [
  { value: "100%", label: "Atendimento digital, sem fila de espera" },
  { value: "24/7", label: "Resposta automatizada no WhatsApp" },
  { value: "6", label: "Bairros de alto padrão mapeados em BC" },
];

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden gradient-hero dotted-bg-dark">
          <div className="relative mx-auto max-w-4xl px-6 pt-40 pb-24 text-center md:px-8 md:pt-52 md:pb-28">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                Sobre a Kipe
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-white md:text-5xl">
                Uma imobiliária pensada pra quem tá cansado de esperar
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                A Kipe Imóveis nasceu pra tirar o atrito de comprar imóvel em
                Balneário Camboriú: menos formulário, menos espera, menos
                corretor sumindo depois do primeiro contato.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Como pensamos
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                  Autonomia e agilidade, do início ao fim
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
                  <p>
                    Quem procura imóvel de alto padrão em BC não quer
                    preencher formulário genérico nem esperar dias por uma
                    resposta. A Kipe existe pra resolver isso: site próprio
                    (sem depender de portal), atendimento automatizado que
                    responde na hora, e conteúdo de bairro que ajuda a
                    decidir antes mesmo da primeira visita.
                  </p>
                  <p>
                    O corretor entra exatamente na hora que importa — na
                    visita e na negociação. O resto, o sistema já resolveu:
                    qualificação, primeiras perguntas, envio de opções
                    compatíveis com o que você procura.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Onde atuamos
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                  Especialistas em Balneário Camboriú
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  Focamos no que conhecemos de verdade: os bairros de alto
                  padrão de BC — Centro, Barra Sul, Pioneiros, Praia do
                  Estaleiro, Barra Norte e Nações. Cada um com identidade,
                  faixa de preço e perfil de comprador diferentes, e a Kipe
                  ajuda você a entender qual combina com o que você procura.
                </p>
              </Reveal>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 border-t border-black/5 pt-16 sm:grid-cols-3">
              {NUMEROS.map((n, i) => (
                <Reveal key={n.label} delay={i * 90}>
                  <p className="font-display text-3xl font-semibold text-accent-2">
                    {n.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{n.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-lavender py-24">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
            <Reveal>
              <div className="rounded-2xl border border-dashed border-accent/30 bg-white p-10">
                <p className="font-display text-lg font-semibold text-ink">
                  Espaço reservado pros primeiros depoimentos
                </p>
                <p className="mt-2 text-sm text-muted">
                  Assim que os primeiros clientes fecharem negócio pela Kipe,
                  os relatos entram aqui — sem depoimento inventado.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
