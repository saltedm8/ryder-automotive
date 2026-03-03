"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/data";

const BUDGET_STEPS = [50, 75, 100, 125, 150, 175, 200, 250, 300, 400, 500];

export default function BudgetSlider() {
  const [stepIndex, setStepIndex] = useState(4); // 150 default
  const value = BUDGET_STEPS[stepIndex] ?? 150;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    const idx = Math.round((v / 100) * (BUDGET_STEPS.length - 1));
    setStepIndex(Math.min(Math.max(idx, 0), BUDGET_STEPS.length - 1));
  };

  return (
    <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded">
      <p className="text-charcoal-300 text-sm mb-2">Monthly Budget:</p>
      <p className="text-gold-400 text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
        £{value}
      </p>
      <input
        type="range"
        min="0"
        max="100"
        value={(stepIndex / (BUDGET_STEPS.length - 1)) * 100}
        onChange={handleChange}
        className="w-full h-3 sm:h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-600 touch-manipulation"
      />
      <Link
        href={`/used-bikes?budget=${value}`}
        className="btn-gold flex w-full justify-center mt-4 py-3.5 min-h-[44px] items-center"
      >
        Search
      </Link>
      {SITE_CONFIG.images.partnerLogos?.closeBrothers && (
        <div className="mt-4 pt-4 border-t border-charcoal-800">
          <Image
            src={SITE_CONFIG.images.partnerLogos.closeBrothers}
            alt="Close Brothers Motor Finance"
            width={120}
            height={50}
            className="object-contain opacity-70"
          />
        </div>
      )}
    </div>
  );
}
