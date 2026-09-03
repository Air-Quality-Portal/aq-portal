"use client";

import { CatalogSearchInput } from "./CatalogSearchInput";

type DatasetCatalogToolbarProps = {
  /** Number of datasets currently matching the catalog query. */
  count: number;
  query?: string;
};

export const DatasetCatalogToolbar = ({ count, query = "" }: DatasetCatalogToolbarProps) => (
  <div className="margin-y-6">
    <CatalogSearchInput
      query={query}
      label="Search datasets"
      placeholder="Search datasets..."
      inputId="dataset-catalog-search"
    />
    <div className="display-flex flex-justify flex-align-center flex-wrap margin-top-2 border border-base-lighter radius-lg bg-white padding-y-105 padding-x-205">
      <p aria-live="polite" className="display-flex flex-align-center margin-0 text-bold">
        Datasets
        <span className="margin-left-1 padding-x-1 padding-y-1 bg-primary text-white radius-md font-sans-2xs">
          {count}
        </span>
      </p>
    </div>
  </div>
);
