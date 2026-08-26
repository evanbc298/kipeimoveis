// Lê dados/dwv-hotsite-lote2.json (título + url + preço, preço vem manual
// porque a página "hotsite" do DWV não expõe preço/specs de unidade) e
// extrai dados estruturados de cada página (endereço com bairro, fotos,
// comodidades). NÃO usa o campo real_estate_broker nem nada de rodapé —
// só dados do empreendimento em si. Grava preview em
// dados/dwv-hotsite-preview.json pra revisão antes de entrar no site.
//
// Uso: node scripts/importar-dwv-hotsite.js

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const INPUT_FILE = path.join(ROOT, "dados", "dwv-hotsite-lote2.json");
const OUTPUT_FILE = path.join(ROOT, "dados", "dwv-hotsite-preview.json");

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

function formatBRL(value) {
  const n = Number(value);
  if (!n) return null;
  return n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

function parseEndereco(enderecoBruto) {
  if (!enderecoBruto) return { rua: null, bairro: null, cidade: null };
  const linhas = enderecoBruto.split("\n").map((l) => l.trim()).filter(Boolean);
  const rua = linhas[0] || null;
  const segundaLinha = linhas[1] || "";
  const [bairro, cidadeUf] = segundaLinha.split(",").map((s) => s.trim());
  return { rua, bairro: bairro || null, cidade: cidadeUf || null };
}

function flattenAmenidades(descricao) {
  if (!Array.isArray(descricao)) return [];
  const items = [];
  for (const bloco of descricao) {
    for (const entry of bloco.items || []) {
      if (entry.item && !items.includes(entry.item)) items.push(entry.item);
    }
  }
  return items;
}

async function fetchHotsite(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const match = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s
  );
  if (!match) throw new Error("__NEXT_DATA__ não encontrado na página");

  const json = JSON.parse(match[1]);
  const d = json.props?.pageProps?.response?.data;
  if (!d) throw new Error("campo data ausente no __NEXT_DATA__");

  const endereco = parseEndereco(d.address);
  const galeria = (d.gallery || [])
    .map((g) => g.sizes?.large || g.sizes?.medium)
    .filter(Boolean);

  return {
    empreendimento: (d.title || "").trim() + (d.subtitle && d.percentage_work === undefined ? ` ${d.subtitle}` : ""),
    endereco,
    situacao: d.percentage_work === 100 ? "Pronto para morar" : "Em construção",
    percentualObra: d.percentage_work ?? null,
    amenidades: flattenAmenidades(d.descricao).slice(0, 15),
    images: galeria.slice(0, 12),
    cover: d.cover?.url || null,
  };
}

async function main() {
  const entradas = JSON.parse(fs.readFileSync(INPUT_FILE, "utf-8"));
  console.log(`Processando ${entradas.length} hotsites do DWV...\n`);

  const results = [];
  for (const entrada of entradas) {
    try {
      const dados = await fetchHotsite(entrada.url);
      const item = {
        titulo: entrada.titulo,
        sourceUrl: entrada.url,
        endereco: dados.endereco,
        situacao: dados.situacao,
        precoAPartirDe: entrada.precoTexto ? formatBRL(entrada.precoTexto) : null,
        amenidades: dados.amenidades,
        images: dados.images.length ? dados.images : (dados.cover ? [dados.cover] : []),
      };
      results.push(item);
      console.log(
        `OK  ${item.titulo} — ${item.endereco.bairro || "bairro?"} — ${item.precoAPartirDe || "sem preço"} — ${item.images.length} fotos`
      );
    } catch (err) {
      console.log(`FALHOU  ${entrada.titulo} (${entrada.url}) — ${err.message}`);
    }
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\nPreview salvo em ${path.relative(ROOT, OUTPUT_FILE)} (${results.length}/${entradas.length} ok)`);
}

main();
