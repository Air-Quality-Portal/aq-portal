"use client";

import { Accordion, Checkbox } from "@teamimpact/veda-ui-blocks";
import { useEffect, useState } from "react";
import { DATASET_FILTERS } from "@/app/site-config/dataset/dataset-filters";

import "../styles/dataset-filters.css";

type DatasetAccordionFiltersProps = {
  selectedFilters: string[];
  onFilterChangeAction: (value: string) => void;
};

export const DatasetAccordionFilters = ({
  selectedFilters,
  onFilterChangeAction: onFilterChange,
}: DatasetAccordionFiltersProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setExpandedSections([DATASET_FILTERS[0].id]);
    } else {
      const expanded = DATASET_FILTERS.filter((filter) =>
        filter.options.some((option) => selectedFilters.includes(option.value)),
      ).map((f) => f.id);
      setExpandedSections(expanded);
    }
  }, [selectedFilters]);

  const accordionItems = DATASET_FILTERS.map((filter) => ({
    id: filter.label.toLowerCase().replace(/\s+/g, "-"),
    title: filter.label,
    expanded: expandedSections.includes(filter.id),
    content: (
      <div className="aq-filter-content">
        {filter.options.map((item) => (
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
