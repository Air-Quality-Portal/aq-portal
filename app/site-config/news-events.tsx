import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_NEWS_EVENTS_ESTIMATING_LOSS_RECOVERY: CardWithId = {
  id: "card-news-estimating-loss-recovery",
  title: "When Every Dollar Counts: Estimating Loss to Speed Recovery",
  image: (
    <Image
      src="/img/news-events/estimating-loss-recovery.webp"
      alt="Community recovery efforts in Mayfield after disaster, showing rebuilding in progress"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "/news/estimating-loss-recovery",
  tag: (
    <Tag color="white" textColor="#0D313D">
      STORY
    </Tag>
  ),
};

export const MOCK_CARD_NEWS_EVENTS_FINDING_FLOODS: CardWithId = {
  id: "card-news-finding-floods",
  title: "Finding the Floods",
  image: (
    <Image
      src="/img/news-events/finding-floods.webp"
      alt="Flooded river in Kerrville, Texas showing significant flood waters"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/news/finding-floods",
  tag: (
    <Tag color="white" textColor="#0D313D">
      STORY
    </Tag>
  ),
};

export const MOCK_CARD_NEWS_EVENTS_TYPHOON_SINLAKU: CardWithId = {
  id: "card-news-typhoon-sinlaku",
  title: "Typhoon Sinlaku April 2026",
  image: (
    <Image
      src="/img/news-events/typhoon-sinlaku-2026.webp"
      alt="Satellite worldview imagery of Typhoon Sinlaku from April 2026"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/news/typhoon-sinlaku-2026",
  tag: (
    <Tag color="white" textColor="#0D313D">
      EVENT
    </Tag>
  ),
};

export const MOCK_CARD_NEWS_EVENTS_PORTAL_TEST: CardWithId = {
  id: "card-news-portal-test",
  title: "Help Test the New NASA Disasters PORTAL",
  image: (
    <Image
      src="/img/news-events/help-test-portal.webp"
      alt="NASA Disasters Portal team members at a field event"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/news/help-test-portal",
  tag: (
    <Tag color="white" textColor="#0D313D">
      NEWS
    </Tag>
  ),
};
