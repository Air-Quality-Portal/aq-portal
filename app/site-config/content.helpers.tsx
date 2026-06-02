import {
  type CardDetailedProps,
  type CardMiniProps,
  type CardProps,
  type CardSimpleProps,
  Tag,
} from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { ReactNode } from "react";
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

// The package's default title rendering wraps strings in <h2 class="blocks-card-detailed__title">
// with text-overflow:ellipsis (truncates long titles). We re-apply the wrapper ourselves so we
// can (1) allow titles to wrap to multiple lines and (2) optionally append an external-link
// launch icon (matching the glyph USWDS adds via .usa-link--external on CardSimple, which the
// package does not expose on CardDetailed).
const renderCardDetailedTitle = (title: ReactNode, isExternal: boolean): ReactNode => (
  <h2
    className="blocks-card-detailed__title"
    title={typeof title === "string" ? title : undefined}
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "0.35em",
      whiteSpace: "normal",
      overflow: "visible",
      textOverflow: "clip",
    }}
  >
    <span style={{ flex: 1, minWidth: 0 }}>{title}</span>
    {isExternal && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="0.85em"
        height="0.85em"
        style={{ flexShrink: 0, marginTop: "0.3em", fill: "currentColor" }}
        aria-hidden="true"
      >
        <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
      </svg>
    )}
  </h2>
);

export const makeCardDetailedProps = ({
  id,
  contentType,
  thumbnailImage,
  tags,
  title,
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
  title: renderCardDetailedTitle(title, !!url),
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
  title,
  url,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps> => ({
  id,
  image: <Image {...thumbnailImage} fill sizes="200px" />,
  imagePosition: "left",
  tags: (tags ?? []).map((t) => makeSimpleTag(t)),
  title: renderCardDetailedTitle(title, !!url),
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
