import type { CardProps, CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import type { SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/components/types";

// ---------------------------------------------------------------------------
// Inner blocks — rendered inside a SectionBlock, no <Section> wrapper of their own
// ---------------------------------------------------------------------------

export type ProseBlock = {
  component: "prose";
  content: ReactNode;
};

export type ImageBlock = {
  component: "image";
  src: string;
  alt: string;
  caption?: string;
};

export type SectionHeadingBlock = {
  component: "section-heading";
  text: string;
};

export type InnerContentBlock = ProseBlock | ImageBlock | SectionHeadingBlock;

// ---------------------------------------------------------------------------
// Section block — groups inner blocks inside a single <Section>
// ---------------------------------------------------------------------------

export type SectionContainerBlock = {
  component: "section";
  children: InnerContentBlock[];
  bgColor?: SectionProps["bgColor"];
};

// ---------------------------------------------------------------------------
// Pre-built section components — already include their own <Section> wrapper
// ---------------------------------------------------------------------------

export type CardCarouselBlock = {
  component: "card-carousel";
  heading?: string;
  cards: IterableItemWithId<CardProps>[];
};

export type CardSimpleBlock = {
  component: "card-simple";
  heading?: string;
  cards: [
    IterableItemWithId<CardSimpleProps>,
    IterableItemWithId<CardSimpleProps>,
    IterableItemWithId<CardSimpleProps>,
    IterableItemWithId<CardSimpleProps>,
  ];
};

// ---------------------------------------------------------------------------
// Top-level body block union
// ---------------------------------------------------------------------------

export type StoryContentBlock = SectionContainerBlock | CardCarouselBlock | CardSimpleBlock;

export type StoryPageData = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  tag?: ReactNode;
  href?: string;
  body: StoryContentBlock[];
};
