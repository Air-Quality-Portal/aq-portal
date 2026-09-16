"use client";

import { Drawer, Link, SvgFilterList, Tag } from "@teamimpact/veda-ui-blocks";
import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DatasetAccordionFilters } from "@/app/components/DatasetFilters";
import type { DatasetFilter } from "@/app/site-config/types";

type CatalogTagFilterProps = {
  /** The categories and options to filter by */
  filters: DatasetFilter[];
  /** Tags currently applied via the `tags` URL param. */
  selectedTags?: string[];
  tagsParam?: string;
};

/**
 * Filter button + slide-in drawer for narrowing a catalog by tags.
 * Independent of the `q` param that CatalogSearchInput owns.
 */
export const CatalogTagFilter = ({
  filters,
  selectedTags = [],
  tagsParam = "",
}: CatalogTagFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const applyTags = (next: string[]) => {
    const params = new URLSearchParams(searchParams);
    params.delete("tags");
    for (const tag of next) params.append("tags", tag);
    // A changed filter always starts at the first page.
    if (tagsParam) params.delete(tagsParam);

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

  return (
    <>
      <span className="display-flex flex-wrap width-full">
        {selectedTags.map((filterValue) => (
          <Tag
            key={filterValue}
            variant="outline"
            color="base"
            className="margin-right-1 margin-y-1"
            onClose={() => removeTagFilter(filterValue)}
          >
            {filterValue}
          </Tag>
        ))}
        {selectedTags.length > 0 && (
          <Link className="margin-left-2" as="button" onClick={clearFilters}>
            Clear all
          </Link>
        )}
      </span>
      <Link
        className="usa-button"
        as="button"
        variant="button"
        onClick={() => setIsDrawerOpen(true)}
      >
        Filter <SvgFilterList className="usa-icon" />
      </Link>
      <Drawer
        title="Search and Filter"
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        footer={
          <div className="display-flex">
            <Link
              className="usa-button display-flex flex-justify-center flex-1 margin-right-2"
              as="button"
              variant="button"
              onClick={() => setIsDrawerOpen(false)}
            >
              Apply Filters
            </Link>
            <Link
              className="usa-button"
              as="button"
              variant="button-outline"
              onClick={clearFilters}
            >
              Clear
            </Link>
          </div>
        }
      >
        <div className="padding-y-5">
          {isDrawerOpen && (
            <DatasetAccordionFilters
              filters={filters}
              selectedFilters={selectedTags}
              onFilterChangeAction={toggleCheckboxFilter}
            />
          )}
        </div>
      </Drawer>
    </>
  );
};
