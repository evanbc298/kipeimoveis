import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dwvimagesv1.b-cdn.net" },
      { protocol: "https", hostname: "dwvimages.sfo2.digitaloceanspaces.com" },
      { protocol: "https", hostname: "dwvimages.s3.amazonaws.com" },
    ],
  },
};

export default nextConfig;
