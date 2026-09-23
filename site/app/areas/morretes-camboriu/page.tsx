import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "../../components/JsonLd";
import Reveal from "../../components/Reveal";
import { SITE_URL, WHATSAPP_NUMBER, BUSINESS } from "@/lib/site";

const AREA = {
  slug: "morretes-camboriu",
  cidade: "Camboriú",
  uf: "SC",
  bairro: "Morretes",
  matricula: "10.152",
  areaMatricula: "24.882,00",
  areaUtilizavel: "25.843,47",
  extensao: "±765",
  larguraMedia: "±34",
  preco: 13_500_000,
  precoLabel: "R$ 13.500.000",
  precoCurto: "R$ 13,5 milhões",
  precoM2: "R$ 522/m²",
  permuta: "até 50%",
  img: "/areas/morretes-camboriu",
};

const WHATSAPP_MSG = encodeURIComponent(
  `Quero informações sobre a área de ${AREA.areaUtilizavel} m² no bairro Morretes, em Camboriú.`
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const PAGE_URL = `${SITE_URL}/areas/${AREA.slug}`;
const TITLE = `Área de ${AREA.areaUtilizavel} m² em Morretes, Camboriú — SC`;
const DESCRIPTION = `Terreno de ${AREA.areaUtilizavel} m² no bairro Morretes, Camboriú/SC, para loteamento. Matrícula ${AREA.matricula}, levantamento topográfico georreferenciado. ${AREA.precoLabel}, com até 50% em permuta.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Kipe Imóveis",
    locale: "pt_BR",
    type: "website",
    images: [`${AREA.img}/hero-skyline.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${AREA.img}/hero-skyline.jpg`],
  },
};

const NUMEROS = [
  { valor: `${AREA.areaUtilizavel} m²`, label: "Área total utilizável" },
  { valor: `${AREA.extensao} m`, label: "De extensão" },
  { valor: AREA.precoM2, label: "Valor por metro quadrado" },
  { valor: AREA.permuta, label: "Aceita em permuta" },
];

const MARCACOES = [
  {
    src: `${AREA.img}/aerea-contexto.jpg`,
    ratio: "3/4",
    titulo: "O contorno do terreno",
    texto:
      "A linha vermelha é o limite da área sobre a imagem de satélite. Dá pra ver a Av. José Francisco Bernardes à direita, os vizinhos já construídos à esquerda e a faixa de terra que está à venda no meio.",
  },
  {
    src: `${AREA.img}/aerea-perimetro.jpg`,
    ratio: "3/4",
    titulo: "Os pontos medidos em campo",
    texto:
      "A mesma área com a grade de coordenadas por cima. Cada canto do terreno tem latitude e longitude registradas no levantamento — não é contorno desenhado no olho, é medição de campo.",
  },
  {
    src: `${AREA.img}/planta-topografica.jpg`,
    ratio: "1600/900",
    titulo: "A planta oficial",
    texto:
      "O desenho técnico assinado pelo engenheiro em setembro de 2024. Traz as medidas de cada lado, os 7 pontos do perímetro, a faixa ocupada pela rua e as duas partes que ainda precisam de acerto no cartório.",
    wide: true,
  },
];

const ARGUMENTOS = [
  {
    titulo: "Camboriú é a cidade que mais cresce na região",
    texto:
      "O Censo 2022 registrou 112 mil habitantes, contra 62 mil em 2010 — alta de quase 80% em doze anos. Em 2025 a estimativa do IBGE chegou a 121 mil, a maior variação entre as cidades catarinenses acima de 100 mil habitantes.",
  },
  {
    titulo: "A cidade já chegou na porta",
    texto:
      "O entorno saiu de área rural para loteamento em poucos anos. As imagens aéreas mostram quadras abertas e terraplanagem em andamento bem na divisa norte do terreno.",
  },
  {
    titulo: "AeroPark Camboriú na mesma região",
    texto:
      "Apresentado em março de 2026, o projeto prevê cerca de R$ 1 bilhão numa área de mais de 2,2 milhões de m² na região do Braço — aeroporto executivo, 225 hangares, parque tecnológico e condomínio de alto padrão. Está em licenciamento ambiental.",
  },
  {
    titulo: "Formato que pede compra em conjunto",
    texto:
      "São cerca de 765 m de comprimento costurando o miolo de quem já é proprietário na região. Comprado isolado, é reserva de valor. Somado aos terrenos vizinhos, vira a espinha de um loteamento inteiro.",
  },
];

const ROTAS = [
  { destino: "Centro de Camboriú", km: "3,6 km", nota: "Comércio, escolas e serviços do município" },
  { destino: "BR-101", km: "4,8 km", nota: "Principal eixo logístico do litoral catarinense" },
  { destino: "Condomínio Caledônia", km: "divisa", nota: "Confrontação a oeste, conforme a planta" },
  { destino: "Região do Braço (AeroPark)", km: "1,8 km", nota: "Perímetro estudado para o projeto do aeroporto" },
  { destino: "Barra Sul — Balneário Camboriú", km: "7,4 km", nota: "Vetor de expansão vertical de BC" },
  { destino: "Praia Central de Balneário Camboriú", km: "7,8 km", nota: "O metro quadrado mais valorizado do país" },
  { destino: "Itapema", km: "7,7 km", nota: "Outro mercado de alta valorização" },
  { destino: "Porto de Itajaí", km: "16,4 km", nota: "Maior complexo portuário de SC" },
  { destino: "Aeroporto de Navegantes (NVT)", km: "19,1 km", nota: "Voos diretos para as principais capitais" },
  { destino: "Florianópolis", km: "61,9 km", nota: "Capital do estado" },
];

const VALORIZACAO = [
  {
    numero: "+80%",
    titulo: "População de Camboriú, 2010 a 2022",
    texto:
      "De 62,36 mil para 112,17 mil habitantes no Censo 2022 — o maior salto da região da AMFRI, que levou o município ao 14º lugar em população no estado.",
  },
  {
    numero: "121 mil",
    titulo: "Estimativa IBGE para 2025",
    texto:
      "Alta de 3,17% em um ano, a maior entre as cidades catarinenses com mais de 100 mil habitantes. O crescimento não desacelerou depois do Censo.",
  },
  {
    numero: "R$ 15.146",
    titulo: "Metro quadrado em Balneário Camboriú",
    texto:
      "Média residencial do FipeZap em abril de 2026, com valorização de 5,67% em doze meses. É a pressão desse mercado que empurra a demanda para cá.",
  },
  {
    numero: "R$ 522",
    titulo: "Metro quadrado deste terreno",
    texto:
      "Valor de área bruta, antes de qualquer investimento de urbanização. A diferença entre esse número e o preço do lote pronto na região é a margem do projeto.",
  },
];

const FICHA = [
  { item: "Localização", valor: "Bairro Morretes, Camboriú — SC" },
  { item: "Acesso", valor: "Rua Paulo Dallago, a partir da Av. José Francisco Bernardes" },
  { item: "Matrícula", valor: `${AREA.matricula} — Registro de Imóveis da Comarca de Camboriú` },
  { item: "Área registrada", valor: `${AREA.areaMatricula} m²` },
  { item: "Área total utilizável", valor: `${AREA.areaUtilizavel} m² (levantamento de setembro/2024)` },
  { item: "Formato", valor: `Faixa contínua de ${AREA.extensao} m de extensão por ${AREA.larguraMedia} m de largura média` },
  { item: "Medidas da planta", valor: "Trecho principal de 660,00 m, seguido de 105,86 m e 104,07 m até a Rua Paulo Dallago" },
  { item: "Vizinhos", valor: "Condomínio Caledônia a oeste, Rua Paulo Dallago a leste e rua sem denominação oficial no trecho central" },
  { item: "Topografia", valor: "Predominantemente plana, com curso d'água e vegetação na porção central" },
  { item: "Levantamento", valor: "Projeto topográfico georreferenciado de setembro/2024, com 7 pontos, medidas e coordenadas" },
  { item: "Situação no cartório", valor: "Duas partes em processo de acerto de área (451,17 m² e 1.343,66 m²)" },
  { item: "Ponto de atenção", valor: "641,25 m² aparecem na planta como possível sobreposição, a esclarecer na análise" },
  { item: "Faixa de rua", valor: "382,18 m² ocupados por via existente, já descontados do aproveitamento" },
];

const GALERIA = [
  {
    src: `${AREA.img}/hero-skyline.jpg`,
    alt: "Vista aérea da região com o loteamento vizinho em implantação e o skyline de Balneário Camboriú ao fundo",
    legenda: "Divisa norte: quadras abertas e Balneário Camboriú no horizonte",
  },
  {
    src: `${AREA.img}/entorno-rodovia.jpg`,
    alt: "Via asfaltada de acesso à região, com o terreno à esquerda e a cidade ao fundo",
    legenda: "Acesso asfaltado ligando a área ao centro de Camboriú",
  },
  {
    src: `${AREA.img}/entorno-vale.jpg`,
    alt: "Vista aérea do vale onde fica o terreno, cercado por morros",
    legenda: "O vale onde a área está inserida",
  },
  {
    src: `${AREA.img}/entorno-ceu.jpg`,
    alt: "Vista aérea da região em dia claro, com campo aberto e morros ao fundo",
    legenda: "Campo aberto e topografia suave no entorno imediato",
  },
  {
    src: `${AREA.img}/entorno-aereo.jpg`,
    alt: "Vista aérea superior da propriedade vizinha e do campo que segue até o terreno",
    legenda: "Ocupação de baixa densidade no entorno",
  },
  {
    src: `${AREA.img}/entorno-loteamento.jpg`,
    alt: "Vista aérea do loteamento em implantação ao norte, com quadras e ruas já abertas",
    legenda: "Loteamento em implantação na divisa norte",
  },
  {
    src: `${AREA.img}/entorno-terraplanagem.jpg`,
    alt: "Vista aérea mostrando terraplanagem em andamento ao lado do terreno",
    legenda: "Terraplanagem em andamento no lote vizinho",
  },
  {
    src: `${AREA.img}/entorno-estrada.jpg`,
    alt: "Vista aérea da estrada asfaltada que corta a região, com morros ao fundo",
    legenda: "Via asfaltada e relevo do entorno",
  },
  {
    src: `${AREA.img}/entorno-morros.jpg`,
    alt: "Vista aérea ampla da região, com campos, mata e a área terraplanada do loteamento ao fundo",
    legenda: "Campos, mata e a área já terraplanada do loteamento ao fundo",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `Área de ${AREA.areaUtilizavel} m² — Morretes, Camboriú/SC`,
  description: DESCRIPTION,
  url: PAGE_URL,
  image: [`${SITE_URL}${AREA.img}/hero-skyline.jpg`],
  brand: { "@type": "Brand", name: "Kipe Imóveis" },
  offers: {
    "@type": "Offer",
    price: AREA.preco,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
    seller: { "@type": "RealEstateAgent", name: BUSINESS.name, url: SITE_URL },
  },
};

function BotaoWhats({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-[10px] px-8 py-4 text-base font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-br from-accent to-accent-2 text-white hover:shadow-[0_8px_20px_rgba(108,60,233,0.35)]"
      : "border border-black/15 text-ink hover:bg-lavender";

  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default function AreaMorretesCamboriuPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Barra fixa */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.07] bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <Image
            src="/brand/logo-transparent.png"
            alt="Kipe Imóveis"
            width={120}
            height={32}
            className="h-7 w-auto"
            priority
          />
          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="font-display text-base font-semibold leading-none text-ink">
                {AREA.precoCurto}
              </p>
              <p className="mt-1 text-[11px] leading-none text-muted">
                {AREA.permuta} em permuta
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] bg-gradient-to-br from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Falar agora
            </a>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-white">
        {/* Hero — faixa de foto + bloco branco */}
        <section className="pt-[60px]">
          <div className="relative h-[46vh] min-h-[320px] w-full md:h-[58vh]">
            <Image
              src={`${AREA.img}/hero-skyline.jpg`}
              alt="Vista aérea da região em Morretes, Camboriú, com o loteamento vizinho e Balneário Camboriú ao fundo"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <span className="absolute right-5 top-5 rounded-full bg-white/94 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-[0_2px_10px_rgba(17,17,20,0.14)] md:right-8 md:top-8">
              Camboriú · SC
            </span>
          </div>

          <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Área para loteamento
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink md:text-6xl">
                {AREA.areaUtilizavel} m² a 7,8 km de Balneário Camboriú
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Terreno no bairro Morretes, em Camboriú, com matrícula única,
                levantamento topográfico assinado por engenheiro e acesso
                asfaltado. Documentação pronta para quem vai lotear.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BotaoWhats>Falar com a Kipe no WhatsApp</BotaoWhats>
                <a
                  href="#ficha"
                  className="inline-flex items-center justify-center rounded-[10px] border border-black/15 px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-lavender"
                >
                  Ver ficha técnica
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Números */}
        <section className="border-y border-black/[0.07] bg-lavender">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4 md:px-8 md:py-14">
            {NUMEROS.map((n, i) => (
              <Reveal key={n.label} delay={i * 80}>
                <p className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {n.valor}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">{n.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* As marcações */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                As marcações
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Onde exatamente fica o terreno
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
                Três formas de olhar para a mesma área: o contorno sobre a foto
                de satélite, os pontos medidos em campo e a planta assinada pelo
                engenheiro.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {MARCACOES.map((m, i) => (
                <Reveal
                  key={m.titulo}
                  delay={i * 90}
                  className={m.wide ? "md:col-span-2" : ""}
                >
                  <figure className="h-full overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_1px_3px_rgba(17,17,20,0.06)]">
                    <div
                      className="relative bg-lavender"
                      style={{ aspectRatio: m.ratio.replace("/", " / ") }}
                    >
                      <Image
                        src={m.src}
                        alt={m.titulo}
                        fill
                        sizes={
                          m.wide
                            ? "(min-width: 768px) 1100px, 100vw"
                            : "(min-width: 768px) 540px, 100vw"
                        }
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="border-t border-black/[0.06] px-6 py-5">
                      <p className="font-display text-lg font-semibold text-ink">
                        {m.titulo}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {m.texto}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* O terreno */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <Reveal>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                    O terreno
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                    Uma faixa contínua de 765 metros, com matrícula única
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
                    <p>
                      A área está registrada sob a matrícula {AREA.matricula} no
                      Registro de Imóveis da Comarca de Camboriú, com{" "}
                      {AREA.areaMatricula} m² de área registrada e{" "}
                      {AREA.areaUtilizavel} m² de área total utilizável apurada
                      no levantamento de setembro de 2024.
                    </p>
                    <p>
                      O levantamento é georreferenciado: cada canto do terreno
                      tem coordenada, direção e distância registradas. Não é
                      área estimada por imagem de satélite — é perímetro medido
                      em campo por engenheiro responsável.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div>
                <Reveal delay={140}>
                  <div className="space-y-5 text-base leading-relaxed text-ink-soft lg:mt-[7.5rem]">
                    <p>
                      O acesso se dá pela Rua Paulo Dallago, a partir da Av.
                      José Francisco Bernardes. O terreno é predominantemente
                      plano, com curso d&apos;água e vegetação na porção central,
                      e a planta registra divisa com o Condomínio Caledônia na
                      ponta oeste.
                    </p>
                    <p>
                      A planta também mostra o que ainda precisa ser resolvido,
                      e é melhor falar disso agora: duas partes em acerto de
                      área (451,17 m² e 1.343,66 m²), 382,18 m² ocupados por via
                      existente e 641,25 m² apontados como possível
                      sobreposição. Está tudo demarcado e pode ser conferido
                      pelo seu jurídico antes de qualquer proposta.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Por que aqui */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Por que aqui
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                A região não é promessa: já está em obra
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {ARGUMENTOS.map((a, i) => (
                <Reveal key={a.titulo} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-black/[0.07] bg-background p-7">
                    <p className="font-display text-lg font-semibold text-ink">
                      {a.titulo}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {a.texto}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">
                Dados populacionais: Censo 2022 e estimativa IBGE 2025. O
                AeroPark Camboriú é projeto privado anunciado em março de 2026 e
                depende de licenciamento ambiental — não há cronograma de obra
                definido, e nada aqui constitui garantia de implantação.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Rota e acessos */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
              <div className="lg:sticky lg:top-24">
                <Reveal>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                    Rota e acessos
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                    A 5 minutos do centro, a 20 do porto
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <p className="mt-6 text-base leading-relaxed text-ink-soft">
                    O terreno fica no eixo que liga o centro de Camboriú à
                    região do Braço, com acesso asfaltado até a divisa e entrada
                    pela Rua Paulo Dallago. Não é área isolada de interior: é o
                    cinturão onde a cidade está avançando agora.
                  </p>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-8 rounded-2xl border border-black/[0.07] bg-white p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">
                      Coordenadas do centro do terreno
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-ink">
                      27°03&apos;01&quot;S · 48°40&apos;35&quot;W
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=-27.0504,-48.6764"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2 hover:underline"
                    >
                      Abrir no Google Maps
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={120}>
                <ul className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
                  {ROTAS.map((r) => (
                    <li
                      key={r.destino}
                      className="flex items-baseline justify-between gap-6 py-4"
                    >
                      <div>
                        <p className="font-display text-base font-semibold text-ink">
                          {r.destino}
                        </p>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          {r.nota}
                        </p>
                      </div>
                      <p className="shrink-0 font-display text-lg font-semibold text-accent-2">
                        {r.km}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-muted">
                  Distâncias em linha reta a partir do centro do terreno,
                  calculadas sobre as coordenadas do levantamento. O percurso
                  por via é maior e varia conforme a rota escolhida.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Valorização */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Valorização
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Os números que sustentam a conta
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {VALORIZACAO.map((v, i) => (
                <Reveal key={v.titulo} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-black/[0.07] bg-background p-7 transition-shadow hover:shadow-[0_12px_32px_rgba(108,60,233,0.14)]">
                    <p className="font-display text-4xl font-semibold tracking-tight text-accent-2">
                      {v.numero}
                    </p>
                    <p className="mt-4 font-display text-base font-semibold text-ink">
                      {v.titulo}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {v.texto}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">
                Fontes: Censo IBGE 2022, estimativa populacional IBGE 2025 e
                Índice FipeZap de venda residencial (abril de 2026). O índice
                FipeZap mede imóveis residenciais prontos, não terrenos, e serve
                aqui como referência do patamar de preço da região — desempenho
                passado não garante valorização futura.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Galeria */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                O entorno
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Como é a região hoje
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {GALERIA.map((g, i) => (
                <Reveal
                  key={g.src}
                  delay={i * 70}
                  className={i === 0 ? "md:col-span-2" : ""}
                >
                  <figure className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
                    <div className={`relative ${i === 0 ? "aspect-[16/7]" : "aspect-[16/9]"}`}>
                      <Image
                        src={g.src}
                        alt={g.alt}
                        fill
                        sizes={
                          i === 0
                            ? "(min-width: 768px) 1100px, 100vw"
                            : "(min-width: 768px) 540px, 100vw"
                        }
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="px-5 py-4 text-sm leading-snug text-muted">
                      {g.legenda}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ficha técnica */}
        <section id="ficha" className="scroll-mt-20 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Ficha técnica
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Tudo o que está documentado
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <dl className="mt-10 divide-y divide-black/[0.07] border-y border-black/[0.07]">
                {FICHA.map((f) => (
                  <div
                    key={f.item}
                    className="grid gap-1 py-4 sm:grid-cols-[230px_1fr] sm:gap-8"
                  >
                    <dt className="text-sm font-semibold text-ink">{f.item}</dt>
                    <dd className="text-sm leading-relaxed text-ink-soft">
                      {f.valor}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                A planta em alta resolução, o memorial com as coordenadas de
                cada ponto e a certidão atualizada da matrícula são enviados sob
                solicitação.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Condições comerciais */}
        <section className="bg-lavender py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Condições
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Valor e forma de pagamento
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Reveal delay={80}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-[0_1px_3px_rgba(17,17,20,0.06)]">
                  <p className="text-sm text-muted">Valor do terreno</p>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                    {AREA.precoCurto}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    Equivalente a {AREA.precoM2} sobre a área total utilizável.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-[0_1px_3px_rgba(17,17,20,0.06)]">
                  <p className="text-sm text-muted">Permuta</p>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                    Até 50%
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    O proprietário aceita estudar até metade do valor em
                    permuta. Formato e garantias são definidos caso a caso.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-[0_1px_3px_rgba(17,17,20,0.06)]">
                  <p className="text-sm text-muted">Documentação</p>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                    Disponível
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    Matrícula, planta topográfica e memorial de coordenadas
                    liberados para análise antes da proposta.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Quer analisar a documentação?
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                Matrícula, planta topográfica e memorial de coordenadas no
                WhatsApp, sem formulário e sem intermediário. Visita à área
                agendada direto com a Kipe.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <div className="mt-9 flex justify-center">
                <BotaoWhats>Falar com a Kipe no WhatsApp</BotaoWhats>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-black/[0.07] bg-background py-10 pb-24 sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
          <Image
            src="/brand/logo-transparent.png"
            alt="Kipe Imóveis"
            width={120}
            height={32}
            className="h-7 w-auto"
          />
          <p className="max-w-xl text-xs leading-relaxed text-muted">
            Informações e medidas conforme levantamento topográfico de setembro
            de 2024 e matrícula {AREA.matricula}. Valores e condições sujeitos a
            alteração sem aviso prévio. Este material não constitui oferta
            vinculante.
          </p>
        </div>
      </footer>

      {/* Barra fixa mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-5 py-3 backdrop-blur-md sm:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-base font-semibold leading-none text-ink">
              {AREA.precoCurto}
            </p>
            <p className="mt-1 text-[11px] leading-none text-muted">
              {AREA.permuta} em permuta
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] bg-gradient-to-br from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Falar agora
          </a>
        </div>
      </div>
    </>
  );
}
