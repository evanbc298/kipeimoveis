import { WHATSAPP_NUMBER } from "@/lib/site";

const MESSAGE = encodeURIComponent(
  "Olá! Vi o site da Kipe Imóveis e quero saber mais sobre um imóvel em Balneário Camboriú."
);

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_4px_16px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30 group-hover:opacity-0" />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="relative">
        <path
          d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.87 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.85 1h.01A7.94 7.94 0 0 0 20 12.06a7.9 7.9 0 0 0-2.4-5.74Zm-5.55 12.2h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.6 6.6 0 1 1 5.6 3.09Zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.62.77-.11.13-.23.14-.42.05-.2-.1-.83-.31-1.58-.98a5.9 5.9 0 0 1-1.1-1.37c-.11-.2 0-.3.09-.4.1-.1.2-.24.3-.36.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.37c-.13 0-.34.05-.52.25-.18.2-.68.66-.68 1.62 0 .95.7 1.87.8 2 .1.13 1.37 2.1 3.33 2.94.46.2.83.32 1.11.4.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.09-.18-.14-.38-.24Z"
          fill="white"
        />
      </svg>
    </a>
  );
}
