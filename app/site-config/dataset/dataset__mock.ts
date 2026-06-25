import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__MOCK: DatasetContent = {
  id: "sentinel-2-true-color",
  contentType: "dataset",
  title: "Sentinel-2 True Color Imagery",
  description:
    "The True Color RGB composite provides a product of how the surface would look to the naked eye from space.",
  thumbnailImage: {
    src: "https://picsum.photos/id/237/200/300",
    alt: "Sample Text",
  },
  mastheadImage: {
    src: "https://picsum.photos/id/237/1080/1280",
    alt: "Sample Text",
  },
  category1: ["c1 lorem", "c1 dore"],
  category2: ["c2 lorem", "c2 dore"],
  category3: ["c3 lorem", "c3 dore"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The True Color RGB composite provides a product of how the surface would look to the naked eye from space. The RGB is created using the red, green, and blue channels of the respective instrument.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "The True Color RGB provides a product of how the surface would look to the naked eye from space. The True Color RGB is produced using the 3 visible wavelength bands (red, green, and blue) from the respective sensor. Some minor atmospheric corrections have occurred.",
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
