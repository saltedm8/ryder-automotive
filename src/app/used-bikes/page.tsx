import { Metadata } from "next";
import Link from "next/link";
import { SlidersHorizontal, CreditCard } from "lucide-react";
import PageHero from "@/components/PageHero";
import BikeCard from "@/components/BikeCard";
import { LATEST_BIKES, MAKES, BODY_STYLES, SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Used Bikes for Sale",
  description:
    "Browse our full stock of used motorbikes for sale in Sittingbourne, Kent. Finance available on all bikes. All types of credit accepted.",
};

const bodyAliases: Record<string, string> = { tourer: "adventure" };

export default async function UsedBikesPage({
  searchParams,
}: {
  searchParams: Promise<{ body?: string; style?: string }>;
}) {
  const params = await searchParams;
  const bodyFilter = params.body || params.style;
  const filteredBikes = bodyFilter
    ? LATEST_BIKES.filter((b) => {
        const style = (bodyAliases[bodyFilter] || bodyFilter).toLowerCase();
        return b.bodyStyle?.toLowerCase() === style;
      })
    : LATEST_BIKES;
  return (
    <>
      <PageHero
        subtitle="Showroom"
        title="Used Bikes for Sale"
        description="We stock a range of motorcycles to suit all budgets and lifestyles. Our stock list is updated daily — call us if you don't see what you're looking for."
        breadcrumbs={[{ label: "Used Bikes" }]}
        backgroundImage={(SITE_CONFIG.images as { about?: string[] }).about?.[1] ?? SITE_CONFIG.images.sellingHeroes?.[0] ?? SITE_CONFIG.images.hero}
      />

      {/* Filter Bar */}
      <div className="bg-charcoal-900/95 backdrop-blur-sm border-b border-charcoal-800 py-6 sticky top-16 lg:top-20 z-40 transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex items-center gap-2 text-gold-500 mr-4 hidden sm:flex">
              <SlidersHorizontal size={14} />
              <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-oswald)" }}>
                Filter
              </span>
            </div>
            <div className="flex-1 min-w-[140px]">
              <select className="select-dark text-xs" aria-label="Filter by make">
                <option value="">Any Make</option>
                {MAKES.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[140px]">
              <select className="select-dark text-xs" aria-label="Filter by style">
                <option value="">Any Style</option>
                {BODY_STYLES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[140px]">
              <select className="select-dark text-xs" aria-label="Filter by max price">
                <option value="">Max Price</option>
                {[3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 14500].map((p) => (
                  <option key={p} value={p}>£{p.toLocaleString()}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[140px]">
              <select className="select-dark text-xs" aria-label="Sort">
                <option value="newest">Newest First</option>
                <option value="price-asc">Price Low–High</option>
                <option value="price-desc">Price High–Low</option>
                <option value="mileage">Lowest Mileage</option>
              </select>
            </div>
            <Link href="/finance" className="btn-gold py-3 px-6 text-sm whitespace-nowrap flex items-center gap-2">
              <CreditCard size={16} />
              Apply for Finance
            </Link>
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="py-12 bg-charcoal-950 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-charcoal-400 text-sm">
              Showing <span className="text-white font-medium">{filteredBikes.length}</span> bikes
              {bodyFilter && (
                <span className="ml-2 text-gold-500">
                  · Filtered by {BODY_STYLES.find((s) => s.value === bodyFilter || (bodyFilter === "tourer" && s.value === "adventure"))?.label || bodyFilter}
                </span>
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/used-bikes"
                className={`px-3 py-1.5 border text-xs transition-all duration-300 ease-out ${
                  !bodyFilter
                    ? "bg-gold-600/20 border-gold-600 text-gold-400"
                    : "bg-charcoal-900 border-charcoal-700 text-charcoal-400 hover:border-gold-600 hover:text-gold-400"
                }`}
                style={{ fontFamily: "var(--font-oswald)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
              >
                All
              </Link>
              {BODY_STYLES.map((s) => (
                <Link
                  key={s.value}
                  href={bodyFilter === s.value ? "/used-bikes" : `?body=${s.value}`}
                  className={`px-3 py-1.5 border text-xs transition-all duration-300 ease-out ${
                    bodyFilter === s.value || (bodyFilter === "tourer" && s.value === "adventure")
                      ? "bg-gold-600/20 border-gold-600 text-gold-400"
                      : "bg-charcoal-900 border-charcoal-700 text-charcoal-400 hover:border-gold-600 hover:text-gold-400"
                  }`}
                  style={{ fontFamily: "var(--font-oswald)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBikes.length > 0 ? filteredBikes.map((bike) => (
              <BikeCard key={bike.id} {...bike} />
            )) : (
              <div className="col-span-full text-center py-16 filter-card-enter">
                <p className="text-charcoal-400 mb-4">No bikes match this filter.</p>
                <Link href="/used-bikes" className="btn-outline">View All Bikes</Link>
              </div>
            )}
          </div>

          {/* Finance note */}
          <div className="mt-16 p-6 bg-charcoal-900 border border-charcoal-800 border-l-4 border-l-gold-600 text-sm text-charcoal-400 leading-relaxed">
            <strong className="text-white">Finance available on all vehicles.</strong> Subject to status.
            Representative example: Deposit 10%, 48 months, 13.9% APR. All types of credit considered.
            Finance provided by Close Brothers Finance. We are a credit broker, not a lender.
          </div>
        </div>
      </section>
    </>
  );
}
