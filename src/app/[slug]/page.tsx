import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { laws, getLawBySlug } from "@/lib/laws-data";
import { BackButton } from "@/components/back-button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return laws.map((law) => ({ slug: law.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const law = getLawBySlug(slug);
    if (!law) return { title: "Not Found" };
    return {
      title: `${law.title} · Laws of UX ID`,
      description: law.subtitle,
    };
  });
}

export default async function LawPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const law = getLawBySlug(slug);
  if (!law) notFound();

  const currentIndex = laws.findIndex((l) => l.slug === slug);
  const prev = currentIndex > 0 ? laws[currentIndex - 1] : null;
  const next = currentIndex < laws.length - 1 ? laws[currentIndex + 1] : null;

  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 py-10 sm:py-16">
      <BackButton />

      <div
        className="h-1.5 w-16 rounded-full mb-6"
        style={{ backgroundColor: law.color }}
      />

      <span className="text-sm font-mono text-muted-foreground">
        {String(law.number).padStart(2, "0")} / {laws.length}
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-6">
        {law.title}
      </h1>

      <blockquote
        className="border-l-4 pl-4 sm:pl-6 py-2 text-lg sm:text-xl leading-relaxed font-medium mb-8"
        style={{ borderColor: law.color }}
      >
        {law.subtitle}
      </blockquote>

      <div className="flex flex-wrap gap-2 mb-8 text-sm text-muted-foreground">
        {law.person && (
          <Badge variant="secondary">{law.person}</Badge>
        )}
        {law.year && (
          <Badge variant="outline">{law.year}</Badge>
        )}
        {law.personDescription && (
          <span className="self-center">{law.personDescription}</span>
        )}
      </div>

      <Separator className="mb-8" />

      <div className="space-y-5 text-base leading-relaxed text-foreground/90">
        {law.blocks.map((block, i) =>
          block.type === "text" ? (
            <p key={i}>{block.text}</p>
          ) : (
            <figure key={i} className="my-8 space-y-2.5">
              <div className="overflow-hidden rounded-xl border border-border/60 bg-muted/30">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  className="h-auto w-full"
                  sizes="(max-width: 672px) 100vw, 640px"
                />
              </div>
              {block.caption && (
                <figcaption className="text-center text-sm text-muted-foreground">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          ),
        )}
      </div>

      <Separator className="my-10" />

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Poin Penting
        </h2>
        <ul className="space-y-3">
          {law.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: law.color }}
              />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <Separator className="my-10" />

      <nav className="grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/${prev.slug}`}
            className="group flex flex-col gap-1 rounded-lg border border-border/50 p-4 hover:border-border transition-colors"
          >
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" /> Sebelumnya
            </span>
            <span className="text-sm font-medium group-hover:text-foreground transition-colors">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/${next.slug}`}
            className="group flex flex-col gap-1 rounded-lg border border-border/50 p-4 hover:border-border transition-colors text-right"
          >
            <span className="text-xs text-muted-foreground flex items-center justify-end gap-1">
              Selanjutnya <ArrowRight className="h-3 w-3" />
            </span>
            <span className="text-sm font-medium group-hover:text-foreground transition-colors">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
