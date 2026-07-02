import type { DatasetContent } from "@/app/site-config/types";
import { DATASET__MOCK } from "./dataset__mock";
import { MOCK_DATASETS } from "./mock-datasets";

// DATASET__MOCK is the fully-authored detail page; the mocks fill out the
// gallery so pagination is demonstrable.
export const DATASETS: DatasetContent[] = [DATASET__MOCK, ...MOCK_DATASETS];
