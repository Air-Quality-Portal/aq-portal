import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { ThemeTag } from "../../components";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_FINDING_THE_FLOODS: CardWithId = {
  id: "card-finding-the-floods",
  title: "Finding the Floods",
  image: (
    <Image
      src="/img/home/news-events-finding-floods.webp"
      alt="Drone image of flooded river in Kerrville, Texas with trees and buildings surrounded by floodwaters"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "/stories/finding-the-floods",
  tag: <ThemeTag theme="respond" />,
};
export const MOCK_CARD_TRACKING_TORNADOE: CardWithId = {
  id: "card-tracking-tornadoes-from-space",
  title: "Tracking Tornadoes from Space",
  image: (
    <Image
      src="/img/respond/stories-of-impact/Florrisant-Brunswick-and-Brookshire.webp"
      alt="Drone image of tornado debris in Florissant, Brunswick and Brookshire, Texas with damaged buildings and debris"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "/stories/tracking-tornadoes-from-space",
  tag: <ThemeTag theme="respond" />,
};

export const MOCK_CARD_BEYOND_FLAMES: CardWithId = {
  id: "card-seeing-beyond-the-flames",
  title: "Seeing Beyond the Flames: Mapping Wildfire Impacts in Southern California",
  image: (
    <Image
      src="/img/respond/stories-of-impact/Eaton-Fire.webp"
      alt="Satellite image of Eaton Fire in Southern California"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "/stories/seeing-beyond-the-flames-mapping-wildfire-impacts-in-southern-california",
  tag: <ThemeTag theme="respond" />,
};

export const MOCK_CARD_HURRICANE_HELENE: CardWithId = {
  id: "card-supporting-communities-hurricane-helene",
  title: "Supporting Communities in the Wake of Hurricane Helene",
  image: (
    <Image
      src="/img/respond/stories-of-impact/Helene-BlackMarbleBYC.webp"
      alt="Hurricane Helene satellite image showing storm system over ocean with visible eye of the storm"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "/stories/supporting-communities-in-the-wake-of-hurricane-helene",
  tag: <ThemeTag theme="respond" />,
};
