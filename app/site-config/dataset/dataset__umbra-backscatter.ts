import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__UMBRA_BACKSCATTER: DatasetContent = {
  id: "umbra-backscatter",
  contentType: "dataset",
  title: "Umbra Backscatter Imagery",
  description:
    "Umbra backscatter values correspond to the return strength of the radar signal from the surface in decibels (dB). The imagery can be used to potentially identify standing water, debris and other features relevant to an event.",
  thumbnailImage: {
    src: "/img/event/typhoon-sinlaku-umbra-guam.webp",
    alt: "Radar backscatter image of Antonio B Won Pat International Airport in Guam, captured by Umbra satellites",
  },
  mastheadImage: {
    src: "/img/event/typhoon-sinlaku-umbra-guam.webp",
    alt: "Radar backscatter image of Antonio B Won Pat International Airport in Guam, captured by Umbra satellites",
  },
  themes: ["respond"],
  categories: ["tropical cyclone"],
  relatedContent: ["typhoon-sinlaku-2026"],
  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Umbra backscatter values correspond to the return strength of the radar signal from the surface in decibels (dB). The imagery can be used to potentially identify standing water, debris and other features relevant to an event.",
      ],
    },
    {
      type: "image",
      src: "/img/event/typhoon-sinlaku-umbra-guam.webp",
      alt: "Radar backscatter image of Antonio B Won Pat International Airport in Guam, captured by satellites on April 14, 2026",
      caption:
        'Radar backscatter image of Antonio B Won Pat International Airport in Guam, captured by satellites on April 14, 2026. Synthetic aperture radar (SAR) sensors have the ability to "see through" clouds to capture images of homes and infrastructure even in the midst of a hurricane. This image includes copyrighted material of Umbra. All rights reserved. This work utilized data made available through the NASA Commercial Satellite Data Acquisition (CSDA) program.',
      width: 1920,
      height: 1080,
    },
    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: ["Umbra, SAR, CSDA, Commercial"],
    },
  ],
};
