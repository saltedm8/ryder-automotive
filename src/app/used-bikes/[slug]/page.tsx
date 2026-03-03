import { Metadata } from "next";
import Image from "next/image";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone, Gauge, Calendar, Users, Palette,
  Zap, Shield, CheckCircle2, ArrowLeft
} from "lucide-react";
import { LATEST_BIKES, SITE_CONFIG } from "@/lib/data";
import BikeCard from "@/components/BikeCard";
import BikeEnquiryForm from "@/components/BikeEnquiryForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LATEST_BIKES.map((bike) => ({ slug: bike.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bike = LATEST_BIKES.find((b) => b.slug === slug);
  if (!bike) return { title: "Bike Not Found" };
  return {
    title: `${bike.year} ${bike.make} ${bike.model} – £${bike.price.toLocaleString()}`,
    description: bike.description,
  };
}

export default async function BikeDetailPage({ params }: Props) {
  const { slug } = await params;
  const bike = LATEST_BIKES.find((b) => b.slug === slug);
  if (!bike) notFound();

  const similar = LATEST_BIKES.filter(
    (b) => b.id !== bike.id && b.bodyStyle === bike.bodyStyle
  ).slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-charcoal-900 border-b border-charcoal-800 py-3">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/used-bikes" className="hover:text-gold-400 transition-colors">Used Bikes</Link>
            <span>/</span>
            <span className="text-charcoal-300">{bike.year} {bike.make} {bike.model}</span>
          </nav>
        </div>
      </div>

      <div className="bg-charcoal-950 py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <p
              className="text-gold-500 text-sm uppercase tracking-[0.2em] mb-1"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              {bike.make} · {bike.year}
            </p>
            <h1
              className="text-3xl md:text-4xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {bike.model}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span
                className="text-4xl font-bold text-gold-400"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                £{bike.price.toLocaleString()}
              </span>
              <span className="text-charcoal-400 text-sm">
                Finance from <span className="text-white font-medium">£{bike.financeFrom.toFixed(2)}/mo</span>*
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Images */}
            <div className="lg:col-span-2 space-y-4">
              <div className="relative aspect-[16/10] bg-charcoal-900 border border-charcoal-800 overflow-hidden">
                <ImageWithFallback
                  src={bike.image}
                  alt={`${bike.year} ${bike.make} ${bike.model}`}
                  fill
                  className="object-cover"
                />
              </div>
              {bike.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {bike.images.map((img, i) => (
                    <div key={i} className="relative aspect-square bg-charcoal-900 border border-charcoal-800 overflow-hidden cursor-pointer hover:border-gold-600 transition-colors">
                      <Image
                        src={img}
                        alt={`Photo ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 25vw, 15vw"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="bg-charcoal-900 border border-charcoal-800 p-8">
                <h2
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  About This Bike
                </h2>
                <p className="text-charcoal-300 leading-relaxed text-sm">{bike.description}</p>
              </div>

              {/* Features */}
              <div className="bg-charcoal-900 border border-charcoal-800 p-8">
                <h2
                  className="text-xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bike.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-gold-500 mt-1 shrink-0" />
                      <span className="text-charcoal-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finance */}
              <div className="bg-charcoal-900 border border-charcoal-800 border-l-4 border-l-gold-600 p-8">
                <h2
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Finance
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                  {[
                    { label: "Cash Price", value: `£${bike.price.toLocaleString()}` },
                    { label: "Monthly From", value: `£${bike.financeFrom.toFixed(2)}` },
                    { label: "APR", value: "13.9%" },
                    { label: "Duration", value: "48 months" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-charcoal-500 text-xs mb-1">{item.label}</p>
                      <p className="text-white font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-charcoal-600 text-xs">
                  Representative APR. Finance subject to status. Indemnities may be required.
                  Finance provided by Close Brothers Finance.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specs */}
              <div className="bg-charcoal-900 border border-charcoal-800 p-6">
                <h3
                  className="text-white font-bold mb-5 uppercase tracking-widest text-xs"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Specifications
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Calendar, label: "Year", value: bike.year },
                    { icon: Gauge, label: "Mileage", value: `${bike.mileage} miles` },
                    { icon: Zap, label: "Engine", value: bike.engineSize },
                    { icon: Palette, label: "Colour", value: bike.colour },
                    { icon: Users, label: "Owners", value: String(bike.owners) },
                    { icon: Shield, label: "Warranty", value: bike.warranty },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-charcoal-800 last:border-0">
                      <div className="flex items-center gap-2 text-charcoal-400 text-sm">
                        <Icon size={13} className="text-gold-600" />
                        {label}
                      </div>
                      <span className="text-white text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquire */}
              <div className="bg-charcoal-900 border border-charcoal-800 p-6 space-y-3">
                <h3
                  className="text-white font-bold mb-4 uppercase tracking-widest text-xs"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Enquire
                </h3>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="btn-gold w-full justify-center py-3 flex items-center gap-2"
                >
                  <Phone size={14} />
                  {SITE_CONFIG.phone}
                </a>
                <BikeEnquiryForm
                  bikeId={bike.id}
                  bikeTitle={`${bike.year} ${bike.make} ${bike.model}`}
                  bikePrice={bike.price}
                />
                <Link
                  href={`/contact?book_test_ride=${bike.id}`}
                  className="btn-ghost w-full justify-center border border-charcoal-700 py-3 hover:border-gold-700 flex items-center gap-2"
                >
                  Book Test Ride
                </Link>
                <Link
                  href="/finance"
                  className="btn-ghost w-full justify-center border border-charcoal-700 py-3 hover:border-gold-700"
                >
                  Apply for Finance
                </Link>
                <Link
                  href="/sell-your-bike"
                  className="btn-ghost w-full justify-center border border-charcoal-700 py-3 hover:border-gold-700"
                >
                  Part Exchange
                </Link>
              </div>

              {/* Note */}
              <div className="bg-charcoal-900 border border-charcoal-800 p-5 text-xs text-charcoal-500 leading-relaxed">
                Every bike leaves us with a full workshop inspection, fresh MOT, and service
                completed to schedule. {bike.warranty} warranty included — extendable up to 3 years.
              </div>
            </div>
          </div>

          {/* Similar Bikes */}
          {similar.length > 0 && (
            <div className="mt-20">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="section-subtitle mb-2">You May Also Like</p>
                  <h2 className="section-title text-2xl">Similar Bikes</h2>
                  <div className="gold-divider" />
                </div>
                <Link href="/used-bikes" className="btn-outline text-sm">
                  All Stock <ArrowLeft size={14} className="rotate-180" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similar.map((b) => (
                  <BikeCard key={b.id} {...b} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
