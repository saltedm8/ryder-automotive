import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap",
};

const links = [
  { section: "Main", items: [{ label: "Home", href: "/" }] },
  {
    section: "KOVE",
    items: [
      { label: "KOVE Hub", href: "/kove" },
      { label: "New KOVE Stock", href: "/new-bikes" },
      { label: "KOVE South East", href: "/kove-south-east" },
    ],
  },
  {
    section: "Showroom",
    items: [
      { label: "Used Bikes", href: "/used-bikes" },
      { label: "Previously Sold", href: "/previously-sold" },
    ],
  },
  {
    section: "Workshop",
    items: [
      { label: "Workshop Services", href: "/servicing" },
      { label: "Book a Service", href: "/book-service" },
      { label: "Book Tyres", href: "/book-tyres" },
      { label: "Book MOT", href: "/book-mot" },
    ],
  },
  {
    section: "Services",
    items: [
      { label: "Sell Your Bike", href: "/sell-your-bike" },
      { label: "Part Exchange", href: "/part-exchange" },
      { label: "Finance", href: "/finance" },
      { label: "Delivery", href: "/delivery" },
      { label: "Rental Booking", href: "/rental-booking" },
    ],
  },
  {
    section: "About",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    section: "External",
    items: [
      { label: "Helmets & Gear", href: "https://rydermotorcycles.co.uk/", external: true },
      { label: "Web Shop", href: "https://ryder-automotive.myshopify.com/", external: true },
    ],
  },
  {
    section: "Legal",
    items: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="text-4xl font-black text-white mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sitemap
          </h1>
          <div className="space-y-10">
            {links.map((group) => (
              <div key={group.section}>
                <h2
                  className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {group.section}
                </h2>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      {(item as { external?: boolean }).external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-charcoal-300 hover:text-gold-400 transition-colors"
                        >
                          {item.label} ↗
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-charcoal-300 hover:text-gold-400 transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
