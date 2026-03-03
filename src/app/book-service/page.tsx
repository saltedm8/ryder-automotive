import { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { Wrench } from "lucide-react";
import WorkshopBookingForm from "@/components/WorkshopBookingForm";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG, SERVICE_PRICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book a Service",
  description: `Book motorbike servicing at ${SITE_CONFIG.name}, Sittingbourne. Fixed-price menu servicing.`,
};

export default function BookServicePage() {
  const workshopImg = (SITE_CONFIG.images as { workshopServiceImages?: string[] }).workshopServiceImages?.[0] ?? SITE_CONFIG.images.workshop;
  return (
    <>
      <PageHero
        subtitle="Workshop"
        title="Book a Service"
        description="Fixed-price menu servicing with no hidden charges. Oil changes from £55, full services from £252. TEXA diagnostics available."
        breadcrumbs={[{ label: "Workshop", href: "/servicing" }, { label: "Book Service" }]}
        backgroundImage={workshopImg}
      />
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative aspect-[21/9] rounded overflow-hidden mb-12">
            <ImageWithFallback src={workshopImg} alt="Workshop" fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6 text-charcoal-300 leading-relaxed">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                What We Offer
              </h2>
              <p>
                Our workshop is fully equipped with the latest TEXA diagnostics. We use fixed-price menu servicing where possible — no catches, no surprises, no hidden charges.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Wrench size={16} className="text-gold-500 shrink-0 mt-0.5" />
                  Oil services from £{SERVICE_PRICES.oilService[0].price}
                </li>
                <li className="flex items-start gap-2">
                  <Wrench size={16} className="text-gold-500 shrink-0 mt-0.5" />
                  Full services from £{SERVICE_PRICES.fullService[0].full}
                </li>
                <li className="flex items-start gap-2">
                  <Wrench size={16} className="text-gold-500 shrink-0 mt-0.5" />
                  Diagnostics & service light reset available
                </li>
              </ul>
              <p className="text-gold-400 font-medium">
                Winter deals: Free collection within 20 miles on Interim or Full Service. Free ACF50 with any Full Service.
              </p>
            </div>
            <div className="bg-charcoal-900 border border-charcoal-800 p-10">
              <WorkshopBookingForm serviceType="servicing" />
              <div className="mt-8 pt-6 border-t border-charcoal-800">
                <Link href="/servicing" className="text-gold-500 hover:text-gold-400 text-sm">
                  ← Full workshop services & pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
