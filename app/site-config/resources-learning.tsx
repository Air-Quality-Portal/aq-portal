import type { CardSimpleProps } from "@tinacms-portal/blocks";
import { Tag } from "@tinacms-portal/blocks";
import Image from "next/image";

type CardWithId = CardSimpleProps & { id: string };

export const MOCK_CARD_RESOURCES_LEARNING_PREPARE: CardWithId = {
  id: "card-prepare",
  title: "Tools You Can Use: Mapping Flood Impacts",
  image: (
    <Image
      src="/img/resources-learning/flood-impacts.webp"
      alt="Coastal area with turquoise water and green land"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/mapping-flood-impacts",
  tag: (
    <Tag color="#F67E09" textColor="#0D313D">
      PREPARE
    </Tag>
  ),
  showOverlay: true,
};

export const MOCK_CARD_RESOURCES_LEARNING_RESPOND: CardWithId = {
  id: "card-respond",
  title: "Become a NASA Response Mapper: Help Strengthen Hurricane Response from the Ground Up",
  image: (
    <Image
      src="/img/resources-learning/hurricane-response.webp"
      alt="Firefighter in protective gear during response operations"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/nasa-response-mapper",
  tag: (
    <Tag color="#C91B6E" textColor="white">
      RESPOND
    </Tag>
  ),
  showOverlay: true,
};

export const MOCK_CARD_RESOURCES_LEARNING_RECOVER: CardWithId = {
  id: "card-recover",
  title: "Imagery for the January 2025 Southern California Wildfires",
  image: (
    <Image
      src="/img/resources-learning/california-wildfires.webp"
      alt="Satellite imagery of wildfire and smoke over California"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/california-wildfires-2025",
  tag: (
    <Tag color="#4F6FAE" textColor="white">
      RECOVER
    </Tag>
  ),
  showOverlay: true,
};

export const MOCK_CARD_RESOURCES_LEARNING_RESILIENCE: CardWithId = {
  id: "card-resilience",
  title: "Building Resilience in Coastal Communities with NASA Earth Science",
  image: (
    <Image
      src="/img/resources-learning/coastal-communities.webp"
      alt="Aerial view of coastal community with vegetation and waterways"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/resources/coastal-resilience",
  tag: (
    <Tag color="#1D9950" textColor="white">
      BUILD RESILIENCE
    </Tag>
  ),
  showOverlay: true,
};
