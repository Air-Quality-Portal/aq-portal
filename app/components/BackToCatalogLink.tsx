"use client";

import { AppLinkStyled } from "@/app/components/AppLink";

export function BackToCatalogLink({ href }: { href: string }) {
  return (
    <AppLinkStyled href={href} variant="text" className="display-inline-flex padding-y-3">
      <span aria-hidden="true" className="margin-right-1">
        &larr;
      </span>
      Back to Data Catalog
    </AppLinkStyled>
  );
}
