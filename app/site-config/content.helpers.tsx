import type {
  CardDetailedProps,
  CardMiniProps,
  CardProps,
  CardSimpleProps,
} from "@teamimpact/veda-ui-blocks";
import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import {
  type Category,
  CONTENT_THEMES,
  CONTENT_TYPES,
  type ContentType,
  type IterableItemWithId,
  type ResourceWorkshopItem,
  type Theme,
} from "@/app/site-config/types";

export const makeSimpleTag = (tag: Theme | ContentType | Category) => ({
  label: tag,
  variant: "solid" as const,
  color: "primary-lighter",
});

const makeContentTypeTag = (tag: ContentType) => ({
  label: CONTENT_TYPES[tag].label,
  variant: "solid" as const,
});

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
  tags?: (Theme | ContentType | Category)[];
  url?: string;
};

export const makeCardDetailedProps = ({
  id,
  contentType,
  thumbnailImage,
  tags,
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
  tags,
  url,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps> => ({
  id,
  image: <Image {...thumbnailImage} fill sizes="200px" />,
  imagePosition: "left",
  tags: (tags ?? []).map((t) => makeSimpleTag(t)),
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
  tag?: Theme | ContentType | Category;
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

export const makeButtonOutlineLink = (href: string, isExternal = true) => ({
  href,
  isExternal,
  className:
    "flex-justify width-full shadow-none text-light padding-y-2 border-1px border-base-lighter",
  variant: "button-outline" as const,
});

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

export const makeWorkshopCardProps = ({
  id,
  title,
  href,
  description,
  tags,
  callToAction,
  className,
}: ResourceWorkshopItem & { className?: string }): IterableItemWithId<CardDetailedProps> => ({
  id,
  className: className ? `display-block ${className}` : "display-block",
  image: <svg aria-hidden="true" focusable="false" />,
  title: (
    <>
      <Link className="font-body-lg text-light" href={href} variant="text">
        {title}
      </Link>
      {description && (
        <p className="font-body-xs text-base-dark text-light margin-0">{description}</p>
      )}
    </>
  ),
  tags: tags?.map((tag) => ({ label: tag, variant: "outline" as const, color: "base" })),
  callToAction: {
    href: callToAction.href,
    label: callToAction.label,
    variant: "button" as const,
    style: { width: 97, height: 40, flex: "none", boxSizing: "border-box" as const },
  },
});

export const toLongDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const toTitleCase = (str: string) =>
  str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
