import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <>
      <PageHero subtitle="Legal" title="Terms of Use" breadcrumbs={[{ label: "Terms" }]} />
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-3xl mx-auto px-6 text-charcoal-300 leading-relaxed space-y-6">
          <p>Terms of use for Ryder Automotive website. Please contact us for full terms.</p>
          <Link href="/" className="text-gold-500 hover:text-gold-400">← Back to Home</Link>
        </div>
      </section>
    </>
  );
}
