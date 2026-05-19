import type { CardProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const MOCK_CARD_RECOVER_DATA_STORY_1: CardProps = {
  title: "Rapid Damage Assessment from Space",
  image: (
    <Image
      src="/img/recover/data-stories/data-story-1.webp"
      alt="Satellite imagery showing detailed damage assessment of affected area"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  callToAction: {
    href: "#",
    label: "See more",
  },
  colorMode: "dark",
  imagePosition: "cover",
  tag: (
    <Tag color="white" textColor="#0D313D">
      DATA STORY
    </Tag>
  ),
};

export const MOCK_CARD_RECOVER_DATA_STORY_2: CardProps = {
  title: "Tracking Recovery Progress Over Time",
  image: (
    <Image
      src="/img/recover/data-stories/data-story-2.webp"
      alt="Time-series satellite imagery showing landscape recovery and restoration"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  callToAction: {
    href: "#",
    label: "See more",
  },
  colorMode: "dark",
  imagePosition: "cover",
  tag: (
    <Tag color="white" textColor="#0D313D">
      DATA STORY
    </Tag>
  ),
};
