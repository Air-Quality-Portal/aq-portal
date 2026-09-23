"use client";

import { Accordion, Checkbox } from "@teamimpact/veda-ui-blocks";
import { useState } from "react";
import type { DatasetFilter } from "@/app/site-config/types";

import "../styles/dataset-filters.css";

type DatasetAccordionFiltersProps = {
  filters: DatasetFilter[];
  selectedFilters: string[];
  onFilterChangeAction: (value: string) => void;
};

export const DatasetAccordionFilters = ({
  filters,
  selectedFilters,
  onFilterChangeAction: onFilterChange,
}: DatasetAccordionFiltersProps) => {
  const [initiallyExpanded] = useState<string[]>(() => {
    const facetsWithActiveFilters = filters
      .filter((filter) => filter.options.some((option) => selectedFilters.includes(option.value)))
      .map((filter) => filter.id);

    return facetsWithActiveFilters.length > 0 ? facetsWithActiveFilters : [filters[0].id];
  });

  const accordionItems = filters.map((filter) => ({
    id: filter.id,
    title: filter.label,
    expanded: initiallyExpanded.includes(filter.id),
    content: (
      <div className="aq-filter-content">
        {filter.options
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((item) => (
            <div key={item.value} className="aq-filter-item">
              <Checkbox
                name={item.value}
                label={item.label}
                value={item.value}
                inputProps={{
                  checked: selectedFilters.includes(item.value),
                  onChange: () => onFilterChange(item.value),
                }}
              />
            </div>
          ))}
      </div>
    ),
  }));

  return <Accordion titleAs="h5" items={accordionItems} data-allow-multiple />;
};
