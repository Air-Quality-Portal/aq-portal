import {
  type CardDetailedProps,
  type CardMiniProps,
  type CardProps,
  type CardSimpleProps,
  Tag,
} from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { ReactElement } from "react";
import {
  type Category,
  CONTENT_THEMES,
  CONTENT_TYPES,
  type ContentType,
  type IterableItemWithId,
  type Theme,
} from "@/app/site-config/types";

export const makeSimpleTag = (tag: Theme | ContentType | Category) => (
  <Tag key={tag} variant="solid" color="primary-lighter">
    {tag}
  </Tag>
);

export const makeThemeTag = (tag: Theme) => {
  const { label, ...rest } = CONTENT_THEMES[tag];
  return (
    <Tag key={tag} variant="solid" {...rest}>
      {tag}
    </Tag>
  );
};

const makeContentTypeTag = (tag: ContentType) => {
  const { label } = CONTENT_TYPES[tag];
  return (
    <Tag key={label} variant="solid">
      {label}
    </Tag>
  );
};

export type CardMastheadPropsArgs = Omit<
  CardProps,
  "title" | "image" | "colorMode" | "isMasthead"
> & {
  mastheadImage: {
    alt: string;
    src: string;
  };
  title?: string;
  theme?: Theme;
};

export const makeCardMastHeadProps = ({
  mastheadImage,
  title,
  theme,
  ...rest
}: CardMastheadPropsArgs): CardProps => ({
  image: <Image {...mastheadImage} sizes="100vw" fill preload={true} />,
  ...(title || theme
    ? {
        title: (
          <h1
            className={`font-mono-3xl text-normal text-white text-uppercase flex-align-self-start margin-0 ${theme ? `bg-${CONTENT_THEMES[theme].color} text-ls-3` : ""}`}
          >
            {title ?? theme}
          </h1>
        ),
      }
    : {}),
  colorMode: "brand",
  isMastHead: true,
  ...rest,
});

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
  tags?: (Theme | ContentType | Category)[];
  url?: string;
  [key: string]: unknown;
};

const ExternalLinkBadge = () => (
  <span className="position-absolute top-1 right-1 z-100 display-inline-flex flex-align-center bg-primary text-white padding-x-1 padding-y-05 radius-md font-body-3xs text-bold">
    External Link
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      style={{ marginLeft: "0.25rem", fill: "currentColor" }}
      aria-hidden="true"
    >
      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  </span>
);

// veda-ui-blocks CardMediaElement only accepts <img>/<svg>/<video>/<canvas>; we wrap with a span
// to overlay the external-link badge and cast — the package renders the JSX as-is, so the
// runtime behavior is correct even though the wrapper element type is not in the public union.
type CardMedia = CardDetailedProps["image"];
const wrapImageWithExternalBadge = (image: ReactElement, isExternal: boolean): CardMedia =>
  isExternal
    ? ((
        <span className="position-relative display-block height-full width-full">
          {image}
          <ExternalLinkBadge />
        </span>
      ) as unknown as CardMedia)
    : (image as CardMedia);

export const makeCardDetailedProps = ({
  id,
  contentType,
  thumbnailImage,
  tags,
  url,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps> => ({
  id,
  image: wrapImageWithExternalBadge(
    <Image
      {...thumbnailImage}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px"
    />,
    !!url,
  ),
  imagePosition: "top",
  tags: (tags ?? []).map((t) => makeSimpleTag(t)),
  callToAction: {
    href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
    label: `view ${CONTENT_TYPES[contentType].label}`,
  },
  ...rest,
});

export const makeCardDetailedImageLeftProps = ({
  id,
  contentType,
  thumbnailImage,
  tags,
  url,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps> => ({
  id,
  image: wrapImageWithExternalBadge(<Image {...thumbnailImage} fill sizes="200px" />, !!url),
  imagePosition: "left",
  tags: (tags ?? []).map((t) => makeSimpleTag(t)),
  callToAction: {
    href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
    label: `view ${CONTENT_TYPES[contentType].label}`,
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
  tag?: Theme | ContentType | Category;
  themes?: Theme[];
  url?: string;
  [key: string]: unknown;
};

export const makeCardSimpleProps = ({
  id,
  contentType,
  thumbnailImage,
  tag,
  themes,
  url,
  ...rest
}: CardSimplePropsArgs): IterableItemWithId<CardSimpleProps> => ({
  id,
  image: <Image {...thumbnailImage} fill sizes="(max-width: 1400px) 100vw, 1400px" />,
  tag: tag // TODO update function to allow user to choose which tag should be rendered
    ? makeSimpleTag(tag)
    : themes?.[0]
      ? makeThemeTag(themes[0])
      : makeContentTypeTag(contentType),
  url: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
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
  [key: string]: unknown;
};

export const makeCardMiniProps = ({
  id,
  contentType,
  thumbnailImage,
  tag,
  themes,
  ...rest
}: CardSimpleMiniArgs): IterableItemWithId<CardMiniProps> => ({
  id,
  image: <Image {...thumbnailImage} fill sizes="200px" />,
  ...(tag
    ? {
        tag: (
          <Tag variant="text" color="secondary">
            {tag}
          </Tag>
        ),
      }
    : {}),
  url: `${CONTENT_TYPES[contentType].route}/${id}`,
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
  title: string;
  description?: string;
  url?: string;
  [key: string]: unknown;
};

export const makeCardCarouselProps = ({
  id,
  contentType,
  thumbnailImage,
  title,
  description,
  url,
  ...rest
}: CardCarouselPropsArgs): IterableItemWithId<CardProps> => ({
  id,
  title,
  description,
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
    label: `view ${CONTENT_TYPES[contentType].label}`,
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
