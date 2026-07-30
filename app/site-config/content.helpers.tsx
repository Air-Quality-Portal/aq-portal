import type {
  CardDetailedProps,
  CardMiniProps,
  CardProps,
  CardSimpleProps,
} from "@teamimpact/veda-ui-blocks";
import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import {
  CONTENT_TYPES,
  type ContentType,
  type DatasetMetadata,
  type DatasetMetadataEntry,
  type IterableItemWithId,
} from "@/app/site-config/types";

export const makePrimaryTag = (tag: string) => ({
  label: tag,
  variant: "solid" as const,
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
  tag: tagPrimary ? makePrimaryTag(tagPrimary) : undefined,
  ...rest,
});

export type CardFeaturedPropsArgs = Omit<
  CardProps,
  "image" | "imagePosition" | "callToAction" | "callToActionSecondary"
> & {
  id: string;
  callToAction?: {
    label: string;
    href: string;
  };
  callToActionSecondary?: {
    label: string;
    href: string;
  };
  image: {
    alt: string;
    src: string;
  };
  imagePosition?: "left" | "right";
};

export const makeCardFeaturedProps = (
  props: CardFeaturedPropsArgs,
): IterableItemWithId<CardProps> => {
  const {
    id,
    callToAction,
    callToActionSecondary,
    image,
    imagePosition = "right",
    ...rest
  } = props;
  return {
    id,
    callToAction,
    callToActionSecondary,
    image: (
      <Image
        alt={image.alt}
        src={image.src}
        sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px"
        fill
        style={{ objectFit: "cover" }}
      />
    ),
    imagePosition,
    ...rest,
  };
};

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

export const makeCardDetailedProps = ({
  id,
  contentType,
  thumbnailImage,
  tags,
  tagPrimary,
  url,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps> => ({
  id,
  image: (
    <Image
      {...thumbnailImage}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px"
    />
  ),
  imagePosition: "top",
  tags: (tags ?? []).map((t) => makeSimpleTag(t)),
  tagPrimary: tagPrimary ? makePrimaryTag(tagPrimary) : undefined,
  callToAction: {
    href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
    label: `View ${toTitleCase(CONTENT_TYPES[contentType].label)}`,
    isExternal: !!url,
  },
  ...rest,
});

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
  image: <svg aria-hidden="true" focusable="false" />,
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

type CardSimpleMiniArgs = Omit<CardMiniProps, "image" | "tag" | "href"> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  tag?: string;
};

export const makeCardMiniProps = ({
  id,
  contentType,
  thumbnailImage,
  tag,
  ...rest
}: CardSimpleMiniArgs): IterableItemWithId<CardMiniProps> => ({
  id,
  image: <Image {...thumbnailImage} fill sizes="200px" />,
  ...(tag ? { tag: { ...makeSimpleTag(tag), variant: "text" as const, color: "secondary" } } : {}),
  href: `${CONTENT_TYPES[contentType].route}/${id}`,
  ...rest,
});

type CardCarouselPropsArgs = Omit<
  CardProps,
  "image" | "imagePosition" | "tag" | "callToAction" | "colorMode"
> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  url?: string;
};

export const makeCardCarouselProps = ({
  id,
  contentType,
  thumbnailImage,
  url,
  ...rest
}: CardCarouselPropsArgs): IterableItemWithId<CardProps> => ({
  id,
  image: (
    <Image
      {...thumbnailImage}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px"
    />
  ),
  tag: makeContentTypeTag(contentType),
  callToAction: {
    href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
    label: `View ${toTitleCase(CONTENT_TYPES[contentType].label)}`,
    isExternal: !!url,
  },
  imagePosition: "cover",
  colorMode: "dark",
  ...rest,
});

export const toLongDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const toTitleCase = (str: string) =>
  str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
