// Loader de imagem para o export estático.
//
// No GitHub Pages o site vive em /<repositorio>, e o next/image não aplica o
// basePath sozinho quando a otimização está desligada — as fotos acabam
// apontando para a raiz do domínio e dão 404. Este loader devolve o caminho
// já com o prefixo correto, deixando URLs absolutas (o CDN do DWV) intactas.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string }) {
  if (/^https?:\/\//.test(src) || src.startsWith("data:")) return src;
  return `${basePath}${src.startsWith("/") ? "" : "/"}${src}`;
}
