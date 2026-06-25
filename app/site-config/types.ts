import type {
  GeoConfigProviderProps,
  StacCompareMapProps,
  StacSingleLayerMapProps,
} from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import type { CardFeaturedPropsArgs, CardSimplePropsArgs } from "@/app/site-config/content.helpers";

export const CONTENT_TYPES: Record<ContentType, { route: string; label: string }> = {
  dataset: { route: "/data-gallery", label: "product" },
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

export const CONTENT_SIDEBAR_CONTENT_TYPES: ContentType[] = ["dataset"];

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

export type GalleryRoute = string;

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

type Content = DatasetContent;

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

export type DatasetContent = Omit<MinimumCardContent, "contentType"> & {
  contentType: "dataset";
  mastheadImage: MastheadImage;
  body?: ContentBlock[];
  relatedContent?: string[];
};

type MastheadImage = {
  src: string;
  alt: string;
  caption?: string;
  attribution?: string;
};
