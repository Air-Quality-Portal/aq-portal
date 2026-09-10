import type { ComponentProps } from "react";

import { withBasePath } from "@/app/site-config/base-path.helpers";

/**
 * Raw <video> does not get the base path from Next, which only prefixes its
 * own assets. This wrapper applies it to src and poster, mirroring AppImage.
 */
export function AppVideo({ src, poster, ...rest }: ComponentProps<"video">) {
  return (
    <video
      src={typeof src === "string" ? withBasePath(src) : src}
      poster={poster && withBasePath(poster)}
      {...rest}
    />
  );
}
