"use client";

import { Drawer, Link, SvgFilterList, Tag } from "@teamimpact/veda-ui-blocks";
import { useState } from "react";
import {
  dataTypesFilter,
  parametersFilter,
  useCasesFilter,
} from "@/app/site-config/dataset/dataset-filters";
import { DatasetAccordionFilters } from "./DatasetFilters";

type DatasetCatalogToolbarProps = {
  /** Total number of datasets in the catalog (shown as a count badge). */
  count: number;
};

export const DatasetCatalogToolbar = ({ count }: DatasetCatalogToolbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const filterValueToLabel: Record<string, string> = {};
  [dataTypesFilter, parametersFilter, useCasesFilter].forEach((filter) => {
    filter.values.forEach((item) => {
      filterValueToLabel[item.value] = item.label;
    });
  });

  const toggleCheckboxFilter = (value: string) => {
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const removeTagFilter = (filterValue: string) => {
    setAppliedFilters((prev) => prev.filter((v) => v !== filterValue));
  };

  const applyFilters = () => {
    setAppliedFilters([...selectedFilters]);
    setIsOpen(false);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
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
            {Array.from(appliedFilters).map((filterValue) => (
              <Tag
                key={filterValue}
                variant="outline"
                color="base"
                className="margin-right-1 margin-y-1"
                onClose={() => removeTagFilter(filterValue)}
              >
                {filterValueToLabel[filterValue]}
              </Tag>
            ))}
            {appliedFilters.length > 0 && (
              <Link
                className="margin-left-2"
                as="button"
                variant="button-outline"
                onClick={clearFilters}
              >
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
            setSelectedFilters([...appliedFilters]);
            setIsOpen(true);
          }}
        >
          Filter <SvgFilterList className="usa-icon" />
        </Link>
      </div>
      <Drawer
        title="Search and Filter"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <div className="display-flex">
            <Link
              className="usa-button display-flex flex-justify-center flex-1 margin-right-2"
              as="button"
              variant="button"
              onClick={applyFilters}
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
            selectedFilters={selectedFilters}
            onFilterChangeAction={toggleCheckboxFilter}
          />
        </div>
      </Drawer>
    </>
  );
};
