// TODO: trocar pelo domínio real assim que estiver registrado/publicado.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kipeimoveis.com.br";

export const SITE_NAME = "Kipe Imóveis";

// TODO: trocar pelo número real de WhatsApp da Kipe Imóveis (formato: 55 + DDD + número, só dígitos).
export const WHATSAPP_NUMBER = "5547900000000";

export const BUSINESS = {
  name: SITE_NAME,
  description:
    "Imobiliária digital de alto padrão em Balneário Camboriú, SC. Site próprio, SEO de bairro e atendimento automatizado.",
  areaServed: "Balneário Camboriú",
  addressRegion: "SC",
  addressCountry: "BR",
  // TODO: preencher com telefone e CRECI reais.
  telephone: "+55 47 90000-0000",
  creci: "[preencher número]",
};
