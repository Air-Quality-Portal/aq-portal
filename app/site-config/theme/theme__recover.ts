import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";
import type {
  DataStoryContent,
  EventContent,
  NewsContent,
  StoryContent,
  ThemeContent,
  TrainingContent,
  TrainingContentExternal,
} from "@/app/site-config/types";
import { DATASTORY__HURRICANE_HELENE_SEPTEMBER_2024 } from "../datastory/datastory__hurricane-helene-september-2024";
import { DATASTORY__HURRICANE_MILTON_OCTOBER_2024 } from "../datastory/datastory__hurricane-milton-october-2024";
import { STORY__CLEARING_THE_WAY_DEBRIS_MAPPING } from "../story/story__clearing-the-way-debris-mapping";
import { STORY__ESTIMATING_LOSS_RECOVERY } from "../story/story__estimating-loss-recovery";
import { STORY__IDENTIFYING_INFRASTRUCTURE_RISKS_HURRICANE } from "../story/story__identifying-infrastructure-risks-hurricane";
import { STORY__MAPPING_OIL_SPILLS_FROM_SPACE } from "../story/story__mapping_oil_spills_from_space";
import { TRAINING__EO_BUILDING_EXPOSURE } from "../training/training__eo-building-exposure";
import { TRAINING__EO_PRE_POST_FIRE_MONITORING } from "../training/training__eo-pre-post-fire-monitoring";
import { TRAINING__FUNDAMENTALS_REMOTE_SENSING } from "../training/training__fundamentals-remote-sensing";
import { TRAINING__INTRODUCTION_TO_SAR } from "../training/training__introduction-to-sar";

export const RECOVER_CONTENT: ThemeContent = {
  id: "recover",
  mastheadImage: {
    alt: "Debris removal operations along 6th street in Mayfield, Kentucky, Feb. 8, 2022. The Louisville District was working under the direction of FEMA at the request of the state and local government to perform debris removal in Graves County. Credits: Katelyn Newton / U.S. Army Corps of Engineers, Louisville District.",
    src: "/img/theme/recover-masthead.webp",
  },
  subtitle: "Assess impacts and rebuild stronger",
  theme: "recover",
  body: [
    {
      type: "stacCompare",
      heading: "Data Visualization",
      initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
      baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
      leftLayerConfig: {
        type: "raster",
        collectionId: "gaia-january2025-total-composite-tmp",
        collectionAssetId: "total",
        dateRange: { from: "2025-01-01", to: "2025-01-01" },
        hideLegend: true,
      },
      rightLayerConfig: {
        type: "raster",
        collectionId: "gaia-january2025-wood-composite-tmp",
        collectionAssetId: "wood",
        dateRange: { from: "2025-01-01", to: "2025-01-01" },
      },
    },
  ],
} as const;

// TODO: these would be fetched based on content id
export const RECOVER_STORIES: [
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
] = [
  STORY__ESTIMATING_LOSS_RECOVERY,
  STORY__CLEARING_THE_WAY_DEBRIS_MAPPING,
  STORY__MAPPING_OIL_SPILLS_FROM_SPACE,
  STORY__IDENTIFYING_INFRASTRUCTURE_RISKS_HURRICANE,
];

// TODO: these would be fetched based on content id
export const RECOVER_DATASTORIES: DataStoryContent[] = [
  DATASTORY__HURRICANE_HELENE_SEPTEMBER_2024,
  DATASTORY__HURRICANE_MILTON_OCTOBER_2024,
];

// TODO: these would be fetched based on content id
export const RECOVER_TRAININGS: (TrainingContent | TrainingContentExternal)[] = [
  TRAINING__EO_BUILDING_EXPOSURE,
  TRAINING__FUNDAMENTALS_REMOTE_SENSING,
  TRAINING__INTRODUCTION_TO_SAR,
  TRAINING__EO_PRE_POST_FIRE_MONITORING,
];
