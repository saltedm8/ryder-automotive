import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "@/components/ImageWithFallback";
import HeroSlides from "@/components/HeroSlides";
import {
  Phone, ChevronRight, Award, Shield, Wrench, Star,
  ArrowRight, Zap, Map, DollarSign
} from "lucide-react";
import BikeCard from "@/components/BikeCard";
import FinanceBanner from "@/components/FinanceBanner";
import BudgetSlider from "@/components/BudgetSlider";
import { LATEST_BIKES, BODY_STYLES, MAKES, REVIEWS, SITE_CONFIG } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-charcoal-950">
        {/* Background - rotating hero slides */}
        <div className="absolute inset-0">
          <HeroSlides
            images={SITE_CONFIG.images.heroSlides}
            intervalMs={5000}
            className="opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-charcoal-950/20" />
        </div>

        {/* Decorative diagonal lines */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute border-r border-gold-500"
              style={{
                right: `${i * 80}px`,
                top: 0,
                bottom: 0,
                transform: "skewX(-20deg)",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
          <div className="max-w-2xl relative z-10">
            <p className="section-subtitle mb-3 sm:mb-4">Sittingbourne, Kent</p>
            <div className="gold-divider" />
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mt-4 sm:mt-6 mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Where{" "}
              <span className="gold-shimmer">
                Passion
              </span>
              <br />
              Meets the Road.
            </h1>
            <p className="text-charcoal-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-lg">
              Family-run motorcycle specialists. We stock the finest used bikes, offer
              expert workshop services, and are the KOVE dealer for the South East.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-xl">
              <Link href="/used-bikes" className="btn-gold flex px-4 py-3.5 text-xs sm:text-sm justify-center min-h-[44px] items-center gap-1.5">
                Browse Stock
                <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
              </Link>
              <Link href="/finance" className="btn-gold flex px-4 py-3.5 text-xs sm:text-sm justify-center min-h-[44px] items-center">
                Finance
              </Link>
              <Link href="/kove" className="btn-outline flex px-4 py-3.5 text-xs sm:text-sm justify-center min-h-[44px] items-center">
                KOVE Hub
              </Link>
              <Link href="/contact" className="btn-outline flex px-4 py-3.5 text-xs sm:text-sm justify-center min-h-[44px] items-center">
                Visit Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:flex sm:gap-12 gap-6 mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-charcoal-800">
              {[
                { value: "2015", label: "Est." },
                { value: "500+", label: "Bikes Sold" },
                { value: "5★", label: "Reviews" },
                { value: "KOVE", label: "Dealer" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-bold text-gold-400"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-charcoal-500 text-xs uppercase tracking-wider mt-0.5"
                    style={{ fontFamily: "var(--font-oswald)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEARCH BAR ────────────────────────────────────────────── */}
      <section className="bg-charcoal-900 border-y border-charcoal-800 py-6 sm:py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-end">
            <div className="flex-1">
              <label className="section-subtitle block mb-2 text-[10px]">Make / Brand</label>
              <select className="select-dark" aria-label="Select make">
                <option value="">Any Make</option>
                {MAKES.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="section-subtitle block mb-2 text-[10px]">Body Style</label>
              <select className="select-dark" aria-label="Select body style">
                <option value="">Any Style</option>
                {BODY_STYLES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="section-subtitle block mb-2 text-[10px]">Max Price</label>
              <select className="select-dark" aria-label="Select max price">
                <option value="">Any Price</option>
                {[3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 14500].map((p) => (
                  <option key={p} value={p}>£{p.toLocaleString()}</option>
                ))}
              </select>
            </div>
            <Link href="/used-bikes" className="btn-gold py-3 px-8 whitespace-nowrap">
              Search Bikes
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BODY STYLE GRID - with bike imagery ────────────────────── */}
      <section className="py-12 sm:py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Browse by Category</p>
            <h2 className="section-title">Find Your Ride</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BODY_STYLES.map((style) => {
              const iconMap: Record<string, string> = SITE_CONFIG.images.bodyStyleIcons || {};
              const styleImage = iconMap[style.value] || LATEST_BIKES.find((b) => b.bodyStyle === style.value)?.image || SITE_CONFIG.images.hero;
              return (
                <Link
                  key={style.value}
                  href={`/used-bikes?body=${style.value}`}
                  className="group relative overflow-hidden bg-charcoal-900 border border-charcoal-800 hover:border-gold-600 transition-all duration-300 flex flex-col"
                >
                  {/* Fixed-height image area - object-contain prevents blur from upscaling small icons */}
                  <div className="relative h-24 md:h-28 flex-shrink-0 bg-charcoal-950">
                    <Image
                      src={styleImage}
                      alt={style.label}
                      fill
                      className="object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                  <div className="flex-1 p-4 flex items-center">
                    <p className="text-white text-xs uppercase tracking-wider group-hover:text-gold-400 transition-colors font-semibold" style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.1em" }}>
                      {style.label}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── LATEST ARRIVALS ───────────────────────────────────────── */}
      <section className="py-12 sm:py-20 bg-black/30 relative pin-stripe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-subtitle mb-3">Fresh in Stock</p>
              <h2 className="section-title">Latest Arrivals</h2>
              <div className="gold-divider" />
            </div>
            <Link href="/used-bikes" className="btn-outline text-sm self-start md:self-auto">
              View All Stock
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {LATEST_BIKES.slice(0, 8).map((bike) => (
              <BikeCard key={bike.id} {...bike} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINANCE BANNER ─────────────────────────────────────────── */}
      <FinanceBanner />

      {/* ─── BUDGET FINANCE BANNERS ────────────────────────────────── */}
      <section className="py-10 sm:py-16 bg-charcoal-950 border-y border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <p className="section-subtitle mb-3">Finance Available</p>
            <h2 className="section-title">Find Your Budget</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-charcoal-400 mt-4 text-sm">
              All types of credit accepted. Finance decisions in 60 seconds.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6 sm:mb-8">
            <div className="lg:col-span-1">
              <BudgetSlider />
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { budget: "Up to £100/mo", desc: "Great starter bikes and commuters", href: "/used-bikes?budget=100", img: SITE_CONFIG.images.budgetBoxes?.[0] || SITE_CONFIG.images.hero },
              { budget: "Up to £150/mo", desc: "Middleweight adventure and naked bikes", href: "/used-bikes?budget=150", img: SITE_CONFIG.images.budgetBoxes?.[1] || SITE_CONFIG.images.adventure },
              { budget: "£200+/mo", desc: "Premium and performance machines", href: "/used-bikes?budget=200", img: SITE_CONFIG.images.budgetBoxes?.[2] || SITE_CONFIG.images.sport },
            ].map((item) => (
              <Link
                key={item.budget}
                href={item.href}
                className="group corner-accent relative bg-charcoal-900 border border-charcoal-800 hover:border-gold-600 overflow-hidden transition-all duration-300 hover:shadow-gold"
              >
                <div className="absolute inset-0 opacity-40 group-hover:opacity-55 transition-opacity">
                  <ImageWithFallback src={item.img} alt="" fill className="object-cover" />
                </div>
                <div className="relative p-8">
                <p
                  className="text-3xl font-bold text-gold-400 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.budget}
                </p>
                <p className="text-charcoal-400 text-sm mb-6">{item.desc}</p>
                <span
                  className="text-gold-500 text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-gold-300"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Search Now <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── KOVE SECTION ───────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-charcoal-950 border-y border-gold-900/30">
        <div className="absolute inset-0">
          <Image
            src={(SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos?.[1] ?? (SITE_CONFIG.images as { koveBikePhotos?: string[] }).koveBikePhotos?.[0] ?? SITE_CONFIG.images.hero}
            alt="KOVE motorcycle"
            fill
            className="object-cover object-right opacity-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent" />
        </div>
        {/* KOVE dealer badge */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-6 md:right-12 z-10">
          <div className="inline-flex items-center gap-2 bg-gold-600 px-3 py-1.5 sm:px-4 sm:py-2 text-charcoal-950">
            <span className="font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs" style={{ fontFamily: "var(--font-oswald)" }}>
              KOVE Dealer · South East
            </span>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            {SITE_CONFIG.images.brandLogos?.KOVE && (
              <div className="mb-4 sm:mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SITE_CONFIG.images.brandLogos.KOVE} alt="KOVE" className="h-12 sm:h-14 md:h-16 w-auto object-contain opacity-90" />
              </div>
            )}
            <p className="section-subtitle mb-3 sm:mb-4">KOVE Motorcycles</p>
            <div className="gold-divider" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              KOVE Dealer
              <br />
              <span className="gold-shimmer">South East England</span>
            </h2>
            <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10">
              {SITE_CONFIG.name} is the KOVE dealer for the South East — supplying Kent and East Sussex
              from our Sittingbourne showroom. New adventure and rally bikes in stock. Performance-driven
              machines built by riders for riders.
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4">
              <Link href="/kove" className="btn-gold px-4 sm:px-8 py-3 sm:py-3.5 text-sm justify-center min-h-[44px] items-center">
                KOVE Hub
                <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
              </Link>
              <Link href="/new-bikes" className="btn-outline px-4 py-3 sm:py-3.5 text-sm justify-center min-h-[44px] items-center">
                View KOVE Stock
              </Link>
              <Link href="/kove-south-east#videos" className="btn-ghost border border-charcoal-700 px-4 py-3 sm:px-6 sm:py-3 text-sm justify-center min-h-[44px] items-center hover:border-gold-700">
                Watch Videos
              </Link>
              <Link href="/kove-south-east" className="btn-ghost border border-charcoal-700 px-4 py-3 sm:px-6 sm:py-3 text-sm justify-center min-h-[44px] items-center hover:border-gold-700">
                About KOVE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES STRIP ────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Workshop</p>
            <h2 className="section-title">Expert Servicing</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wrench, title: "Servicing", desc: "Fixed-price menu servicing from oil changes to full services. No hidden charges.", href: "/servicing", img: (SITE_CONFIG.images as { workshopServiceImages?: string[] }).workshopServiceImages?.[0] ?? SITE_CONFIG.images.workshop },
              { icon: Shield, title: "MOT", desc: "MOTs from just £29.65. Fully equipped workshop with experienced technicians.", href: "/book-mot", img: (SITE_CONFIG.images as { workshopServiceImages?: string[] }).workshopServiceImages?.[1] ?? SITE_CONFIG.images.hero },
              { icon: Zap, title: "Diagnostics", desc: "Latest TEXA diagnostics equipment. Fault code reading, reset and more.", href: "/servicing", img: (SITE_CONFIG.images as { workshopServiceImages?: string[] }).workshopServiceImages?.[2] ?? SITE_CONFIG.images.sport },
              { icon: Award, title: "Tyres", desc: "Michelin, Bridgestone and Continental. Most popular sizes in stock for same-day fitting.", href: "/book-tyres", img: (SITE_CONFIG.images as { workshopServiceImages?: string[] }).workshopServiceImages?.[3] ?? SITE_CONFIG.images.adventure },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group card-dark overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-video">
                    <ImageWithFallback src={service.img} alt={service.title} fill className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                  </div>
                  <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="w-12 h-12 bg-gold-600/10 border border-gold-800/30 flex items-center justify-center group-hover:bg-gold-600/20 transition-colors">
                    <Icon size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold text-lg mb-2 group-hover:text-gold-300 transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-charcoal-400 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                  <span
                    className="text-gold-600 text-xs uppercase tracking-widest flex items-center gap-2 mt-auto group-hover:text-gold-400"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    Book Now <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ───────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Customer Stories</p>
            <h2 className="section-title">What Our Riders Say</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.author} className="corner-accent bg-charcoal-900 border border-charcoal-800 p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <blockquote
                  className="text-charcoal-200 text-base leading-relaxed mb-6 italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <p
                  className="text-gold-500 text-xs uppercase tracking-widest font-semibold"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="btn-outline">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY US ────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 bg-charcoal-900 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-4">About {SITE_CONFIG.name}</p>
              <h2 className="section-title mb-6">
                It Was Probably<br />
                <span className="gold-shimmer">Inevitable.</span>
              </h2>
              <div className="gold-divider" />
              <p className="text-charcoal-300 leading-relaxed mt-6 mb-4">
                After 23 years in the automotive & fleet industry, James Mitchell started {SITE_CONFIG.name}
                in December 2015. Growing up in a family with a haulage business, with a father who
                raced motocross, a career with vehicles was always on the cards.
              </p>
              <p className="text-charcoal-300 leading-relaxed mb-8">
                A family business built on old fashioned values of honesty, trust, and respect.
                We don't just sell bikes — we ride them, race them, and tour on them.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-gold">
                  Our Story
                </Link>
                <a href={`tel:${SITE_CONFIG.phone}`} className="btn-outline">
                  <Phone size={14} />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Honest & Transparent", desc: "No hidden charges. Fixed-price servicing. We tell you before we start.", img: (SITE_CONFIG.images as { about?: string[] }).about?.[0] ?? SITE_CONFIG.images.workshop },
                { icon: Award, title: "Family Business", desc: "Run by riders for riders. We use the bikes we sell.", img: (SITE_CONFIG.images as { about?: string[] }).about?.[1] ?? SITE_CONFIG.images.classic },
                { icon: Map, title: "Nationwide Delivery", desc: "We deliver to your door anywhere on the UK mainland.", img: (SITE_CONFIG.images as { about?: string[] }).about?.[2] ?? SITE_CONFIG.images.adventure },
                { icon: DollarSign, title: "Finance Specialists", desc: "All credit types accepted. Decisions in 60 seconds.", img: (SITE_CONFIG.images as { about?: string[] }).about?.[3] ?? SITE_CONFIG.images.sport },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-charcoal-950/50 border border-charcoal-800 overflow-hidden">
                    <div className="relative aspect-video">
                      <ImageWithFallback src={item.img} alt="" fill className="object-cover opacity-90" />
                    </div>
                    <div className="p-6">
                    <Icon size={20} className="text-gold-500 mb-3" />
                    <h4
                      className="text-white font-bold text-sm mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-charcoal-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-charcoal-950 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-subtitle mb-4">Ready to Ride?</p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Call us on{" "}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              {SITE_CONFIG.phone}
            </a>
          </h2>
          <p className="text-charcoal-400 mb-8 max-w-lg mx-auto">
            Don&apos;t see what you&apos;re looking for? We buy and sell bikes every day — give us a call and
            we&apos;ll find your perfect machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center sm:flex-wrap">
            <Link href="/contact" className="btn-gold px-10 py-3.5 min-h-[44px] justify-center flex items-center">
              Get in Touch
            </Link>
            <Link href="/sell-your-bike" className="btn-outline py-3.5 min-h-[44px] justify-center flex items-center">
              Sell Your Bike
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
