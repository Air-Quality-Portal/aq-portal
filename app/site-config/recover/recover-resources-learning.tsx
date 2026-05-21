import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { ThemeTag } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_1: IterableItemWithId<CardSimpleProps> = {
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
  url: "/training/",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_2: IterableItemWithId<CardSimpleProps> = {
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
  url: "https://www.earthdata.nasa.gov/learn/trainings/fundamentals-remote-sensing",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_3: IterableItemWithId<CardSimpleProps> = {
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
  url: "https://www.earthdata.nasa.gov/learn/trainings/introduction-synthetic-aperture-radar-sar-its-applications",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_CARD_RECOVER_RESOURCES_LEARNING_4: IterableItemWithId<CardSimpleProps> = {
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
  url: "https://www.earthdata.nasa.gov/learn/trainings/using-earth-observations-for-pre-and-post-fire-monitoring",
  tag: <ThemeTag theme="recover" />,
};

export const MOCK_RECOVER_CARD_RESOURCE_LEARNING = [
  MOCK_CARD_RECOVER_RESOURCES_LEARNING_1,
  MOCK_CARD_RECOVER_RESOURCES_LEARNING_2,
  MOCK_CARD_RECOVER_RESOURCES_LEARNING_3,
  MOCK_CARD_RECOVER_RESOURCES_LEARNING_4,
];
