"use client";

import { Drawer, Link, SearchInput, SvgSearch, Tag } from "@teamimpact/veda-ui-blocks";
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
      <div className="display-flex flex-justify flex-align-center flex-wrap margin-y-6 border border-base-lighter radius-lg bg-white padding-y-105 padding-x-205">
        <p className="display-flex flex-align-center margin-0 text-bold width-full">
          Datasets
          <span className="margin-left-1 padding-x-1 padding-y-1 bg-primary text-white radius-md font-sans-2xs">
            {count}
          </span>
          <span className="display-block flex-justify margin-left-2">
            {Array.from(appliedFilters).map((filterValue) => (
              <Tag
                key={filterValue}
                variant="outline"
                color="base"
                className="padding-x-1 margin-x-1"
                onClose={() => removeTagFilter(filterValue)}
              >
                {filterValueToLabel[filterValue]}
              </Tag>
            ))}
          </span>
          <Link
            className="usa-button margin-left-auto"
            as="button"
            variant="button"
            onClick={() => {
              setSelectedFilters([...appliedFilters]);
              setIsOpen(true);
            }}
          >
            Search and Filter <SvgSearch className="usa-icon" />
          </Link>
        </p>
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
        <SearchInput
          name="datasetSearch"
          label="Search"
          inputProps={{ placeholder: "Search datasets..." }}
        />
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
