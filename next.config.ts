import type { NextConfig } from "next";

const pagesBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: pagesBase,
  assetPrefix: pagesBase || undefined,
  experimental: { globalNotFound: true },
};

export default nextConfig;
