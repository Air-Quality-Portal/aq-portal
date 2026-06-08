import type {
  GeoConfigProviderProps,
  StacCompareMapProps,
  StacSingleLayerMapProps,
} from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import type { AppRoutes } from "@/.next/types/routes";
import type { CardFeaturedPropsArgs, CardSimplePropsArgs } from "@/app/site-config/content.helpers";

export const CONTENT_TYPES: Record<ContentType, { route: AppRoutes; label: string }> = {
  dataset: { route: "/data-gallery", label: "product" },
  event: { route: "/news-events", label: "event" },
  news: { route: "/news-events", label: "news" },
  story: { route: "/news-events", label: "story" },
  datastory: { route: "/news-events", label: "Data Story" },
  training: { route: "/training", label: "training" },
};

export const CONTENT_THEMES: Record<Theme, { label: string; color: string; textColor?: string }> = {
  respond: {
    label: "respond",
    color: "secondary",
    textColor: "white",
  },
  build: {
    label: "build resilience",
    color: "success",
    textColor: "white",
  },
  prepare: {
    label: "prepare",
    color: "accent-warm",
  },
  recover: {
    label: "recover",
    color: "accent-cool",
    textColor: "white",
  },
};

export const CONTENT_SIDEBAR_CONTENT_TYPES: ContentType[] = [
  "dataset",
  "story",
  "datastory",
  "training",
];

export type IterableItemWithId<T> = T & { id: string };

export type Theme = "respond" | "build" | "prepare" | "recover";

export type Category =
  | "severewx"
  | "fire"
  | "heat"
  | "flood"
  | "tropical cyclone"
  | "earthquake"
  | "winter weather";

export type GalleryRoute = "/data-gallery" | "/news-events" | "/training"; // TODO: update to be dynamic

type GeoConfig = Omit<GeoConfigProviderProps, "children">;

export type ContentBlock =
  | {
      type: "text";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      paragraphs: ReactNode[];
    }
  | {
      type: "list";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      items: (string | { label: string; href: string })[];
    }
  | { type: "note"; text: string }
  | { type: "slider"; before: { src: string; alt: string }; after: { src: string; alt: string } }
  | {
      type: "video";
      src: string;
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      caption?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      maxWidth?: string;
      caption?: string;
    }
  | (StacSingleLayerMapProps &
      GeoConfig & {
        type: "stacSingleLayer";
        heading?: string;
        headingLevel?: "h2" | "h3" | "h4";
        caption?: string;
      })
  | (StacCompareMapProps &
      GeoConfig & {
        type: "stacCompare";
        heading?: string;
        headingLevel?: "h2" | "h3" | "h4";
        caption?: string;
      })
  | {
      type: "sectionCardSimple";
      heading?: string;
      href?: GalleryRoute;
      cards: CardSimplePropsArgs[];
    }
  | {
      type: "sectionCardFeatured";
      card: CardFeaturedPropsArgs;
    };

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
  body?: ContentBlock[];
  relatedContent?: string[];
};

export type DatasetContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "dataset";
  mastheadImage: MastheadImage;
  body?: ContentBlock[];
  relatedContent?: string[];
};

export type NewsContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "news";
  mastheadImage: MastheadImage;
  body?: ContentBlock[];
};

export type StoryContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "story";
  date?: string;
  mastheadImage: MastheadImage;
  body?: ContentBlock[];
};

export type DataStoryContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "datastory";
  mastheadImage: MastheadImage;
  body?: ContentBlock[];
};

export type DataStoryContentWithUrl = DataStoryContent & {
  url: string;
};

export type EventContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "event";
  mastheadImage: MastheadImage;
  isLatest?: boolean;
  lastUpdatedDate?: string;
  startDate: string;
  region: string;
  linkDHSFEMA?: { label: string; href: string };
  linkUSGovernment?: { label: string; href: string };
  body?: ContentBlock[];
  relatedContent?: string[];
};

export type ThemeContent = {
  id: string;
  title?: string;
  subtitle: string;
  mastheadImage: MastheadImage;
  theme: Theme;
  body: ContentBlock[];
};

type MastheadImage = {
  src: string;
  alt: string;
  caption?: string;
  attribution?: string;
};
