import type { CardProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { IterableItemWithId } from "../../components/types";

export const MOCK_DATA_STORY_HURRICANE_MILTON: IterableItemWithId<CardProps> = {
  id: "hurricane-milton-2024",
  title: "Hurricane Milton - October 2024",
  image: (
    <Image
      src="/img/repond/data-stories/ISS_Milton.webp"
      alt="Satelite image of Hurricane Milton showing storm system over ocean with visible eye of the storm"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  callToAction: {
    href: "https://disasters.openveda.cloud/events/hurricane-milton-2024",
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
export const MOCK_DATA_STORY_HURRICANE_HELENE: IterableItemWithId<CardProps> = {
  id: "hurricane-helene-2024",
  title: "Hurricane Helene - September 2024",
  image: (
    <Image
      src="/img/repond/data-stories/Helene_BlackMarbleBYK_Sept27_2024_NOAA20.webp"
      alt="Nighttime satellite image of Hurricane Helene captured by NOAA-20"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),

  callToAction: {
    href: "https://disasters.openveda.cloud/events/hurricane-helene-2024",
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

export const MOCK_RESPOND_DATA_STORIES = [
  MOCK_DATA_STORY_HURRICANE_MILTON,
  MOCK_DATA_STORY_HURRICANE_HELENE,
];
