import { FINDING_THE_FLOODS } from "./finding-the-floods";
import type { StoryPageData } from "./types";

const STORIES: StoryPageData[] = [FINDING_THE_FLOODS];

export const STORIES_BY_ID: Record<string, StoryPageData> = Object.fromEntries(
  STORIES.map((story) => [story.id, story]),
);
