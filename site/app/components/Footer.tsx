import Image from "next/image";
import { WHATSAPP_NUMBER, BUSINESS } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark text-white/70">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/icon-white.png"
                alt="Kipe Imóveis"
                width={32}
                height={28}
                className="h-7 w-auto"
              />
              <span className="font-display text-base font-semibold text-white">
                KIPE IMÓVEIS
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A sua imobiliária inteligente em Balneário Camboriú. Site
              próprio, SEO de bairro e atendimento automatizado — sem
              enrolação, sem intermediário travando o processo.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Navegue
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="/imoveis" className="hover:text-white">Imóveis</a></li>
              <li><a href="/bairros" className="hover:text-white">Bairros</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/sobre" className="hover:text-white">Sobre</a></li>
              <li><a href="/vender-meu-imovel" className="hover:text-white">Anunciar imóvel</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Fale com a gente
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Balneário Camboriú, SC</li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>contato@kipeimoveis.com.br</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Redes
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Kipe Imóveis. Todos os direitos reservados.</p>
          <p>CRECI-SC {BUSINESS.creci}</p>
        </div>
      </div>
    </footer>
  );
}
