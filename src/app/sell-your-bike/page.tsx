import { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { Phone, CheckCircle2, Banknote, Truck, FileCheck, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sell Your Bike",
  description:
    `Sell your motorbike to ${SITE_CONFIG.name}. We buy bikes nationwide. Part exchange welcome. Cash or bank transfer. Free collection. Finance settlement available.`,
};

export default function SellYourBikePage() {
  return (
    <>
      <PageHero
        subtitle="Services"
        title="Sell Your Bike"
        description="We're always looking for quality used bikes. Part exchange welcome. We can collect nationwide."
        breadcrumbs={[{ label: "Sell Your Bike" }]}
        backgroundImage={(SITE_CONFIG.images as { about?: string[] }).about?.[2] ?? SITE_CONFIG.images.sellingHeroes?.[1] ?? SITE_CONFIG.images.hero}
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <ImageWithFallback src={(SITE_CONFIG.images as { about?: string[] }).about?.[0] ?? SITE_CONFIG.images.workshop} alt="We buy bikes" fill className="object-cover" />
            </div>
            <div className="space-y-6 text-charcoal-300 leading-relaxed">
              <h2 className="section-title text-2xl">We Buy Motorbikes of All Makes and Models</h2>
              <p>
                Whether you&apos;re upgrading, downsizing, or simply moving on, {SITE_CONFIG.name} is always in the market for quality used motorcycles. We buy outright or welcome your bike as part exchange against any bike in our stock.
              </p>
              <p>
                As a family-run dealer with over 500 bikes sold, we understand what riders want. We value honesty and transparency — you&apos;ll get a fair, no-pressure valuation and a straightforward sale.
              </p>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Banknote, title: "Cash or Bank Transfer", desc: "Payment by cash or same-day bank transfer. No hidden fees or deductions." },
              { icon: Truck, title: "Nationwide Collection", desc: "We collect from anywhere in the UK. If we want your bike, we&apos;ll come and get it." },
              { icon: FileCheck, title: "Finance Settlement", desc: "We can pay off outstanding hire purchase or loan agreements on your behalf." },
              { icon: Shield, title: "HPI Checked", desc: "All bikes we buy are HPI checked. We handle the paperwork so you don&apos;t have to." },
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
            <h2 className="section-title mb-6">How It Works</h2>
            <div className="gold-divider mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold-600 text-charcoal-950 font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-oswald)" }}>1</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">Call or Visit</h3>
                  <p className="text-charcoal-400 text-sm">Get in touch with details of your bike — make, model, year, mileage and condition. We&apos;ll give you an initial indication over the phone or arrange a viewing at our Sittingbourne showroom.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold-600 text-charcoal-950 font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-oswald)" }}>2</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">Valuation</h3>
                  <p className="text-charcoal-400 text-sm">We inspect your bike and provide a fair, no-obligation valuation. If you have outstanding finance, we&apos;ll obtain a settlement figure and factor that into the offer.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold-600 text-charcoal-950 font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-oswald)" }}>3</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">Payment & Collection</h3>
                  <p className="text-charcoal-400 text-sm">Once we agree a price, we arrange collection (if needed) and payment. Cash or bank transfer — you choose. We handle all documentation including V5 transfer.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What we buy */}
          <div className="mt-20 bg-charcoal-900 border border-charcoal-800 p-8 sm:p-10">
            <h2 className="section-title text-xl mb-6">What We Buy</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-charcoal-300">
              {["All makes and models", "Sportsbikes, naked, adventure, cruisers", "Scooters and L-plate machines", "Trail and enduro bikes", "Classic and retro motorcycles", "Bikes with outstanding finance"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-charcoal-900 border border-charcoal-800 border-l-4 border-l-gold-600 p-8 sm:p-10 text-center">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Ready to Sell?</h3>
            <p className="text-charcoal-400 mb-6 max-w-xl mx-auto">Give us a call to discuss your bike. No obligation — we&apos;re happy to talk through the process and answer any questions.</p>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-gold px-10 py-4 inline-flex items-center gap-2">
              <Phone size={20} />
              {SITE_CONFIG.phone}
            </a>
            <p className="text-charcoal-500 text-sm mt-4">Or <Link href="/part-exchange" className="text-gold-500 hover:text-gold-400">use your bike as part exchange</Link> towards your next purchase</p>
          </div>
        </div>
      </section>
    </>
  );
}
