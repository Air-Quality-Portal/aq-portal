import type { DatasetContent } from "@/app/site-config/types";
import { DATASET__SENTINEL_2_COLOR_INFRARED } from "../dataset/dataset__sentinel-2-color-infrared";
import { DATASET__SENTINEL_2_DNBR } from "../dataset/dataset__sentinel-2-dnbr";
import { DATASET__SENTINEL_2_SWIR } from "../dataset/dataset__sentinel-2-swir";
import { DATASET__SENTINEL_2_TRUE_COLOR } from "../dataset/dataset__sentinel-2-true-color";

// Layout order: [0] featured, [1] regular, [2] compact top, [3] compact bottom
export const NEWS_EVENTS_CARDS: [DatasetContent, DatasetContent, DatasetContent, DatasetContent] = [
  DATASET__SENTINEL_2_TRUE_COLOR,
  DATASET__SENTINEL_2_COLOR_INFRARED,
  DATASET__SENTINEL_2_SWIR,
  DATASET__SENTINEL_2_DNBR,
];
