import type { CardDetailedProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const TRAINING_CARDS: (CardDetailedProps & { id: string })[] = [
  {
    id: "eo-building-exposure-data",
    title:
      "Understanding EO-based Building Exposure Data: Application to Disaster Mitigation, Preparedness, Response and Recovery",
    description:
      "This module outlines the process of developing high-quality building exposure data and demonstrates how these datasets are strategically integrated into loss estimation to guide decision-making for emergency managers and planners.",
    image: (
      <Image
        src="/img/resources-learning-eo-building-exposure-data.webp"
        alt="Los Angeles building exposure map showing building risk data across the city"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    ),
  },
  {
    id: "lifelines-wildfire-workflow",
    title: "NASA Lifelines Data Studio: Wildfire Early Warning Workflow",
    description:
      "This module offers a guided, browser-based approach to wildfire early warning using free NASA satellite data. Leveraging FIRMS active fire detections, users will identify fire locations, map risk zones, and assess impacts on population and infrastructure.",
    image: (
      <Image
        src="/img/resources-learning-lifelines-wildfire-workflow.webp"
        alt="NASA Lifelines Data Studio cover image showing wildfire data workflow"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    ),
  },
];
