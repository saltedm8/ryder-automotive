import { MetadataRoute } from "next";
import { SITE_CONFIG, LATEST_BIKES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.baseUrl;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/used-bikes`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/new-bikes`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kove`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kove-south-east`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/previously-sold`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/servicing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/book-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/book-tyres`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/book-mot`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/sell-your-bike`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/part-exchange`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/finance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/delivery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/rental-booking`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/sitemap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const bikePages: MetadataRoute.Sitemap = LATEST_BIKES.map((bike) => ({
    url: `${base}/used-bikes/${bike.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...bikePages];
}
