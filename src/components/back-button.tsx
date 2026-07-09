"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 min-h-11 -ml-2 px-2"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      Semua hukum
    </button>
  );
}
