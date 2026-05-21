import type { IterableItemWithId } from "@/app/components/types";

type Training = {
  contentType: "training";
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  callToAction: {
    href: string;
    label: string;
  };
};

export const TRAININGS: IterableItemWithId<Training>[] = [
  {
    id: "eo-building-exposure-data",
    contentType: "training",
    title:
      "Understanding EO-based Building Exposure Data: Application to Disaster Mitigation, Preparedness, Response and Recovery",
    description:
      "This module outlines the process of developing high-quality building exposure data and demonstrates how these datasets are strategically integrated into loss estimation to guide decision-making for emergency managers and planners.",
    image: {
      src: "/img/resources-learning-eo-building-exposure-data.webp",
      alt: "Los Angeles building exposure map showing building risk data across the city",
    },
    callToAction: {
      href: "/training/eo-building-exposure-data",
      label: "View Training",
    },
  },
  {
    id: "lifelines-wildfire-workflow",
    contentType: "training",
    title: "NASA Lifelines Data Studio: Wildfire Early Warning Workflow",
    description:
      "This module offers a guided, browser-based approach to wildfire early warning using free NASA satellite data. Leveraging FIRMS active fire detections, users will identify fire locations, map risk zones, and assess impacts on population and infrastructure.",
    image: {
      src: "/img/resources-learning-lifelines-wildfire-workflow.webp",
      alt: "NASA Lifelines Data Studio cover image showing wildfire data workflow",
    },
    callToAction: {
      href: "/training/lifelines-wildfire-workflow",
      label: "View Training",
    },
  },
];
