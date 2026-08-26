// Lê links públicos de "Compartilhar" do DWV (dados/dwv-links.txt), extrai os
// dados estruturados embutidos em cada página (__NEXT_DATA__) e grava um
// preview em dados/dwv-import-preview.json pra revisão antes de entrar no site.
//
// Uso: node scripts/importar-dwv.js

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const LINKS_FILE = path.join(ROOT, "dados", "dwv-links.txt");
const OUTPUT_FILE = path.join(ROOT, "dados", "dwv-import-preview.json");

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

function flattenAmenities(appDescription) {
  const blocks = appDescription?.descricao;
  if (!Array.isArray(blocks)) return [];
  const items = [];
  for (const block of blocks) {
    for (const entry of block.items || []) {
      if (entry.item && !items.includes(entry.item)) items.push(entry.item);
    }
  }
  return items;
}

async function fetchProperty(url) {
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const match = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s
  );
  if (!match) throw new Error("__NEXT_DATA__ não encontrado na página");

  const json = JSON.parse(match[1]);
  const p = json.props?.pageProps?.data?.property;
  if (!p) throw new Error("campo property ausente no __NEXT_DATA__");
  const rd = p.reDevelopment || {};

  const pictures = (rd.files?.pictures || []).filter(Boolean);

  return {
    sourceUrl: url,
    empreendimento: rd.name || null,
    construtora: rd.reDeveloper?.name || null,
    endereco: {
      rua: rd.address?.streetName || null,
      numero: rd.address?.number || null,
      cidade: rd.address?.city?.name || null,
    },
    unidade: p.name || null,
    categoria: p.category || null, // PENTHOUSE, APARTMENT, HOUSE, ...
    price: formatBRL(p.price),
    priceRaw: p.price || null,
    specs: {
      quartos: p.bedrooms || 0,
      suites: p.suites || 0,
      banheiros: p.bathrooms || 0,
      vagas: p.garages || 0,
      areaPrivativa: p.privateArea || null,
      areaTotal: p.totalArea || null,
    },
    previsaoEntrega: rd.builtDate || p.deliveryDate || null,
    amenidades: flattenAmenities(rd.appDescription).slice(0, 15),
    images: pictures.slice(0, 12),
  };
}

async function main() {
  const raw = fs.readFileSync(LINKS_FILE, "utf-8");
  const links = raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));

  console.log(`Processando ${links.length} links do DWV...\n`);

  const results = [];
  for (const url of links) {
    try {
      const entry = await fetchProperty(url);
      results.push(entry);
      console.log(
        `OK  ${entry.empreendimento} (${entry.construtora}) — ${entry.price || "sem preço"} — ${entry.images.length} fotos`
      );
    } catch (err) {
      console.log(`FALHOU  ${url} — ${err.message}`);
    }
  }

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\nPreview salvo em ${path.relative(ROOT, OUTPUT_FILE)} (${results.length}/${links.length} ok)`);
}

main();
