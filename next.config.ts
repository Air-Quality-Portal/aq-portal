import path from "node:path";
import type { NextConfig } from "next";

import { BASE_PATH } from "./app/site-config/base-path.helpers";

/*
 * The Turbopack root must include both this project and the locally linked
 * `@teamimpact/veda-ui-blocks` package, which lives in a sibling directory
 * (../tinacms-portal-monorepo). Turbopack will not resolve modules through a
 * symlink that points outside its root, so we set the root to the common
 * parent directory.
 *
 * https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
 */
const nextConfig: NextConfig = {
  /*
   * `typedRoutes` is off: it types next/link's href as `Route`, but the blocks
   * `linksAs` slot requires a component whose href accepts a plain `string`.
   */
  ...(BASE_PATH ? { basePath: BASE_PATH } : {}),
  transpilePackages: ["@teamimpact/veda-ui-blocks"],
  env: {
    /*
     * Evaluated once when this config loads and inlined into the bundle, so it
     * is frozen at `next build` time and identical on the server and the
     * client. Surfaced as the "site last updated" date in the footer.
     * In `next dev` it is the dev server start time.
     */
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
  turbopack: {
    root: path.resolve(__dirname, ".."),
  },
  images: {
    // Allowlisted remote hosts for next/image.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;
