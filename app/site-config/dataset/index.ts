// One file per dataset. Add new datasets here — one import, one entry in the array.
import type { DatasetContent } from "@/app/site-config/types";
import { DATASET__BLACKMARBLE_HD_DAILY_JUNE2026 } from "./dataset__blackmarble-hd-daily-june2026";
import { DATASET__BLACKMARBLE_JUNE2026_COMPOSITE } from "./dataset__blackmarble-june2026-composite";

export { DATASET__BLACKMARBLE_HD_DAILY_JUNE2026, DATASET__BLACKMARBLE_JUNE2026_COMPOSITE };

export const DATASETS: DatasetContent[] = [
  DATASET__BLACKMARBLE_JUNE2026_COMPOSITE,
  DATASET__BLACKMARBLE_HD_DAILY_JUNE2026,
];
