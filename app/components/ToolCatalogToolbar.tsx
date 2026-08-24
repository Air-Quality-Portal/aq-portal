"use client";

import { SvgSearch, TextInput } from "@teamimpact/veda-ui-blocks";
import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

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

  // The query we last wrote ourselves, so its echo can be told apart from a
  // genuinely external change (back/forward, the clear link).
  const committed = useRef(query);

  // Our own commit trims the query, so echoing it back would delete whatever the
  // user has typed since — a trailing space, or a letter typed mid-round-trip.
  useEffect(() => {
    if (query === committed.current) return;
    committed.current = query;
    setValue(query);
  }, [query]);

  const commit = useCallback(
    (next: string) => {
      committed.current = next;
      // `typedRoutes` cannot verify a runtime query string, so cast at this boundary.
      const href = (next ? `${pathname}?q=${encodeURIComponent(next)}` : pathname) as Route;
      // `replace` keeps each keystroke out of history.
      router.replace(href, { scroll: false });
    },
    [pathname, router],
  );

  useEffect(() => {
    const trimmed = value.trim();
    if (trimmed === query.trim()) return;

    const timeout = setTimeout(() => commit(trimmed), DEBOUNCE_MS);

    return () => clearTimeout(timeout);
  }, [value, query, commit]);

  return (
    <div className="display-flex flex-justify flex-align-center flex-wrap margin-bottom-3">
      {/* TextInput has no prefix slot and its wrapper cannot nest inside a
          `usa-input-group`, so the icon is laid over the padded field. */}
      <div className="position-relative maxw-card-lg">
        <span
          aria-hidden="true"
          className="position-absolute top-0 bottom-0 left-105 z-100 display-flex flex-align-center text-base"
        >
          <SvgSearch className="usa-icon" />
        </span>
        <TextInput
          className="margin-top-0"
          role="search"
          label="Search tools"
          name="q"
          labelProps={{ className: "usa-sr-only" }}
          inputProps={{
            id: "tool-catalog-search",
            // `.usa-input` reserves a top margin for a visible label; ours is
            // screen-reader only, so drop it to keep the icon centered.
            className: "padding-left-5 margin-top-0",
            placeholder: searchPlaceholder,
            value,
            onChange: (event) => setValue(event.target.value),
          }}
        />
      </div>
      <p aria-live="polite" className="font-sans-2xs text-base margin-0">
        {count} {count === 1 ? "tool" : "tools"}
      </p>
    </div>
  );
};
