import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { IterableItemWithId } from "@/app/components/types";

export const MOCK_CARD_TYPHOON_SINLAKU_APRIL_2026: IterableItemWithId<CardSimpleProps> = {
  id: "card-news-featured",
  title: "Typhoon Sinlaku April 2026",
  image: (
    <Image
      src="/img/repond/latest-events/ISS_Milton.webp"
      alt="Hurricane Helene satellite image showing storm system over ocean with visible eye of the storm"
      width={120}
      height={120}
    />
  ),
  url: "#",
  tag: (
    <Tag color="white" textColor="#c91b6e">
      ACTIVE
    </Tag>
  ),
};
export const MOCK_CARD_US_WINTER_STORM_JAN_2026: IterableItemWithId<CardSimpleProps> = {
  id: "card-news-featured",
  title: "U.S. Winter Storm Jan 2026",
  image: (
    <Image
      src="/img/repond/latest-events/hazard-pattern-swirls.webp"
      alt="Hurricane Helene satellite image showing storm system over ocean with visible eye of the storm"
      width={120}
      height={120}
    />
  ),
  url: "#",
};

export const MOCK_CARD_TEXAS_FLOODS_JULY_2025: IterableItemWithId<CardSimpleProps> = {
  id: "card-news-featured",
  title: "Texas Floods July 2025",
  image: (
    <Image
      src="/img/repond/latest-events/UAVSAR-Banner-Texas-Floods.webp"
      alt="Satlite imagery of texas floods showing flooded areas in blue and non-flooded areas in brown"
      width={120}
      height={120}
    />
  ),
  url: "#",
};

export const MOCK_CARD_SOUTHERN_CALIFORNIA_FIRES_JAN_2025: IterableItemWithId<CardSimpleProps> = {
  id: "card-news-featured",
  title: "Southern California Fires Jan 2025",
  image: (
    <Image
      src="/img/repond/latest-events/palisades_fire_s2_cir.webp"
      alt="Hurricane Helene satellite image showing storm system over ocean with visible eye of the storm"
      width={120}
      height={120}
    />
  ),
  url: "#",
};
