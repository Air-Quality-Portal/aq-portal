import type { TrainingContent, TrainingContentExternal } from "@/app/site-config/types";
import { TRAINING__EO_BUILDING_EXPOSURE } from "../training/training__eo-building-exposure";
import { TRAINING__FUNDAMENTALS_REMOTE_SENSING } from "../training/training__fundamentals-remote-sensing";
import { TRAINING__INTRODUCTION_TO_SAR } from "../training/training__introduction-to-sar";
import { TRAINING__LIFELINES_WILDFIRE_WORKFLOW } from "../training/training__lifelines-wildfire-workflow";

export const RESOURCES_LEARNING_CARDS: (TrainingContent | TrainingContentExternal)[] = [
  TRAINING__LIFELINES_WILDFIRE_WORKFLOW,
  TRAINING__EO_BUILDING_EXPOSURE,
  TRAINING__FUNDAMENTALS_REMOTE_SENSING,
  TRAINING__INTRODUCTION_TO_SAR,
];
