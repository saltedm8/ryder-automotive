import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Ryder Automotive | Used Motorbikes for Sale in Sittingbourne, Kent",
    template: "%s | Ryder Automotive",
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
    url: "https://www.ryderauto.co.uk",
    siteName: "Ryder Automotive",
  },
  icons: {
    icon: "/images/downthemall/logo.svg",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
