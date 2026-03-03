import { Metadata } from "next";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ryder Automotive - family-run motorcycle dealer in Sittingbourne since 2015. Honesty, trust and respect.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        subtitle="Our Story"
        title="Ryder Automotive"
        breadcrumbs={[{ label: "About Us" }]}
        backgroundImage={(SITE_CONFIG.images as { about?: string[] }).about?.[0] ?? SITE_CONFIG.images.classic}
      />
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="max-w-3xl">
          <h2
            className="text-2xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            It Was Probably Inevitable...
          </h2>
          <div className="gold-divider mb-8" />
          <div className="text-charcoal-300 space-y-6 leading-relaxed">
            <p>
              After 23 years in the automotive & fleet industry, I started Ryder Motorcycles in December 2015.
            </p>
            <p>
              Growing up in a family with a haulage business, with a father who raced motocross, a career with vehicles was probably inevitable.
            </p>
            <p>
              We&apos;re very much a family business, run by me and my wife, Kelly. We sell all types of vehicles, both 2 wheel and 4, but always with old fashioned values of honesty, trust, and respect.
            </p>
            <p>
              Motorcycles and motorsport are still very much a part of our lives. I raced motocross at club level, but after realising that I don&apos;t bounce as well as I used to, I now get my kicks on tarmac, and I&apos;m a regular at track days around the UK.
            </p>
            <p>
              Both of our boys rode motocross when they were little, before our youngest son, James, started karting. He raced at club level through the Junior Rotax ranks with some success, and a lot more trophies than me.
            </p>
            <p>
              If you find one of the rare moments when we&apos;re not at work, you&apos;ll probably find us &quot;testing&quot; the goods, whether on track or tour.
            </p>
            <p className="text-gold-400 font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
              Joe Ryder
            </p>
          </div>
          <div className="mt-12 pt-10 border-t border-charcoal-800">
            <Link href="/contact" className="btn-gold">
              <Phone size={14} />
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {((SITE_CONFIG.images as { about?: string[] }).about ?? [SITE_CONFIG.images.hero]).map((src, i) => (
            <div key={i} className="relative aspect-[4/3] rounded overflow-hidden">
              <ImageWithFallback src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
        </div>
        </div>
      </section>
    </>
  );
}
