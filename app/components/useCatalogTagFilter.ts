"use client";

import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type UseCatalogTagFilterProps = {
  selectedTags: string[];
  pageParam?: string;
};

/**
 * Owns the tag filter's sync with the `tags` URL param,
 * independent of the `q` param that CatalogSearchInput owns.
 * Shared between the toolbar's chip row and the
 * CatalogTagFilter drawer, which render in different places
 * but need the same state.
 */
export const useCatalogTagFilter = ({ selectedTags, pageParam = "" }: UseCatalogTagFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const applyTags = (next: string[]) => {
    const params = new URLSearchParams(searchParams);
    params.delete("tags");
    for (const tag of next) params.append("tags", tag);
    // A changed filter always starts at the first page.
    if (pageParam) params.delete(pageParam);

    const href = `${pathname}${params.size ? `?${params}` : ""}` as Route;
    router.replace(href, { scroll: false });
  };

  const toggleCheckboxFilter = (value: string) => {
    const next = selectedTags.includes(value)
      ? selectedTags.filter((tag) => tag !== value)
      : [...selectedTags, value];
    applyTags(next);
  };

  const removeTagFilter = (filterValue: string) => {
    applyTags(selectedTags.filter((tag) => tag !== filterValue));
  };

  const clearFilters = () => applyTags([]);

  return {
    isDrawerOpen,
    openDrawer: () => setIsDrawerOpen(true),
    closeDrawer: () => setIsDrawerOpen(false),
    toggleCheckboxFilter,
    removeTagFilter,
    clearFilters,
  };
};
