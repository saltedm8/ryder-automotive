"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { SITE_CONFIG, SERVICE_PRICES } from "@/lib/data";

const COMMON_SIZES = [
  { front: "120/70R17", rear: "180/55R17", desc: "Sport 600–1000cc" },
  { front: "120/70ZR17", rear: "190/50ZR17", desc: "Sport 1000cc+" },
  { front: "90/90-21", rear: "140/80-18", desc: "Adventure 21/18" },
  { front: "120/70-19", rear: "170/60-17", desc: "Adventure 19/17" },
  { front: "100/90-19", rear: "130/80-17", desc: "Trail / Enduro" },
  { front: "110/70-17", rear: "140/70-17", desc: "Naked / Street" },
  { front: "90/90-18", rear: "110/90-18", desc: "Cruiser" },
  { front: "100/90-18", rear: "130/70-18", desc: "Scooter / 125" },
];

export default function TyreLookup() {
  const [query, setQuery] = useState("");

  const results = (() => {
    const q = query.toLowerCase().trim();
    if (!q) return COMMON_SIZES;
    return COMMON_SIZES.filter(
      (s) =>
        s.front.toLowerCase().includes(q) ||
        s.rear.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q)
    );
  })();

  return (
    <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded">
      <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
        Tyre Size Lookup
      </h3>
      <p className="text-charcoal-400 text-sm mb-4">
        Enter your tyre size or bike type (e.g. 120/70 or sport) to check availability and pricing.
      </p>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          className="input-dark flex-1"
          placeholder="e.g. 120/70R17 or sport"
        />
        <button type="button" onClick={() => query && setQuery("")} className="btn-gold px-6 shrink-0" title={query ? "Clear" : "Search"}>
          <Search size={18} />
        </button>
      </div>
      <div className="space-y-3 max-h-48 overflow-y-auto">
        {results.map((s) => (
          <div
            key={`${s.front}-${s.rear}`}
            className="flex justify-between items-center py-2 border-b border-charcoal-800 last:border-0 text-sm"
          >
            <div>
              <p className="text-white font-medium">{s.front} / {s.rear}</p>
              <p className="text-charcoal-500 text-xs">{s.desc}</p>
            </div>
            <div className="text-right">
              <p className="text-gold-400 font-bold">£{SERVICE_PRICES.tyres.fitBalanceRideIn}/wheel</p>
              <p className="text-charcoal-500 text-xs">fit and balance</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-charcoal-500 text-xs mt-4">
        Most popular sizes in stock. Michelin, Bridgestone, Continental. If we do not have your size, we can usually order for next day.
      </p>
      <Link href="/book-tyres" className="btn-outline w-full justify-center mt-4 py-3 text-sm">
        Book Tyres
      </Link>
    </div>
  );
}
