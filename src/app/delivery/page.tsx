import { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { Phone, Truck, MapPin, CheckCircle2, Package } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Delivery",
  description:
    "Nationwide motorbike delivery from Ryder Automotive. UK mainland delivery. Competitive prices. We also collect bikes for part exchange and purchase.",
};

export default function DeliveryPage() {
  return (
    <>
      <PageHero
        subtitle="Services"
        title="Delivery"
        description="From our showroom floor to your door. Competitive nationwide delivery."
        breadcrumbs={[{ label: "Delivery" }]}
        backgroundImage={(SITE_CONFIG.images as { about?: string[] }).about?.[2] ?? SITE_CONFIG.images.adventure}
      />

      <section className="py-16 sm:py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <ImageWithFallback src={(SITE_CONFIG.images as { about?: string[] }).about?.[3] ?? SITE_CONFIG.images.adventure} alt="Nationwide delivery" fill className="object-cover" />
            </div>
            <div className="space-y-6 text-charcoal-300 leading-relaxed">
              <h2 className="section-title text-2xl">From Our Showroom to Your Door</h2>
              <p>
                Bought a bike from us? We deliver to your door anywhere on the UK mainland. Our delivery service is competitively priced and we use experienced, bike-aware transporters. We&apos;re constantly moving vehicles across the country — you&apos;re in good hands.
              </p>
              <p>
                Enquire today for a delivery quote. Prices vary by distance — we&apos;ll give you an accurate cost when you call. Some remote areas (e.g. Scottish Highlands, Islands) may incur an additional charge; we&apos;ll always confirm before you commit.
              </p>
            </div>
          </div>

          {/* Two services */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-charcoal-900 border border-charcoal-800 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gold-600/10 border border-gold-800/30 flex items-center justify-center">
                  <Truck size={24} className="text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>Delivery to You</h3>
              </div>
              <p className="text-charcoal-300 text-sm leading-relaxed mb-4">
                We deliver your new bike to your home or work address. Secure, insured transport. We&apos;ll confirm the date and time in advance. You&apos;ll need to be present to sign for and collect the bike.
              </p>
              <ul className="space-y-2 text-charcoal-400 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> UK mainland coverage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Insured, professional transport</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Competitive pricing</li>
              </ul>
            </div>
            <div className="bg-charcoal-900 border border-charcoal-800 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gold-600/10 border border-gold-800/30 flex items-center justify-center">
                  <MapPin size={24} className="text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>Collection from You</h3>
              </div>
              <p className="text-charcoal-300 text-sm leading-relaxed mb-4">
                Selling or part-exchanging your bike but you&apos;re miles away? We collect from anywhere in the UK. If we want your bike, we&apos;ll come and get it. No extra cost when you&apos;re buying from us.
              </p>
              <ul className="space-y-2 text-charcoal-400 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Nationwide collection</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Cash or bank transfer on collection</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Finance settlement available</li>
              </ul>
            </div>
          </div>

          {/* What to expect */}
          <div className="mt-20">
            <h2 className="section-title mb-6">What to Expect</h2>
            <div className="gold-divider mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold-600 text-charcoal-950 font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-oswald)" }}>1</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">Quote & Booking</h3>
                  <p className="text-charcoal-400 text-sm">Call us for a delivery quote. We&apos;ll confirm the price and book a date. Payment for the bike is usually taken before delivery (or on collection if you&apos;re visiting).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold-600 text-charcoal-950 font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-oswald)" }}>2</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">Confirmation</h3>
                  <p className="text-charcoal-400 text-sm">We&apos;ll confirm the delivery slot and time. You&apos;ll need to be available to receive the bike. Have your ID and any paperwork ready.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold-600 text-charcoal-950 font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-oswald)" }}>3</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">Delivery</h3>
                  <p className="text-charcoal-400 text-sm">The bike arrives at your address. You inspect it, sign for it, and you&apos;re done. We&apos;ll have sent the V5 and any other docs in advance or with the bike.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Selling remotely */}
          <div className="mt-16 bg-charcoal-900 border border-charcoal-800 border-l-4 border-l-gold-600 p-8">
            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Selling a Bike & You&apos;re Miles Away?</h3>
            <p className="text-charcoal-300 leading-relaxed mb-4">
              No problem. We collect bikes from across the UK every week. If we want your bike, we&apos;ll pick it up. We can arrange payment by cash or bank transfer and we can settle any outstanding finance (HP, PCP, loan) on your behalf. You don&apos;t need to be local — we&apos;re used to dealing with sellers nationwide.
            </p>
            <Link href="/sell-your-bike" className="text-gold-500 hover:text-gold-400 font-medium inline-flex items-center gap-2">
              <Package size={16} />
              Sell your bike to us →
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-charcoal-900 border border-charcoal-800 p-8 sm:p-10 text-center">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Get a Delivery Quote</h3>
            <p className="text-charcoal-400 mb-6">Call us with your postcode and we&apos;ll give you an accurate delivery cost. No obligation.</p>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-gold px-10 py-4 inline-flex items-center gap-2">
              <Phone size={20} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
