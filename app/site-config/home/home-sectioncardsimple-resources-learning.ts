import type { DatasetContent } from "@/app/site-config/types";
import { DATASET__SENTINEL_2_COLOR_INFRARED } from "../dataset/dataset__sentinel-2-color-infrared";
import { DATASET__SENTINEL_2_DNBR } from "../dataset/dataset__sentinel-2-dnbr";
import { DATASET__SENTINEL_2_SWIR } from "../dataset/dataset__sentinel-2-swir";
import { DATASET__SENTINEL_2_TRUE_COLOR } from "../dataset/dataset__sentinel-2-true-color";

export const RESOURCES_LEARNING_CARDS: DatasetContent[] = [
  DATASET__SENTINEL_2_TRUE_COLOR,
  DATASET__SENTINEL_2_COLOR_INFRARED,
  DATASET__SENTINEL_2_SWIR,
  DATASET__SENTINEL_2_DNBR,
];
