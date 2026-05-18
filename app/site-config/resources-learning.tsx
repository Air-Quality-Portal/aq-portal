import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_RESOURCES_LEARNING_PREPARE: CardWithId = {
  id: "card-eo-building-exposure-data",
  title:
    "Understanding EO-based Building Exposure Data: Application to Disaster Mitigation, Preparedness, Response and Recovery",
  image: (
    <Image
      src="/img/resources-learning/eo-building-exposure-data.webp"
      alt="Los Angeles building exposure map showing building risk data across the city"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/eo-building-exposure-data",
  tag: (
    <Tag color="#F67E09" textColor="#0D313D">
      PREPARE
    </Tag>
  ),
};

export const MOCK_CARD_RESOURCES_LEARNING_RESPOND: CardWithId = {
  id: "card-lifelines-wildfire-workflow",
  title: "NASA Lifelines Data Studio: Wildfire Early Warning Workflow",
  image: (
    <Image
      src="/img/resources-learning/lifelines-wildfire-workflow.webp"
      alt="NASA Lifelines Data Studio cover image showing wildfire data workflow"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/lifelines-wildfire-workflow",
  tag: (
    <Tag color="#C91B6E" textColor="white">
      RESPOND
    </Tag>
  ),
};

export const MOCK_CARD_RESOURCES_LEARNING_RECOVER: CardWithId = {
  id: "card-fundamentals-remote-sensing",
  title: "Fundamentals of Remote Sensing",
  image: (
    <Image
      src="/img/resources-learning/fundamentals-remote-sensing.webp"
      alt="NISAR satellite orbiting Earth"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "https://www.earthdata.nasa.gov/learn/trainings/fundamentals-remote-sensing",
  tag: (
    <Tag color="#4F6FAE" textColor="white">
      RECOVER
    </Tag>
  ),
};

export const MOCK_CARD_RESOURCES_LEARNING_RESILIENCE: CardWithId = {
  id: "card-introduction-to-sar",
  title: "Introduction to SAR and its Applications",
  image: (
    <Image
      src="/img/resources-learning/introduction-to-sar.webp"
      alt="HydroSAR flood mapping over Memphis, Tennessee"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "https://www.earthdata.nasa.gov/learn/trainings/introduction-synthetic-aperture-radar-sar-its-applications",
  tag: (
    <Tag color="#1D9950" textColor="white">
      BUILD RESILIENCE
    </Tag>
  ),
};
