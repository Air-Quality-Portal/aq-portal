"use client";

import { Link } from "@teamimpact/veda-ui-blocks";
import NextLink from "next/link";
import type { ComponentProps } from "react";

export function BackToCatalogLink({ href }: { href: ComponentProps<typeof NextLink>["href"] }) {
  return (
    <Link as={NextLink} href={href} variant="text" className="display-inline-flex padding-y-3">
      <span aria-hidden="true" className="margin-right-1">
        &larr;
      </span>
      Back to Data Catalog
    </Link>
  );
}
