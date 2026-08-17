"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Imóveis", href: "/imoveis" },
  { label: "Bairros", href: "/bairros" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(17,17,20,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-20 items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={solid ? "/brand/icon-transparent.png" : "/brand/icon-white.png"}
              alt="Kipe Imóveis"
              width={34}
              height={30}
              className="h-8 w-auto"
              priority
            />
            <span
              className={`font-display text-lg font-semibold tracking-tight ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              KIPE IMÓVEIS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  solid
                    ? "text-ink-soft hover:text-ink"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contato"
              className={`inline-flex items-center rounded-[10px] px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                solid
                  ? "gradient-accent text-white shadow-[0_8px_20px_rgba(108,60,233,0.28)]"
                  : "bg-white text-ink"
              }`}
            >
              Falar com a Kipe
            </a>
          </div>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden flex h-10 w-10 items-center justify-center rounded-full ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-soft"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-[10px] gradient-accent text-white px-5 py-3 text-sm font-semibold"
            >
              Falar com a Kipe
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
