"use client";

import { Drawer, Link, SearchInput, SvgSearch } from "@teamimpact/veda-ui-blocks";
import { useState } from "react";
import { DatasetAccordionFilters } from "./DatasetFilters";

type DatasetCatalogToolbarProps = {
  /** Total number of datasets in the catalog (shown as a count badge). */
  count: number;
};

export const DatasetCatalogToolbar = ({ count }: DatasetCatalogToolbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const DrawerFooter = () => {
    return (
      <div className="display-flex">
        <Link
          className="usa-button display-flex flex-justify-center flex-1 margin-right-2"
          as="button"
          variant="button"
          onClick={() => setIsOpen(false)}
        >
          Apply Filters
        </Link>
        <Link
          className="usa-button"
          as="button"
          variant="button-outline"
          onClick={() => setIsOpen(false)}
        >
          Clear
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="display-flex flex-justify flex-align-center flex-wrap margin-y-6 border border-base-lighter radius-lg bg-white padding-y-105 padding-x-205">
        <p className="display-flex flex-align-center margin-0 text-bold width-full">
          Datasets
          <span className="margin-left-1 padding-x-1 padding-y-1 bg-primary text-white radius-md font-sans-2xs">
            {count}
          </span>
          <Link
            className="usa-button margin-left-auto"
            as="button"
            variant="button"
            onClick={() => setIsOpen(true)}
          >
            Search and Filter <SvgSearch className="usa-icon" />
          </Link>
        </p>
      </div>
      <Drawer
        title="Search and Filter"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={<DrawerFooter />}
      >
        <SearchInput
          name="datasetSearch"
          label="Search"
          inputProps={{ placeholder: "Search datasets..." }}
        />
        <div className="padding-y-5">
          <DatasetAccordionFilters />
        </div>
      </Drawer>
    </>
  );
};
