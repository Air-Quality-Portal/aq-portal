"use client";

import { SvgSearch, TextInput } from "@teamimpact/veda-ui-blocks";
import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const DEBOUNCE_MS = 250;

type CatalogSearchInputProps = {
  query?: string;
  label: string;
  placeholder: string;
  inputId: string;
};

export const CatalogSearchInput = ({
  query = "",
  label,
  placeholder,
  inputId,
}: CatalogSearchInputProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [catalogSearchValue, setCatalogSearchValue] = useState(query);
  const inputRef = useRef<HTMLDivElement>(null);

  // Distinguish our own URL echo from Back/Forward navigation or a clear link.
  const committed = useRef(query);
  useEffect(() => {
    if (query === committed.current) return;
    committed.current = query;
    setCatalogSearchValue(query);
  }, [query]);

  const commit = useCallback(
    (next: string) => {
      const opensSearch = next !== "" && committed.current === "";
      committed.current = next;

      const params = new URLSearchParams(searchParams);
      if (next) params.set("q", next);
      else params.delete("q");
      // A changed search always starts at the first page.
      params.delete("page");

      const href = `${pathname}${params.size ? `?${params}` : ""}` as Route;
      if (opensSearch) router.push(href, { scroll: false });
      else router.replace(href, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    const trimmed = catalogSearchValue.trim();
    if (trimmed === query.trim()) return;

    const timeout = setTimeout(() => commit(trimmed), DEBOUNCE_MS);
    return () => clearTimeout(timeout);
  }, [commit, query, catalogSearchValue]);

  // A shared search URL should bring the catalog results into view on arrival.
  const hasAutoScrolled = useRef(false);
  useEffect(() => {
    if (hasAutoScrolled.current) return;
    hasAutoScrolled.current = true;
    if (!query) return;

    const target = inputRef.current?.closest("section") ?? inputRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [query]);

  return (
    <div ref={inputRef} className="position-relative maxw-card-lg">
      <span
        aria-hidden="true"
        className="position-absolute top-0 bottom-0 left-105 z-100 display-flex flex-align-center text-base"
      >
        <SvgSearch className="usa-icon" />
      </span>
      <TextInput
        className="margin-top-0"
        role="search"
        label={label}
        name="q"
        labelProps={{ className: "usa-sr-only" }}
        inputProps={{
          id: inputId,
          className: "padding-left-5 margin-top-0",
          placeholder,
          value: catalogSearchValue,
          onChange: (event) => setCatalogSearchValue(event.target.value),
        }}
      />
    </div>
  );
};
