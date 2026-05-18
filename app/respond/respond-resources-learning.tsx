import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

type CardWithId = CardSimpleProps & { id: string };

export const RESPOND_CARD_RESOURCES_LEARNING_NASA_LIFELINES: CardWithId = {
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
  tag: (
    <Tag color="#c91b6e" textColor="white">
      RESPOND
    </Tag>
  ),
};
export const RESPOND_CARD_RESOURCES_LEARNING_FUNDAMENTALS_OF_REMOTE_SENSING: CardWithId = {
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
  tag: (
    <Tag color="#c91b6e" textColor="white">
      RESPOND
    </Tag>
  ),
};
export const RESPOND_CARD_RESOURCES_LEARNING_INTRODUCTION_TO_SAR: CardWithId = {
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
  tag: (
    <Tag color="#c91b6e" textColor="white">
      RESPOND
    </Tag>
  ),
};
export const RESPOND_CARD_RESOURCES_LEARNING_USING_EARTH_OBSERVATIONS: CardWithId = {
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
  tag: (
    <Tag color="#c91b6e" textColor="white">
      RESPOND
    </Tag>
  ),
};
