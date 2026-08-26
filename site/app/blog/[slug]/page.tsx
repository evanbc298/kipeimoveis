import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFab from "../../components/WhatsAppFab";
import Reveal from "../../components/Reveal";
import JsonLd from "../../components/JsonLd";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.filter((p) => !p.draft).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Kipe Imóveis`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post || post.draft) notFound();

  const outros = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && !p.draft
  ).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden gradient-hero dotted-bg-dark">
          <div className="relative mx-auto max-w-3xl px-6 pt-40 pb-16 md:px-8 md:pt-52 md:pb-20">
            <Reveal>
              <Link
                href="/blog"
                className="text-xs font-medium text-white/60 hover:text-white"
              >
                ← Voltar pro blog
              </Link>
            </Reveal>
            <Reveal delay={60}>
              <span className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                {post.category}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 text-sm text-white/60">
                {post.author} · {formatDate(post.date)} · {post.readTime} de
                leitura
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <Reveal>
              <article>
                {post.body.map((block, i) => {
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={i}
                        className="mt-10 font-display text-xl font-semibold text-ink first:mt-0"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul key={i} className="mt-4 space-y-2">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="mt-4 text-sm leading-relaxed text-ink-soft"
                    >
                      {block.text}
                    </p>
                  );
                })}
              </article>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-14 rounded-2xl gradient-hero dotted-bg-dark p-8 text-center">
                <p className="font-display text-lg font-semibold text-white">
                  Ficou com dúvida sobre o seu caso?
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-[10px] gradient-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(108,60,233,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Falar com a Kipe no WhatsApp
                </a>
              </div>
            </Reveal>

            {outros.length > 0 && (
              <div className="mt-16 border-t border-black/5 pt-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Leia também
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {outros.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="block rounded-2xl border border-black/5 p-5 transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(108,60,233,0.12)]"
                    >
                      <p className="font-display text-sm font-semibold text-ink">
                        {p.title}
                      </p>
                      <p className="mt-2 text-xs text-muted">{p.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
