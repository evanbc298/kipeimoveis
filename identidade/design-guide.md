# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

---

## Cores

> **Atualizado com base na logo real entregue em 2026-08-16** (`identidade/logo.jpeg` +
> exploração de cores em `identidade/logo-paleta-exploracao.jpeg` e
> `identidade/logo-banner-social.jpeg`). Isso substitui a paleta "quiet luxury"
> navy/dourado sugerida nos guias genéricos — a marca real é mais tech/inteligente
> que old-money, e o site deve refletir isso: sexy, convidativo, não frio.

- **Fundo principal:** #FFFFFF / #FAFAFA (branco, levemente pontilhado como no logo) — dark: #0B0A14

- **Cor de destaque / CTA:** #6C3CE9 (violeta elétrico) — hover/gradiente: #4527B0

- **Texto principal:** #111114 (quase preto, tom da marca) — dark mode: #F5F5F7

- **Fundo alternativo / cards:** #F6F5FA (lavanda muito clara) — dark: #17152A

- **Cor proibida:** dourado/navy da paleta antiga (não é mais a marca), cores fora da família violeta/preto/branco

Paleta completa:
- Primary (ink): #111114 — texto e o ícone da marca (barras + "K")
- Accent (violeta): gradiente #6C3CE9 → #4527B0 — CTAs, destaques, hero
- Secondary: #F6F5FA (lavanda clara, cards), #17152A (fundo escuro/seções), #8B7CF6 (violeta claro, hover em fundo escuro)
- Semânticas: #059669 (sucesso/WhatsApp), #DC2626 (erro), #F59E0B (alerta), #6B7280 (texto secundário)
- WhatsApp FAB: #25D366

---

## Tipografia

- **Títulos e destaques:** Space Grotesk (geométrica, moderna, ecoa o ícone de barras da marca) — pesos 500/600/700

- **Corpo, subtítulos e botões:** Inter (sans-serif, limpo, legível) — pesos 400/500/600

- **Peso do título:** 600-700 (H1 hero grande e confiante, não sussurrado)

- **Preços e números:** Space Grotesk, peso 500 — mesma família dos títulos, reforça o lado "inteligente/dados" da marca

---

## Estilo geral

**"Inteligente e convidativo"** — não é luxo old-money sussurrado, é tech confiável com calor humano. Referências: produtos de dados modernos (Linear, Notion) cruzados com fotografia imobiliária de alto padrão. Fundo claro pontilhado (como no logo) + blocos de gradiente violeta pra criar profundidade sem pesar. Cantos mais arredondados que o padrão "luxo é quadrado" — o objetivo é parecer acessível e sexy, não intimidante. Movimento com propósito: hover suave, glow violeta sutil, nada de rígido. Mobile-first.

---

## Elementos-chave

- Bordas: 1px solid #E9E7F2 (inputs), sutis
- Border-radius dos cards: 16px · botões e inputs: 10px · badges: 8px · FAB/ícone: 20% (squircle, como no badge do banner)
- Botões: padding 16px 32px, font-weight 600. Primary = gradiente violeta com texto branco, secondary = ghost outline preto, WhatsApp verde circular fixo
- Sombras/glow: card padrão `0 1px 3px rgba(17,17,20,0.06)` · card hover `0 12px 32px rgba(108,60,233,0.16)` (glow violeta) · botão hover `0 8px 20px rgba(108,60,233,0.35)`

---

## O que NUNCA fazer

- Emojis ou gírias em qualquer peça (site, WhatsApp, email) — ver `_memoria/preferencias.md`
- Voltar pro dourado/navy/serifada da paleta antiga — foi substituída pela marca real
- Cards ou botões quadrados/duros — a marca pede acolhimento, não frieza
- Interface competindo com a foto do imóvel — foto sempre em primeiro lugar, o violeta é tempero, não protagonista

---

## Logo

- **Arquivo:** `identidade/logo.jpeg` (marca principal, preto sobre branco pontilhado, com tagline "a sua imobiliária inteligente")
- **Exploração de cores:** `identidade/logo-paleta-exploracao.jpeg` — variações testadas (azul céu, navy, violeta, cinza claro, wordmark violeta/preto sobre branco)
- **Aplicação em banner:** `identidade/logo-banner-social.jpeg` — referência de como o ícone fica sobre gradiente violeta com badge squircle
- **Versão pra fundo escuro:** *(pendente — pedir versão branca do ícone se for usar muito em fundo escuro)*
- **Onde usar:** header do site, slide final do carrossel (CTA), header de propostas, favicon (só o ícone das barras+K funciona sozinho)
- **Tamanho sugerido:** largura entre 120-200px nos HTMLs; ícone isolado a partir de 24px (favicon/app icon)

---

## Observações adicionais

Sistema de design completo do guia genérico (componentes, animações, escalas responsivas) em `dados/referencias/guia-visual-imobiliaria-bc.md` — ainda válido pra estrutura/layout/animações, mas a **paleta de cor e tipografia dele foram substituídas** pela seção acima, que reflete a marca real da Kipe Imóveis.
