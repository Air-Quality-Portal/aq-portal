import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__SENTINEL_2_SWIR: DatasetContent = {
  id: "sentinel-2-swir",
  contentType: "dataset",
  title: "Sentinel-2 Shortwave Infrared Imagery",
  description: "Created using SWIR, Near Infrared (NIR), and Red channels for flood detection.",
  thumbnailImage: {
    src: "/img/dataset/sentinel-2-swir.webp",
    alt: "Sentinel-2 Shortwave Infrared imagery example",
  },
  mastheadImage: {
    src: "/img/dataset/sentinel-2-swir.webp",
    alt: "Sentinel-2 Shortwave Infrared imagery example",
  },
  themes: ["respond", "build", "prepare", "recover"],
  categories: [
    "severewx",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],
  relatedContent: ["sentinel-2-true-color", "sentinel-2-color-infrared"],
  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Short Wave Infrared (SWIR) RGB is a product that is created using the SWIR, Near Infrared (NIR), and Red channels of the respective instrument.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "The Short Wave Infrared (SWIR) RGB is a product that can provide value in flood detection. Areas of water will appear blue, healthy green vegetation will appear as a bright green, urban areas in various shades of magenta, snow will appear as a bright blue/cyan, and bare soils being multicolor dependent on their makeup.",
      ],
    },
    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "MultiSpectral Instrument (MSI) on European Space Agency's (ESA) Copernicus Sentinel-2A/2B satellites",
      ],
    },
    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["20 meters"],
    },
    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: ["NASA/GSFC, USGS, ESA Copernicus"],
    },
    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: ["ESA, Copernicus, Sentinel-2, Optical"],
    },
  ],
};
