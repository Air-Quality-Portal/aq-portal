import type { DatasetContent } from "@/app/site-config/types";
import { EPA_AQS_CONCENTRATIONS } from "./epa-aqs-concentrations";
import { NAQFC_AQM_FORECAST_V7 } from "./naqfc-aqm-forecast-v7";
import { TEMPO_HCHO_COLUMN_GRID_V04_PROVISIONAL } from "./tempo-hcho-column-grid-v04-provisional";
import { TEMPO_NO2_COLUMN_GRID_V04_PROVISIONAL } from "./tempo-no2-column-grid-v04-provisional";

export const DATASETS: DatasetContent[] = [
  EPA_AQS_CONCENTRATIONS,
  NAQFC_AQM_FORECAST_V7,
  TEMPO_HCHO_COLUMN_GRID_V04_PROVISIONAL,
  TEMPO_NO2_COLUMN_GRID_V04_PROVISIONAL,
];

export const getDatasetsByIds = (ids: string[]): DatasetContent[] =>
  ids
    .map((id) => DATASETS.find((dataset) => dataset.id === id))
    .filter((dataset): dataset is DatasetContent => Boolean(dataset));
