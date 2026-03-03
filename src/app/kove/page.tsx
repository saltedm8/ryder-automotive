import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import VideoEmbed from "@/components/VideoEmbed";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "KOVE Motorcycles | KOVE Dealer South East",
  description:
    "Ryder Motorcycles is the KOVE dealer for the South East. New adventure and rally bikes in stock. Official dealer for Kent and East Sussex.",
};

const koveBikePhotos = (SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos || [SITE_CONFIG.images.kove];

const koveModels = [
  {
    name: "KOVE 450 Rally",
    subtitle: "EX Factory Dakar",
    price: 14999,
    image: koveBikePhotos[0],
    slug: "used-kove-450-rally-sittingbourne-kent-7522620",
    tag: "Factory Order",
  },
  {
    name: "KOVE 800X Pro",
    subtitle: "Adventure",
    price: 9699,
    image: koveBikePhotos[1] || koveBikePhotos[0],
    slug: "used-kove-800x-pro-sittingbourne-kent-7522486",
    tag: "In Stock",
  },
  {
    name: "KOVE 800X Touring",
    subtitle: "Adventure Tourer",
    price: 9899,
    image: koveBikePhotos[2] || koveBikePhotos[0],
    slug: "used-kove-800x-touring-sittingbourne-kent-7522539",
    tag: "In Stock",
  },
  {
    name: "KOVE 800X Rally",
    subtitle: "Rally Adventure",
    price: 9500,
    image: koveBikePhotos[3] || koveBikePhotos[1] || koveBikePhotos[0],
    slug: "used-kove-800x-rally-sittingbourne-kent-7522335",
    tag: "In Stock",
  },
];

export default function KoveHubPage() {
  return (
    <>
      {/* Hero - Full KOVE branding */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-charcoal-950">
        <div className="absolute inset-0">
          <Image
            src={koveBikePhotos[1] || koveBikePhotos[0] || SITE_CONFIG.images.hero}
            alt="KOVE motorcycle"
            fill
            className="object-cover object-right opacity-90"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent" />
        </div>

        {/* Main dealer badge */}
        <div className="absolute top-8 left-6 md:left-12 z-10">
          <div className="inline-flex items-center gap-2 bg-gold-600 px-4 py-2 text-charcoal-950">
            <Award size={16} />
            <span
              className="font-bold uppercase tracking-[0.2em] text-sm"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              KOVE Dealer · South East England
            </span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">
            {SITE_CONFIG.images.brandLogos?.KOVE && (
              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SITE_CONFIG.images.brandLogos.KOVE} alt="KOVE" className="h-16 md:h-20 w-auto object-contain" />
              </div>
            )}
            <p className="section-subtitle mb-4">Ryder Motorcycles</p>
            <div className="gold-divider" />
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mt-6 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              KOVE
              <br />
              <span className="gold-shimmer">Motorcycles</span>
            </h1>
            <p className="text-charcoal-300 text-lg leading-relaxed mb-10 max-w-lg">
              Ryder Motorcycles is proud to be the KOVE dealer for the South East — supplying
              Kent and East Sussex from our Sittingbourne showroom. Performance-driven adventure and
              rally bikes, built by riders for riders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/new-bikes" className="btn-gold px-8 py-4 text-sm">
                View KOVE Stock
                <ArrowRight size={16} />
              </Link>
              <Link href="/kove-south-east" className="btn-outline px-8 py-4 text-sm">
                About KOVE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why KOVE at Ryder */}
      <section className="py-20 bg-charcoal-900 border-y border-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Why Choose Ryder for KOVE</p>
            <h2 className="section-title">Dealer Benefits</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Full Range Access",
                desc: "New KOVE models in stock and available to order. 450 Rally, 800X Pro, Touring and Rally.",
              },
              {
                title: "Expert Knowledge",
                desc: "We ride KOVE bikes. Adventure, TET, ACT, roadbook rallies — we use them in the real world.",
              },
              {
                title: "Factory Support",
                desc: "Direct factory relationship. Genuine parts, warranty support and technical backup.",
              },
              {
                title: "South East Coverage",
                desc: "Serving Kent and East Sussex from our Sittingbourne showroom. Easy to reach, easy to visit.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gold-600/10 border border-gold-800/30 flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-gold-500" />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About KOVE brand + Featured Video */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-4">The Brand</p>
              <h2
                className="text-3xl font-black text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Built by Riders,<br />
                <span className="gold-shimmer">Tested in Competition</span>
              </h2>
              <div className="gold-divider" />
              <p className="text-charcoal-300 leading-relaxed mt-6 mb-4">
                Kove is a performance-driven motorcycle brand with a clear focus: building lightweight,
                capable adventure and rally motorcycles that work in the real world.
              </p>
              <p className="text-charcoal-300 leading-relaxed mb-8">
                From Dakar-proven rally machines to versatile long-distance adventure bikes, Kove
                motorcycles are designed by riders, tested in competition, and built to be used properly.
                This isn&apos;t about chasing trends — it&apos;s about performance, durability, and rider confidence.
              </p>
              <Link href="/kove-south-east" className="btn-gold">
                Learn More About KOVE
                <ArrowRight size={14} />
              </Link>
            </div>
            {SITE_CONFIG.koveVideos?.[0] ? (
              <div className="space-y-4">
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
                  src={(SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos?.[0] || SITE_CONFIG.images.kove}
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

      {/* KOVE Videos - thumbnail cards */}
      {SITE_CONFIG.koveVideos && SITE_CONFIG.koveVideos.length > 1 ? (
        <section className="py-20 bg-charcoal-900 border-t border-charcoal-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="section-subtitle mb-3">See KOVE in Action</p>
              <h2 className="section-title">More Videos</h2>
              <div className="gold-divider mx-auto" />
              <p className="text-charcoal-400 mt-4 max-w-2xl mx-auto">
                Reviews, comparisons, and real-world riding from the KOVE range.
              </p>
            </div>
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
          </div>
        </section>
      ) : null}

      {/* Models grid */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-subtitle mb-3">The Lineup</p>
              <h2 className="section-title">KOVE Models</h2>
              <div className="gold-divider" />
            </div>
            <Link href="/new-bikes" className="btn-outline text-sm self-start md:self-auto">
              View All KOVE Stock
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {koveModels.map((model) => (
              <Link
                key={model.name}
                href={`/used-bikes/${model.slug}`}
                className="group card-dark overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        model.tag === "In Stock"
                          ? "bg-green-600/90 text-white"
                          : "bg-charcoal-950/90 border border-charcoal-700 text-gold-400"
                      }`}
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {model.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p
                    className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-1"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {model.subtitle}
                  </p>
                  <h3
                    className="text-white font-bold text-lg group-hover:text-gold-300 transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {model.name}
                  </h3>
                  <p
                    className="text-gold-400 font-bold mt-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    £{model.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-20 bg-charcoal-950 border-t border-charcoal-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-subtitle mb-4">Visit Our Showroom</p>
          <h2
            className="text-3xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            See KOVE in Person
          </h2>
          <p className="text-charcoal-300 mb-10 max-w-xl mx-auto">
            Our team is ready to help you explore the full KOVE lineup. Visit our Sittingbourne
            showroom to see the bikes, discuss finance, and arrange a test ride.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-gold px-8">
              <Phone size={14} />
              {SITE_CONFIG.phone}
            </a>
            <Link href="/contact" className="btn-outline px-8">
              <MapPin size={14} />
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
