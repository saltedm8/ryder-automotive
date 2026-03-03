"use client";

import Image from "next/image";

const FALLBACK = "/images/downthemall/about-first-1.jpg";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  fallback?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  fill = false,
  className = "",
  sizes,
  fallback = FALLBACK,
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      onError={(e) => {
        const target = e.currentTarget;
        if (target.src !== fallback) {
          target.src = fallback;
        }
      }}
    />
  );
}
