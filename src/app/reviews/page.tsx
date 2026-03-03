import { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import { REVIEWS, SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Customer reviews for ${SITE_CONFIG.name}. See what our riders say about us.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        subtitle="Customer Stories"
        title="Reviews"
        description="See what our customers say about us."
        breadcrumbs={[{ label: "Reviews" }]}
        backgroundImage={(SITE_CONFIG.images as { about?: string[] }).about?.[2] ?? SITE_CONFIG.images.classic}
      />
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.author} className="corner-accent bg-charcoal-900 border border-charcoal-800 p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold-400 fill-gold-400" />
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
        </div>
      </section>
    </>
  );
}
