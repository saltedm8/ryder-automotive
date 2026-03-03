import { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { Phone, Calendar, Shield, Key, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rental Booking",
  description:
    `Book motorcycle rental at ${SITE_CONFIG.name}, Sittingbourne. Daily and weekly rates. Adventure bikes, touring, sport. Contact us for availability and pricing.`,
};

export default function RentalBookingPage() {
  return (
    <>
      <PageHero
        subtitle="Services"
        title="Rental Booking"
        description="Hire a motorcycle for the day, weekend or longer. Contact us for availability and pricing."
        breadcrumbs={[{ label: "Rental Booking" }]}
        backgroundImage={(SITE_CONFIG.images as { about?: string[] }).about?.[1] ?? SITE_CONFIG.images.adventure}
      />

      <section className="py-16 sm:py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-video rounded overflow-hidden">
              <ImageWithFallback src={(SITE_CONFIG.images as { about?: string[] }).about?.[2] ?? SITE_CONFIG.images.adventure} alt="Motorcycle rental" fill className="object-cover" />
            </div>
            <div className="space-y-6 text-charcoal-300 leading-relaxed">
              <h2 className="section-title text-2xl">Hire a Motorcycle</h2>
              <p>
                Whether you&apos;re trying before you buy, need a bike for a weekend tour, or want to experience a different machine — {SITE_CONFIG.name} offers motorcycle rental for short and longer periods. We have a range of bikes available, including adventure and touring models.
              </p>
              <p>
                Our rental fleet is maintained to the same standards as our showroom stock. All bikes are fully serviced, insured and ready to ride. We&apos;re based in Sittingbourne, Kent — ideal for exploring Kent, East Sussex and the South East.
              </p>
            </div>
          </div>

          {/* What we offer */}
          <div className="mt-20">
            <h2 className="section-title mb-6">What We Offer</h2>
            <div className="gold-divider mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Calendar, title: "Daily & Weekly Rates", desc: "Hire by the day, weekend or week. Longer stays available — ask for a quote." },
                { icon: Key, title: "Range of Bikes", desc: "Adventure, touring and sport bikes. Contact us for current availability and models." },
                { icon: Shield, title: "Fully Insured", desc: "All rentals include insurance. Full terms and excess details provided when you book." },
                { icon: CheckCircle2, title: "Serviced & Ready", desc: "Every bike is professionally maintained. Ride in, ride out — no hassle." },
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
          </div>

          {/* Requirements */}
          <div className="mt-16 bg-charcoal-900 border border-charcoal-800 p-8">
            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Rental Requirements</h3>
            <p className="text-charcoal-300 mb-4 text-sm leading-relaxed">
              To hire a motorcycle from us you&apos;ll need a full UK motorcycle licence (or appropriate category). We may require a deposit and will need to see proof of identity and address. Age restrictions may apply depending on the bike. Full terms and conditions are provided when you book.
            </p>
            <ul className="space-y-2 text-charcoal-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Full UK motorcycle licence</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Proof of ID and address</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Deposit (refundable on return)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-charcoal-900 border border-charcoal-800 border-l-4 border-l-gold-600 p-8 sm:p-10 text-center">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Book Your Rental</h3>
            <p className="text-charcoal-400 mb-6 max-w-xl mx-auto">
              For rental bookings, please call us to check availability, discuss your requirements and get a quote. Our fleet changes regularly — we&apos;ll let you know what&apos;s available for your dates.
            </p>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-gold px-10 py-4 inline-flex items-center gap-2">
              <Phone size={20} />
              {SITE_CONFIG.phone}
            </a>
            <p className="text-charcoal-500 text-sm mt-4">Tue–Sat: 09:00–17:00</p>
          </div>
        </div>
      </section>
    </>
  );
}
