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

export type ContentHeadingLevel = "h2" | "h3" | "h4";

export type IterableItemWithId<T> = T & { id: string };

export type DatasetMetadataEntry = {
  label: string;
  /** A single value, or several values that belong to the same field. */
  value: string | string[];
  /**
   * How to join a multi-value `value`, e.g. `", "` or `" / "`. Defaults to a
   * space. Use `"\n"` to render each value on its own line.
   */
  delimiter?: string;
};

export type DatasetMetadata = {
  /** Topic tags shown on catalog and related-dataset cards. Not rendered in the sidebar. */
  tags?: string[];
  /** Labeled properties of the dataset, rendered in the detail page sidebar. */
  fields?: Record<string, DatasetMetadataEntry>;
};

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
      /** Skip the Next.js image optimizer (e.g. remote placeholder services that serve SVG). */
      unoptimized?: boolean;
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
      description?: string;
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
  tag1?: string;
  tags?: string[];
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
  metadata: DatasetMetadata;
  mastheadImage: MastheadImage;
  actions?: {
    primary: DatasetAction;
    secondary?: DatasetAction;
  };
  body?: ContentBlock[];
  linkSections?: DatasetLinkSection[];
  tutorials?: DatasetTutorialSection;
  citation?: DatasetCitationSection;
  relatedDatasets?: RelatedDatasetsSection;
};

export type DatasetCitationSection = {
  /** @default "Cite this dataset" */
  heading?: string;
  text: string;
};

export type DatasetLinkSection = {
  heading?: string;
  headingLevel?: ContentHeadingLevel;
  lead?: string;
  links: { label: string; href: string; isExternal?: boolean }[];
};

export type DatasetTutorialSection = {
  heading?: string;
  headingLevel?: ContentHeadingLevel;
  lead?: string;
  tutorials: DatasetTutorial[];
};

export type RelatedDatasetsSection = {
  heading?: string;
  headingLevel?: ContentHeadingLevel;
  description?: string;
  /** Ids of datasets in the catalog to display. Card content is derived from each dataset. */
  datasetIds: string[];
};

export type DatasetTutorial = {
  title: string;
  description?: string;
  href: string;
  duration?: string;
  level?: "beginner" | "intermediate" | "advanced";
};

export type ToolContent = {
  id: string;
  contentType: "tool";
  title: string;
  fullname: string;
  description?: string;
  /** External URL the card title links to. */
  href: string;
  /** Primary tag shown over the image, e.g. "Agency". */
  tagPrimary?: string;
  /** Tags shown below the description. */
  additionalTags?: string[];
  thumbnailImage: {
    src: string;
    alt: string;
  };
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
