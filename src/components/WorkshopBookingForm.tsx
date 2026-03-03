"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

type ServiceType = "servicing" | "mot" | "tyres";

interface WorkshopBookingFormProps {
  serviceType: ServiceType;
  title?: string;
}

export default function WorkshopBookingForm({ serviceType, title }: WorkshopBookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formEndpoint = (SITE_CONFIG as { formEndpoint?: string }).formEndpoint;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;

    if (formEndpoint) {
      const formData = new FormData(form);
      const data: Record<string, string> = { form_type: "workshop_" + serviceType, service_type: serviceType };
      formData.forEach((v, k) => { data[k] = String(v); });
      try {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed");
      } catch {
        setError("Something went wrong. Please call us to book.");
        setLoading(false);
        return;
      }
    }

    setSubmitted(true);
    form.reset();
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-gold-600/10 border border-gold-800/50 p-6 rounded">
        <p className="text-gold-400 font-semibold">Thank you! We will be in touch shortly to confirm your booking.</p>
        <p className="text-charcoal-400 text-sm mt-2">Or call us on <a href={`tel:${SITE_CONFIG.phone}`} className="text-gold-500 hover:text-gold-400">{SITE_CONFIG.phone}</a> to book now.</p>
      </div>
    );
  }

  const formTitle = title || (serviceType === "servicing" ? "Book a Service" : serviceType === "mot" ? "Book an MOT" : "Book Tyres");

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>{formTitle}</h3>
      <input type="hidden" name="form_type" value={"workshop_" + serviceType} />
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Name *</label>
        <input type="text" name="name" required className="input-dark" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Phone *</label>
        <input type="tel" name="phone" required className="input-dark" placeholder={SITE_CONFIG.phone} />
      </div>
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Email *</label>
        <input type="email" name="email" required className="input-dark" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Bike (make, model, year)</label>
        <input type="text" name="bike" className="input-dark" placeholder="e.g. Honda CBR600 2020" />
      </div>
      {serviceType === "servicing" && (
        <div>
          <label className="block text-charcoal-400 text-sm mb-1">Service required</label>
          <select name="service_detail" className="select-dark">
            <option value="">Select...</option>
            <option value="oil">Oil service</option>
            <option value="interim">Interim service</option>
            <option value="full">Full service</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Preferred date / notes</label>
        <textarea name="notes" rows={3} className="input-dark" placeholder="e.g. Next Tuesday" />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button type="submit" disabled={loading} className="btn-gold w-full justify-center py-4">
        {loading ? "Sending..." : "Request Booking"}
      </button>
      <div className="flex items-center gap-2 text-charcoal-500 text-sm">
        <Clock size={14} />
        Tue-Sat: 09:00-17:00
      </div>
    </form>
  );
}
