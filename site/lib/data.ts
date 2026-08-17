export type Property = {
  slug: string;
  badge: string;
  title: string;
  bairro: string;
  bairroSlug: string;
  price: string;
  specs: string;
  tipo: "Apartamento" | "Cobertura" | "Casa" | "Studio";
  description: string;
};

export const PROPERTIES: Property[] = [
  {
    slug: "apartamento-3-suites-centro",
    badge: "Frente-mar",
    title: "Apartamento 3 Suítes",
    bairro: "Centro",
    bairroSlug: "centro",
    price: "R$ 2.400.000",
    specs: "3 suítes · 2 vagas · 180m²",
    tipo: "Apartamento",
    description:
      "Apartamento frente-mar no Centro de Balneário Camboriú, andar alto, vista panorâmica e acabamento de alto padrão.",
  },
  {
    slug: "cobertura-duplex-barra-sul",
    badge: "Exclusivo",
    title: "Cobertura Duplex",
    bairro: "Barra Sul",
    bairroSlug: "barra-sul",
    price: "R$ 3.800.000",
    specs: "4 suítes · 3 vagas · 280m²",
    tipo: "Cobertura",
    description:
      "Cobertura duplex na Barra Sul com terraço privativo, piscina e vista aberta para o mar.",
  },
  {
    slug: "casa-condominio-pioneiros",
    badge: "Novo",
    title: "Casa em Condomínio",
    bairro: "Pioneiros",
    bairroSlug: "pioneiros",
    price: "R$ 1.900.000",
    specs: "4 suítes · 4 vagas · 350m²",
    tipo: "Casa",
    description:
      "Casa em condomínio fechado nos Pioneiros, projeto recente, área de lazer completa e segurança 24h.",
  },
  {
    slug: "studio-luxo-centro",
    badge: "Oportunidade",
    title: "Studio de Luxo",
    bairro: "Centro",
    bairroSlug: "centro",
    price: "R$ 890.000",
    specs: "1 suíte · 1 vaga · 65m²",
    tipo: "Studio",
    description:
      "Studio compacto e moderno no Centro, ideal para investimento e aluguel de temporada.",
  },
  {
    slug: "apartamento-2-suites-estaleiro",
    badge: "Natureza",
    title: "Apartamento 2 Suítes",
    bairro: "Praia do Estaleiro",
    bairroSlug: "praia-do-estaleiro",
    price: "R$ 1.350.000",
    specs: "2 suítes · 2 vagas · 110m²",
    tipo: "Apartamento",
    description:
      "Apartamento na Praia do Estaleiro, cercado de natureza, a poucos passos da orla.",
  },
  {
    slug: "cobertura-nacoes",
    badge: "Valorização",
    title: "Cobertura Linear",
    bairro: "Nações",
    bairroSlug: "nacoes",
    price: "R$ 1.650.000",
    specs: "3 suítes · 2 vagas · 195m²",
    tipo: "Cobertura",
    description:
      "Cobertura linear no bairro Nações, região em forte valorização nos últimos 12 meses.",
  },
];

export type Bairro = {
  slug: string;
  name: string;
  range: string;
  tag: string;
  big?: boolean;
  intro: string;
};

export const BAIRROS: Bairro[] = [
  {
    slug: "centro",
    name: "Centro",
    range: "R$ 18–35K/m²",
    tag: "Luxo & superluxo",
    big: true,
    intro:
      "O coração de Balneário Camboriú e um dos metros quadrados mais valorizados do Brasil. Concentra os edifícios mais altos da cidade, vida noturna, gastronomia e a orla mais movimentada.",
  },
  {
    slug: "barra-sul",
    name: "Barra Sul",
    range: "R$ 15–28K/m²",
    tag: "Luxo exclusivo",
    intro:
      "Bairro mais recente e exclusivo de BC, com empreendimentos assinados, praia mais tranquila e forte apelo para quem busca privacidade sem abrir mão do alto padrão.",
  },
  {
    slug: "pioneiros",
    name: "Pioneiros",
    range: "R$ 12–20K/m²",
    tag: "Alto padrão familiar",
    intro:
      "Perfil mais residencial e familiar, com condomínios fechados, escolas e comércio de bairro — procurado por quem quer alto padrão com rotina tranquila.",
  },
  {
    slug: "praia-do-estaleiro",
    name: "Praia do Estaleiro",
    range: "R$ 10–18K/m²",
    tag: "Luxo com natureza",
    intro:
      "Entre montanha e mar, mistura natureza preservada com empreendimentos de alto padrão — ideal para quem busca sossego sem se afastar do centro da cidade.",
  },
  {
    slug: "barra-norte",
    name: "Barra Norte",
    range: "R$ 8–15K/m²",
    tag: "Médio-alto padrão",
    intro:
      "Bairro em consolidação, com bom custo-benefício frente aos vizinhos mais valorizados e potencial de valorização nos próximos anos.",
  },
  {
    slug: "nacoes",
    name: "Nações",
    range: "R$ 7–12K/m²",
    tag: "Investimento",
    intro:
      "Um dos bairros com maior potencial de valorização de BC — porta de entrada mais acessível para quem quer investir na cidade.",
  },
];
