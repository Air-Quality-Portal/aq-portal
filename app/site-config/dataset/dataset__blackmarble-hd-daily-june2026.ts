import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__BLACKMARBLE_HD_DAILY_JUNE2026: DatasetContent = {
  id: "blackmarble-hd-daily",
  contentType: "dataset",
  title: "Black Marble HD: Daily — Hurricane Helene",
  description:
    "NASA Black Marble high-definition daily nighttime lights imagery captured during Hurricane Helene (September 28, 2024). Nighttime light anomalies reveal power outages and population displacement.",
  thumbnailImage: {
    src: "/img/logo-emblem.svg",
    alt: "Black Marble HD daily nighttime lights",
  },
  themes: ["respond"],
  categories: ["tropical cyclone"],
  stacLayer: {
    ...DEFAULT_STAC_CONFIG,
    type: "raster",
    collectionId: "blackmarble-hd-daily-june2026",
    dateRange: { from: "2024-09-28", to: "2024-09-28" },
  },
  body: [
    {
      type: "text",
      heading: "Section One",
      headingLevel: "h2",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
    {
      type: "text",
      heading: "Section Two",
      headingLevel: "h2",
      paragraphs: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      type: "text",
      heading: "Section Three",
      headingLevel: "h2",
      paragraphs: [
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      ],
    },
  ],
};
