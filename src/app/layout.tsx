import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DemoBanner from "@/components/DemoBanner";
import { SITE_CONFIG } from "@/lib/data";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: {
    default: `${SITE_CONFIG.name} | Used Motorbikes for Sale in Sittingbourne, Kent`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Family-run motorcycle dealer in Sittingbourne, Kent. Specialist in used motorbikes, workshop servicing, MOTs, tyres and finance. Official KOVE dealer for the South East.",
  keywords: [
    "used motorbikes", "motorcycles for sale", "Sittingbourne", "Kent", "KOVE dealer",
    "motorbike servicing", "motorcycle MOT", "bike finance",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.example.com",
    siteName: SITE_CONFIG.name,
  },
  icons: {
    icon: SITE_CONFIG.logoIcon,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <DemoBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
