import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__BLACKMARBLE_JUNE2026_COMPOSITE: DatasetContent = {
  id: "blackmarble-composite",
  contentType: "dataset",
  title: "Black Marble HD: Monthly Composite",
  description:
    "NASA Black Marble monthly composite of nighttime lights for January 2024. Provides a pre-event baseline for before/after disaster comparisons.",
  thumbnailImage: {
    src: "/img/logo-emblem.svg",
    alt: "Black Marble monthly composite nighttime lights",
  },
  themes: ["prepare", "respond"],
  categories: ["tropical cyclone"],
  body: [
    {
      type: "text",
      heading: "Section One",
      headingLevel: "h3",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
    {
      type: "text",
      heading: "Section Two",
      headingLevel: "h3",
      paragraphs: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      type: "stacSingleLayer",
      stacLayer: {
        ...DEFAULT_STAC_CONFIG,
        type: "raster",
        collectionId: "blackmarble-june2026-composite",
        dateRange: { from: "2024-08-01", to: "2024-08-31" },
      },
    },
    {
      type: "text",
      heading: "Section Three",
      headingLevel: "h3",
      paragraphs: [
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
      ],
    },
  ],
};
