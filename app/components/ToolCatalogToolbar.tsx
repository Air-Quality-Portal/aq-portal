"use client";

import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/** How long typing settles before the query is written to the URL. */
const DEBOUNCE_MS = 250;

type ToolCatalogToolbarProps = {
  /** Number of tools currently shown; narrows as the search matches fewer. */
  count: number;
  /** Active query, read from the URL by the page so reloads and back both work. */
  query?: string;
  searchPlaceholder?: string;
};

export const ToolCatalogToolbar = ({
  count,
  query = "",
  searchPlaceholder = "Search tools...",
}: ToolCatalogToolbarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(query);

  // Re-sync the field when the URL changes from elsewhere (back/forward, clear link).
  useEffect(() => {
    setValue(query);
  }, [query]);

  // Debounce typing into the URL. `replace` keeps each keystroke out of history.
  useEffect(() => {
    const trimmed = value.trim();
    if (trimmed === query.trim()) return;

    const timeout = setTimeout(() => {
      // `typedRoutes` cannot verify a runtime query string, so cast at this boundary.
      const href = (trimmed ? `${pathname}?q=${encodeURIComponent(trimmed)}` : pathname) as Route;
      router.replace(href, { scroll: false });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timeout);
  }, [value, query, pathname, router]);

  return (
    <div className="display-flex flex-justify flex-align-center flex-wrap margin-bottom-3">
      <label className="usa-sr-only" htmlFor="tool-catalog-search">
        Search tools
      </label>
      <div className="usa-input-group radius-md maxw-card-lg padding-left-1">
        <span className="usa-input-prefix text-base" aria-hidden="true">
          <svg className="usa-icon" viewBox="0 0 24 24" focusable="false" role="img">
            <title>Search</title>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </span>
        <input
          className="usa-input"
          id="tool-catalog-search"
          name="q"
          type="search"
          placeholder={searchPlaceholder}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <p aria-live="polite" className="font-sans-2xs text-base margin-0">
        {count} {count === 1 ? "tool" : "tools"}
      </p>
    </div>
  );
};
