import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.clickdealer.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.ryderauto.co.uk",
      },
      {
        protocol: "https",
        hostname: "cdn.clickdealer.co.uk",
      },
      {
        protocol: "https",
        hostname: "images.clickdealer.co.uk",
      },
      {
        protocol: "https",
        hostname: "kovemotouk.com",
      },
      {
        protocol: "https",
        hostname: "www.kovemotouk.com",
      },
    ],
  },
};

export default nextConfig;
