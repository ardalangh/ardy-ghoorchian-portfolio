import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'default',
    domains: [],
  },
  assetPrefix: '',
};

export default nextConfig;
