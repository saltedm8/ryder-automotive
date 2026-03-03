import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  const base = SITE_CONFIG.baseUrl;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
