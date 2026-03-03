import { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import WorkshopBookingForm from "@/components/WorkshopBookingForm";
import MOTReminderForm from "@/components/MOTReminderForm";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG, SERVICE_PRICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book MOT",
  description: `Book your motorbike MOT at ${SITE_CONFIG.name}. MOTs from £29.65.`,
};

export default function BookMotPage() {
  const motImg = (SITE_CONFIG.images as { workshopServiceImages?: string[] }).workshopServiceImages?.[1] ?? SITE_CONFIG.images.workshop;
  return (
    <>
      <PageHero
        subtitle="Workshop"
        title="Book MOT"
        description={`MOTs from just £${SERVICE_PRICES.mot}. Fully equipped workshop with experienced technicians. Book your annual test today.`}
        breadcrumbs={[{ label: "Workshop", href: "/servicing" }, { label: "Book MOT" }]}
        backgroundImage={motImg}
      />
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative aspect-video rounded overflow-hidden mb-12">
            <ImageWithFallback src={motImg} alt="MOT testing" fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6 text-charcoal-300 leading-relaxed">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                Annual MOT Testing
              </h2>
              <p>
                All motorcycles over 3 years old require an annual MOT. Our workshop is fully equipped and our technicians are experienced with all makes and models.
              </p>
              <div className="bg-gold-600/10 border border-gold-800/50 p-6 rounded">
                <p className="text-3xl font-bold text-gold-400 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  MOTs = £{SERVICE_PRICES.mot}
                </p>
                <p className="text-charcoal-400 text-sm">Fixed price. No hidden charges.</p>
              </div>
              <p>
                We&apos;ll get you in as soon as possible. If your bike fails, we can often carry out repairs the same day — just ask.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-charcoal-900 border border-charcoal-800 p-10">
                <WorkshopBookingForm serviceType="mot" />
                <div className="mt-8 pt-6 border-t border-charcoal-800">
                  <Link href="/servicing" className="text-gold-500 hover:text-gold-400 text-sm">
                    ← View full workshop services
                  </Link>
                </div>
              </div>
              <div className="bg-charcoal-900 border border-charcoal-800 p-10">
                <MOTReminderForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
