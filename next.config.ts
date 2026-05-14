import type { NextConfig } from "next";

/*
 * Silences the "Next.js inferred your workspace root" warning.
 * This happens when a lockfile exists in a parent directory and Turbopack
 * incorrectly resolves the workspace root.
 *
 * https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
 */
const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

// biome-ignore lint/style/noDefaultExport: Next.js configuration files must use default export
export default nextConfig;
