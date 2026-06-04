import type { DatasetContent } from "@/app/site-config/types";
import { DATASET__SENTINEL_2_COLOR_INFRARED } from "./dataset__sentinel-2-color-infrared";
import { DATASET__SENTINEL_2_DNBR } from "./dataset__sentinel-2-dnbr";
import { DATASET__SENTINEL_2_NBR } from "./dataset__sentinel-2-nbr";
import { DATASET__SENTINEL_2_SWIR } from "./dataset__sentinel-2-swir";
import { DATASET__SENTINEL_2_TRUE_COLOR } from "./dataset__sentinel-2-true-color";

export const DATASETS: DatasetContent[] = [
  DATASET__SENTINEL_2_TRUE_COLOR,
  DATASET__SENTINEL_2_COLOR_INFRARED,
  DATASET__SENTINEL_2_SWIR,
  DATASET__SENTINEL_2_NBR,
  DATASET__SENTINEL_2_DNBR,
];
