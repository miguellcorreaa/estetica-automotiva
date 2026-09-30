import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Clock, Droplets, Gem, Instagram, Lightbulb, MapPin, MessageCircle, ShieldCheck, Sparkles, SprayCan, Star } from "lucide-react";
import Header from "@/components/Header";
import BeforeAfter from "@/components/BeforeAfter";
import { services, site, wa } from "@/lib/site";

const icons: Record<string, LucideIcon> = { Droplets, Sparkles, SprayCan, ShieldCheck, Lightbulb, Gem };
const btn = "inline-flex min-h-12 items-center justify-center rounded px-6 py-3 font-semibold";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden pb-14 pt-28 md:items-center">
          {site.heroImage ? (
            <Image src={site.heroImage} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
          ) : (
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_20%,#2A2D32,#0A0A0B_65%)]" />
          )}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          <div aria-hidden className="absolute -right-24 top-[30%] -z-10 h-px w-[150%] -rotate-12 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <div className="mx-auto w-full max-w-6xl px-5">
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl">
              Seu carro merece um cuidado acima do comum.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              Estética automotiva especializada para devolver brilho, proteção e acabamento ao seu veículo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={wa()} className={`${btn} bg-accent text-ink hover:brightness-110`}>Solicitar orçamento</a>
              <a href="#servicos" className={`${btn} border border-white/30 hover:bg-white/10`}>Ver serviços</a>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
              <span className="inline-flex items-center gap-2">
                <Star size={16} className="fill-accent text-accent" /> {site.rating} no Google
              </span>
              <span>{site.vehicles} veículos atendidos</span>
            </p>
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Nossos serviços</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <article key={s.name} className="flex flex-col rounded-lg border border-white/10 bg-graphite p-5">
                  <Icon className="text-accent" size={26} aria-hidden />
                  <h3 className="mt-4 font-display text-2xl font-semibold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-white/70">{s.desc}</p>
                  <a
                    href={wa(`Olá! Encontrei vocês pelo site e gostaria de solicitar um orçamento de ${s.name}.`)}
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded border border-accent/60 px-4 text-sm font-semibold text-accent hover:bg-accent hover:text-ink"
                  >
                    Solicitar orçamento
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="resultados" className="bg-graphite py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-4xl font-bold md:text-5xl">Resultados que falam por si</h2>
            <div className="mt-10 grid items-start gap-4 md:grid-cols-5">
              <div className="md:col-span-3"><BeforeAfter before={site.before} after={site.after} /></div>
              <div className="grid grid-cols-2 gap-4 md:col-span-2">
                {site.gallery.slice(0, 4).map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-steel">
                    {src && <Image src={src} alt={`Trabalho realizado ${i + 1}`} fill sizes="(min-width: 768px) 20vw, 45vw" className="object-cover" loading="lazy" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="max-w-2xl font-display text-4xl font-bold md:text-6xl">Seu carro merece esse cuidado.</h2>
          <p className="mt-4 text-lg text-white/75">Entre em contato e solicite seu orçamento.</p>
          <a href={wa()} className={`${btn} mt-8 w-full gap-2 bg-accent px-10 py-4 text-lg text-ink hover:brightness-110 sm:w-auto`}>
            <MessageCircle size={22} aria-hidden /> Chamar no WhatsApp
          </a>
          <ul className="mt-10 space-y-3 text-sm text-white/65">
            <li className="flex items-center gap-3"><MapPin size={16} aria-hidden /> {site.address}</li>
            <li className="flex items-center gap-3"><Clock size={16} aria-hidden /> {site.hours}</li>
            <li className="flex items-center gap-3">
              <Instagram size={16} aria-hidden />
              <a href={`https://instagram.com/${site.instagram.replace("@", "")}`} className="hover:text-white">{site.instagram}</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 pb-24 pt-8 text-sm text-white/55">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name} · {site.instagram}</p>
          <p>Desenvolvido por Code Factory</p>
        </div>
      </footer>

      <a
        href={wa()}
        aria-label="Chamar no WhatsApp"
        className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}
