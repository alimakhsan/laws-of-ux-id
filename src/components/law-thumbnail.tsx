"use client";

import Image from "next/image";
import { useState } from "react";

export function LawThumbnail({
  slug,
  title,
  color,
}: {
  slug: string;
  title: string;
  color: string;
}) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div
      className="relative aspect-square w-full overflow-hidden flex items-center justify-center img-outline"
      style={{ backgroundColor: color }}
    >
      {hasImage ? (
        <Image
          src={`/laws/${slug}/thumb.png`}
          alt={title}
          width={562}
          height={562}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setHasImage(false)}
        />
      ) : (
        <span className="text-white/20 text-7xl font-bold select-none">
          {title.charAt(0)}
        </span>
      )}
    </div>
  );
}
