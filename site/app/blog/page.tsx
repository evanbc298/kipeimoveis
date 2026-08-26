import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFab from "../components/WhatsAppFab";
import Reveal from "../components/Reveal";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Kipe Imóveis",
  description:
    "Conteúdo pra ajudar você a comprar imóvel em Balneário Camboriú com mais segurança: documentação, financiamento e bairros.",
};

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden gradient-hero dotted-bg-dark">
          <div className="relative mx-auto max-w-4xl px-6 pt-40 pb-20 text-center md:px-8 md:pt-52 md:pb-24">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                Blog
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-white md:text-5xl">
                Conhecimento que valoriza seu investimento
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                Documentação, financiamento e bairros de Balneário Camboriú,
                explicados sem economês.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {BLOG_POSTS.filter((post) => !post.draft).map((post, i) => (
                <Reveal key={post.slug} delay={i * 90}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-full rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_3px_rgba(17,17,20,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(108,60,233,0.14)]"
                  >
                    <span className="inline-flex items-center rounded-full bg-lavender px-3 py-1 text-xs font-medium text-accent-2">
                      {post.category}
                    </span>
                    <p className="mt-4 font-display text-lg font-semibold text-ink">
                      {post.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-muted">
                      {formatDate(post.date)} · {post.readTime} de leitura
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
