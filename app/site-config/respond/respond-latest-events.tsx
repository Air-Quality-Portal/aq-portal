import type { CardMiniProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { IterableItemWithId } from "@/app/site-config/types";

export const MOCK_CARD_TYPHOON_SINLAKU_APRIL_2026: IterableItemWithId<CardMiniProps> = {
  id: "card-typhoon-sinlaku-april-2026",
  title: "Typhoon Sinlaku April 2026",
  image: (
    <Image
      src="/img/event/typhoon-sinlaku-2026.webp"
      alt="Satellite view of Typhoon Sinlaku over the western Pacific Ocean, showing a large, well-defined spiral storm system with a dense white cloud mass and visible eye, surrounding several small island outlines."
      width={120}
      height={120}
    />
  ),
  url: "/events/typhoon-sinlaku-april-2026",
  tag: (
    <Tag variant="text" textColor="secondary">
      ACTIVE
    </Tag>
  ),
};
export const MOCK_CARD_US_WINTER_STORM_JAN_2026: IterableItemWithId<CardMiniProps> = {
  id: "card-us-winter-storm-jan-2026",
  title: "U.S. Winter Storm Jan 2026",
  image: (
    <Image
      src="/img/respond/latest-events/hazard-pattern-swirls.webp"
      alt="Abstract graphic with flowing teal wave shapes and curved swirl accents on a dark teal background, creating a fluid, dynamic pattern."
      width={120}
      height={120}
    />
  ),
  url: "/events/us-winter-storm-jan-2026",
};

export const MOCK_CARD_TEXAS_FLOODS_JULY_2025: IterableItemWithId<CardMiniProps> = {
  id: "card-texas-floods-july-2025",
  title: "Texas Floods July 2025",
  image: (
    <Image
      src="/img/respond/latest-events/UAVSAR-Banner-Texas-Floods.webp"
      alt="Satellite imagery of texas floods showing flooded areas in blue and non-flooded areas in brown"
      width={120}
      height={120}
    />
  ),
  url: "/events/texas-floods-july-2025",
};

export const MOCK_CARD_SOUTHERN_CALIFORNIA_FIRES_JAN_2025: IterableItemWithId<CardMiniProps> = {
  id: "card-southern-california-fires-jan-2025",
  title: "Southern California Fires Jan 2025",
  image: (
    <Image
      src="/img/respond/latest-events/palisades_fire_s2_cir.webp"
      alt="False-color infrared satellite image of the Palisades Fire burn area along the Los Angeles coastline, showing a large gray-brown burn scar contrasting against bright red healthy vegetation, with the Pacific Ocean visible along the bottom edge."
      width={120}
      height={120}
    />
  ),
  url: "/events/southern-california-fires-jan-2025",
};
