import type { DatasetContent, DatasetFilter, TagFilterCategory } from "@/app/site-config/types";
import { TAG_FILTER_CATEGORIES } from "@/app/site-config/types";

const SUBSCRIPT_DIGITS: Record<string, string> = {
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
};

const normalizeSubscripts = (value: string): string =>
  [...value].map((char) => SUBSCRIPT_DIGITS[char] ?? char).join("");

export const getIdFromValue = (value: string): string =>
  normalizeSubscripts(value)
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const generateDatasetFilters = (datasets: DatasetContent[]): DatasetFilter[] => {
  const optionsByCategory = new Map<TagFilterCategory, Set<string>>();

  for (const dataset of datasets) {
    for (const { category, options } of dataset.metadata.tags ?? []) {
      const existingOptions = optionsByCategory.get(category) ?? new Set<string>();

      for (const option of options) {
        existingOptions.add(option);
      }

      optionsByCategory.set(category, existingOptions);
    }
  }

  return Array.from(optionsByCategory, ([category, options]) => ({
    id: getIdFromValue(category),
    label: category,
    options: Array.from(options).map((opt) => ({
      label: opt,
      value: getIdFromValue(opt),
    })),
  })).sort(
    (a, b) =>
      TAG_FILTER_CATEGORIES.indexOf(a.label as TagFilterCategory) -
      TAG_FILTER_CATEGORIES.indexOf(b.label as TagFilterCategory),
  );
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
    const datasetTagIds = (dataset.metadata.tags ?? []).flatMap(({ options }) =>
      options.map(getIdFromValue),
    );
    return selectedTags.some((tag) => datasetTagIds.includes(tag));
  });
};
