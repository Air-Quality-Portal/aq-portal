import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

import { ThemeTag } from "@/app/components";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_RECOVER_STORY_1: CardWithId = {
  id: "card-recover-story-1",
  title: "Assessing Disaster Impacts with Satellite Imagery",
  image: (
    <Image
      src="/img/recover/stories-of-impact/story-1.webp"
      alt="Satellite view of disaster-impacted area showing damage assessment"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "#",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_STORY_2: CardWithId = {
  id: "card-recover-story-2",
  title: "Supporting Community Rebuilding Efforts",
  image: (
    <Image
      src="/img/recover/stories-of-impact/story-2.webp"
      alt="Community members engaged in rebuilding and recovery activities"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "#",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_STORY_3: CardWithId = {
  id: "card-recover-story-3",
  title: "Monitoring Environmental Recovery",
  image: (
    <Image
      src="/img/recover/stories-of-impact/story-3.webp"
      alt="Environmental landscape showing signs of recovery and restoration"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "#",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_STORY_4: CardWithId = {
  id: "card-recover-story-4",
  title: "Planning for Resilient Futures",
  image: (
    <Image
      src="/img/recover/stories-of-impact/story-3.webp"
      alt="Community planning meeting with maps and recovery strategy documents"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "#",
  tag: <ThemeTag theme="recover" />,
};
