import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800">
      {/* Gold accent line */}
      <div className="h-px bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Link href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SITE_CONFIG.logo}
                  alt="Ryder Automotive"
                  className="h-12 w-auto object-contain max-w-[200px]"
                />
              </Link>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
              Family-run motorcycle dealer based in Sittingbourne, Kent. Selling, servicing and
              supporting riders since 2015.
            </p>
            <a
              href={SITE_CONFIG.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal-400 hover:text-gold-400 transition-colors text-sm"
            >
              <Facebook size={16} />
              <span>Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            {SITE_CONFIG.images.brandLogos?.KOVE && (
              <div className="mb-6 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SITE_CONFIG.images.brandLogos.KOVE} alt="KOVE" className="h-10 w-auto object-contain" />
                <span className="text-gold-400 font-semibold uppercase tracking-wider text-sm" style={{ fontFamily: "var(--font-oswald)" }}>
                  KOVE Dealer
                </span>
              </div>
            )}
            <h4
              className="text-white font-semibold uppercase tracking-[0.2em] text-xs mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "KOVE Hub", href: "/kove", highlight: true },
                { label: "New KOVE Stock", href: "/new-bikes", highlight: true },
                { label: "KOVE South East", href: "/kove-south-east", highlight: true },
                { label: "Used Bikes", href: "/used-bikes" },
                { label: "Previously Sold", href: "/previously-sold" },
                { label: "Workshop Services", href: "/servicing" },
                { label: "Part Exchange", href: "/part-exchange" },
                { label: "Finance", href: "/finance" },
                { label: "Sell Your Bike", href: "/sell-your-bike" },
                { label: "Delivery", href: "/delivery" },
                { label: "Rental Booking", href: "/rental-booking" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Reviews", href: "/reviews" },
                { label: "Sitemap", href: "/sitemap" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm flex items-center gap-2 group transition-colors ${
                      (link as { highlight?: boolean }).highlight
                        ? "text-gold-400 hover:text-gold-300"
                        : "text-charcoal-400 hover:text-gold-400"
                    }`}
                  >
                    <span className={`w-2 h-px transition-all group-hover:w-4 ${
                      (link as { highlight?: boolean }).highlight ? "bg-gold-500" : "bg-gold-700"
                    }`} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4
              className="text-white font-semibold uppercase tracking-[0.2em] text-xs mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Opening Hours
            </h4>
            <ul className="space-y-2">
              {SITE_CONFIG.hours.map(({ day, hours }) => (
                <li key={day} className="flex justify-between text-sm">
                  <span className="text-charcoal-400">{day}</span>
                  <span
                    className={
                      hours === "Closed" ? "text-charcoal-600" : "text-gold-400 font-medium"
                    }
                  >
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold uppercase tracking-[0.2em] text-xs mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Find Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-charcoal-400 hover:text-gold-400 transition-colors group"
                >
                  <Phone size={14} className="mt-1 shrink-0 text-gold-600 group-hover:text-gold-400" />
                  <span className="text-sm">{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ryderauto.co.uk"
                  className="flex items-start gap-3 text-charcoal-400 hover:text-gold-400 transition-colors group"
                >
                  <Mail size={14} className="mt-1 shrink-0 text-gold-600 group-hover:text-gold-400" />
                  <span className="text-sm">Email Us</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 shrink-0 text-gold-600" />
                <address className="text-charcoal-400 text-sm not-italic leading-relaxed">
                  {SITE_CONFIG.address.line1}
                  <br />
                  {SITE_CONFIG.address.line2}
                  <br />
                  {SITE_CONFIG.address.town}
                  <br />
                  {SITE_CONFIG.address.county}, {SITE_CONFIG.address.postcode}
                </address>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-outline text-xs py-2 px-4">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-900 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-charcoal-600">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span>© {new Date().getFullYear()} Ryder Automotive Ltd</span>
            <span>Company No. {SITE_CONFIG.companyNo}</span>
            <span>FCA No. {SITE_CONFIG.fcaNo}</span>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-gold-500 transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-gold-500 transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-gold-500 transition-colors">Cookies</Link>
          </div>
        </div>
        <p className="text-center text-[10px] text-charcoal-700 pb-4 px-6">
          Ryder Automotive Ltd T/A Ryder Motorcycles are a credit broker and not a lender. Authorised and Regulated by the Financial Conduct Authority. Finance is Subject to status. Registered in England & Wales: {SITE_CONFIG.companyNo}
        </p>
      </div>
    </footer>
  );
}
