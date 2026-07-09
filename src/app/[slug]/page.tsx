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
      <div className="animate-fade-in" style={{ "--stagger": 0 } as React.CSSProperties}>
        <BackButton />
      </div>

      <div
        className="animate-enter h-1.5 w-16 rounded-full mb-6"
        style={{ backgroundColor: law.color, "--stagger": 1 } as React.CSSProperties}
      />

      <span
        className="animate-enter text-sm font-mono text-muted-foreground tabular-nums"
        style={{ "--stagger": 2 } as React.CSSProperties}
      >
        {String(law.number).padStart(2, "0")} / {laws.length}
      </span>

      <h1
        className="animate-enter text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-6"
        style={{ "--stagger": 3, textWrap: "balance" } as React.CSSProperties}
      >
        {law.title}
      </h1>

      <blockquote
        className="animate-enter border-l-4 pl-4 sm:pl-6 py-2 text-lg sm:text-xl leading-relaxed font-medium mb-8"
        style={{ borderColor: law.color, "--stagger": 4, textWrap: "pretty" } as React.CSSProperties}
      >
        {law.subtitle}
      </blockquote>

      <div
        className="animate-enter flex flex-wrap gap-2 mb-8 text-sm text-muted-foreground"
        style={{ "--stagger": 5 } as React.CSSProperties}
      >
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

      <Separator className="mb-8 animate-fade-in" style={{ "--stagger": 6 } as React.CSSProperties} />

      <div className="space-y-5 text-base leading-relaxed text-foreground/90">
        {law.blocks.map((block, i) =>
          block.type === "text" ? (
            <p
              key={i}
              className="animate-enter"
              style={{ "--stagger": Math.min(7 + i, 12), textWrap: "pretty" } as React.CSSProperties}
            >
              {block.text}
            </p>
          ) : (
            <figure
              key={i}
              className="animate-enter-scale my-8 space-y-2.5"
              style={{ "--stagger": Math.min(7 + i, 12) } as React.CSSProperties}
            >
              <div className="overflow-hidden rounded-xl bg-muted/30 img-outline">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  className="h-auto w-full transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 672px) 100vw, 640px"
                />
              </div>
              {block.caption && (
                <figcaption className="text-center text-sm text-muted-foreground" style={{ textWrap: "balance" }}>
                  {block.caption}
                </figcaption>
              )}
            </figure>
          ),
        )}
      </div>

      <Separator className="my-10 animate-fade-in" />

      <section className="animate-enter" style={{ "--stagger": 2 } as React.CSSProperties}>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Poin Penting
        </h2>
        <ul className="space-y-3">
          {law.keyPoints.map((point, i) => (
            <li
              key={i}
              className="animate-enter flex items-start gap-3 text-sm"
              style={{ "--stagger": 3 + i, textWrap: "pretty" } as React.CSSProperties}
            >
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

      <nav className="animate-enter grid grid-cols-2 gap-4" style={{ "--stagger": 1 } as React.CSSProperties}>
        {prev ? (
          <Link
            href={`/${prev.slug}`}
            className="group flex flex-col gap-1 rounded-lg p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-all duration-200"
          >
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-0.5" /> Sebelumnya
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
            className="group flex flex-col gap-1 rounded-lg p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-all duration-200 text-right"
          >
            <span className="text-xs text-muted-foreground flex items-center justify-end gap-1">
              Selanjutnya <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
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
