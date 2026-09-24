import type { DatasetContent, DatasetFilter } from "@/app/site-config/types";
import { generateDatasetFilters } from "./dataset-filters";
import { EPA_AQS_CONCENTRATIONS } from "./epa-aqs-concentrations";
import { NAQFC_AQM_FORECAST_V7 } from "./naqfc-aqm-forecast-v7";
import { NOAA_HMS_FIRE_SMOKE } from "./noaa-hms-fire-smoke";
import { TEMPO_HCHO_COLUMN_GRID_V04_PROVISIONAL } from "./tempo-hcho-column-grid-v04-provisional";
import { TEMPO_NO2_COLUMN_GRID_V04_PROVISIONAL } from "./tempo-no2-column-grid-v04-provisional";

export { filterDatasetsByTags, generateDatasetFilters, getFilterLabel } from "./dataset-filters";
export { searchDatasets } from "./datasets__search";

export const DATASETS: DatasetContent[] = [
  EPA_AQS_CONCENTRATIONS,
  NAQFC_AQM_FORECAST_V7,
  NOAA_HMS_FIRE_SMOKE,
  TEMPO_HCHO_COLUMN_GRID_V04_PROVISIONAL,
  TEMPO_NO2_COLUMN_GRID_V04_PROVISIONAL,
];

export const DATASET_FILTERS: DatasetFilter[] = generateDatasetFilters(DATASETS);

export const getDatasetsByIds = (ids: string[]): DatasetContent[] =>
  ids
    .map((id) => DATASETS.find((dataset) => dataset.id === id))
    .filter((dataset): dataset is DatasetContent => Boolean(dataset));
