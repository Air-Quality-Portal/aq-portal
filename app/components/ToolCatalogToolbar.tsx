"use client";

import { CatalogSearchInput } from "./CatalogSearchInput";

type ToolCatalogToolbarProps = {
  /** Number of tools currently shown; narrows as the search matches fewer. */
  count: number;
  /** Active query, read from the URL by the page so reloads and back both work. */
  query?: string;
  /** Search param carrying the page number, dropped when the query changes. */
  pageParam: string;
  searchPlaceholder?: string;
};

export const ToolCatalogToolbar = ({
  count,
  query = "",
  pageParam,
  searchPlaceholder = "Search tools...",
}: ToolCatalogToolbarProps) => (
  <div className="display-flex flex-justify flex-align-center flex-wrap margin-bottom-3">
    <CatalogSearchInput
      query={query}
      label="Search tools"
      placeholder={searchPlaceholder}
      inputId="tool-catalog-search"
      pageParam={pageParam}
    />
    <p aria-live="polite" className="font-sans-2xs text-base margin-0">
      {count} {count === 1 ? "tool" : "tools"}
    </p>
  </div>
);
