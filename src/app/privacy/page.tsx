import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero subtitle="Legal" title="Privacy Policy" breadcrumbs={[{ label: "Privacy" }]} />
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-3xl mx-auto px-6 text-charcoal-300 leading-relaxed space-y-6">
          <p>Privacy policy for Ryder Automotive. We respect your data and privacy. Please contact us for full policy.</p>
          <Link href="/" className="text-gold-500 hover:text-gold-400">← Back to Home</Link>
        </div>
      </section>
    </>
  );
}
