import type {
  CardDetailedProps,
  CardMiniProps,
  CardProps,
  CardSimpleProps,
} from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import {
  type Category,
  CONTENT_TYPES,
  type ContentType,
  type IterableItemWithId,
} from "@/app/site-config/types";

export const makeSimpleTag = (tag: ContentType | Category) => ({
  label: tag,
  variant: "solid" as const,
  color: "primary-lighter",
});

const makeContentTypeTag = (tag: ContentType) => ({
  label: CONTENT_TYPES[tag].label,
  variant: "solid" as const,
});

export type CardMastheadPropsArgs = Omit<CardProps, "title" | "image"> & {
  mastheadImage: {
    alt: string;
    src: string;
  };
  title?: string;
  tagPrimary?: ContentType | Category;
};

export const makeCardMastHeadProps = ({
  mastheadImage,
  title,
  tagPrimary,
  colorMode = "brand",
  isMastHead,
  ...rest
}: CardMastheadPropsArgs): CardProps => ({
  image: <Image {...mastheadImage} sizes="100vw" fill />,
  title: title,
  tag: tagPrimary ? makeSimpleTag(tagPrimary) : undefined,
  colorMode,
  isMastHead: isMastHead,
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

type CardDetailedPropsArgs = Omit<
  CardDetailedProps,
  "image" | "imagePosition" | "tags" | "callToAction"
> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  tags?: (ContentType | Category)[];
  tagPrimary?: ContentType | Category;
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
  tagPrimary: tagPrimary ? makeSimpleTag(tagPrimary) : undefined,
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
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps> => ({
  id,
  image: <Image {...thumbnailImage} fill sizes="200px" />,
  imagePosition: "left",
  tags: (tags ?? []).map((t) => makeSimpleTag(t)),
  tagPrimary: tagPrimary ? makeSimpleTag(tagPrimary) : undefined,
  callToAction: {
    href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
    label: `View ${toTitleCase(CONTENT_TYPES[contentType].label)}`,
    isExternal: !!url,
  },
  ...rest,
});

export type CardSimplePropsArgs = Omit<CardSimpleProps, "image" | "tag" | "isExternal" | "url"> & {
  id: string;
  contentType: ContentType;
  thumbnailImage: {
    alt: string;
    src: string;
  };
  tag?: ContentType | Category;
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

type CardSimpleMiniArgs = Omit<CardMiniProps, "image" | "tag" | "url"> & {
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
  ...(tag ? { tag: { label: tag, variant: "text" as const, color: "secondary" } } : {}),
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
