"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/data";

interface BikeEnquiryFormProps {
  bikeId: string;
  bikeTitle: string;
  bikePrice?: number;
}

export default function BikeEnquiryForm({ bikeId, bikeTitle, bikePrice }: BikeEnquiryFormProps) {
  const [open, setOpen] = useState(false);
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
      const data: Record<string, string> = {
        form_type: "bike_enquiry",
        bike_id: bikeId,
        bike_title: bikeTitle,
        ...(bikePrice && { bike_price: String(bikePrice) }),
      };
      formData.forEach((v, k) => { data[k] = String(v); });
      try {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed");
      } catch {
        setError("Something went wrong. Please call us.");
        setLoading(false);
        return;
      }
    }

    setSubmitted(true);
    form.reset();
    setLoading(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-outline w-full justify-center py-3"
      >
        Enquire about this bike
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setOpen(false)}>
          <div className="bg-charcoal-900 border border-charcoal-700 max-w-md w-full p-6 rounded shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Enquire: {bikeTitle}</h3>
            <p className="text-charcoal-400 text-sm mb-4">We will get back to you as soon as possible.</p>
            {submitted ? (
              <div className="bg-gold-600/10 border border-gold-800/50 p-4 rounded mb-4">
                <p className="text-gold-400 font-semibold">Thank you! We will be in touch shortly.</p>
                <p className="text-charcoal-400 text-sm mt-2">Or call us to enquire.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="bike_id" value={bikeId} />
                <input type="hidden" name="bike_title" value={bikeTitle} />
                <div>
                  <label className="block text-charcoal-400 text-sm mb-1">Name *</label>
                  <input type="text" name="name" required className="input-dark" />
                </div>
                <div>
                  <label className="block text-charcoal-400 text-sm mb-1">Phone *</label>
                  <input type="tel" name="phone" required className="input-dark" />
                </div>
                <div>
                  <label className="block text-charcoal-400 text-sm mb-1">Email *</label>
                  <input type="email" name="email" required className="input-dark" />
                </div>
                <div>
                  <label className="block text-charcoal-400 text-sm mb-1">Message</label>
                  <textarea name="message" rows={3} className="input-dark" placeholder="e.g. I would like to arrange a viewing..." />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <div className="flex gap-2">
                  <button type="submit" disabled={loading} className="btn-gold flex-1 py-3">Submit</button>
                  <button type="button" onClick={() => setOpen(false)} className="btn-outline py-3">Cancel</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
