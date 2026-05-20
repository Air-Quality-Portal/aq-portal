import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

import { ThemeTag } from "@/app/components";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_1: CardWithId = {
  id: "card-resources-learning-recover-1",
  title: "Understanding EO-based Building Exposure for Disaster Recovery",
  image: (
    <Image
      src="/img/recover/resources-learning/understanding-building-exposure.webp"
      alt="Building exposure map of Los Angeles used to assess recovery risk and infrastructure vulnerability"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/damage-assessment",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_2: CardWithId = {
  id: "card-resources-learning-recover-2",
  title: "Fundamentals of Remote Sensing",
  image: (
    <Image
      src="/img/recover/resources-learning/fundamentals-remote-sensing.webp"
      alt="NISAR satellite mission imagery supporting foundational remote sensing learning"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/resilience-planning",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_3: CardWithId = {
  id: "card-resources-learning-recover-3",
  title: "Introduction to SAR and its Applications",
  image: (
    <Image
      src="/img/recover/resources-learning/introduction-sar-applications.webp"
      alt="HydroSAR map of Memphis used to demonstrate synthetic aperture radar applications"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/environmental-recovery",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_4: CardWithId = {
  id: "card-resources-learning-recover-4",
  title: "Using Earth Observations for Pre- and Post-Fire Monitoring",
  image: (
    <Image
      src="/img/recover/resources-learning/pre-post-fire-monitoring.webp"
      alt="Planet imagery of Los Angeles fire impacts used for pre-fire and post-fire recovery monitoring"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/building-back-better",
  tag: <ThemeTag theme="recover" />,
};
