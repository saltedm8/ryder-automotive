import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  subtitle?: string;
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
  /** "light" = lighter overlay so background image is more visible */
  overlay?: "default" | "light";
}

export default function PageHero({
  subtitle,
  title,
  description,
  breadcrumbs,
  backgroundImage,
  overlay = "default",
}: PageHeroProps) {
  const isLight = overlay === "light";
  return (
    <section className="relative py-12 sm:py-20 md:py-28 bg-charcoal-950 overflow-hidden">
      {/* Background - motorcycle imagery */}
      {backgroundImage && (
        <div
          className={`absolute inset-0 bg-cover bg-center bg-right ${isLight ? "opacity-95" : "opacity-80"}`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div
        className={`absolute inset-0 ${isLight ? "bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/50 to-transparent" : "bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-transparent"}`}
      />
      <div
        className={`absolute inset-0 ${isLight ? "bg-gradient-to-b from-charcoal-950/20 to-charcoal-950/60" : "bg-gradient-to-b from-charcoal-950/40 to-charcoal-950/80"}`}
      />

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-gradient" />
      <div className="absolute right-0 top-0 bottom-0 w-1 opacity-20 bg-gold-gradient" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 mb-8 text-xs" aria-label="Breadcrumb">
            <Link href="/" className="text-charcoal-500 hover:text-gold-500 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={12} className="text-charcoal-700" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-charcoal-500 hover:text-gold-500 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-charcoal-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {subtitle && <p className="section-subtitle mb-4">{subtitle}</p>}
        <div className="gold-divider" />
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 sm:mt-6 mb-3 sm:mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-charcoal-300 text-base leading-relaxed max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
