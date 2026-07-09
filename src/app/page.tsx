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

function LawCard({ law }: { law: Law }) {
  return (
    <Link
      href={`/${law.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-0.5"
    >
      <LawThumbnail slug={law.slug} title={law.title} color={law.color} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-xs font-mono text-muted-foreground">
          {String(law.number).padStart(2, "0")} / {laws.length}
        </span>
        <h2 className="text-lg font-semibold mt-1.5 mb-2.5 group-hover:text-foreground transition-colors">
          {law.title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
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
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Laws of UX
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Kumpulan prinsip-prinsip UX yang perlu dipertimbangkan desainer saat
          membuat antarmuka pengguna, dijelaskan dalam Bahasa Indonesia dengan
          contoh-contoh yang mudah dipahami.
        </p>
      </section>

      <div className="flex gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === f.key
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.label}
            <span className="ml-1.5 text-xs opacity-60">
              {f.key === "all"
                ? laws.length
                : laws.filter((l) => l.category === f.key).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((law) => (
          <LawCard key={law.slug} law={law} />
        ))}
      </div>
    </div>
  );
}
