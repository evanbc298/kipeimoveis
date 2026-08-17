"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export default function AvaliarImovelForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = data.get("nome");
    const telefone = data.get("telefone");
    const endereco = data.get("endereco");
    const tipo = data.get("tipo");
    const metragem = data.get("metragem");
    const pretensao = data.get("pretensao");
    const valor = data.get("valor");
    const mensagem = data.get("mensagem");

    const texto = [
      "Olá! Quero anunciar meu imóvel com a Kipe Imóveis.",
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Endereço: ${endereco}`,
      `Tipo: ${tipo}`,
      metragem ? `Metragem: ${metragem}m²` : null,
      `Pretensão: ${pretensao}`,
      valor ? `Valor pretendido: ${valor}` : null,
      mensagem ? `Mensagem: ${mensagem}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-accent/20 bg-lavender p-8 text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Abrimos o WhatsApp com seus dados prontos
        </p>
        <p className="mt-2 text-sm text-muted">
          É só confirmar o envio por lá. A gente responde rápido — sem
          enrolação.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-accent-2 hover:text-accent"
        >
          Preencher de novo
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_3px_rgba(17,17,20,0.06)] sm:grid-cols-2 sm:p-8"
    >
      <Field label="Nome" name="nome" required />
      <Field label="Telefone / WhatsApp" name="telefone" type="tel" required />
      <Field label="Endereço do imóvel" name="endereco" required className="sm:col-span-2" />

      <SelectField
        label="Tipo de imóvel"
        name="tipo"
        options={["Apartamento", "Cobertura", "Casa", "Terreno", "Comercial"]}
        required
      />
      <Field label="Metragem (m²)" name="metragem" type="number" />

      <SelectField
        label="Pretensão"
        name="pretensao"
        options={["Venda", "Aluguel", "Temporada"]}
        required
      />
      <Field label="Valor pretendido" name="valor" placeholder="R$" />

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-ink-soft">
          Mensagem (opcional)
        </label>
        <textarea
          name="mensagem"
          rows={3}
          className="w-full rounded-[10px] border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-4 focus:ring-accent/10"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-[10px] gradient-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(108,60,233,0.3)] transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          Enviar para avaliação
        </button>
        <p className="mt-3 text-xs text-muted">
          Ao enviar, abrimos o WhatsApp com seus dados preenchidos — nada é
          enviado sem você confirmar por lá.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-[10px] border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-4 focus:ring-accent/10"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-[10px] border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-4 focus:ring-accent/10"
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
