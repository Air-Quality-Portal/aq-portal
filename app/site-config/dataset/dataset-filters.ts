import type { DatasetContent, DatasetFilter, TagFilterCategory } from "@/app/site-config/types";
import { TAG_FILTER_CATEGORIES } from "@/app/site-config/types";

export const getIdFromValue = (value: string): string =>
  value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const generateDatasetFilters = (datasets: DatasetContent[]): DatasetFilter[] => {
  const optionsByCategory = new Map<TagFilterCategory, Set<string>>();

  for (const dataset of datasets) {
    for (const { category, values } of dataset.metadata.tags ?? []) {
      const existingOptions = optionsByCategory.get(category) ?? new Set<string>();

      for (const value of values) {
        existingOptions.add(value);
      }

      optionsByCategory.set(category, existingOptions);
    }
  }

  return TAG_FILTER_CATEGORIES.map((category) => {
    const options = optionsByCategory.get(category);
    return options
      ? {
          id: getIdFromValue(category),
          label: category,
          options: Array.from(options).map((opt) => ({
            label: opt,
            value: getIdFromValue(opt),
          })),
        }
      : null;
  }).filter((filter): filter is DatasetFilter => Boolean(filter));
};

/**
 * Keeps datasets that have at least one of the selected tags.
 * Category is a UI-only grouping; matching flattens every
 * selected value regardless of which category it came from.
 * No selected filters means all datasets are returned.
 */
export const filterDatasetsByTags = (
  datasets: DatasetContent[],
  selectedTags: string[],
): DatasetContent[] => {
  if (selectedTags.length === 0) return datasets;

  return datasets.filter((dataset) => {
    const datasetTagIds = (dataset.metadata.tags ?? []).flatMap(({ values }) =>
      values.map(getIdFromValue),
    );
    return selectedTags.some((tag) => datasetTagIds.includes(tag));
  });
};

export const getFilterLabel = (filters: DatasetFilter[], value: string): string =>
  filters.flatMap((f) => f.options).find((o) => o.value === value)?.label ?? value;
