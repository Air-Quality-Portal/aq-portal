import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

// biome-ignore lint/style/noDefaultExport: Next.js configuration files must use default export
export default nextConfig;
