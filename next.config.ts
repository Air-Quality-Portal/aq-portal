import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence webpack config error - fonts are served from /public
  turbopack: {},
};

// biome-ignore lint/style/noDefaultExport: Next.js configuration files must use default export
export default nextConfig;
