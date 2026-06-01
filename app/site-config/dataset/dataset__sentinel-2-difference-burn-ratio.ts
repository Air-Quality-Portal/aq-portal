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
};
