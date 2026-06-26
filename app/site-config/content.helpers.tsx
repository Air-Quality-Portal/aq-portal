import {
  type CardDetailedProps,
  type CardMiniProps,
  type CardProps,
  type CardSimpleProps,
  Tag,
} from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import {
  type Category,
  CONTENT_TYPES,
  type ContentType,
  type IterableItemWithId,
} from "@/app/site-config/types";

export const makeSimpleTag = (tag: ContentType | Category) => (
  <Tag key={tag} variant="solid" color="primary-lighter">
    {tag}
  </Tag>
);

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
};

export const makeCardMastHeadProps = ({
  mastheadImage,
  title,
  ...rest
}: CardMastheadPropsArgs): CardProps => ({
  image: <Image {...mastheadImage} sizes="100vw" fill preload={true} />,
  ...(title
    ? {
        title: (
          <h1
            className={`font-mono-3xl text-normal text-white text-uppercase flex-align-self-start margin-0 text-ls-3`}
          >
            {title}
          </h1>
        ),
      }
    : {}),
  colorMode: "brand",
  isMastHead: true,
  ...rest,
});

export type DatasetMastheadPropsArgs = Omit<
  CardProps,
  "title" | "image" | "colorMode" | "isMastHead" | "tag" | "imagePosition"
> & {
  mastheadImage: {
    alt: string;
    src: string;
  };
  title?: string;
  provider?: Category;
};

export const makeDatasetMastheadProps = ({
  mastheadImage,
  title,
  provider,
  className,
  ...rest
}: DatasetMastheadPropsArgs): CardProps => ({
  image: <Image {...mastheadImage} sizes="(max-width: 1024px) 100vw, 50vw" fill preload={true} />,
  imagePosition: "right",
  colorMode: "light",
  className: ["dataset-masthead", className].filter(Boolean).join(" "),
  ...(provider ? { tag: makeSimpleTag(provider) } : {}),
  ...(title
    ? {
        title: <h1 className="font-heading-2xl text-normal margin-0">{title}</h1>,
      }
    : {}),
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
