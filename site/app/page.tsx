import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import Reveal from "./components/Reveal";
import PropertyCard from "./components/PropertyCard";
import { PROPERTIES, BAIRROS } from "@/lib/data";
import { WHATSAPP_NUMBER } from "@/lib/site";

const DESTAQUES = PROPERTIES.slice(0, 4);

const STEPS = [
  {
    n: "01",
    title: "Conte o que você procura",
    body: "WhatsApp ou site, sem formulário chato de preencher. Fala com a gente do jeito que for mais fácil.",
  },
  {
    n: "02",
    title: "A IA cruza com o mercado em tempo real",
    body: "Bairro, preço, perfil, urgência — o sistema já filtra o que não serve e separa só o que faz sentido pra você.",
  },
  {
    n: "03",
    title: "Você visita, decide, fecha",
    body: "O corretor entra na hora que importa: na visita e na negociação. O resto o sistema já resolveu.",
  },
];

const STATS = [
  { value: "+127%", label: "Valorização em 5 anos" },
  { value: "R$ 28K", label: "Preço médio do m² · Barra Sul" },
  { value: "12", label: "Lançamentos previstos este ano" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative isolate overflow-hidden gradient-hero dotted-bg-dark">
          <div className="pointer-events-none absolute -right-24 top-10 hidden md:block opacity-[0.08]">
            <Image
              src="/brand/icon-white.png"
              alt=""
              width={640}
              height={560}
              className="w-[36rem] h-auto"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 md:px-8 pt-40 pb-28 md:pt-52 md:pb-36">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                Balneário Camboriú · SC
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
                Seu próximo imóvel em BC,{" "}
                <span className="text-gradient">sem enrolação</span>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                A Kipe Imóveis entrega autonomia e agilidade pra quem quer
                comprar de verdade — imóveis de alto padrão em Balneário
                Camboriú, com atendimento inteligente que responde na hora.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] gradient-accent px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(108,60,233,0.4)] transition-transform hover:-translate-y-0.5"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="#destaques"
                  className="inline-flex items-center justify-center rounded-[10px] border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Ver imóveis em destaque
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
                <span>✓ Resposta em minutos, não em dias</span>
                <span>✓ SEO de bairro — Google sabe onde você procura</span>
                <span>✓ Leads qualificados, sem curioso</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-black/5 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3 md:px-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div>
                  <p className="font-display text-4xl font-semibold text-ink">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* DESTAQUES */}
        <section id="destaques" className="bg-lavender py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Selecionados pra você
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                Imóveis em destaque
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DESTAQUES.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <PropertyCard property={p} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <div className="mt-10 flex flex-col items-center gap-3">
                <Link
                  href="/imoveis"
                  className="text-sm font-semibold text-accent-2 hover:text-accent"
                >
                  Ver todos os imóveis →
                </Link>
                <p className="text-center text-xs text-muted">
                  Imóveis ilustrativos — o catálogo completo entra assim que
                  os primeiros imóveis forem cadastrados.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BAIRROS */}
        <section id="bairros" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Onde procurar
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                Explore Balneário Camboriú
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {BAIRROS.map((n, i) => (
                <Reveal
                  key={n.slug}
                  delay={i * 70}
                  className={n.big ? "col-span-2 md:col-span-1 md:row-span-2" : ""}
                >
                  <Link
                    href={`/bairros/${n.slug}`}
                    className={`group relative flex h-full min-h-40 flex-col justify-end overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1 ${
                      n.big ? "gradient-hero dotted-bg-dark min-h-64" : "bg-dark-surface"
                    }`}
                  >
                    <p className="font-display text-lg font-semibold text-white">
                      {n.name}
                    </p>
                    <p className="mt-1 text-sm text-white/60">{n.tag}</p>
                    <p className="mt-2 text-sm font-medium text-accent-soft">
                      {n.range}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/bairros"
                  className="text-sm font-semibold text-accent-2 hover:text-accent"
                >
                  Ver todos os bairros →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-lavender py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Como funciona
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink md:text-4xl">
                Inteligente de verdade, não só no nome
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 110}>
                  <div>
                    <span className="font-display text-sm font-semibold text-accent-soft">
                      {s.n}
                    </span>
                    <p className="mt-3 font-display text-xl font-semibold text-ink">
                      {s.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE / DEPOIMENTOS */}
        <section id="sobre" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Sobre a Kipe
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                  Uma imobiliária pensada pra quem tá cansado de esperar
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
                  A Kipe Imóveis nasceu pra tirar o atrito de comprar imóvel
                  em Balneário Camboriú: menos formulário, menos espera,
                  menos corretor sumindo depois do primeiro contato. Site
                  próprio, atendimento automatizado e foco total em quem
                  realmente quer fechar negócio.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-2xl border border-dashed border-accent/30 bg-lavender p-8 text-center">
                  <p className="font-display text-lg font-semibold text-ink">
                    Espaço reservado pros primeiros depoimentos
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Assim que os primeiros clientes fecharem negócio pela
                    Kipe, os relatos entram aqui — sem depoimento inventado.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="gradient-hero dotted-bg-dark py-24">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
                Pronto pra encontrar seu próximo imóvel em BC?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-white/70">
                Manda uma mensagem agora — a Kipe responde rápido, sem
                enrolação.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] gradient-accent px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(108,60,233,0.4)] transition-transform hover:-translate-y-0.5"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-[10px] border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Agendar visita
                </a>
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
