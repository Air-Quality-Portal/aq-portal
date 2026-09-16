"use client";

import { Drawer, Link, SvgFilterList, Tag } from "@teamimpact/veda-ui-blocks";
import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DatasetAccordionFilters } from "@/app/components/DatasetFilters";
import { DATASET_FILTERS } from "@/app/site-config/dataset/dataset-filters";
import { CatalogSearchInput } from "./CatalogSearchInput";

type DatasetCatalogToolbarProps = {
  /** Number of datasets currently matching the catalog query. */
  count: number;
  query?: string;
  /** Tags currently applied via the `tags` URL param. */
  selectedTags?: string[];
};

export const DatasetCatalogToolbar = ({
  count,
  query = "",
  selectedTags = [],
}: DatasetCatalogToolbarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Applies a new tag selection to the URL, independent of the `q` param
  const applyTags = (next: string[]) => {
    const params = new URLSearchParams(searchParams);
    params.delete("tags");
    for (const tag of next) params.append("tags", tag);
    // A changed filter always starts at the first page.
    params.delete("page");

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
      <p className="font-sans-md line-height-sans-5 text-normal text-base-dark margin-0">
        Browse air quality datasets that can be explored in the AIR4US visualization tool.
      </p>
      <div className="display-flex flex-justify flex-align-center margin-y-5 border border-base-lighter radius-lg padding-y-105 padding-x-205">
        <div aria-live="polite" className="display-flex flex-align-center flex-1">
          <span>
            Datasets
            <span className="margin-left-1 margin-right-2 padding-x-1 padding-y-1 bg-primary text-white radius-md font-sans-2xs">
              {count}
            </span>
          </span>
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
        </div>
        <CatalogSearchInput
          query={query}
          label="Search datasets"
          placeholder="Search datasets..."
          inputId="dataset-catalog-search"
        />
        <Link
          className="usa-button"
          as="button"
          variant="button"
          onClick={() => {
            setIsDrawerOpen(true);
          }}
        >
          Filter <SvgFilterList className="usa-icon" />
        </Link>
      </div>
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
              filters={DATASET_FILTERS}
              selectedFilters={selectedTags}
              onFilterChangeAction={toggleCheckboxFilter}
            />
          )}
        </div>
      </Drawer>
    </>
  );
};
