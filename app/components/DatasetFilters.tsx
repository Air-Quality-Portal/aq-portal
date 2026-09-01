"use client";

import { Accordion, Checkbox } from "@teamimpact/veda-ui-blocks";
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
  const accordionItems = DATASET_FILTERS.map((filter, index) => ({
    id: filter.label.toLowerCase().replace(/\s+/g, "-"),
    title: filter.label,
    expanded: index === 0 /* Opens the first accordion item by default */,
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

  return <Accordion titleAs="h5" items={accordionItems} />;
};
