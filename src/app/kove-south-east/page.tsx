import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import VideoEmbed from "@/components/VideoEmbed";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "KOVE South East | KOVE Dealer",
  description:
    `${SITE_CONFIG.name} is the KOVE dealer for the South East of England, supplying Kent and East Sussex from our Sittingbourne showroom.`,
};

export default function KoveSouthEastPage() {
  return (
    <>
      <PageHero
        subtitle="KOVE Dealer · Kent & East Sussex"
        title="KOVE South East"
        description={`${SITE_CONFIG.name} is proud to be the KOVE dealer for the South East of England, supplying Kent and East Sussex from our showroom in Sittingbourne.`}
        breadcrumbs={[{ label: "KOVE", href: "/kove" }, { label: "KOVE South East" }]}
        backgroundImage={(SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos?.[1] ?? (SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos?.[0] ?? SITE_CONFIG.images.hero}
      />

      {/* Main dealer badge */}
      <div className="bg-charcoal-900 border-b border-charcoal-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-gold-600 px-5 py-2.5 text-charcoal-950">
              <Award size={18} />
              <span
                className="font-bold uppercase tracking-[0.2em] text-sm"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                KOVE Dealer · South East England
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content - About KOVE with featured video */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-4">About KOVE</p>
              <h2
                className="text-3xl font-black text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Performance-Driven Motorcycles
              </h2>
              <div className="gold-divider" />
              <p className="text-charcoal-300 leading-relaxed mt-6 mb-4">
                Kove is a performance-driven motorcycle brand with a clear focus: building lightweight,
                capable adventure and rally motorcycles that work in the real world.
              </p>
              <p className="text-charcoal-300 leading-relaxed mb-4">
                From Dakar-proven rally machines to versatile long-distance adventure bikes, Kove
                motorcycles are designed by riders, tested in competition, and built to be used properly.
              </p>
              <p className="text-charcoal-300 leading-relaxed mb-8">
                This isn&apos;t about chasing trends. It&apos;s about focus on performance, durability, and rider
                confidence — values that align perfectly with how we ride, sell, and support motorcycles
                at {SITE_CONFIG.name}.
              </p>
              <div className="flex gap-4">
                <Link href="/new-bikes" className="btn-gold">
                  View KOVE Stock
                  <ArrowRight size={14} />
                </Link>
                <Link href="/kove" className="btn-outline">
                  KOVE Hub
                </Link>
              </div>
            </div>
            {SITE_CONFIG.koveVideos?.[0] ? (
              <div className="space-y-3">
                <VideoEmbed
                  id={SITE_CONFIG.koveVideos[0].id}
                  title={SITE_CONFIG.koveVideos[0].title}
                  source={SITE_CONFIG.koveVideos[0].source as "youtube" | "vimeo" | "url"}
                  variant="embed"
                />
                <p className="text-sm text-gold-500 font-medium" style={{ fontFamily: "var(--font-playfair)" }}>
                  {SITE_CONFIG.koveVideos[0].title}
                </p>
              </div>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden rounded">
                <Image
                  src={(SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos?.[1] || SITE_CONFIG.images.kove}
                  alt="KOVE motorcycle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* KOVE 800X Pro & More Videos */}
      <section id="videos" className="py-20 bg-charcoal-900 border-y border-charcoal-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Discover the Range</p>
            <h2 className="section-title">KOVE 800X Pro in Action</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-charcoal-400 mt-4 max-w-2xl mx-auto">
              The 800X Pro is our flagship adventure model — capable, versatile, and built for real-world riding.
              Watch reviews and comparisons below.
            </p>
          </div>
          {SITE_CONFIG.koveVideos && SITE_CONFIG.koveVideos.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SITE_CONFIG.koveVideos.slice(1).map((v) => (
                <VideoEmbed
                  key={v.id}
                  id={v.id}
                  title={v.title}
                  source={v.source as "youtube" | "vimeo" | "url"}
                  variant="card"
                  showTitle
                />
              ))}
            </div>
          ) : (
            <div className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded">
              <Image
                src={(SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos?.[2] || (SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos?.[1] || SITE_CONFIG.images.kove}
                alt="KOVE 800X Pro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </section>

      {/* Where to find us */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-4">Visit Us</p>
              <h2
                className="text-3xl font-black text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Where to Find Us
              </h2>
              <div className="gold-divider" />
              <p className="text-charcoal-300 leading-relaxed mt-6 mb-8">
                You can find us at our dealership, where our team is ready to help you explore our
                full lineup, including our new KOVE motorcycles.
              </p>
              <address className="not-italic text-charcoal-300 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white mb-1">{SITE_CONFIG.name}</p>
                    <p>{SITE_CONFIG.address.line1}</p>
                    <p>{SITE_CONFIG.address.line2}</p>
                    <p>{SITE_CONFIG.address.town}</p>
                    <p>{SITE_CONFIG.address.county}, {SITE_CONFIG.address.postcode}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gold-500 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-gold-400 hover:text-gold-300 font-semibold">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </address>
              <Link href="/contact" className="btn-gold">
                Contact Us Today
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-charcoal-900 border border-charcoal-800 overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.google.com/maps?q=${SITE_CONFIG.coords.lat},${SITE_CONFIG.coords.lng}&z=16&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${SITE_CONFIG.name} location`}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${SITE_CONFIG.coords.lat},${SITE_CONFIG.coords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  <MapPin size={14} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
