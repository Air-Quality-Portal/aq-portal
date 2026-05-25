import type { ReactNode } from "react";

export type IterableItemWithId<T> = T & { id: string };

export type Theme = "respond" | "build" | "prepare" | "recover";

export type Category = "severewx" | "fire" | "heat" | "flood" | "tropical cyclone" | "earthquake";

export type ContentBlock =
  | { type: "text"; heading?: string; headingLevel?: "h2" | "h3" | "h4"; paragraphs: ReactNode[] }
  | {
      type: "list";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      items: (string | { label: string; href: string })[];
    }
  | { type: "note"; text: string }
  | { type: "slider"; before: { src: string; alt: string }; after: { src: string; alt: string } }
  | { type: "video"; src: string; title?: string; caption?: string }
  | { type: "image"; src: string; alt: string; width: number; height: number; maxWidth?: string };

type Content =
  | TrainingContent
  | TrainingContentExternal
  | DatasetContent
  | DataStoryContent
  | StoryContent
  | NewsContent
  | EventContent;

export type ContentType = Content["contentType"];

export type MinimumCardContent = {
  id: string;
  contentType: ContentType;
  title: string;
  thumbnailImage: {
    src: string;
    alt: string;
  };
  themes: Theme[];
  categories: Category[];
  description?: string;
};

export type TrainingContentExternal = Omit<MinimumCardContent, "contentType"> & {
  contentType: "training";
  url: string;
};

export type TrainingContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "training";
  date: string;
  mastheadImage: MastheadImage;
  body: ContentBlock[];
  relatedContent?: string[];
};

export type DatasetContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "dataset";
  mastheadImage: MastheadImage;
};

export type NewsContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "news";
  mastheadImage: MastheadImage;
};

export type StoryContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "story";
  mastheadImage: MastheadImage;
};

export type DataStoryContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "datastory";
  mastheadImage: MastheadImage;
};

export type EventContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "event";
  mastheadImage: MastheadImage;
  date: string;
  overview: OverviewSection;
  body: ContentBlock[];
};

export type OverviewSection = {
  region?: string;
  startDate?: string;
  disastersType?: string;
  DhsAndFema?: link;
  usGovtDoing?: link;
};

type link = {
  text: string;
  url: string;
};
type MastheadImage = {
  src: string;
  alt: string;
  caption?: string;
  attribution?: string;
};
