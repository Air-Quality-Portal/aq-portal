"use client";

import { Drawer, Link } from "@teamimpact/veda-ui-blocks";
import { DatasetAccordionFilters } from "@/app/components/DatasetFilters";
import type { DatasetFilter } from "@/app/site-config/types";

type CatalogTagFilterProps = {
  /** The categories and options to filter by. */
  filters: DatasetFilter[];
  selectedTags: string[];
  isOpen: boolean;
  onClose: () => void;
  onToggleFilter: (value: string) => void;
  onClearFilters: () => void;
};

/**
 * The tag filter's slide-in drawer. Purely presentational and rendered as
 * a sibling after the toolbar row (matching the original layout) rather
 * than inside it, since a Drawer isn't a row-flex item. The Filter button
 * that opens it lives inline in the toolbar row instead; both share state
 * from useCatalogTagFilter.
 */
export const CatalogFilterDrawer = ({
  filters,
  selectedTags,
  isOpen,
  onClose,
  onToggleFilter,
  onClearFilters,
}: CatalogTagFilterProps) => (
  <Drawer
    title="Filter by Tags"
    isOpen={isOpen}
    onClose={onClose}
    footer={
      <div className="display-flex">
        <Link
          className="usa-button display-flex flex-justify-center flex-1 margin-right-2"
          as="button"
          variant="button"
          onClick={onClose}
        >
          Apply Filters
        </Link>
        <Link className="usa-button" as="button" variant="button-outline" onClick={onClearFilters}>
          Clear
        </Link>
      </div>
    }
  >
    <div className="padding-y-5">
      {isOpen && (
        <DatasetAccordionFilters
          filters={filters}
          selectedFilters={selectedTags}
          onFilterChangeAction={onToggleFilter}
        />
      )}
    </div>
  </Drawer>
);
