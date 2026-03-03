import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Wrench, Shield, Award, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SERVICE_PRICES, SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Workshop Services",
  description:
    "Motorbike servicing, MOTs and tyres in Sittingbourne. Fixed-price menu servicing, no hidden charges. Michelin, Bridgestone, Continental tyres in stock.",
};

export default function ServicingPage() {
  return (
    <>
      <PageHero
        subtitle="Workshop"
        title="Workshop Services"
        description="Competitively priced servicing, MOTs and tyres. Fixed-price menu servicing with no catches, no surprises, and no hidden charges."
        breadcrumbs={[{ label: "Workshop Services" }]}
        backgroundImage={(SITE_CONFIG.images as { workshopServiceImages?: string[] }).workshopServiceImages?.[0] ?? SITE_CONFIG.images.workshop}
      />

      {/* Winter deals */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gold-600/10 border border-gold-800/50 p-6">
              <p className="text-gold-400 font-bold text-sm uppercase tracking-wider mb-2">Winter Servicing Deals</p>
              <ul className="text-charcoal-300 text-sm space-y-1">
                <li>• Free collection within 20 miles on any Interim or Full Service</li>
                <li>• Free ACF50 Treatment with any Full Service</li>
              </ul>
            </div>
            <div className="bg-gold-600/10 border border-gold-800/50 p-6">
              <p className="text-gold-400 font-bold text-sm uppercase tracking-wider mb-2">Winter Sale</p>
              <p className="text-charcoal-300 text-sm">Up to 25% off selected items</p>
            </div>
          </div>
        </div>
      </section>

          {/* Bike imagery */}
      <section className="py-12 bg-charcoal-900 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative aspect-[21/9] rounded overflow-hidden">
            <ImageWithFallback
              src={(SITE_CONFIG.images as { workshopServiceImages?: string[] }).workshopServiceImages?.[0] ?? SITE_CONFIG.images.workshop}
              alt="Motorcycle in workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

          {/* Services grid */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Wrench, title: "Servicing & Repairs", href: "#servicing" },
              { icon: Shield, title: "MOT", href: "#mot" },
              { icon: Award, title: "Tyres", href: "#tyres" },
            ].map(({ icon: Icon, title, href }) => (
              <a key={title} href={href} className="card-dark p-8 flex items-center gap-6 group">
                <div className="w-16 h-16 bg-gold-600/10 border border-gold-800/30 flex items-center justify-center group-hover:bg-gold-600/20">
                  <Icon size={28} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                  <p className="text-gold-500 text-xs uppercase tracking-wider mt-1">Learn more →</p>
                </div>
              </a>
            ))}
          </div>

          {/* MOT */}
          <div id="mot" className="mb-20 scroll-mt-24">
            <h2 className="section-title mb-6">MOT</h2>
            <div className="gold-divider mb-8" />
            <div className="bg-charcoal-900 border border-charcoal-800 p-8 mb-8">
              <p className="text-4xl font-bold text-gold-400 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                MOTs = £{SERVICE_PRICES.mot}
              </p>
              <p className="text-charcoal-300">Call {SITE_CONFIG.phone} to book or book online.</p>
            </div>
          </div>

          {/* Tyres */}
          <div id="tyres" className="mb-20 scroll-mt-24">
            <h2 className="section-title mb-6">Tyres</h2>
            <div className="gold-divider mb-8" />
            <div className="flex justify-center gap-8 mb-8">
              <img src={SITE_CONFIG.images.tyreBrands.michelin} alt="Michelin" className="h-10 w-auto object-contain opacity-80" />
              <img src={SITE_CONFIG.images.tyreBrands.bridgestone} alt="Bridgestone" className="h-10 w-auto object-contain opacity-80" />
              <img src={SITE_CONFIG.images.tyreBrands.continental} alt="Continental" className="h-10 w-auto object-contain opacity-80" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-charcoal-300 mb-6">
                  We stock Michelin, Bridgestone, and Continental. Most popular sizes in stock for ride in, ride out service.
                  If we don&apos;t have your size, we can usually order for the following day.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between py-2 border-b border-charcoal-800">
                    <span className="text-charcoal-400">Fit & Balance (Loose Wheel)</span>
                    <span className="text-gold-400 font-bold">£{SERVICE_PRICES.tyres.fitBalanceLoose}/wheel</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-charcoal-800">
                    <span className="text-charcoal-400">Fit & Balance (Ride In/Ride Out)</span>
                    <span className="text-gold-400 font-bold">£{SERVICE_PRICES.tyres.fitBalanceRideIn}/wheel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicing */}
          <div id="servicing" className="mb-20 scroll-mt-24">
            <h2 className="section-title mb-6">Servicing Centre</h2>
            <div className="gold-divider mb-8" />
            <p className="text-charcoal-300 mb-10 max-w-3xl">
              With the latest electronic diagnostic equipment, a fully equipped workshop, and fixed price menu servicing,
              your bike is in safe hands. We use fixed-price menu-based servicing where possible — no catches, no surprises,
              no hidden charges. Standard hourly rate £95 inc. VAT where work is charged by the hour.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Oil Service (change oil & filter & test ride)</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold-700">
                    <th className="text-left py-3 text-charcoal-400 font-medium">Engine Size</th>
                    <th className="text-right py-3 text-gold-400">Price</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal-300">
                  {SERVICE_PRICES.oilService.map((row) => (
                    <tr key={row.size} className="border-b border-charcoal-800">
                      <td className="py-3">{row.size}</td>
                      <td className="text-right text-gold-400 font-medium">£{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Fixed Price Menu (Inc Parts, Labour & VAT)</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold-700">
                    <th className="text-left py-3 text-charcoal-400 font-medium">Brand</th>
                    <th className="text-right py-3 text-charcoal-400 font-medium">Base</th>
                    <th className="text-right py-3 text-charcoal-400 font-medium">Interim</th>
                    <th className="text-right py-3 text-charcoal-400 font-medium">Full</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal-300">
                  {SERVICE_PRICES.fullService.map((row) => (
                    <tr key={row.brand} className="border-b border-charcoal-800">
                      <td className="py-3">{row.brand}</td>
                      <td className="text-right text-gold-400">£{row.base}</td>
                      <td className="text-right text-gold-400">£{row.interim}</td>
                      <td className="text-right text-gold-400">£{row.full}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Additional Items</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold-700">
                    <th className="text-left py-3 text-charcoal-400 font-medium">Service</th>
                    <th className="text-right py-3 text-charcoal-400 font-medium">Up to 125cc</th>
                    <th className="text-right py-3 text-charcoal-400 font-medium">126-500cc</th>
                    <th className="text-right py-3 text-charcoal-400 font-medium">501-900cc</th>
                    <th className="text-right py-3 text-charcoal-400 font-medium">901cc+</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal-300">
                  {SERVICE_PRICES.additional.map((row) => (
                    <tr key={row.service} className="border-b border-charcoal-800">
                      <td className="py-3">{row.service}</td>
                      <td className="text-right text-gold-400">£{row.upTo125}</td>
                      <td className="text-right text-gold-400">£{row.to500}</td>
                      <td className="text-right text-gold-400">£{row.to900}</td>
                      <td className="text-right text-gold-400">£{row.over900}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-charcoal-500 text-sm mb-8">
              Diagnostics: £{SERVICE_PRICES.diagnostics} · Service light reset: £{SERVICE_PRICES.serviceLight}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-charcoal-900 border border-charcoal-800 border-l-4 border-l-gold-600 p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Book Your Service</h3>
            <p className="text-charcoal-300 mb-6">Call us or book online. We never carry out chargeable work without your approval.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={`tel:${SITE_CONFIG.phone}`} className="btn-gold">
                <Phone size={14} />
                {SITE_CONFIG.phone}
              </a>
              <Link href="/book-service" className="btn-outline">Book Online</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
