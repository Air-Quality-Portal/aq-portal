import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_FINDING_THE_FLOODS: CardWithId = {
  id: "card-news-featured",
  title: "Finding the Floods",
  image: (
    <Image
      src="/img/repond/stories-of-impact/Kerville-Texas-Flooded-River.webp"
      alt="Drone image of flooded river in Kerville, Texas with trees and buildings surrounded by floodwaters"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "#",
  tag: (
    <Tag color="#c91b6e" textColor="white">
      RESPOND
    </Tag>
  ),
};
export const MOCK_CARD_TRACKING_TORNADOE: CardWithId = {
  id: "card-news-featured",
  title: "Tracking Tornadoes from Space",
  image: (
    <Image
      src="/img/repond/stories-of-impact/Florrisant-Brunswick-and-Brookshire.webp"
      alt="Drone of torandoe debris in Florrisant, Brunswick and Brookshire, Texas with damaged buildings and debris"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "#",
  tag: (
    <Tag color="#c91b6e" textColor="white">
      RESPOND
    </Tag>
  ),
};

export const MOCK_CARD_BEYOND_FLAMES: CardWithId = {
  id: "card-news-featured",
  title: "Seeing Beyond the Flames: Mapping Wildfire Impacts in Southern California",
  image: (
    <Image
      src="/img/repond/stories-of-impact/Eaton-Fire.webp"
      alt="Stallite image of Eaton Fire in Southern California"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "#",
  tag: (
    <Tag color="#c91b6e" textColor="white">
      RESPOND
    </Tag>
  ),
};

export const MOCK_CARD_HURRICANE_HELENE: CardWithId = {
  id: "card-news-featured",
  title: "Supporting Communities in the Wake of Hurricane Helene",
  image: (
    <Image
      src="/img/repond/stories-of-impact/Helene-BlackMarbleBYC.webp"
      alt="Hurricane Helene satellite image showing storm system over ocean with visible eye of the storm"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "#",
  tag: (
    <Tag color="#c91b6e" textColor="white">
      RESPOND
    </Tag>
  ),
};
