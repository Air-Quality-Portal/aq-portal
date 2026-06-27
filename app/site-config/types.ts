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

export type IterableItemWithId<T> = T & { id: string };

export type Category1 = "c1 lorem" | "c1 ipsum" | "c1 dore";
export type Category2 = "c2 lorem" | "c2 ipsum" | "c2 dore";
export type Category3 = "c3 lorem" | "c3 ipsum" | "c3 dore";

export type Category = Category1 | Category2 | Category3;

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
  description?: string;
  tag1?: Category;
  tags?: Category[];
};

export type DatasetContent = {
  id: string;
  contentType: "dataset";
  title: string;
  thumbnailImage: {
    src: string;
    alt: string;
  };
  description?: string;
  category1: Category1[];
  category2: Category2[];
  category3: Category3[];
  mastheadImage: MastheadImage;
  actions?: {
    primary: DatasetAction;
    secondary?: DatasetAction;
  };
  body?: ContentBlock[];
};

export type DatasetAction = {
  label: string;
  href: string;
  isExternal?: boolean;
};

type MastheadImage = {
  src: string;
  alt: string;
  caption?: string;
  attribution?: string;
};
