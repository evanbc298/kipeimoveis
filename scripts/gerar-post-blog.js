// Gera um post de blog automaticamente via OmniRoute (endpoint local
// OpenAI-compatible), a partir do próximo tema pendente em
// marketing/seo/05-estrategia-conteudo.md. Escreve como rascunho
// (draft: true) em site/lib/blog.ts — não publica sozinho.
//
// Pré-requisito: OmniRoute rodando (`omniroute`) com um provedor conectado.
// Uso: node scripts/gerar-post-blog.js

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const TEMAS_FILE = path.join(ROOT, "marketing", "seo", "05-estrategia-conteudo.md");
const BLOG_FILE = path.join(ROOT, "site", "lib", "blog.ts");

const OMNIROUTE_URL = "http://localhost:20128/v1/chat/completions";
const MODEL = "gemini/gemini-2.5-flash-lite";

function slugify(title) {
  const slug = title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  if (slug.length <= 60) return slug;
  return slug.slice(0, 60).replace(/-[^-]*$/, "");
}

function proximoTema() {
  const linhas = fs.readFileSync(TEMAS_FILE, "utf-8").split("\n");
  for (let i = 0; i < linhas.length; i++) {
    const linha = linhas[i];
    const m = linha.match(/^\d+\.\s+(.+?)\s+\(([^)]+)\)\s*$/);
    if (!m) continue;
    if (/já publicado|rascunho gerado/i.test(linha)) continue;
    return { indice: i, titulo: m[1].trim(), categoria: m[2].trim() };
  }
  return null;
}

function marcarComoGerado(indice, slug) {
  const linhas = fs.readFileSync(TEMAS_FILE, "utf-8").split("\n");
  linhas[indice] = `${linhas[indice]} — **rascunho gerado em ${new Date().toISOString().slice(0, 10)}** (\`${slug}\`)`;
  fs.writeFileSync(TEMAS_FILE, linhas.join("\n"), "utf-8");
}

async function chamarOmniRoute(prompt) {
  const res = await fetch(OMNIROUTE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      stream: true,
      messages: [
        {
          role: "system",
          content:
            "Você escreve conteúdo para o blog da Kipe Imóveis, imobiliária de alto padrão em Balneário Camboriú/SC. " +
            "Tom: direto, sem enrolação, sem gírias, sem emojis, sem jargão de guru (nada de 'alavancar', 'sinergia', 'vamos juntos'). " +
            "Frases curtas, parágrafos de 2-4 linhas, foco no benefício prático pro leitor. " +
            "Responda APENAS com um JSON válido, sem markdown, sem texto fora do JSON.",
        },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!res.ok || !res.body) {
    throw new Error(`OmniRoute HTTP ${res.status}: ${await res.text()}`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let full = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop();
    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      const payload = line.slice(6).trim();
      if (payload === "[DONE]") continue;
      try {
        const json = JSON.parse(payload);
        const delta = json.choices?.[0]?.delta?.content;
        if (delta) full += delta;
      } catch {}
    }
  }

  return full;
}

function extrairJson(texto) {
  const semFences = texto.replace(/```json|```/g, "").trim();
  return JSON.parse(semFences);
}

function estimarLeitura(body) {
  const palavras = body
    .map((b) => (b.type === "ul" ? b.items.join(" ") : b.text))
    .join(" ")
    .split(/\s+/).length;
  return `${Math.max(1, Math.round(palavras / 200))} min`;
}

function inserirNoBlogTs(post) {
  const conteudo = fs.readFileSync(BLOG_FILE, "utf-8");
  const marcador = "export const BLOG_POSTS: BlogPost[] = [";
  const idx = conteudo.indexOf(marcador);
  if (idx === -1) throw new Error("Não achei o array BLOG_POSTS em blog.ts");

  const objeto = JSON.stringify(post, null, 2)
    .split("\n")
    .map((l, i) => (i === 0 ? l : "  " + l))
    .join("\n");

  const insercao = `${marcador}\n  ${objeto},`;
  const novoConteudo = conteudo.replace(marcador, insercao);
  fs.writeFileSync(BLOG_FILE, novoConteudo, "utf-8");
}

async function aguardarOmniRoute(tentativas = 30, intervaloMs = 2000) {
  for (let i = 0; i < tentativas; i++) {
    try {
      const res = await fetch("http://localhost:20128/api/monitoring/health");
      if (res.ok) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, intervaloMs));
  }
  return false;
}

async function main() {
  console.log("Verificando OmniRoute...");
  const pronto = await aguardarOmniRoute();
  if (!pronto) {
    throw new Error(
      "OmniRoute não respondeu em http://localhost:20128 após 1 minuto. Confirme que o serviço está rodando."
    );
  }

  const tema = proximoTema();
  if (!tema) {
    console.log("Nenhum tema pendente em", path.relative(ROOT, TEMAS_FILE));
    return;
  }

  console.log(`Tema escolhido: "${tema.titulo}" (${tema.categoria})`);
  console.log("Chamando OmniRoute...");

  const prompt = `Escreva um artigo de blog sobre: "${tema.titulo}".
Categoria: ${tema.categoria}.
Público: compradores de imóvel de alto padrão em Balneário Camboriú/SC (investidor de fora do estado, família de alta renda, aposentado buscando segunda residência).

Estrutura obrigatória:
1. Lead (1-2 parágrafos) com um problema ou dúvida concreta do público
2. Um H2 explicando o "o quê e por quê" do tema
3. Um H2 prático ("como fazer" ou "o que olhar")
4. Um H2 conectando com a Kipe Imóveis de forma natural (sem propaganda forçada)
5. Um parágrafo final de fechamento (sem CTA explícito, isso já existe no site)

600-900 palavras no total. Responda com este JSON exato (sem texto fora dele):
{
  "title": "título do artigo, direto, com a palavra-chave principal",
  "excerpt": "resumo de 150-160 caracteres pro card de listagem",
  "body": [
    {"type": "p", "text": "..."},
    {"type": "h2", "text": "..."},
    {"type": "p", "text": "..."},
    {"type": "ul", "items": ["...", "..."]}
  ]
}
Use os tipos "p" (parágrafo), "h2" (subtítulo) e "ul" (lista) conforme fizer sentido — não precisa seguir a ordem exata do exemplo, só a estrutura de conteúdo pedida acima.`;

  const resposta = await chamarOmniRoute(prompt);
  const gerado = extrairJson(resposta);

  const slug = slugify(gerado.title);
  const post = {
    slug,
    title: gerado.title,
    excerpt: gerado.excerpt,
    category: tema.categoria,
    date: new Date().toISOString().slice(0, 10),
    readTime: estimarLeitura(gerado.body),
    author: "Equipe Kipe Imóveis",
    body: gerado.body,
    draft: true,
  };

  inserirNoBlogTs(post);
  marcarComoGerado(tema.indice, slug);

  console.log(`\nRascunho criado: ${post.title}`);
  console.log(`Slug: ${post.slug}`);
  console.log(`Categoria: ${post.category} — Leitura: ${post.readTime}`);
  console.log(`Blocos: ${post.body.length}`);
  console.log(`\nAdicionado em site/lib/blog.ts com draft: true — revise antes de publicar.`);
}

main().catch((err) => {
  console.error("Erro:", err.message);
  process.exit(1);
});
