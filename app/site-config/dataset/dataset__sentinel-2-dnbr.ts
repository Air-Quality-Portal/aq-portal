import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__SENTINEL_2_DNBR: DatasetContent = {
  id: "sentinel-2-dnbr",
  contentType: "dataset",
  title: "Sentinel-2 Differenced Normalized Burn Ratio (dNBR)",
  description:
    "Differenced Normalized Burn Ratio (dNBR) is computed by the difference between the pre-fire NBR and the post-fire NBR. ",
  thumbnailImage: {
    src: "/img/dataset/sentinel-2-dnbr.webp",
    alt: "Sentinel-2 Differenced Normalized Burn Ratio (dNBR)",
  },
  mastheadImage: {
    src: "/img/dataset/sentinel-2-dnbr.webp",
    alt: "Sentinel-2 Differenced Normalized Burn Ratio (dNBR)",
  },
  themes: ["respond", "recover"],
  categories: ["fire"],
  relatedContent: ["sentinel-2-nbr"],
  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Differenced Normalized Burn Ratio (dNBR) is computed by the difference between the pre-fire NBR and the post-fire NBR. More information on dNBR can be found here: https://un-spider.org/advisory-support/recommended-practices/recommended-practice-burn-severity/in-detail/normalized-burn-ratio. Since the dNBR considers the condition of the scene before the fire occurred, the resulting value has been used as a proxy for burn severity.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Higher, positive dNBR values represent a proxy for greater burn severity. Negative dNBR values may represent a re-greening of or growth of vegetation in between pre and post imagery.",
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
