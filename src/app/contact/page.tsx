import { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Ryder Automotive in Sittingbourne, Kent. Unit 12, D2 Trading Estate, Castle Road, Eurolink. 01795 899204.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        subtitle="Get in Touch"
        title="Contact Ryder Automotive"
        description="Visit our showroom, give us a call, or send an email. We're here to help."
        breadcrumbs={[{ label: "Contact" }]}
        backgroundImage={(SITE_CONFIG.images as { about?: string[] }).about?.[0] ?? SITE_CONFIG.images.hero}
      />
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="section-title text-2xl mb-6">Address</h2>
              <div className="gold-divider mb-6" />
              <address className="not-italic text-charcoal-300">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin size={20} className="text-gold-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Ryder Automotive</p>
                    <p>{SITE_CONFIG.address.line1}</p>
                    <p>{SITE_CONFIG.address.line2}</p>
                    <p>{SITE_CONFIG.address.town}</p>
                    <p>{SITE_CONFIG.address.county}, {SITE_CONFIG.address.postcode}</p>
                  </div>
                </div>
              </address>

              <h2 className="section-title text-2xl mb-6 mt-12">Contact</h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-4 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Phone size={20} />
                  <span className="font-semibold">{SITE_CONFIG.phone}</span>
                </a>
                <a
                  href="mailto:info@ryderauto.co.uk"
                  className="flex items-center gap-4 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Mail size={20} />
                  <span>Email Us</span>
                </a>
              </div>

              <h2 className="section-title text-2xl mb-6 mt-12">Opening Hours</h2>
              <div className="gold-divider mb-6" />
              <ul className="space-y-2">
                {SITE_CONFIG.hours.map(({ day, hours }) => (
                  <li key={day} className="flex justify-between text-charcoal-300">
                    <span>{day}</span>
                    <span className={hours === "Closed" ? "text-charcoal-600" : "text-gold-400"}>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-charcoal-900 border border-charcoal-800 p-10">
              <h3 className="text-xl font-bold text-white mb-6">Find Us</h3>
              <div className="relative aspect-video overflow-hidden rounded border border-charcoal-700 mb-4">
                <iframe
                  src={`https://www.google.com/maps?q=${SITE_CONFIG.coords.lat},${SITE_CONFIG.coords.lng}&z=16&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ryder Automotive location"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${SITE_CONFIG.coords.lat},${SITE_CONFIG.coords.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center"
              >
                <MapPin size={16} />
                Get Directions
              </a>
              <p className="text-charcoal-500 text-sm mt-4">
                Unit 12, D2 Trading Estate, Castle Road, Eurolink, Sittingbourne, Kent, ME10 3RH
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
