import type { DatasetContent } from "@/app/site-config/types";
import { DATASET__MOCK } from "./dataset__mock";
import { MOCK_DATASETS } from "./mock-datasets";

export { searchDatasets } from "./datasets__search";

export const DATASETS: DatasetContent[] = [DATASET__MOCK, ...MOCK_DATASETS];

export const getDatasetsByIds = (ids: string[]): DatasetContent[] =>
  ids
    .map((id) => DATASETS.find((dataset) => dataset.id === id))
    .filter((dataset): dataset is DatasetContent => Boolean(dataset));
