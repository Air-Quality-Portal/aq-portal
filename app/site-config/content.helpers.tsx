import {
  type CardDetailedProps,
  type CardMiniProps,
  type CardProps,
  type CardSimpleProps,
  Tag,
} from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { Category, ContentType, IterableItemWithId, Theme } from "@/app/site-config/types";

const CONTENT_THEMES: Record<Theme, { label: string; color: string; textColor?: string }> = {
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

const CONTENT_TYPES: Record<ContentType, { route: string; label: string }> = {
  dataset: { route: "/data-gallery", label: "data" },
  event: { route: "/news-events", label: "event" },
  news: { route: "/news-events", label: "news" },
  story: { route: "/stories", label: "story" },
  datastory: { route: "/news-events", label: "data story" },
  training: { route: "/training", label: "training" },
};

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

type CardMastheadPropsArgs = Omit<CardProps, "title" | "image" | "colorMode" | "isMasthead"> & {
  mastheadImage: {
    alt: string;
    src: string;
  };
  title?: string;
  theme?: Theme;
  date?: string;
};

export const makeCardMastHeadProps = ({
  mastheadImage,
  title,
  theme,
  date,
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
  tag: date ? (
    <Tag color="primary-lighter" textColor="primary-dark">
      Updated: {formattedDate(date)}
    </Tag>
  ) : undefined,
  ...rest,
});

export type CardDetailedPropsArgs = Omit<
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
  theme?: Theme;
  themes?: Theme[];
  categories?: Category[];
  url?: string;
  [key: string]: unknown;
};

const consolidateCardDetailTags = ({
  tags,
  theme,
  themes,
  categories,
}: {
  tags?: (Theme | ContentType | Category)[];
  theme?: Theme;
  themes?: Theme[];
  categories?: Category[];
}) => [
  ...(tags ?? []).map((tag) => makeSimpleTag(tag)),
  ...(theme ? [makeThemeTag(theme)] : (themes ?? []).map((themedTag) => makeThemeTag(themedTag))),
  ...(categories ?? []).map((category) => makeSimpleTag(category)),
];

export const makeCardDetailedProps = ({
  id,
  contentType,
  thumbnailImage,
  tags,
  theme,
  themes,
  categories,
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
  tags: consolidateCardDetailTags({ tags, theme, themes, categories }),
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
  theme,
  themes,
  categories,
  url,
  ...rest
}: CardDetailedPropsArgs): IterableItemWithId<CardDetailedProps> => ({
  id,
  image: <Image {...thumbnailImage} fill sizes="200px" />,
  imagePosition: "left",
  tags: consolidateCardDetailTags({ tags, theme, themes, categories }),
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

export const formattedDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
