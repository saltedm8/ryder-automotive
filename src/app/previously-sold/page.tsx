import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SoldBikeCard from "@/components/SoldBikeCard";
import { PREVIOUSLY_SOLD, SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Previously Sold",
  description:
    "Browse our previously sold motorcycles. Over 2,200 bikes sold. See the quality and value we offer.",
};

export default function PreviouslySoldPage() {
  return (
    <>
      <PageHero
        subtitle="Sold Archive"
        title="Previously Sold"
        description="Over 2,200 motorcycles sold. See the quality and value we offer. New stock arrives daily."
        breadcrumbs={[{ label: "Previously Sold" }]}
        backgroundImage={(SITE_CONFIG.images as { sellingHeroes?: string[] }).sellingHeroes?.[1] ?? SITE_CONFIG.images.kove}
      />

      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="section-title text-2xl mb-2">Recently Sold</h2>
            <div className="gold-divider" />
            <p className="text-charcoal-400 mt-4 max-w-xl">
              A sample of bikes we&apos;ve sold. New stock arrives daily.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {PREVIOUSLY_SOLD.map((bike, i) => (
              <SoldBikeCard key={`${bike.year}-${bike.make}-${bike.model}-${i}`} year={bike.year} make={bike.make} model={bike.model} image={bike.image} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/used-bikes" className="btn-outline">
              View Current Stock
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
