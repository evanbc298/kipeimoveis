# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

---

## Cores

- **Fundo principal:** #FFFFFF (branco puro) — dark mode: #0A1628

- **Cor de destaque / CTA:** #C9A96E (dourado champagne) — hover: #B8985E

- **Texto principal:** #1A1A1A — dark mode: #F5F5F0

- **Fundo alternativo / cards:** #F5F5F0 (off-white) — dark mode: #1A2A42

- **Cor proibida:** cores vibrantes/saturadas fora da paleta (o luxo é contido, não grita). Evitar arredondamento excessivo — "luxo é quadrado"

Paleta completa:
- Primary: #0A1628 (azul marinho — fundo escuro, textos principais)
- Accent: #C9A96E (dourado champagne — CTAs, destaques)
- Secondary: #F5F5F0 (off-white), #1A2A42 (azul marinho claro, hover em fundo escuro), #B8985E (dourado escuro, hover), #E8DCC8 (dourado muito claro, backgrounds sutis)
- Semânticas: #059669 (verde/sucesso/WhatsApp), #DC2626 (vermelho/erro), #F59E0B (laranja/alerta), #6B7280 (cinza/texto secundário)
- WhatsApp FAB: #25D366

---

## Tipografia

- **Títulos e destaques:** Playfair Display (serifada, elegante, editorial) — pesos 400/500/600

- **Corpo, subtítulos e botões:** Inter (sans-serif, limpo, legível) — pesos 400/500/600

- **Peso do título:** 500 (H1 desktop 64px hero / 48px página, H2 36px, H3 28px)

- **Preços e números:** Space Grotesk, peso 500 — transmite precisão/tecnologia

---

## Estilo geral

"Quiet Luxury Digital" — referências: Sotheby's International Realty + Apple + Aesop + Netflix. O site não grita, sussurra exclusividade. Fotografia em primeiro lugar (70% imagem, 30% interface). White space é luxo, não vazio (padding mínimo de seção: 100px desktop / 64px mobile). Movimento sutil e lento (transições 300-600ms, easing cubic-bezier(0.4,0,0.2,1)). Mobile-first — 70%+ dos acessos são celular.

---

## Elementos-chave

- Bordas: 1px solid #E5E5E5 (inputs), sem bordas pesadas
- Border-radius dos cards: 8px · botões e inputs: 4px · badges: 4px · FAB: 50%
- Botões: padding 16px 32px, font-weight 600, letter-spacing 0.5px. Primary dourado, secondary ghost (outline azul marinho), WhatsApp verde circular fixo
- Sombras: card padrão `0 1px 3px rgba(0,0,0,0.08)` · card hover `0 8px 24px rgba(0,0,0,0.12)` · botão hover dourado `0 4px 12px rgba(201,169,110,0.3)`

---

## O que NUNCA fazer

- Emojis ou gírias em qualquer peça (site, WhatsApp, email) — ver `_memoria/preferencias.md`
- Border-radius exagerado (arredondamento demais destoa do "luxo é quadrado")
- Cores fora da paleta ou saturação alta
- Interface competindo com a foto do imóvel — foto sempre em primeiro lugar

---

## Logo

- **Arquivo:** *(ainda não adicionado — colocar em `identidade/logo.png` ou `.svg` quando disponível)*
- **Versão pra fundo escuro:** *(se tiver — ex: identidade/logo-branco.png)*
- **Onde usar:** slide final do carrossel (CTA), header de propostas, slides de apresentação, header do site
- **Tamanho sugerido:** largura entre 120-200px nos HTMLs

---

## Observações adicionais

Sistema de design completo (componentes, animações, escalas responsivas) em `dados/referencias/guia-visual-imobiliaria-bc.md` — consultar antes de criar qualquer peça visual nova (site, carrossel, proposta).
