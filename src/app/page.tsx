import Link from "next/link";
import { laws, type Law } from "@/lib/laws-data";
import { LawThumbnail } from "@/components/law-thumbnail";

const sections: {
  key: Law["category"];
  title: string;
  desc: string;
}[] = [
  {
    key: "theory",
    title: "Teori",
    desc: "Prinsip, heuristik, dan hukum desain yang jadi dasar dalam membangun antarmuka.",
  },
  {
    key: "psychology",
    title: "Psikologi",
    desc: "Konsep dari psikologi kognitif tentang cara manusia berpikir, mengingat, dan memproses informasi.",
  },
];

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

      <div className="space-y-16">
        {sections.map((section) => {
          const items = laws.filter((law) => law.category === section.key);
          return (
            <section key={section.key}>
              <div className="mb-6 max-w-2xl">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {section.title}
                  <span className="ml-2 text-base font-normal text-muted-foreground">
                    {items.length}
                  </span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">
                  {section.desc}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((law) => (
                  <LawCard key={law.slug} law={law} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
