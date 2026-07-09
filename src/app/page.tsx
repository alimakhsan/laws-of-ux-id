"use client";

import { useState } from "react";
import Link from "next/link";
import { laws, type Law } from "@/lib/laws-data";
import { LawThumbnail } from "@/components/law-thumbnail";

const filters = [
  { key: "all", label: "Semua" },
  { key: "theory", label: "Teori" },
  { key: "psychology", label: "Psikologi" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

function LawCard({ law, index }: { law: Law; index: number }) {
  return (
    <Link
      href={`/${law.slug}`}
      className="animate-enter-scale group flex flex-col overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06),0_2px_4px_0_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_4px_12px_-2px_rgba(0,0,0,0.12),0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_1px_2px_-1px_rgba(255,255,255,0.04)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_12px_-2px_rgba(255,255,255,0.06),0_8px_24px_-4px_rgba(255,255,255,0.03)]"
      style={{ "--stagger": Math.min(index, 8) } as React.CSSProperties}
    >
      <LawThumbnail slug={law.slug} title={law.title} color={law.color} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-xs font-mono text-muted-foreground tabular-nums">
          {String(law.number).padStart(2, "0")} / {laws.length}
        </span>
        <h2 className="text-lg font-semibold mt-1.5 mb-2.5 group-hover:text-foreground transition-colors" style={{ textWrap: "balance" }}>
          {law.title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3" style={{ textWrap: "pretty" }}>
          {law.subtitle}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered =
    active === "all" ? laws : laws.filter((l) => l.category === active);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20">
      <section className="mb-12 sm:mb-16 max-w-2xl">
        <h1
          className="animate-enter text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ "--stagger": 0, textWrap: "balance" } as React.CSSProperties}
        >
          Laws of UX
        </h1>
        <p
          className="animate-enter text-lg text-muted-foreground leading-relaxed"
          style={{ "--stagger": 1, textWrap: "pretty" } as React.CSSProperties}
        >
          Kumpulan prinsip-prinsip UX yang perlu dipertimbangkan desainer saat
          membuat antarmuka pengguna, dijelaskan dalam Bahasa Indonesia dengan
          contoh-contoh yang mudah dipahami.
        </p>
      </section>

      <div
        className="animate-enter flex gap-2 mb-8"
        style={{ "--stagger": 2 } as React.CSSProperties}
      >
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              active === f.key
                ? "bg-foreground text-background shadow-sm scale-[1.02]"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            {f.label}
            <span className="ml-1.5 text-xs opacity-60 tabular-nums">
              {f.key === "all"
                ? laws.length
                : laws.filter((l) => l.category === f.key).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((law, i) => (
          <LawCard key={law.slug} law={law} index={i} />
        ))}
      </div>
    </div>
  );
}
