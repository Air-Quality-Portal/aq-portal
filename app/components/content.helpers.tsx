import type { CardDetailedProps, CardProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const makeContentTypeTags = () => {};
export const makeThemeTypeTags = () => {};

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
  image: {
    alt: string;
    src: string;
  };
  [key: string]: unknown;
};

export const makeCardDetailedProps = ({
  image,
  ...rest
}: CardDetailedPropsArgs): CardDetailedProps => ({
  image: <Image {...image} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />,
  ...rest,
});

export const makeCardDetailedImageLeftProps = ({
  image,
  ...rest
}: CardDetailedPropsArgs): CardDetailedProps => ({
  image: <Image {...image} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />,
  imagePosition: "left",
  ...rest,
});
