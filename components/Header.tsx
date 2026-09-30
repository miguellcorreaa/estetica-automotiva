"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, wa } from "@/lib/site";

const links = [
  ["Serviços", "#servicos"],
  ["Resultados", "#resultados"],
  ["Contato", "#contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="font-display text-2xl font-bold tracking-wide">{site.name}</a>
        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-white/75 hover:text-white">{label}</a>
          ))}
          <a href={wa()} className="rounded bg-accent px-4 py-2 font-semibold text-ink hover:brightness-110">
            Solicitar orçamento
          </a>
        </nav>
        <button
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Menu mobile" className="flex flex-col gap-1 border-t border-white/10 bg-ink px-5 pb-5 pt-3 md:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-lg">{label}</a>
          ))}
          <a href={wa()} className="mt-2 rounded bg-accent px-4 py-3 text-center font-semibold text-ink">
            Solicitar orçamento
          </a>
        </nav>
      )}
    </header>
  );
}
