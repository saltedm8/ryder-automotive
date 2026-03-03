"use client";

import Link from "next/link";
import { Gauge, Calendar, Users, ArrowRight } from "lucide-react";

interface BikeCardProps {
  id: string;
  slug: string;
  year: string;
  make: string;
  model: string;
  price: number;
  financeFrom: number;
  mileage: string;
  engineSize: string;
  colour: string;
  owners: number;
  image: string;
  bodyStyle?: string;
}

export default function BikeCard({
  slug,
  year,
  make,
  model,
  price,
  financeFrom,
  mileage,
  engineSize,
  colour,
  owners,
  image,
}: BikeCardProps) {
  return (
    <Link
      href={`/used-bikes/${slug}`}
      className="group block card-dark overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-charcoal-900 aspect-[4/3]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${year} ${make} ${model}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/bikes/hero.jpg";
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Engine badge */}
        <div className="absolute top-3 right-3 bg-charcoal-950/90 border border-charcoal-700 px-2 py-1">
          <span className="text-gold-400 text-xs font-bold" style={{ fontFamily: "var(--font-oswald)" }}>
            {engineSize}
          </span>
        </div>
        {/* Year badge */}
        <div className="absolute top-3 left-3 bg-gold-600/90 px-2 py-1">
          <span className="text-charcoal-950 text-xs font-bold" style={{ fontFamily: "var(--font-oswald)" }}>
            {year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Make */}
        <p
          className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          {make}
        </p>
        {/* Model */}
        <h3
          className="text-white font-bold text-lg leading-tight mb-4 group-hover:text-gold-300 transition-colors"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {model}
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5 py-4 border-t border-b border-charcoal-800">
          <div className="text-center">
            <Gauge size={14} className="text-gold-600 mx-auto mb-1" />
            <p className="text-white text-xs font-medium">{mileage}</p>
            <p className="text-charcoal-500 text-[10px]">Miles</p>
          </div>
          <div className="text-center border-x border-charcoal-800">
            <Calendar size={14} className="text-gold-600 mx-auto mb-1" />
            <p className="text-white text-xs font-medium">{year}</p>
            <p className="text-charcoal-500 text-[10px]">Year</p>
          </div>
          <div className="text-center">
            <Users size={14} className="text-gold-600 mx-auto mb-1" />
            <p className="text-white text-xs font-medium">{owners}</p>
            <p className="text-charcoal-500 text-[10px]">{owners === 1 ? "Owner" : "Owners"}</p>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-charcoal-500 text-xs mb-0.5">Cash Price</p>
            <p
              className="text-2xl font-bold text-gold-400"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              £{price.toLocaleString()}
            </p>
            <p className="text-charcoal-500 text-[11px] mt-0.5">
              Finance from <span className="text-charcoal-300">£{financeFrom.toFixed(2)}/mo</span>
            </p>
          </div>
          <div className="flex items-center gap-1 text-gold-500 group-hover:text-gold-300 transition-colors">
            <span className="text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-oswald)" }}>View</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
