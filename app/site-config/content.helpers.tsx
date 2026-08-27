import type { CardDetailedProps, CardProps, CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import {
  type CardTextOnlySection,
  CONTENT_TYPES,
  type ContentType,
  type DatasetMetadata,
  type DatasetMetadataEntry,
  type IterableItemWithId,
  type TutorialLevel,
  type TutorialSection,
  type WorkshopSection,
} from "@/app/site-config/types";

export const makePrimaryTag = (tag: string) => ({
  label: tag,
  variant: "solid" as const,
  color: "white",
  textColor: "primary-dark",
});

export const makeSimpleTag = (tag: string) => ({
  label: tag,
  variant: "outline" as const,
  color: "base-light",
});

export const makeContentTypeTag = (tag: ContentType) => ({
  ...makeSimpleTag(CONTENT_TYPES[tag].label),
  variant: "solid" as const,
});

const TUTORIAL_LEVEL_COLOR: Record<TutorialLevel, string> = {
  beginner: "success",
  intermediate: "info",
  advanced: "secondary",
};

export const makeTutorialLevelTag = (level: TutorialLevel) => ({
  ...makeSimpleTag(level.toUpperCase()),
  variant: "solid" as const,
  color: `${TUTORIAL_LEVEL_COLOR[level]}-lighter`,
  textColor: `${TUTORIAL_LEVEL_COLOR[level]}-darker`,
});

export const makeTutorialCardSection = ({
  tutorials,
  ...section
}: TutorialSection): CardTextOnlySection => ({
  ...section,
  items: tutorials.map((tutorial) => ({
    id: tutorial.href,
    title: tutorial.title,
    href: tutorial.href,
    description: tutorial.description,
    tags: [
      ...(tutorial.duration ? [makeSimpleTag(tutorial.duration)] : []),
      ...(tutorial.level ? [makeTutorialLevelTag(tutorial.level)] : []),
    ],
  })),
});

export const makeWorkshopCardSection = ({
  workshops,
  ...section
}: WorkshopSection): CardTextOnlySection => ({
  ...section,
  items: workshops.map(({ tags, ...workshop }) => ({
    ...workshop,
    tags: tags?.map((tag) => makeSimpleTag(tag)),
  })),
});

export const makeButtonOutlineLink = (href: string, isExternal = true) => ({
  href,
  isExternal,
  className:
    "flex-justify width-full shadow-none text-light padding-y-2 border-1px border-base-lighter",
  variant: "button-outline" as const,
});

/** The lines to render for a metadata entry : the sidebar prints one per line. */
export const getMetadataValueLines = (entry: DatasetMetadataEntry): string[] => {
  if (!Array.isArray(entry.value)) return [entry.value];
  if (entry.delimiter === "\n")
    // "\n" gives each value its own line.
    return entry.value;
  // Any other delimiter joins the values onto one line.
  return [entry.value.join(entry.delimiter ?? " ")];
};

export const getMetadataFields = (metadata: DatasetMetadata): [string, DatasetMetadataEntry][] =>
  Object.entries(metadata.fields ?? {});

export const getMetadataFieldTag = (metadata: DatasetMetadata, key: string): string | undefined => {
  const entry = metadata.fields?.[key];
  return entry && getMetadataValueLines(entry).join(" ");
};

export type CardMastheadPropsArgs = Omit<CardProps, "title" | "image"> & {
  mastheadImage: {
    alt: string;
    src: string;
  };
  title?: string;
  tagPrimary?: string;
};

export const makeCardMastHeadProps = ({
  mastheadImage,
  title,
  tagPrimary,
  ...rest
}: CardMastheadPropsArgs): CardProps => ({
  image: <Image {...mastheadImage} sizes="100vw" fill />,
  title: title,
  tag: tagPrimary
    ? {
        label: tagPrimary,
        variant: "solid" as const,
        bgColor: "white",
        textColor: "primary-dark",
      }
    : undefined,
  ...rest,
});

export type CardDetailedPropsArgs = Omit<
  CardDetailedProps,
  "image" | "imagePosition" | "tags" | "tagPrimary" | "callToAction"
> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  tags?: string[];
  tagPrimary?: string;
  url?: string;
};

export const makeCardDetailedImageLeftProps = ({
  id,
  contentType,
  thumbnailImage,
  tagPrimary,
  tags,
  url,
  title,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps> => {
  const href = url ? url : `${CONTENT_TYPES[contentType].route}/${id}`;

  return {
    id,
    className: "height-card-md bg-base-lightest",
    image: <Image {...thumbnailImage} fill sizes="194px" />,
    imagePosition: "left",
    title: (
      <Link className="font-body-lg text-light" href={href} isExternal={!!url} variant="text">
        {title}
      </Link>
    ),
    tags: (tags ?? []).map((tag) => makeSimpleTag(tag)),
    tagPrimary: tagPrimary ? { ...makePrimaryTag(tagPrimary) } : undefined,
    ...rest,
  };
};

export type CardDetailedTextOnlyPropsArgs = Omit<
  CardDetailedProps,
  "image" | "imagePosition" | "tagPrimary" | "title" | "callToAction" | "callToActionSecondary"
> & {
  id: string;
  title: string;
  href: string;
  isExternal?: boolean;
};

export const makeCardDetailedTextOnlyProps = ({
  id,
  title,
  href,
  isExternal,
  description,
  tags,
  className,
  ...rest
}: CardDetailedTextOnlyPropsArgs): IterableItemWithId<CardDetailedProps> => ({
  id,
  className: className ? `display-block ${className}` : "display-block",
  image: <svg key={id} aria-hidden="true" focusable="false" />,
  title: (
    <>
      <Link className="font-body-lg text-light" href={href} isExternal={isExternal} variant="text">
        {title}
      </Link>
      {description && (
        <p className="font-body-xs text-base-dark text-light margin-0">{description}</p>
      )}
    </>
  ),
  tags,
  ...rest,
});

export type CardSimplePropsArgs = Omit<CardSimpleProps, "image" | "tag" | "isExternal" | "href"> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  tag?: string;
  url?: string;
};

export const makeCardSimpleProps = ({
  id,
  contentType,
  thumbnailImage,
  tag,
  url,
  ...rest
}: CardSimplePropsArgs): IterableItemWithId<CardSimpleProps> => ({
  id,
  image: <Image {...thumbnailImage} fill sizes="(max-width: 1400px) 100vw, 1400px" />,
  tag: tag // TODO update function to allow user to choose which tag should be rendered
    ? makeSimpleTag(tag)
    : makeContentTypeTag(contentType),
  href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
  isExternal: !!url,
  ...rest,
});
