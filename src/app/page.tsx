import Link from "next/link";
import Image from "next/image";
import { laws } from "@/lib/laws-data";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20">
      <section className="mb-12 sm:mb-16 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Laws of UX
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Kumpulan prinsip-prinsip UX yang perlu dipertimbangkan desainer saat
          membuat antarmuka pengguna — dijelaskan dalam Bahasa Indonesia dengan
          contoh-contoh yang mudah dipahami.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {laws.map((law) => (
          <Link
            key={law.slug}
            href={`/${law.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-0.5"
          >
            <div
              className="relative aspect-square w-full overflow-hidden"
              style={{ backgroundColor: law.color }}
            >
              <Image
                src={`/laws/${law.slug}/thumb.png`}
                alt={law.title}
                width={562}
                height={562}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="text-xs font-mono text-muted-foreground">
                {String(law.number).padStart(2, "0")} / 13
              </span>
              <h2 className="text-lg font-semibold mt-1.5 mb-2.5 group-hover:text-foreground transition-colors">
                {law.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {law.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
