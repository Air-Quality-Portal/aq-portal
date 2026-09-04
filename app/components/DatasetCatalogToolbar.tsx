"use client";

import { Drawer, Link, SvgFilterList, Tag } from "@teamimpact/veda-ui-blocks";
import { useState } from "react";
import { DatasetAccordionFilters } from "@/app/components/DatasetFilters";
import { DATASET_FILTERS } from "@/app/site-config/dataset/dataset-filters";

const labelsByFilterValue = Object.fromEntries(
  DATASET_FILTERS.flatMap((filter) => filter.options.map((item) => [item.value, item.label])),
);

type DatasetCatalogToolbarProps = {
  /** Total number of datasets in the catalog (shown as a count badge). */
  count: number;
};

export const DatasetCatalogToolbar = ({ count }: DatasetCatalogToolbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const toggleCheckboxFilter = (value: string) => {
    setAppliedFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const removeTagFilter = (filterValue: string) => {
    setAppliedFilters((prev) => prev.filter((v) => v !== filterValue));
  };

  const clearFilters = () => {
    setAppliedFilters([]);
  };

  return (
    <>
      <div className="display-flex flex-justify flex-align-center margin-y-6 border border-base-lighter radius-lg padding-y-105 padding-x-205">
        <div className="display-flex flex-align-center flex-1">
          <span>
            Datasets
            <span className="margin-left-1 margin-right-2 padding-x-1 padding-y-1 bg-primary text-white radius-md font-sans-2xs">
              {count}
            </span>
          </span>
          <span className="display-flex flex-wrap width-full">
            {appliedFilters.map((filterValue) => (
              <Tag
                key={filterValue}
                variant="outline"
                color="base"
                className="margin-right-1 margin-y-1"
                onClose={() => removeTagFilter(filterValue)}
              >
                {labelsByFilterValue[filterValue]}
              </Tag>
            ))}
            {appliedFilters.length > 0 && (
              <Link className="margin-left-2" as="button" onClick={clearFilters}>
                Clear all
              </Link>
            )}
          </span>
        </div>
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
          <DatasetAccordionFilters
            selectedFilters={appliedFilters}
            onFilterChangeAction={toggleCheckboxFilter}
          />
        </div>
      </Drawer>
    </>
  );
};
