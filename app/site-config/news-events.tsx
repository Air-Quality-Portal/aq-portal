import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_NEWS_EVENTS_FEATURED: CardWithId = {
  id: "card-news-featured",
  title: "U.S. Winter Storm January 2026",
  image: (
    <Image
      src="/img/news-events/winter-storm.webp"
      alt="Satellite imagery of U.S. winter storm system with snow and cloud cover"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "/news/winter-storm-2026",
  tag: (
    <Tag color="white" textColor="#0D313D">
      EVENT
    </Tag>
  ),
  showOverlay: true,
};

export const MOCK_CARD_NEWS_EVENTS_RESILIENCE: CardWithId = {
  id: "card-news-resilience",
  title: "Building Resilience in Coastal Communities with NASA Earth Science",
  image: (
    <Image
      src="/img/news-events/building-resilience.webp"
      alt="Hurricane damage in coastal community with destroyed buildings and debris"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/news/building-resilience",
  tag: (
    <Tag color="white" textColor="#0D313D">
      STORY
    </Tag>
  ),
  showOverlay: true,
};

export const MOCK_CARD_NEWS_EVENTS_RESPONSE_MAPPER: CardWithId = {
  id: "card-news-response-mapper",
  title: "Become a NASA Response Mapper: Help Strengthen Hurricane Response from the Ground Up",
  image: (
    <Image
      src="/img/news-events/response-mapper.webp"
      alt="NASA Response Mapper helping with emergency disaster response operations"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/news/nasa-response-mapper",
  tag: (
    <Tag color="white" textColor="#0D313D">
      NEWS
    </Tag>
  ),
  showOverlay: true,
};

export const MOCK_CARD_NEWS_EVENTS_TORNADO: CardWithId = {
  id: "card-news-tornado",
  title: "Tracking Tornadoes from Space",
  image: (
    <Image
      src="/img/news-events/tracking-tornadoes.webp"
      alt="Community damage from tornado disaster showing destroyed buildings and landscape"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/news/tracking-tornadoes",
  tag: (
    <Tag color="white" textColor="#0D313D">
      STORY
    </Tag>
  ),
  showOverlay: true,
};
