import type { DatasetContent, DatasetFilter } from "@/app/site-config/types";

/**
 * Manually managed categories and filters.
 * Every option's `value` is a string that could be matched
 * to a dataset's `metadata.tags`.
 * A dataset added with a new tag may or may not be added here;
 * either would be a deliberate choice.
 */
export const DATASET_FILTERS: DatasetFilter[] = [
  {
    id: "data-type",
    label: "Data Type",
    options: [
      { label: "Regulatory Monitor", value: "reg-monitor" },
      { label: "Air Sensor", value: "airsensor" },
      { label: "Meteorological Station", value: "met-station" },
      { label: "Other ground-based monitor", value: "ground-based" },
      { label: "Retrospective Model", value: "retro-model" },
      { label: "Satellite", value: "Satellite" },
      { label: "Forecast Model", value: "Forecast model" },
    ],
  },
  {
    id: "parameter",
    label: "Parameter",
    options: [
      { label: "PM speciation", value: "pm" },
      { label: "AOD", value: "aod" },
      { label: "UV Aerosol Index", value: "uv-aerosol-index" },
      { label: "Angstrom Component", value: "angstrom" },
      { label: "Dust", value: "dust" },
      { label: "Smoke", value: "smoke" },
      { label: "Fire", value: "fire" },
      { label: "CO", value: "CO" },
      { label: "HCHO", value: "HCHO" },
      { label: "NO₂", value: "NO₂" },
      { label: "O₃", value: "O₃" },
      { label: "PM₂.₅", value: "PM₂.₅" },
    ],
  },
  {
    id: "use-case",
    label: "Use Case",
    options: [
      { label: "Wildfire Smoke", value: "Wildfire smoke" },
      { label: "High Ozone", value: "High ozone" },
      { label: "Criteria Pollutant Monitoring", value: "Criteria pollutant monitoring" },
      { label: "Industrial Emissions", value: "Industrial emissions" },
      { label: "On-Road Emissions", value: "On-road emissions" },
      { label: "Dust Storm", value: "Dust storm" },
      { label: "Transboundary Pollution", value: "Transboundary pollution" },
      { label: "Hazardous Air Pollutants", value: "Hazardous air pollutants" },
    ],
  },
];

/**
 * Keeps datasets that have at least one of the selected tags.
 * Category is a UI-only grouping; matching flattens every
 * selected value regardless of which category it came from.
 * No selected filters means all datasets are returned.
 */
export const filterDatasetsByTags = (
  datasets: DatasetContent[],
  selectedTags: string[],
): DatasetContent[] =>
  selectedTags.length === 0
    ? datasets
    : datasets.filter((dataset) =>
        (dataset.metadata.tags ?? []).some((tag) => selectedTags.includes(tag)),
      );
