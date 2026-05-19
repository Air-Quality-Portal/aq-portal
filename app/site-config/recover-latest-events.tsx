import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_RECOVER_LATEST_EVENT_1: CardWithId = {
  id: "card-recover-latest-event-1",
  title: "Atlantic Storm Monitoring - May 2026",
  image: (
    <Image
      src="/img/recover/stories-of-impact/story-1.webp"
      alt="Satellite view used to monitor active Atlantic storm conditions"
      width={120}
      height={120}
    />
  ),
  url: "#",
  tag: (
    <Tag color="white" textColor="#4f6fae">
      ACTIVE
    </Tag>
  ),
};

export const MOCK_CARD_RECOVER_LATEST_EVENT_2: CardWithId = {
  id: "card-recover-latest-event-2",
  title: "Coastal Flood Impacts - April 2026",
  image: (
    <Image
      src="/img/recover/stories-of-impact/story-2.webp"
      alt="Coastal community flood impacts captured for rapid assessment"
      width={120}
      height={120}
    />
  ),
  url: "#",
};

export const MOCK_CARD_RECOVER_LATEST_EVENT_3: CardWithId = {
  id: "card-recover-latest-event-3",
  title: "Wildfire Recovery Mapping - March 2026",
  image: (
    <Image
      src="/img/recover/stories-of-impact/story-3.webp"
      alt="Wildfire-affected landscape used for recovery mapping and planning"
      width={120}
      height={120}
    />
  ),
  url: "#",
};

export const MOCK_CARD_RECOVER_LATEST_EVENT_4: CardWithId = {
  id: "card-recover-latest-event-4",
  title: "Post-Storm Infrastructure Review - February 2026",
  image: (
    <Image
      src="/img/recover/resources-learning/resource-1.webp"
      alt="Post-storm infrastructure review using earth observation data"
      width={120}
      height={120}
    />
  ),
  url: "#",
};
