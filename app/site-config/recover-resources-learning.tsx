import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

import { ThemeTag } from "@/app/components";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_1: CardWithId = {
  id: "card-resources-learning-recover-1",
  title: "Rapid Damage Assessment Techniques Using Earth Observations",
  image: (
    <Image
      src="/img/recover/resources-learning/resource-1.webp"
      alt="Educational content on damage assessment methodologies using satellite data"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/damage-assessment",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_2: CardWithId = {
  id: "card-resources-learning-recover-2",
  title: "Community Resilience Planning with NASA Data",
  image: (
    <Image
      src="/img/recover/resources-learning/resource-2.webp"
      alt="Framework and tools for community-based resilience planning"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/resilience-planning",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_3: CardWithId = {
  id: "card-resources-learning-recover-3",
  title: "Environmental Recovery Monitoring Strategies",
  image: (
    <Image
      src="/img/recover/resources-learning/resource-3.webp"
      alt="Methods for tracking environmental recovery using remote sensing"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/environmental-recovery",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_4: CardWithId = {
  id: "card-resources-learning-recover-4",
  title: "Building Back Better: Science-Informed Reconstruction",
  image: (
    <Image
      src="/img/recover/resources-learning/resource-4.webp"
      alt="Guidance on integrating scientific data into reconstruction and rebuilding"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/building-back-better",
  tag: <ThemeTag theme="recover" />,
};
