import type { EventContent, NewsContent, StoryContent } from "@/app/site-config/types";
import { EVENT__TYPHOON_SINLAKU_2026 } from "../event/event__typhoon-sinlaku-2026";
import { NEWS__NEW_DISASTERS_PORTAL_TEST_HELP } from "../news/news__new-disasters-portal-test-help";
import { STORY__ESTIMATING_LOSS_RECOVERY } from "../story/story__estimating-loss-recovery";
import { STORY__FINDING_FLOODS } from "../story/story__finding-floods";

// Layout order: [0] featured, [1] regular, [2] compact top, [3] compact bottom
export const NEWS_EVENTS_CARDS: [
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
  NewsContent | StoryContent | EventContent,
] = [
  STORY__ESTIMATING_LOSS_RECOVERY,
  STORY__FINDING_FLOODS,
  EVENT__TYPHOON_SINLAKU_2026,
  NEWS__NEW_DISASTERS_PORTAL_TEST_HELP,
];
