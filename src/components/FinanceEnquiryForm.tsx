"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/data";

export default function FinanceEnquiryForm() {
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
      const data: Record<string, string> = { form_type: "finance_enquiry" };
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

  if (submitted) {
    return (
      <div className="bg-gold-600/10 border border-gold-800/50 p-6 rounded">
        <p className="text-gold-400 font-semibold">Thank you! Our finance team will be in touch shortly.</p>
        <p className="text-charcoal-400 text-sm mt-2">Or call us to apply now.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Finance Enquiry</h3>
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
        <label className="block text-charcoal-400 text-sm mb-1">Budget (monthly)</label>
        <select name="budget" className="select-dark">
          <option value="">Select...</option>
          <option value="50-100">£50–£100</option>
          <option value="100-150">£100–£150</option>
          <option value="150-200">£150–£200</option>
          <option value="200-300">£200–£300</option>
          <option value="300+">£300+</option>
        </select>
      </div>
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Deposit available</label>
        <input type="text" name="deposit" className="input-dark" placeholder="e.g. £1000 or part exchange" />
      </div>
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Bike of interest (optional)</label>
        <input type="text" name="bike_interest" className="input-dark" placeholder="Make, model or stock ID" />
      </div>
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Notes</label>
        <textarea name="notes" rows={2} className="input-dark" />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button type="submit" disabled={loading} className="btn-gold w-full justify-center py-4">
        {loading ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
