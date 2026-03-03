"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type VideoEmbedProps = {
  /** YouTube video ID (e.g. 3lBTPeak8Fg) or full URL */
  id: string;
  title?: string;
  source?: "youtube" | "vimeo" | "url";
  className?: string;
  /** "embed" = always show iframe. "card" = thumbnail + play overlay, load on click */
  variant?: "embed" | "card";
  /** Show video title below (for card variant) */
  showTitle?: boolean;
};

function getYouTubeId(id: string): string {
  return id.includes("youtube.com") ? new URL(id).searchParams.get("v") || id : id;
}

function getThumbnailUrl(videoId: string, source: string): string | null {
  if (source === "youtube") {
    const id = getYouTubeId(videoId);
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  }
  return null;
}

function getEmbedUrl(id: string, source: string): string {
  if (source === "youtube") {
    const videoId = id.includes("youtube.com") ? new URL(id).searchParams.get("v") || id : id;
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  }
  if (source === "vimeo") {
    const videoId = id.includes("vimeo.com") ? id.split("/").pop() || id : id;
    return `https://player.vimeo.com/video/${videoId}`;
  }
  return id;
}

export default function VideoEmbed({
  id,
  title = "Video",
  source = "youtube",
  className = "",
  variant = "embed",
  showTitle = false,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getEmbedUrl(id, source);
  const thumbnailUrl = getThumbnailUrl(id, source);

  if (variant === "card" && source === "youtube" && thumbnailUrl && !isPlaying) {
    return (
      <div className={`group ${className}`}>
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="relative aspect-video w-full overflow-hidden rounded-lg border border-charcoal-700 bg-charcoal-900 transition-all hover:border-gold-600 hover:shadow-lg hover:shadow-gold-900/20 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-charcoal-950"
          aria-label={`Play ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnailUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${getYouTubeId(id)}/hqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-charcoal-950/40 transition-colors group-hover:bg-charcoal-950/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-600 text-charcoal-950 shadow-xl transition-transform group-hover:scale-110">
              <Play size={28} className="ml-1" fill="currentColor" />
            </div>
          </div>
        </button>
        {showTitle && title && (
          <p className="mt-3 text-sm font-medium text-charcoal-300" style={{ fontFamily: "var(--font-playfair)" }}>
            {title}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`relative aspect-video overflow-hidden rounded-lg border border-charcoal-700 shadow-xl ${className}`}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        loading="lazy"
      />
    </div>
  );
}
