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
  images: {
    // Allowlisted remote hosts for next/image. picsum.photos is used for
    // placeholder thumbnails during development.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  typedRoutes: true,
};

export default nextConfig;
