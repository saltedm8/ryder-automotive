import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "New KOVE Bikes",
  description:
    "New KOVE motorcycles from the South East KOVE dealer. Rally, adventure and enduro bikes in stock and available to order. Ryder Motorcycles — KOVE dealer.",
};

const koveBikePhotos = (SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos ?? [];

const koveModels = [
  {
    name: "KOVE 450 Rally",
    subtitle: "EX Factory Dakar",
    price: 14999,
    image: koveBikePhotos[0],
    slug: "used-kove-450-rally-sittingbourne-kent-7522620",
    features: ["449cc DOHC Single", "Rally cockpit & roadbook tower", "Factory competition spec", "Available to order"],
  },
  {
    name: "KOVE 800X Pro",
    subtitle: "Adventure",
    price: 9699,
    image: koveBikePhotos[1] || koveBikePhotos[0],
    slug: "used-kove-800x-pro-sittingbourne-kent-7522486",
    features: ["800cc parallel twin", "Long-travel suspension", "TFT display", "In stock"],
  },
  {
    name: "KOVE 800X Touring",
    subtitle: "Adventure Tourer",
    price: 9899,
    image: koveBikePhotos[2] || koveBikePhotos[0],
    slug: "used-kove-800x-touring-sittingbourne-kent-7522539",
    features: ["800cc parallel twin", "Touring screen", "Panniers included", "In stock"],
  },
  {
    name: "KOVE 800X Rally",
    subtitle: "Rally Adventure",
    price: 9500,
    image: koveBikePhotos[3] || koveBikePhotos[1] || koveBikePhotos[0],
    slug: "used-kove-800x-rally-sittingbourne-kent-7522335",
    features: ["800cc parallel twin", "Rally-spec suspension", "Spoked wheels", "In stock"],
  },
];

export default function NewBikesPage() {
  return (
    <>
      <PageHero
        subtitle="KOVE Dealer · South East England"
        title="New KOVE Bikes"
        description="Ryder Motorcycles is the KOVE dealer for the South East of England. Performance-driven adventure and rally machines, available in our Sittingbourne showroom."
        breadcrumbs={[{ label: "KOVE", href: "/kove" }, { label: "New KOVE Stock" }]}
        backgroundImage={(SITE_CONFIG.images as { koveHero?: string }).koveHero ?? koveBikePhotos[3] ?? koveBikePhotos[1] ?? koveBikePhotos[0] ?? SITE_CONFIG.images.hero}
        overlay="light"
      />

      {/* KOVE intro */}
      <section className="py-16 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle mb-4">About KOVE</p>
              <h2
                className="text-3xl font-black text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Built by Riders,<br />Tested in Competition
              </h2>
              <div className="gold-divider" />
              <p className="text-charcoal-300 leading-relaxed mt-6 mb-4">
                Kove is a performance-driven motorcycle brand with a clear focus: building lightweight,
                capable adventure and rally motorcycles that work in the real world.
              </p>
              <p className="text-charcoal-300 leading-relaxed mb-8">
                From Dakar-proven rally machines to versatile long-distance adventure bikes, Kove
                motorcycles are designed by riders, tested in competition, and built to be used properly.
              </p>
              <div className="flex gap-4">
                <Link href="/kove" className="btn-gold">
                  KOVE Hub
                  <ArrowRight size={14} />
                </Link>
                <Link href="/kove-south-east" className="btn-outline">
                  About KOVE
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded">
                <Image
                  src={SITE_CONFIG.images.kove}
                  alt="Ryder Motorcycles KOVE showroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold-600 px-4 py-3 text-charcoal-950">
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  KOVE Dealer
                </p>
                <p className="text-sm font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  South East England
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">The Lineup</p>
            <h2 className="section-title">KOVE Models</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {koveModels.map((model) => (
              <div key={model.name} className="card-dark overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden bg-charcoal-900">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-charcoal-950/90 border border-charcoal-700 px-3 py-1.5">
                    <span
                      className="text-gold-400 font-bold text-sm"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      £{model.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p
                    className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-1"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    KOVE · {model.subtitle}
                  </p>
                  <h3
                    className="text-xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {model.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {model.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-gold-500 shrink-0" />
                        <span className="text-charcoal-400 text-xs">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/used-bikes/${model.slug}`}
                    className="btn-outline text-sm w-full justify-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
