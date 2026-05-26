import type { DatasetContent } from "@/app/site-config/types";
import { DATASET__BLACKMARBLE_HD_DAILY_JUNE2026 } from "./dataset__blackmarble-hd-daily-june2026";
import { DATASET__BLACKMARBLE_JUNE2026_COMPOSITE } from "./dataset__blackmarble-june2026-composite";
import { DATASET__VIIRS_ACTIVE_FIRE } from "./dataset__viirs-active-fire";

export const DATASETS: DatasetContent[] = [
  DATASET__BLACKMARBLE_JUNE2026_COMPOSITE,
  DATASET__BLACKMARBLE_HD_DAILY_JUNE2026,
  DATASET__VIIRS_ACTIVE_FIRE,
];
