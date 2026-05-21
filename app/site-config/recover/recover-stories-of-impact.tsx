import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { ThemeTag } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";

type CardWithId = IterableItemWithId<CardSimpleProps>;

export const MOCK_CARD_RECOVER_STORY_1: CardWithId = {
  id: "card-recover-story-1",
  title: "When Every Dollar Counts: Estimating Loss to Speed Recovery",
  image: (
    <Image
      src="/img/recover/stories-of-impact/when-every-dollar-counts.webp"
      alt="Post-disaster aerial imagery used to estimate economic losses and accelerate recovery funding decisions"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "#",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_STORY_2: CardWithId = {
  id: "card-recover-story-2",
  title: "Clearing the Way: Debris Mapping for Faster Recovery",
  image: (
    <Image
      src="/img/recover/stories-of-impact/clearing-way-debris-mapping.webp"
      alt="Aerial view of tornado-damaged neighborhoods used to map debris and prioritize recovery operations"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
    />
  ),
  url: "#",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_STORY_3: CardWithId = {
  id: "card-recover-story-3",
  title: "Mapping Oil Spills from Space to Protect Communities",
  image: (
    <Image
      src="/img/recover/stories-of-impact/mapping-oil-spills-space.webp"
      alt="Satellite-detected oil patterns on the ocean surface used to guide spill response and coastal recovery planning"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "#",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_STORY_4: CardWithId = {
  id: "card-recover-story-4",
  title: "Identifying Infrastructure Risks from Space to Guide Hurricane Recovery",
  image: (
    <Image
      src="/img/recover/stories-of-impact/identifying-infrastructure-risks.webp"
      alt="Night view of Miami infrastructure used to assess critical assets and hurricane recovery risks"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "#",
  tag: <ThemeTag theme="recover" />,
};
