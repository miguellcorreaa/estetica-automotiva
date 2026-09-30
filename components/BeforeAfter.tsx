"use client";
import Image from "next/image";
import { useState } from "react";

function Layer({ src, label, tone }: { src: string; label: string; tone: string }) {
  return src ? (
    <Image src={src} alt={label} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" loading="lazy" />
  ) : (
    <div className={`absolute inset-0 ${tone}`} />
  );
}

export default function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-lg border border-white/10">
      <div className="absolute inset-0"><Layer src={after} label="Depois" tone="bg-gradient-to-br from-steel to-graphite" /></div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Layer src={before} label="Antes" tone="bg-gradient-to-br from-stone-700 to-stone-900" />
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-xs">Antes</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-black/60 px-2 py-1 text-xs">Depois</span>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent" style={{ left: `${pos}%` }} />
      <input
        type="range" min={0} max={100} value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparar antes e depois"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
