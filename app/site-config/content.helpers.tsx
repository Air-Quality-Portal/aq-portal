import { type CardDetailedProps, type CardProps, Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { Category, ContentType, Theme } from "./types";

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
  thumbnailImage: {
    alt: string;
    src: string;
  };
  tags?: (Theme | ContentType | Category)[];
  [key: string]: unknown;
};

export const makeCardDetailedProps = ({
  thumbnailImage,
  tags,
  ...rest
}: CardDetailedPropsArgs): CardDetailedProps => ({
  image: (
    <Image
      {...thumbnailImage}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  ),
  tags: (tags ?? []).map((t) => makeSimpleTag(t)),
  ...rest,
});

export const makeCardDetailedImageLeftProps = ({
  thumbnailImage,
  tags,
  ...rest
}: CardDetailedPropsArgs): CardDetailedProps => ({
  image: <Image {...thumbnailImage} fill sizes="200px" />,
  imagePosition: "left",
  tags: (tags ?? []).map((t) => makeSimpleTag(t)),
  ...rest,
});
