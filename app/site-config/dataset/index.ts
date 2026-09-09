import type { DatasetContent } from "@/app/site-config/types";
import { MOCK_DETAILED_DATASET } from "./dataset__mock";
import { MOCK_DATASETS } from "./datasets__mock";

export const DATASETS: DatasetContent[] = [MOCK_DETAILED_DATASET, ...MOCK_DATASETS];

export const getDatasetsByIds = (ids: string[]): DatasetContent[] =>
  ids
    .map((id) => DATASETS.find((dataset) => dataset.id === id))
    .filter((dataset): dataset is DatasetContent => Boolean(dataset));
