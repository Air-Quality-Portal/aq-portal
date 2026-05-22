import {
  type CardDetailedProps,
  type CardProps,
  type CardSimpleProps,
  Tag,
} from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { AppRoutes } from "@/.next/types/routes";
import type { Category, ContentType, IterableItemWithId, Theme } from "./types";

const CONTENT_THEMES: Record<Theme, Record<string, unknown>> = {
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

const CONTENT_TYPES: Record<ContentType, { route: AppRoutes; label: string }> = {
  dataset: { route: "/data-gallery", label: "data" },
  event: { route: "/events", label: "event" },
  news: { route: "/news-events", label: "news" },
  story: { route: "/stories", label: "story" },
  training: { route: "/training", label: "training" },
};

export const makeSimpleTag = (tag: Theme | ContentType | Category) => (
  <Tag variant="solid" color="primary-lighter">
    {tag}
  </Tag>
);

export const makeThemeTag = (tag: Theme) => {
  const { label, ...rest } = CONTENT_THEMES[tag];
  return (
    <Tag variant="solid" {...rest}>
      {tag}
    </Tag>
  );
};

export const makeContentTypeTag = (tag: ContentType) => {
  const { label } = CONTENT_TYPES[tag];
  return <Tag variant="solid">{label}</Tag>;
};

export type CardPropsArgs = {
  image: {
    alt: string;
    src: string;
  };
  title: string;
  [key: string]: unknown;
};

export const makeCardMastHeadProps = ({ image, title, ...rest }: CardPropsArgs): CardProps => ({
  image: <Image {...image} sizes="100vw" fill priority />,
  ...(title
    ? {
        title: (
          <h1 className="font-mono-3xl text-bold text-white text-uppercase margin-0">{title}</h1>
        ),
      }
    : {}),
  colorMode: "brand" as const,
  isMastHead: true,
  ...rest,
});

export type CardDetailedPropsArgs = {
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
  image: <Image {...thumbnailImage} fill sizes="(max-width: 1400px) 100vw, 1400px" />,
  imagePosition: "left",
  tags: (tags ?? []).map((t) => makeSimpleTag(t)),
  callToAction: {
    href: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
    label: `view ${CONTENT_TYPES[contentType].label}`,
  },
  ...rest,
});

export type CardSimplePropsArgs = {
  id: string;
  contentType: ContentType;
  title: string;
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
  title,
  thumbnailImage,
  tag,
  themes,
  url,
  ...rest
}: CardSimplePropsArgs): IterableItemWithId<CardSimpleProps> => ({
  id,
  title,
  image: <Image {...thumbnailImage} fill sizes="(max-width: 1400px) 100vw, 1400px" />,
  tag: tag // TODO update function to allow user to choose which tag should be rendered
    ? makeSimpleTag(tag)
    : themes?.[0]
      ? makeThemeTag(themes[0])
      : makeContentTypeTag(contentType),
  url: url ? url : `${CONTENT_TYPES[contentType].route}/${id}`,
  ...rest,
});
