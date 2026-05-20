import { type CardMiniProps, Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

type CardWithId = CardMiniProps & { id: string };

export const MOCK_CARD_RECOVER_LATEST_EVENT_1: CardWithId = {
  id: "card-latest-event-typhoon-sinlaku",
  title: "Typhoon Sinlaku Response",
  image: (
    <Image
      src="/img/latest-events/iss-milton.webp"
      alt="ISS view of Typhoon Sinlaku swirling over the Pacific Ocean"
      width={120}
      height={120}
    />
  ),
  url: "#",
  tag: <Tag color="white">ACTIVE</Tag>,
};

export const MOCK_CARD_RECOVER_LATEST_EVENT_2: CardWithId = {
  id: "card-latest-event-us-winter-storm",
  title: "US Winter Storms",
  image: (
    <Image
      src="/img/latest-events/hazard-pattern-swirls.webp"
      alt="Satellite view of swirling winter storm cloud patterns over the US"
      width={120}
      height={120}
    />
  ),
  url: "#",
};

export const MOCK_CARD_RECOVER_LATEST_EVENT_3: CardWithId = {
  id: "card-latest-event-texas-floods",
  title: "Texas Floods",
  image: (
    <Image
      src="/img/latest-events/texas-floods-uavsar.webp"
      alt="Flooded Texas landscape from UAVSAR imagery"
      width={120}
      height={120}
    />
  ),
  url: "#",
};

export const MOCK_CARD_RECOVER_LATEST_EVENT_4: CardWithId = {
  id: "card-latest-event-socal-fires",
  title: "Southern California Fires",
  image: (
    <Image
      src="/img/latest-events/palisades-fire.webp"
      alt="Aerial view of Palisades Fire smoke plume over hills"
      width={120}
      height={120}
    />
  ),
  url: "#",
};
