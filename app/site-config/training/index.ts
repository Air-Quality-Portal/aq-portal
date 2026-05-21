import type { TrainingContent } from "@/app/site-config/types";
import { eoBuildingExposure } from "./training_eo-building-exposure";
import { lifelinesWildfireWorkflow } from "./training_lifelines-wildfire-workflow";

export const trainings: TrainingContent[] = [lifelinesWildfireWorkflow, eoBuildingExposure];
