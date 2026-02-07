import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/EDITH",
  assetPrefix: "/EDITH",
};

export default nextConfig;
