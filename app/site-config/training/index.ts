import type { TrainingContent } from "@/app/site-config/types";
import { TRAINING__EO_BUILDING_EXPOSURE } from "./training_eo-building-exposure";
import { TRAINING__LIFELINES_WILDFIRE_WORKFLOW } from "./training_lifelines-wildfire-workflow";

export const TRAININGS: TrainingContent[] = [
  TRAINING__LIFELINES_WILDFIRE_WORKFLOW,
  TRAINING__EO_BUILDING_EXPOSURE,
];
