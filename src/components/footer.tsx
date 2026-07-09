export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 mt-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <p>
            Konten oleh{" "}
            <a
              href="https://twitter.com/alimakhsan"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              @alimakhsan
            </a>
          </p>
          <p>
            Terinspirasi dari{" "}
            <a
              href="https://lawsofux.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              lawsofux.com
            </a>
            {" "}oleh Jon Yablonski
          </p>
          <p className="text-xs">
            Dilisensikan di bawah{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Creative Commons BY-SA 4.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
