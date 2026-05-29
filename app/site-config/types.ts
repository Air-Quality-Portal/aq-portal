import type {
  GeoConfigProviderProps,
  StacCompareMapProps,
  StacSingleLayerMapProps,
} from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import type { CardSimplePropsArgs } from "@/app/site-config/content.helpers";

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
      id?: string;
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      paragraphs: ReactNode[];
    }
  | {
      type: "list";
      id?: string;
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
      })
  | (StacCompareMapProps &
      GeoConfig & {
        type: "stacCompare";
        heading?: string;
        headingLevel?: "h2" | "h3" | "h4";
      })
  | {
      type: "sectionCardSimple";
      heading?: string;
      href?: GalleryRoute;
      cards: CardSimplePropsArgs[];
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
  body: ContentBlock[];
  relatedContent?: string[];
};

export type DatasetContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "dataset";
  mastheadImage: MastheadImage;
  body: ContentBlock[];
  relatedContent?: string[];
};

export type NewsContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "news";
  mastheadImage: MastheadImage;
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
};

export type EventContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "event";
  mastheadImage: MastheadImage;
  isLatest?: boolean;
  url?: string;
  date?: string;
  overview?: OverviewSection;
  body?: ContentBlock[];
  resourcesLearning?: string[];
  relatedContent?: string[];
};

export type DetailPageContent = StoryContent | DataStoryContent | NewsContent | EventContent;

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

export type OverviewSection = {
  region?: string;
  startDate?: string;
  disasterType?: string;
  overviewLink1?: string;
  overviewLink2?: string;
};
