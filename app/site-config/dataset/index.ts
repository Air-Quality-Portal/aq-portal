import type { DatasetContent } from "@/app/site-config/types";
import { DATASET__MOCK } from "./dataset__mock";
import { AQS_AIRNOW__MOCK, MAIAC_AOD__MOCK, NASA_FIRMS__MOCK } from "./related-datasets__mock";

export const DATASETS: DatasetContent[] = [
  DATASET__MOCK,
  AQS_AIRNOW__MOCK,
  NASA_FIRMS__MOCK,
  MAIAC_AOD__MOCK,
];

export const getDatasetsByIds = (ids: string[]): DatasetContent[] =>
  ids
    .map((id) => DATASETS.find((dataset) => dataset.id === id))
    .filter((dataset): dataset is DatasetContent => Boolean(dataset));
