import type { NextConfig } from "next";

// No GitHub Pages o site é servido em /<nome-do-repositorio>, não na raiz do
// domínio. O workflow de deploy passa NEXT_PUBLIC_BASE_PATH=/kipeimoveis.
// Em desenvolvimento a variável fica vazia e o site roda em "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Gera HTML estático em site/out — é o que o GitHub Pages consegue servir.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  // Cada rota vira uma pasta com index.html, senão /areas/morretes-camboriu
  // dá 404 no Pages.
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    // O otimizador de imagem do Next precisa de servidor; no Pages não existe.
    // O loader próprio serve a imagem direto e resolve o basePath (ver
    // image-loader.ts).
    loader: "custom",
    loaderFile: "./image-loader.ts",
    remotePatterns: [
      { protocol: "https", hostname: "dwvimagesv1.b-cdn.net" },
      { protocol: "https", hostname: "dwvimages.sfo2.digitaloceanspaces.com" },
      { protocol: "https", hostname: "dwvimages.s3.amazonaws.com" },
    ],
  },
};

export default nextConfig;
