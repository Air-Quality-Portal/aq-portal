import type { ReactNode } from "react";

export type IterableItemWithId<T> = T & { id: string };

export type ContentType = "story" | "dataset" | "training" | "event" | "news";

export type Theme = "respond" | "build" | "prepare" | "recover";

export type Category = "severewx" | "fire" | "heat" | "flood" | "tropical cyclone" | "earthquake";

export type ContentBlock =
  | { type: "text"; heading?: string; headingLevel?: "h2" | "h3"; paragraphs: ReactNode[] }
  | {
      type: "list";
      heading?: string;
      headingLevel?: "h2" | "h3";
      items: (string | { label: string; href: string })[];
    }
  | { type: "note"; text: string }
  | { type: "slider"; before: { src: string; alt: string }; after: { src: string; alt: string } }
  | { type: "video"; src: string; title?: string; caption?: string }
  | { type: "image"; src: string; alt: string; width: number; height: number; maxWidth?: string };

export type TrainingContent = {
  id: string;
  contentType: "training";
  title: string;
  thumbnailImage: {
    src: string;
    alt: string;
  };
  date: string;
  themes: Theme[];
  categories: Category[];
  heroImage: {
    src: string;
    alt: string;
    caption?: string;
    attribution?: string;
  };
  description: string;
  body: ContentBlock[];
  relatedContent?: string[];
};

export type DatasetContent = {
  id: string;
  contentType: "dataset";
  title: string;
  description: string;
  thumbnailImage: {
    src: string;
    alt: string;
  };
  themes: Theme[];
  categories: Category[];
  heroImage: {
    src: string;
    alt: string;
  };
};
