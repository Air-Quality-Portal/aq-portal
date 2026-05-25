import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { IterableItemWithId } from "@/app/site-config/types";
import { ThemeTag } from "../../components";

export const RESPOND_CARD_RESOURCES_LEARNING_NASA_LIFELINES: IterableItemWithId<CardSimpleProps> = {
  id: "card-resources-learning-nasa-lifelines",
  title: "NASA Lifelines Data Studio: Wildfire Early Warning Workflow",
  image: (
    <Image
      src="/img/training/lifelines-wildfire-workflow.webp"
      alt="Satellite image of an active wildfire, showing bright red hotspots and a large plume of gray smoke spreading across a landscape of green forested hills and dry terrain, with a small urban area visible in the upper left"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  ),
  url: "/training/",
  tag: <ThemeTag theme="respond" />,
};
export const RESPOND_CARD_RESOURCES_LEARNING_FUNDAMENTALS_OF_REMOTE_SENSING: IterableItemWithId<CardSimpleProps> =
  {
    id: "card-resources-learning-fundamentals-of-remote-sensing",
    title: "Fundamentals of Remote Sensing",
    image: (
      <Image
        src="/img/training/fundamentals-remote-sensing.webp"
        alt="Artist's rendering of the NISAR satellite in orbit, featuring a large circular radar antenna dish and extended solar panels, with Earth's surface and atmosphere visible in the background."
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
        src="/img/training/introduction-to-sar.webp"
        alt="HydroSAR flood map of the Memphis, Tennessee area from April 2025, showing water extent detected by radar satellite data overlaid in bright blue on a grayscale landscape, with extensive flooding visible along the Mississippi River and surrounding floodplains."
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
    title: "Using Earth Observations for Pre- and Post-Fire Monitoring",
    image: (
      <Image
        src="/img/respond/resources-learning/Planet_LAFires_Altadena.webp"
        alt="Planet satellite image of the Altadena area after the LA fires, showing a dense urban grid at the base of the San Gabriel Mountains, with a large darkened burn scar visible across the foothills and into the residential neighborhoods."
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    ),
    url: "https://www.earthdata.nasa.gov/learn/trainings/using-earth-observations-pre-post-fire-monitoring",
    tag: <ThemeTag theme="respond" />,
  };

export const MOCK_RESPOND_CARD_RESOURCE_LEARNING = [
  RESPOND_CARD_RESOURCES_LEARNING_NASA_LIFELINES,
  RESPOND_CARD_RESOURCES_LEARNING_FUNDAMENTALS_OF_REMOTE_SENSING,
  RESPOND_CARD_RESOURCES_LEARNING_INTRODUCTION_TO_SAR,
  RESPOND_CARD_RESOURCES_LEARNING_USING_EARTH_OBSERVATIONS,
];
