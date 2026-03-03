import { Metadata } from "next";
import Image from "next/image";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Phone, CheckCircle2, Clock, Shield, Percent } from "lucide-react";
import FinanceCalculator from "@/components/FinanceCalculator";
import FinanceEnquiryForm from "@/components/FinanceEnquiryForm";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Finance",
  description:
    `Motorbike finance at ${SITE_CONFIG.name}. Hire Purchase, PCP. All types of credit accepted. Finance decisions in 60 seconds. Close Brothers Finance.`,
};

export default function FinancePage() {
  return (
    <>
      <PageHero
        subtitle="Finance"
        title="Finance"
        description="We have a dedicated team of finance experts. All types of credit accepted. Finance decisions in 60 seconds."
        breadcrumbs={[{ label: "Finance" }]}
        backgroundImage={(SITE_CONFIG.images as { about?: string[] }).about?.[2] ?? SITE_CONFIG.images.sport}
      />

      <section className="py-16 sm:py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6 text-charcoal-300 leading-relaxed">
            <p>
              {SITE_CONFIG.name} has a dedicated team of finance experts ready to help. We work with high street lenders and specialist motoring finance providers — including Close Brothers Motor Finance — to secure the best deal for your budget.
            </p>
            <p>
              We&apos;ve helped hundreds of customers get on the road. Even if you have a poor credit rating or have been refused elsewhere, we may be able to help. All types of credit are considered, and we aim for a decision in 60 seconds when you call.
            </p>
          </div>

          {/* Finance types */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-charcoal-900 border border-charcoal-800 p-8">
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Hire Purchase (HP)</h3>
              <p className="text-charcoal-300 text-sm leading-relaxed mb-4">
                Spread the cost over fixed monthly payments. You own the bike at the end of the agreement. Typical terms from 12 to 60 months. Deposit from 10% — part exchange can count as your deposit.
              </p>
              <ul className="space-y-2 text-charcoal-400 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Fixed monthly payments</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Own the bike at the end</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> No balloon payment</li>
              </ul>
            </div>
            <div className="bg-charcoal-900 border border-charcoal-800 p-8">
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Personal Contract Purchase (PCP)</h3>
              <p className="text-charcoal-300 text-sm leading-relaxed mb-4">
                Lower monthly payments with a optional final payment (balloon) at the end. Choose to pay the balloon and keep the bike, part exchange for another, or hand it back. Ideal if you like to change bikes regularly.
              </p>
              <ul className="space-y-2 text-charcoal-400 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Lower monthly payments</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Flexibility at the end</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold-500 shrink-0" /> Part exchange equity</li>
              </ul>
            </div>
          </div>

          {/* Finance calculator + enquiry */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FinanceCalculator />
            <FinanceEnquiryForm />
          </div>

          {/* 60 seconds CTA */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded overflow-hidden">
              <ImageWithFallback src={(SITE_CONFIG.images as { about?: string[] }).about?.[1] ?? SITE_CONFIG.images.hero} alt="Finance your next bike" fill className="object-cover" />
            </div>
            <div className="bg-charcoal-900 border border-charcoal-800 p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Finance Decisions in 60 Seconds</h3>
              <p className="text-charcoal-300 mb-6">
                Call us now to apply. Our finance team will get you a decision in 60 seconds. All types of credit accepted — we work with specialist lenders who understand that riders come from all backgrounds.
              </p>
              <a href={`tel:${SITE_CONFIG.phone}`} className="btn-gold w-full justify-center py-4 text-lg flex items-center gap-2">
                <Phone size={20} />
                Apply Now — Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "60 Second Decisions", desc: "Get an instant decision when you call. No lengthy forms or waiting." },
              { icon: Percent, title: "All Credit Types", desc: "Poor credit? Refused elsewhere? We work with lenders who consider all applicants." },
              { icon: Shield, title: "Transparent & Regulated", desc: "We're a credit broker, not a lender. FCA regulated. No hidden fees." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-charcoal-900 border border-charcoal-800 p-6 text-center">
                <div className="w-12 h-12 bg-gold-600/10 border border-gold-800/30 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-gold-500" />
                </div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Partners & disclaimer */}
          <div className="mt-16 pt-12 border-t border-charcoal-800">
            <div className="flex flex-wrap items-center gap-8 justify-center">
              {SITE_CONFIG.images.partnerLogos?.closeBrothers && (
                <Image src={SITE_CONFIG.images.partnerLogos.closeBrothers} alt="Close Brothers Motor Finance" width={160} height={70} className="object-contain opacity-80" />
              )}
              {SITE_CONFIG.images.partnerLogos?.hpi && (
                <Image src={SITE_CONFIG.images.partnerLogos.hpi} alt="HPI" width={80} height={60} className="object-contain opacity-80" />
              )}
            </div>
            <p className="text-charcoal-600 text-sm mt-8 max-w-2xl mx-auto text-center">
              Finance is provided by Close Brothers Finance, One Central Square, Cardiff, CF10 1FS. Available to UK residents aged 18+, subject to status. Terms and Conditions apply. We are a credit broker, not a lender. Representative example: 10% deposit, 48 months, 13.9% APR.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
