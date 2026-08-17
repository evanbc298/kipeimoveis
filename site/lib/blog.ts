export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: string;
  author: string;
  body: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "documentos-para-comprar-imovel-balneario-camboriu",
    title: "Documentos para comprar imóvel em Balneário Camboriú: o checklist",
    excerpt:
      "A lista completa do que pedir e apresentar antes de fechar negócio, pra evitar surpresa no cartório.",
    category: "Documentação",
    date: "2026-08-16",
    readTime: "6 min",
    author: "Equipe Kipe Imóveis",
    body: [
      {
        type: "p",
        text: "Comprar imóvel envolve papelada — mas grande parte da demora e do estresse vem de descobrir um documento faltando só na hora de assinar. Esse checklist ajuda a chegar preparado, seja qual for o bairro de Balneário Camboriú.",
      },
      {
        type: "h2",
        text: "Documentos do comprador",
      },
      {
        type: "ul",
        items: [
          "RG e CPF (ou CNH) atualizados",
          "Comprovante de estado civil (certidão de nascimento, casamento ou divórcio)",
          "Comprovante de renda dos últimos meses, se for financiar",
          "Comprovante de residência atualizado",
          "Se for pessoa jurídica: contrato social e documentos da empresa",
        ],
      },
      {
        type: "h2",
        text: "Documentos do imóvel",
      },
      {
        type: "ul",
        items: [
          "Matrícula atualizada do imóvel (emitida em até 30 dias)",
          "Certidão negativa de ônus reais",
          "Certidão de quitação de IPTU",
          "Declaração de quitação de condomínio, se aplicável",
          "Habite-se, no caso de imóvel novo ou reformado",
        ],
      },
      {
        type: "h2",
        text: "Certidões do vendedor",
      },
      {
        type: "ul",
        items: [
          "Certidões negativas de débitos federais, estaduais e municipais",
          "Certidão de ações cíveis e execuções fiscais",
          "Certidão trabalhista, se o vendedor for pessoa jurídica",
        ],
      },
      {
        type: "p",
        text: "Nem todo negócio exige todos esses documentos — depende se é à vista ou financiado, e se o vendedor é pessoa física ou jurídica. O cartório e, se houver, o banco financiador vão apontar exatamente o que falta antes da escritura. Ainda assim, chegar com essa lista revisada evita idas e vindas desnecessárias.",
      },
    ],
  },
  {
    slug: "como-funciona-financiamento-imobiliario",
    title: "Financiamento imobiliário: como funciona na prática",
    excerpt:
      "Entrada, aprovação de crédito, FGTS e as diferenças entre SFH e SFI — o passo a passo sem economês.",
    category: "Financiamento",
    date: "2026-08-16",
    readTime: "7 min",
    author: "Equipe Kipe Imóveis",
    body: [
      {
        type: "p",
        text: "Financiar um imóvel em Balneário Camboriú segue as mesmas regras gerais do resto do Brasil, mas o valor mais alto do metro quadrado por aqui faz o planejamento de entrada e renda pesar ainda mais na aprovação. Este é o passo a passo básico.",
      },
      {
        type: "h2",
        text: "1. Simulação e pré-aprovação",
      },
      {
        type: "p",
        text: "Antes de visitar imóveis, vale simular o financiamento com um ou mais bancos. A simulação considera renda, idade, valor de entrada disponível e prazo desejado, e retorna uma estimativa de parcela e do valor máximo financiável.",
      },
      {
        type: "h2",
        text: "2. SFH x SFI",
      },
      {
        type: "ul",
        items: [
          "SFH (Sistema Financeiro de Habitação): usado pra imóveis dentro de um teto de valor definido por regulação, normalmente com taxas mais competitivas e possibilidade de uso do FGTS",
          "SFI (Sistema de Financiamento Imobiliário): usado pra imóveis acima do teto do SFH — comum em imóveis de alto padrão — com regras mais flexíveis de banco pra banco",
        ],
      },
      {
        type: "h2",
        text: "3. Entrada e FGTS",
      },
      {
        type: "p",
        text: "A entrada mínima varia por banco e por sistema de financiamento. Quem tem FGTS e atende aos critérios (tempo de contribuição, não possuir outro imóvel financiado pelo sistema, entre outros) pode usar o saldo pra compor parte da entrada ou amortizar o saldo devedor.",
      },
      {
        type: "h2",
        text: "4. Análise de crédito e avaliação do imóvel",
      },
      {
        type: "p",
        text: "Com a documentação em mãos, o banco analisa a capacidade de pagamento do comprador e envia um engenheiro pra avaliar o imóvel — a avaliação confirma se o valor negociado está dentro do praticado na região.",
      },
      {
        type: "h2",
        text: "5. Assinatura e registro",
      },
      {
        type: "p",
        text: "Aprovado o crédito, é hora da escritura (ou contrato particular com força de escritura, no caso de alguns financiamentos) e do registro em cartório. Só depois do registro o imóvel está formalmente no nome do comprador.",
      },
      {
        type: "p",
        text: "Cada banco tem suas particularidades de taxa, prazo e documentação — vale simular em mais de uma instituição antes de decidir. Se quiser, a Kipe ajuda a organizar essa etapa junto com a visita aos imóveis.",
      },
    ],
  },
];
