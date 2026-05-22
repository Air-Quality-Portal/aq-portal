import type { StyleSpecification } from "maplibre-gl";
import type { ReactNode } from "react";

export type DateRange = { from: string; to: string };

/** Raster layer config without dateRange — consumers add it when building the full layer config. */
export type StacLayer = {
  type: "raster";
  collectionId: string;
  dateRange: { from: string; to: string };
  stacApiUrl: string;
  titilerBaseUrl: string;
  baseMapStyle: StyleSpecification;
  initialViewState: { longitude: number; latitude: number; zoom: number };
};

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
  | { type: "image"; src: string; alt: string; width: number; height: number; maxWidth?: string }
  | {
      type: "stacSingleLayer";
      stacLayer: StacLayer;
    }
  | {
      type: "stacCompare";
      baseMapStyle: StyleSpecification;
      initialViewState: { longitude: number; latitude: number; zoom: number };
      leftLayerConfig: { type: "raster"; collectionId: string; dateRange: DateRange };
      rightLayerConfig: { type: "raster"; collectionId: string; dateRange: DateRange };
      stacApiUrl?: string;
      titilerBaseUrl?: string;
    };

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
  body: ContentBlock[];
};

export type NewsContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "news";
  mastheadImage: MastheadImage;
};

export type StoryContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "story";
  mastheadImage: MastheadImage;
};

export type EventContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "event";
  mastheadImage: MastheadImage;
};

type MastheadImage = {
  src: string;
  alt: string;
  caption?: string;
  attribution?: string;
};
