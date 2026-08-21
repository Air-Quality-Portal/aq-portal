"use client";

import { Accordion, Checkbox } from "@teamimpact/veda-ui-blocks";
import {
  dataTypesFilter,
  parametersFilter,
  useCasesFilter,
} from "../site-config/dataset/dataset-filters";
import "../styles/dataset-filters.css";

type FilterObject = {
  label: string;
  values: Array<{ label: string; value: string }>;
};

export const DatasetAccordionFilters = () => {
  const filters: FilterObject[] = [dataTypesFilter, parametersFilter, useCasesFilter];

  const accordionItems = filters.map((filter) => ({
    id: filter.label.toLowerCase().replace(/\s+/g, "-"),
    title: filter.label,
    content: (
      <div>
        {filter.values.map((item) => (
          <div key={item.value} className="aq-filter-item">
            <Checkbox name={item.value} label={item.label} value={item.value} />
          </div>
        ))}
      </div>
    ),
  }));

  return <Accordion titleAs="h5" items={accordionItems} />;
};
