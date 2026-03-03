import { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import WorkshopBookingForm from "@/components/WorkshopBookingForm";
import TyreLookup from "@/components/TyreLookup";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG, SERVICE_PRICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book Tyres",
  description: `Book motorbike tyres at ${SITE_CONFIG.name}. Michelin, Bridgestone, Continental in stock.`,
};

export default function BookTyresPage() {
  const tyresImg = (SITE_CONFIG.images as { workshopServiceImages?: string[] }).workshopServiceImages?.[3] ?? SITE_CONFIG.images.adventure;
  return (
    <>
      <PageHero
        subtitle="Workshop"
        title="Book Tyres"
        description="Michelin, Bridgestone and Continental. Most popular sizes in stock. Fit & balance from £20/wheel. Same-day fitting when in stock."
        breadcrumbs={[{ label: "Workshop", href: "/servicing" }, { label: "Book Tyres" }]}
        backgroundImage={tyresImg}
      />
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative aspect-video rounded overflow-hidden mb-12">
            <ImageWithFallback src={tyresImg} alt="Tyres" fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <div className="space-y-6 text-charcoal-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  Premium Tyre Brands
                </h2>
                <p>
                  We stock Michelin, Bridgestone and Continental — the leading brands for motorcycle tyres. Most popular sizes are in stock for ride in, ride out service. If we don&apos;t have your size, we can usually order for the following day.
                </p>
                <div className="space-y-2">
                  <p className="text-gold-400 font-medium">Pricing</p>
                  <p>Fit & Balance (loose wheel): £{SERVICE_PRICES.tyres.fitBalanceLoose}/wheel</p>
                  <p>Fit & Balance (ride in/out): £{SERVICE_PRICES.tyres.fitBalanceRideIn}/wheel</p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <img src={SITE_CONFIG.images.tyreBrands.michelin} alt="Michelin" className="h-10 w-auto object-contain opacity-80" />
                  <img src={SITE_CONFIG.images.tyreBrands.bridgestone} alt="Bridgestone" className="h-10 w-auto object-contain opacity-80" />
                  <img src={SITE_CONFIG.images.tyreBrands.continental} alt="Continental" className="h-10 w-auto object-contain opacity-80" />
                </div>
              </div>
              <TyreLookup />
            </div>
            <div className="bg-charcoal-900 border border-charcoal-800 p-10">
              <WorkshopBookingForm serviceType="tyres" />
              <div className="mt-8 pt-6 border-t border-charcoal-800">
                <Link href="/servicing" className="text-gold-500 hover:text-gold-400 text-sm">
                  ← Full workshop & tyre pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
