import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add cdn.sanity.io to the allowed domains
  },
};

export default nextConfig;
