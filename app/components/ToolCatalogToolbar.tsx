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
  const [catalogSearchValue, setCatalogSearchValue] = useState(query);
  const toolbarRef = useRef<HTMLDivElement>(null);

  // The query we last wrote ourselves, so its echo can be told apart from a
  // genuinely external change (back/forward, the clear link).
  const committed = useRef(query);

  // Our own commit trims the query, so echoing it back would delete whatever the
  // user has typed since — a trailing space, or a letter typed mid-round-trip.
  useEffect(() => {
    if (query === committed.current) return;
    committed.current = query;
    setCatalogSearchValue(query);
  }, [query]);

  const commit = useCallback(
    (next: string) => {
      // Opening a search from the unfiltered catalog gets one history entry, so
      // Back returns to the full list. Refining or clearing replaces it, keeping
      // every keystroke out of history.
      const opensSearch = next !== "" && committed.current === "";
      committed.current = next;
      // `typedRoutes` cannot verify a runtime query string, so cast at this boundary.
      const href = (next ? `${pathname}?q=${encodeURIComponent(next)}` : pathname) as Route;

      if (opensSearch) {
        router.push(href, { scroll: false });
      } else {
        router.replace(href, { scroll: false });
      }
    },
    [pathname, router],
  );

  useEffect(() => {
    const trimmed = catalogSearchValue.trim();
    if (trimmed === query.trim()) return;

    const timeout = setTimeout(() => commit(trimmed), DEBOUNCE_MS);

    return () => clearTimeout(timeout);
  }, [catalogSearchValue, query, commit]);

  // Landing on a shared link with `?q=` filters the grid far below the fold, so
  // the page looks unchanged. Bring the results into view once, on arrival only:
  // scrolling while someone types would yank the page out from under them.
  const hasAutoScrolled = useRef(false);
  useEffect(() => {
    if (hasAutoScrolled.current) return;
    hasAutoScrolled.current = true;
    if (!query) return;

    // Aim at the whole section so its heading leads the results, rather than
    // dropping the reader onto a bare grid.
    const target = toolbarRef.current?.closest("section") ?? toolbarRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [query]);

  return (
    <div
      ref={toolbarRef}
      className="display-flex flex-justify flex-align-center flex-wrap margin-bottom-3"
    >
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
            value: catalogSearchValue,
            onChange: (event) => setCatalogSearchValue(event.target.value),
          }}
        />
      </div>
      <p aria-live="polite" className="font-sans-2xs text-base margin-0">
        {count} {count === 1 ? "tool" : "tools"}
      </p>
    </div>
  );
};
