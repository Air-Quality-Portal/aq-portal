import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__SENTINEL_2_COLOR_INFRARED: DatasetContent = {
  id: "sentinel-2-color-infrared",
  contentType: "dataset",
  title: "Sentinel-2 Color Infrared Imagery",
  description:
    "Created using near-infrared, red, and green channels to see areas impacted by floods, fires, or other hazards.",
  thumbnailImage: {
    src: "/img/dataset/sentinel-2-color-infrared.webp",
    alt: "Sentinel-2 Color Infrared imagery example",
  },
  mastheadImage: {
    src: "/img/dataset/sentinel-2-color-infrared.webp",
    alt: "Sentinel-2 Color Infrared imagery example",
  },
  themes: [],
  categories: [],
  relatedContent: ["sentinel-2-true-color", "sentinel-2-swir"],
  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Color Infrared composite is created using the near-infrared, red, and green channels, allowing for the ability to see areas impacted by floods, fires, or other hazards in conditions with light clouds or smoke. The near infrared gives the ability to see through thin clouds. Healthy vegetation is shown as red; water is blue; burned areas are black.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "A Color Infrared composite depicts healthy vegetation as red, water as blue. Some minor atmospheric corrections have occurred.",
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
      paragraphs: ["10 meters"],
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
