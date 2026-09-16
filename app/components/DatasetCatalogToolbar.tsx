"use client";

import { DATASET_FILTERS } from "@/app/site-config/dataset/dataset-filters";
import { CatalogSearchInput } from "./CatalogSearchInput";
import { CatalogTagFilter } from "./CatalogTagFilter";

type DatasetCatalogToolbarProps = {
  /** Number of datasets currently matching the catalog query. */
  count: number;
  query?: string;
  /** Tags currently applied via the `tags` URL param. */
  selectedTags?: string[];
  /** URL param controlling pagination; cleared when the search or filters change. */
  pageParam: string;
};

export const DatasetCatalogToolbar = ({
  count,
  query = "",
  selectedTags = [],
  pageParam,
}: DatasetCatalogToolbarProps) => (
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
      </div>
      <CatalogSearchInput
        query={query}
        label="Search datasets"
        placeholder="Search datasets..."
        inputId="dataset-catalog-search"
        pageParam={pageParam}
      />
      <CatalogTagFilter
        filters={DATASET_FILTERS}
        selectedTags={selectedTags}
        pageParam={pageParam}
      />
    </div>
  </>
);
