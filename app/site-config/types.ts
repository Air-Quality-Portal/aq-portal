import type { ReactNode } from "react";

export type IterableItemWithId<T> = T & { id: string };

export type ContentType = "story" | "dataset" | "training" | "event" | "news";

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
  url?: string; // for external site content only otherwise id will be used (would be nice if we could use content-type as well - data-gallery breaks this pattern)
};

export type TrainingContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "training";
  date: string;
  mastheadImage: {
    src: string;
    alt: string;
    caption?: string;
    attribution?: string;
  };
  body: ContentBlock[];
  relatedContent?: string[];
};

export type DatasetContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "dataset";
  mastheadImage: {
    src: string;
    alt: string;
  };
};

export type NewsContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "news";
};

export type StoryContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "story";
  mastheadImage: {
    src: string;
    alt: string;
    caption?: string;
    attribution?: string;
  };
};

export type EventContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "event";
};
