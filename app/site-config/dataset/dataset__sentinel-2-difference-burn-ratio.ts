import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__SENTINEL_2_DIFFERENCE_BURN_RATIO: DatasetContent = {
  id: "sentinel-2-difference-burn-ratio",
  contentType: "dataset",
  title: "Sentinel-2 Differenced Normalized Burn Ratio (dNBR)",
  description:
    "Differenced Normalized Burn Ratio (dNBR) is computed by the difference between the pre-fire NBR and the post-fire NBR. Since the dNBR considers the condition of the scene before the fire occurred, the resulting value has been used as a proxy for burn severity.",
  thumbnailImage: {
    src: "/img/dataset/sentinel-2-true-color.webp",
    alt: "Sentinel-2 True Color imagery example",
  },
  mastheadImage: {
    src: "/img/dataset/sentinel-2-true-color.webp",
    alt: "Sentinel-2 True Color imagery example",
  },
  themes: [],
  categories: [],
  relatedContent: ["sentinel-2-color-infrared", "sentinel-2-swir"],
  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The True Color RGB composite provides a product of how the surface would look to the naked eye from space. The RGB is created using the red, green, and blue channels of the respective instrument.",
        "The Short Wave Infrared (SWIR) RGB is a product that is created using the SWIR, Near Infrared (NIR), and Red channels of the respective instrument.",
        "The Color Infrared composite is created using the near-infrared, red, and green channels, allowing for the ability to see areas impacted by floods, fires, or other hazards in conditions with light clouds or smoke. The near infrared gives the ability to see through thin clouds. Healthy vegetation is shown as red; water is blue; burned areas are black.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "The True Color RGB provides a product of how the surface would look to the naked eye from space. The True Color RGB is produced using the 3 visible wavelength bands (red, green, and blue) from the respective sensor. Some minor atmospheric corrections have occurred.",
        "The Short Wave Infrared (SWIR) RGB is a product that can provide value in flood detection. Areas of water will appear blue, healthy green vegetation will appear as a bright green, urban areas in various shades of magenta, snow will appear as a bright blue/cyan, and bare soils being multicolor dependent on their makeup.",
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
