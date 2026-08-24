import path from "node:path";
import type { NextConfig } from "next";

/*
 * The app is mounted under a path prefix in production (earth.gov/air4us is
 * served by a CloudFront behaviour in front of this deployment) while branch
 * previews on *.amplifyapp.com serve at the root, so the prefix has to vary
 * per deployment rather than being hardcoded.
 *
 * Next inlines this at build time; there is no runtime switch. The variable
 * has to be set before `next build`, not in the hosting runtime.
 *
 * Accepts "air4us", "/air4us" or "/air4us/" and normalises to "/air4us".
 * Unset or empty serves at the root.
 */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const trimmedBasePath = rawBasePath.replace(/^\/+|\/+$/g, "");
const basePath = trimmedBasePath === "" ? "" : `/${trimmedBasePath}`;

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
  basePath,
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
  typedRoutes: true,
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;
