import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/data";

export default function FinanceBanner() {
  return (
    <section className="relative py-10 sm:py-16 overflow-hidden bg-charcoal-950 border-y border-charcoal-800">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${(SITE_CONFIG.images as { sellingHeroes?: string[] }).sellingHeroes?.[0] ?? SITE_CONFIG.images.hero})`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/95 to-charcoal-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {SITE_CONFIG.images.partnerLogos?.closeBrothers && (
              <div className="shrink-0">
                <Image
                  src={SITE_CONFIG.images.partnerLogos.closeBrothers}
                  alt="Close Brothers Motor Finance"
                  width={160}
                  height={70}
                  className="object-contain opacity-90 w-28 sm:w-40 h-auto"
                />
              </div>
            )}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                We like to say <span className="text-gold-400">YES</span>
              </h2>
              <p className="text-charcoal-300 text-base sm:text-lg">
                Finance decisions in{" "}
                <span className="inline-block bg-gold-600 text-charcoal-950 font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 text-sm sm:text-lg">
                  60 seconds
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <Link href="/finance" className="btn-gold px-4 sm:px-8 py-3.5 sm:py-4 text-sm whitespace-nowrap justify-center min-h-[44px] items-center">
              Apply Now
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="btn-outline px-4 sm:px-8 py-3.5 sm:py-4 text-sm whitespace-nowrap justify-center min-h-[44px] items-center text-center"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
        <p className="text-charcoal-500 text-[10px] sm:text-xs mt-4 sm:mt-6 max-w-2xl leading-relaxed">
          * Finance is provided by Close Brothers Finance, One Central Square, Cardiff, CF10 1FS. Available to UK residents aged 18+, subject to status. Terms and Conditions apply.
        </p>
      </div>
    </section>
  );
}
