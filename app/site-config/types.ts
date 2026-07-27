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

export type Category = string;

export type DatasetMetadataEntry = {
  label: string;
  value: string[];
};

export type DatasetMetadata = Record<string, DatasetMetadataEntry>;

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
  | { type: "note"; text: string; label?: string }
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
      type: "linkList";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      lead?: string;
      links: { label: string; href: string; isExternal?: boolean }[];
    }
  | {
      type: "tutorialList";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      lead?: string;
      tutorials: {
        title: string;
        description?: string;
        href: string;
        duration?: string;
        level?: "Beginner" | "Intermediate" | "Advanced";
      }[];
    }
  | {
      type: "sectionCardSimple";
      heading?: string;
      href?: GalleryRoute;
      description?: string;
      cards: CardSimplePropsArgs[];
    }
  | {
      type: "relatedDatasets";
      heading?: string;
      headingLevel?: "h2" | "h3" | "h4";
      href?: GalleryRoute;
      description?: string;
      /** Ids of datasets in the catalog to display. Card content is derived from each dataset. */
      datasetIds: string[];
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
  /** Topic tags shown on catalog and related-dataset cards. */
  categories?: Category[];
  metadata: DatasetMetadata;
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
