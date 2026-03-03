"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function WhatsAppButton() {
  const whatsapp = (SITE_CONFIG as { whatsapp?: string }).whatsapp || "441634712345";
  const url = `https://wa.me/${whatsapp}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
}
