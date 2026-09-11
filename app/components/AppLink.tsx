"use client";

import { Link, type LinkProps } from "@teamimpact/veda-ui-blocks";
import NextLink from "next/link";

/*
 * AppLink: next/link re-exported from a "use client" module.
 *
 * Server modules pass this as an `as`/`linksAs` prop to veda-ui-blocks client
 * components. A component prop must cross the server -> client boundary as a
 * client reference, which only a "use client" export becomes -- importing
 * next/link directly in a server module resolves to its server-side variant
 * and fails at runtime ("Functions cannot be passed directly to Client
 * Components"). next/link itself handles the base path and external hrefs.
 *
 * Pattern: https://nextjs.org/docs/app/getting-started/server-and-client-components#third-party-components
 * Serialization: https://react.dev/reference/rsc/use-client
 */
export { default as AppLink } from "next/link";

/*
 * AppLinkStyled: blocks Link pre-bound to next/link, for inline content links
 * using the blocks styling (variant, size). Structural slots (Header/Footer
 * `linksAs`, Card `as`) style their own anchors -- pass the bare AppLink there.
 */
export function AppLinkStyled(props: Omit<LinkProps<typeof NextLink>, "as">) {
  return <Link as={NextLink} {...props} />;
}
