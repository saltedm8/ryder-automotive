"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const navItems = [
  {
    label: "KOVE",
    highlight: true,
    children: [
      { label: "KOVE Hub", href: "/kove" },
      { label: "New KOVE Stock", href: "/new-bikes" },
      { label: "KOVE South East", href: "/kove-south-east" },
    ],
  },
  {
    label: "Showroom",
    children: [
      { label: "Used Bikes", href: "/used-bikes" },
      { label: "New Bikes", href: "/new-bikes" },
      { label: "Previously Sold", href: "/previously-sold" },
      { label: "Cruiser", href: "/used-bikes?body=cruiser" },
      { label: "Sportsbike", href: "/used-bikes?body=sportsbike" },
      { label: "Naked", href: "/used-bikes?body=naked" },
      { label: "Adventure & Tourers", href: "/used-bikes?body=tourer" },
      { label: "Trail & Enduro", href: "/used-bikes?body=enduro" },
      { label: "L Plates & Scooters", href: "/used-bikes?body=scooter" },
    ],
  },
  {
    label: "Workshop",
    children: [
      { label: "Workshop Services", href: "/servicing" },
      { label: "Book a Service", href: "/book-service" },
      { label: "Book Tyres", href: "/book-tyres" },
      { label: "Book MOT", href: "/book-mot" },
    ],
  },
  { label: "Helmets & Gear", href: "https://rydermotorcycles.co.uk/", external: true },
  {
    label: "Services",
    children: [
      { label: "Sell Your Bike", href: "/sell-your-bike" },
      { label: "Part Exchange", href: "/part-exchange" },
      { label: "Finance", href: "/finance" },
      { label: "Delivery", href: "/delivery" },
      { label: "Web Shop", href: "https://ryder-automotive.myshopify.com/", external: true },
      { label: "Rental Booking", href: "/rental-booking" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
      { label: "About Us", href: "/about" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

const linkClass = "block px-5 py-2.5 text-sm text-charcoal-300 hover:text-gold-400 hover:bg-charcoal-900 transition-colors uppercase tracking-wide w-full text-left";
const linkStyle = { fontFamily: "var(--font-oswald)", fontSize: "0.78rem" } as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        navRef.current.querySelectorAll("details[open]").forEach((d) => d.removeAttribute("open"));
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-charcoal-950 border-b border-charcoal-800 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <span className="text-charcoal-400 tracking-wide">
            Unit 12, D2 Trading Estate, Castle Road, Eurolink, Sittingbourne, Kent, ME10 3RH
          </span>
          <div className="flex items-center gap-6">
            <span className="text-charcoal-400">
              Tue–Sat: <span className="text-gold-400">09:00–17:00</span>
            </span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold tracking-wider transition-colors"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              <Phone size={12} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal-950/98 backdrop-blur-sm shadow-2xl shadow-black/50"
            : "bg-charcoal-950/95 backdrop-blur-sm"
        } border-b border-charcoal-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SITE_CONFIG.logo}
                alt="Ryder Automotive"
                className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity max-w-[180px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = "flex";
                }}
              />
              <span className="hidden flex-col leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
                <span className="text-2xl font-black text-white">RYDER</span>
                <span className="text-[9px] tracking-[0.35em] text-gold-500 uppercase" style={{ fontFamily: "var(--font-oswald)" }}>Automotive</span>
              </span>
            </Link>

            {/* Desktop Nav - native details/summary (no JS, works everywhere) */}
            <div className="hidden lg:flex items-center gap-1 nav-dropdowns">
              {navItems.map((item) =>
                item.children ? (
                  <details key={item.label} className="relative group">
                    <summary
                      className={`flex items-center gap-1.5 px-4 py-2 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden ${
                        (item as { highlight?: boolean }).highlight
                          ? "text-gold-400 font-semibold border border-gold-600/50 hover:border-gold-500 hover:bg-gold-600/10"
                          : "nav-link hover:text-gold-400"
                      }`}
                      style={(item as { highlight?: boolean }).highlight ? { fontFamily: "var(--font-oswald)", letterSpacing: "0.15em" } : undefined}
                    >
                      {(item as { highlight?: boolean }).highlight && SITE_CONFIG.images.brandLogos?.KOVE && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={SITE_CONFIG.images.brandLogos.KOVE} alt="" className="h-6 w-auto object-contain" />
                      )}
                      {item.label}
                      <ChevronDown size={12} className="ml-0.5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="absolute top-full left-0 pt-1 min-w-[220px] z-[9999]">
                      <div className="bg-charcoal-950 border border-charcoal-800 border-t-2 border-t-gold-600 shadow-2xl py-2">
                        {item.children.map((child) => {
                          const isExternal = (child as { external?: boolean }).external;
                          return isExternal ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={linkClass}
                              style={linkStyle}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link key={child.href} href={child.href} className={linkClass} style={linkStyle}>
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </details>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="nav-link px-4 py-2 hover:text-gold-400"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/used-bikes" className="btn-gold text-xs py-2.5 px-5">
                View Stock
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-charcoal-950 border-t border-charcoal-800 max-h-[85vh] overflow-y-auto overscroll-contain">
            <div className="px-4 py-4 space-y-1">
              <div className="text-xs text-charcoal-400 mb-3 pb-3 border-b border-charcoal-800">
                Tue–Sat: <span className="text-gold-400 font-medium">09:00–17:00</span>
              </div>
              <Link
                href="/used-bikes"
                className="flex items-center justify-center gap-2 btn-gold w-full py-3.5 mb-4 min-h-[44px]"
                onClick={() => setMobileOpen(false)}
              >
                View Stock
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 px-4 py-3.5 text-gold-400 border border-gold-800 mb-4 min-h-[44px]"
              >
                <Phone size={16} />
                <span className="font-semibold" style={{ fontFamily: "var(--font-oswald)" }}>
                  {SITE_CONFIG.phone}
                </span>
              </a>

              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3.5 min-h-[44px] text-white hover:text-gold-400 transition-colors text-sm uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-oswald)" }}
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 border-l border-gold-800 ml-4 mb-2">
                        {item.children.map((child) => {
                          const isExternal = (child as { external?: boolean }).external;
                          const linkClassMobile = "block px-4 py-2 text-sm text-charcoal-300 hover:text-gold-400 transition-colors uppercase tracking-wide";
                          return isExternal ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={linkClassMobile}
                              style={{ fontFamily: "var(--font-oswald)", fontSize: "0.75rem" }}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={linkClassMobile}
                              style={{ fontFamily: "var(--font-oswald)", fontSize: "0.75rem" }}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    className="block px-4 py-3 text-sm text-white hover:text-gold-400 transition-colors uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-oswald)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
