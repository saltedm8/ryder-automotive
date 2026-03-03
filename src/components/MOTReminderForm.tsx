"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function MOTReminderForm() {
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
      const data: Record<string, string> = { form_type: "mot_reminder" };
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
        <p className="text-gold-400 font-semibold">Thanks! We will remind you 4–6 weeks before your MOT is due.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Bell size={20} className="text-gold-500" />
        <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>MOT Reminder</h3>
      </div>
      <p className="text-charcoal-400 text-sm">Get a reminder 4–6 weeks before your MOT is due. We will email you so you can book in time.</p>
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Email *</label>
        <input type="email" name="email" required className="input-dark" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">MOT due date *</label>
        <input type="date" name="mot_due_date" required className="input-dark" />
      </div>
      <div>
        <label className="block text-charcoal-400 text-sm mb-1">Bike (optional)</label>
        <input type="text" name="bike" className="input-dark" placeholder="e.g. Honda CBR600" />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button type="submit" disabled={loading} className="btn-outline w-full justify-center py-3">
        {loading ? "Sending..." : "Sign Up"}
      </button>
    </form>
  );
}
