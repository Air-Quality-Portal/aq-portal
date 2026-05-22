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
  mastheadImage: {
    src: "/img/card-masthead.webp",
    alt: "Black Marble monthly composite nighttime lights over the southeastern United States",
  },
  themes: ["prepare", "respond"],
  categories: ["tropical cyclone"],
  layer: {
    type: "raster",
    collectionId: "blackmarble-june2026-composite",
  },
  defaultDateRange: { from: "2024-01-01", to: "2024-01-31" },
};
