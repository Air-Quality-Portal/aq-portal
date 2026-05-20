import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { IterableItemWithId } from "@/app/components/types";
import { ThemeTag } from "../../components";

export const RESPOND_CARD_RESOURCES_LEARNING_NASA_LIFELINES: IterableItemWithId<CardSimpleProps> = {
  id: "card-resources-learning-nasa-lifelines",
  title: "NASA Lifelines Data Studio: Wildfire Early Warning Workflow",
  image: (
    <Image
      src="/img/repond/resources-learning/LifelinesCoverImage.webp"
      alt="Coastal area with turquoise water and green land"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/mapping-flood-impacts",
  tag: <ThemeTag theme="respond" />,
};
export const RESPOND_CARD_RESOURCES_LEARNING_FUNDAMENTALS_OF_REMOTE_SENSING: IterableItemWithId<CardSimpleProps> =
  {
    id: "card-resources-learning-fundamentals-of-remote-sensing",
    title: "Fundamentals of Remote Sensing",
    image: (
      <Image
        src="/img/repond/resources-learning/NISAR.webp"
        alt="Coastal area with turquoise water and green land"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    ),
    url: "https://www.earthdata.nasa.gov/learn/trainings/fundamentals-remote-sensing",
    tag: <ThemeTag theme="respond" />,
  };
export const RESPOND_CARD_RESOURCES_LEARNING_INTRODUCTION_TO_SAR: IterableItemWithId<CardSimpleProps> =
  {
    id: "card-resources-learning-introduction-to-sar",
    title: "Introduction to SAR and its Applications",
    image: (
      <Image
        src="/img/repond/resources-learning/HydroSAR_Memphis_April2025.webp"
        alt="Coastal area with turquoise water and green land"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    ),
    url: "https://www.earthdata.nasa.gov/learn/trainings/introduction-synthetic-aperture-radar-sar-its-applications",
    tag: <ThemeTag theme="respond" />,
  };
export const RESPOND_CARD_RESOURCES_LEARNING_USING_EARTH_OBSERVATIONS: IterableItemWithId<CardSimpleProps> =
  {
    id: "card-resources-learning-using-earth-observations",
    title: "Using Earth Observations for Pre- and Post-Fire Monitoring ",
    image: (
      <Image
        src="/img/repond/resources-learning/Planet_LAFires_Altadena.webp"
        alt="Coastal area with turquoise water and green land"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    ),
    url: "https://www.earthdata.nasa.gov/learn/trainings/using-earth-observations-pre-post-fire-monitoring ",
    tag: <ThemeTag theme="respond" />,
  };

export const MOCK_RESPOND_CARD_RESOURCE_LEARNING = [
  RESPOND_CARD_RESOURCES_LEARNING_NASA_LIFELINES,
  RESPOND_CARD_RESOURCES_LEARNING_FUNDAMENTALS_OF_REMOTE_SENSING,
  RESPOND_CARD_RESOURCES_LEARNING_INTRODUCTION_TO_SAR,
  RESPOND_CARD_RESOURCES_LEARNING_USING_EARTH_OBSERVATIONS,
];
