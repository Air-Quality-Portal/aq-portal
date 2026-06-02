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
import { EVENT__SOUTHERN_CALIFORNIA_FIRE_JAN_2025 } from "../event/event__southern-california-fire-jan-2025";
import { EVENT__TEXAS_FLOODS_JULY_2025 } from "../event/event__texas-floods-july-2025";
import { EVENT__TYPHOON_SINLAKU_2026 } from "../event/event__typhoon-sinlaku-2026";
import { EVENT__US_WINTER_STORM_2026 } from "../event/event__us-winter-storm-jan-2026";
import { STORY__FINDING_FLOODS } from "../story/story__finding-floods";
import { STORY__SEEING_BEYOND_FLAMES } from "../story/story__seeing-beyond-flames";
import { STORY__SUPPORTING_COMMUNITIES_HURRICANE_HELENE } from "../story/story__supporting-communities-hurricane-helene";
import { STORY__TRACKING_TORNADOES_FROM_SPACE } from "../story/story__tracking-tornadoes-from-space";
import { TRAINING__EO_BUILDING_EXPOSURE } from "../training/training__eo-building-exposure";
import { TRAINING__FUNDAMENTALS_REMOTE_SENSING } from "../training/training__fundamentals-remote-sensing";
import { TRAINING__INTRODUCTION_TO_SAR } from "../training/training__introduction-to-sar";
import { TRAINING__LIFELINES_WILDFIRE_WORKFLOW } from "../training/training__lifelines-wildfire-workflow";

export const RESPOND_CONTENT: ThemeContent = {
  id: "respond",
  mastheadImage: { alt: "", src: "/img/theme/respond-masthead.webp" },
  subtitle: "Support real-time decisions with timely insights",
  theme: "respond",
  body: [
    {
      type: "stacCompare",
      heading: "Data Visualization",
      initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
      leftLayerConfig: {
        type: "raster",
        collectionId: "blackmarble-june2026-composite",
        dateRange: { from: "2024-08-01", to: "2024-08-31" },
      },
      rightLayerConfig: {
        type: "raster",
        collectionId: "blackmarble-hd-daily-june2026",
        dateRange: { from: "2024-09-28", to: "2024-09-28" },
      },
    },
  ],
} as const;

// TODO: these would be fetched based on content id
export const RESPOND_STORIES: [
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
] = [
  STORY__FINDING_FLOODS,
  STORY__TRACKING_TORNADOES_FROM_SPACE,
  STORY__SEEING_BEYOND_FLAMES,
  STORY__SUPPORTING_COMMUNITIES_HURRICANE_HELENE,
];

// TODO: these would be fetched based on content id
export const RESPOND_EVENTS: EventContent[] = [
  EVENT__TYPHOON_SINLAKU_2026,
  EVENT__US_WINTER_STORM_2026,
  EVENT__TEXAS_FLOODS_JULY_2025,
  EVENT__SOUTHERN_CALIFORNIA_FIRE_JAN_2025,
];

// TODO: these would be fetched based on content id
export const RESPOND_DATASTORIES: DataStoryContent[] = [
  DATASTORY__HURRICANE_HELENE_SEPTEMBER_2024,
  DATASTORY__HURRICANE_MILTON_OCTOBER_2024,
];

// TODO: these would be fetched based on content id
export const RESPOND_TRAININGS: (TrainingContent | TrainingContentExternal)[] = [
  TRAINING__LIFELINES_WILDFIRE_WORKFLOW,
  TRAINING__EO_BUILDING_EXPOSURE,
  TRAINING__FUNDAMENTALS_REMOTE_SENSING,
  TRAINING__INTRODUCTION_TO_SAR,
];
