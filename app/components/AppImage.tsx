import NextImage, { type ImageProps } from "next/image";

import { withBasePath } from "@/app/site-config/base-path.helpers";

/**
 * next/image does not apply basePath to `src`, this is a wrapper that does.
 * https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#images
 */
export function AppImage({ src, ...rest }: ImageProps) {
  return <NextImage src={typeof src === "string" ? withBasePath(src) : src} {...rest} />;
}
