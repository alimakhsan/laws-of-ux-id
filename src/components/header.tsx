import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl animate-fade-in">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight transition-opacity duration-200 hover:opacity-70">
          Laws of UX <span className="text-muted-foreground font-normal text-sm">ID</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/alimakhsan/laws-of-ux-id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
