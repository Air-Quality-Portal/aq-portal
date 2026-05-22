import type { TrainingContent, TrainingContentExternal } from "@/app/site-config/types";
import { TRAINING__EO_BUILDING_EXPOSURE } from "./training__eo-building-exposure";
import { TRAINING__EO_PRE_POST_FIRE_MONITORING } from "./training__eo-pre-post-fire-monitoring";
import { TRAINING__FUNDAMENTALS_REMOTE_SENSING } from "./training__fundamentals-remote-sensing";
import { TRAINING__INTRODUCTION_TO_SAR } from "./training__introduction-to-sar";
import { TRAINING__LIFELINES_WILDFIRE_WORKFLOW } from "./training__lifelines-wildfire-workflow";

export const TRAININGS: TrainingContent[] = [
  TRAINING__LIFELINES_WILDFIRE_WORKFLOW,
  TRAINING__EO_BUILDING_EXPOSURE,
];

export const TRAININGS_EXTERNAL: TrainingContentExternal[] = [
  TRAINING__EO_PRE_POST_FIRE_MONITORING,
  TRAINING__FUNDAMENTALS_REMOTE_SENSING,
  TRAINING__INTRODUCTION_TO_SAR,
];
