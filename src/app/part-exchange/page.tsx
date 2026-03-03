import { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, Percent, Truck, CreditCard } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Part Exchange",
  description:
    "Part exchange your motorbike at Ryder Automotive. Use your bike as deposit. Low and no deposit finance. Nationwide collection. We value all makes and models.",
};

export default function PartExchangePage() {
  return (
    <>
      <PageHero
        subtitle="Services"
        title="Part Exchange"
        description="Use your current bike as deposit towards your next purchase. We value all makes and models."
        breadcrumbs={[{ label: "Part Exchange" }]}
        backgroundImage={(SITE_CONFIG.images as { about?: string[] }).about?.[0] ?? SITE_CONFIG.images.sellingHeroes?.[2] ?? SITE_CONFIG.images.hero}
      />

      <section className="py-16 sm:py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <ImageWithFallback src={(SITE_CONFIG.images as { about?: string[] }).about?.[1] ?? SITE_CONFIG.images.hero} alt="Part exchange" fill className="object-cover" />
            </div>
            <div className="space-y-6 text-charcoal-300 leading-relaxed">
              <h2 className="section-title text-2xl">Trade In, Trade Up</h2>
              <p>
                Part exchange your motorbike against any bike in our stock. Your current bike becomes your deposit — reducing your monthly payments and often unlocking better finance rates. We welcome all makes and models, from sportsbikes to scooters.
              </p>
              <p>
                Not local? No problem. We collect bikes from across the UK. If you&apos;re selling or part-exchanging, we can arrange collection at no extra cost when you&apos;re buying from us.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Percent, title: "Lower Deposits", desc: "Use your bike&apos;s value as deposit. Low deposit and no deposit options available when you trade in." },
              { icon: CreditCard, title: "Better Finance Rates", desc: "Trading in often improves your finance terms. All credit types considered — decisions in 60 seconds." },
              { icon: Truck, title: "Free Collection", desc: "We collect your part exchange from anywhere in the UK when you&apos;re buying from our stock." },
              { icon: CheckCircle2, title: "Fair Valuations", desc: "Transparent, no-pressure valuations. We want you to feel confident in the deal." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-charcoal-900 border border-charcoal-800 p-6">
                <div className="w-12 h-12 bg-gold-600/10 border border-gold-800/30 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-gold-500" />
                </div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="mt-20">
            <h2 className="section-title mb-6">The Part Exchange Process</h2>
            <div className="gold-divider mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold-600 text-charcoal-950 font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-oswald)" }}>1</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">Choose Your New Bike</h3>
                  <p className="text-charcoal-400 text-sm">Browse our stock online or visit our Sittingbourne showroom. Find the bike you want and we&apos;ll work out a deal that includes your part exchange.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold-600 text-charcoal-950 font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-oswald)" }}>2</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">Get a Valuation</h3>
                  <p className="text-charcoal-400 text-sm">We value your current bike — in person or from photos and details. If you have outstanding finance, we&apos;ll settle it and use the equity as your deposit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold-600 text-charcoal-950 font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-oswald)" }}>3</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">Complete the Deal</h3>
                  <p className="text-charcoal-400 text-sm">We arrange collection of your bike (if needed), handle the paperwork, and get you on your new machine. Finance can be approved in 60 seconds.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Finance note */}
          <div className="mt-16 p-6 sm:p-8 bg-charcoal-900 border border-charcoal-800 border-l-4 border-l-gold-600">
            <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair)" }}>Finance When You Part Exchange</h3>
            <p className="text-charcoal-300 leading-relaxed mb-4">
              Part exchanging often means you need less cash upfront. Your bike&apos;s value goes straight towards the deposit, and we work with Close Brothers and other lenders to find a deal that suits your budget. All types of credit considered — even if you&apos;ve been refused elsewhere, we may be able to help.
            </p>
            <Link href="/finance" className="text-gold-500 hover:text-gold-400 text-sm font-medium inline-flex items-center gap-2">
              Learn more about finance <ArrowRight size={14} />
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-charcoal-900 border border-charcoal-800 p-8 sm:p-10 text-center">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Get a Part Exchange Valuation</h3>
            <p className="text-charcoal-400 mb-6">Call us with details of your bike and the one you&apos;re interested in. We&apos;ll give you an initial valuation and talk through your options.</p>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-gold px-10 py-4 inline-flex items-center gap-2">
              <Phone size={20} />
              {SITE_CONFIG.phone}
            </a>
            <p className="text-charcoal-500 text-sm mt-4">
              <Link href="/sell-your-bike" className="text-gold-500 hover:text-gold-400">Selling outright?</Link> We buy bikes nationwide too.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
