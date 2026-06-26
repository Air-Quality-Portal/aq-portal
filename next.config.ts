import path from "node:path";
import type { NextConfig } from "next";

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
  transpilePackages: ["@teamimpact/veda-ui-blocks"],
  turbopack: {
    root: path.resolve(__dirname, ".."),
  },
  typedRoutes: true,
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;
