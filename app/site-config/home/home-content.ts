import type { ContentBlock } from "@/app/site-config/types";

export const HOME_CONTENT: ContentBlock[] = [
  {
    type: "stacCompare",
    heading: "Data Visualization",
    initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
    leftLayerConfig: {
      type: "raster",
      collectionId: "blackmarble-june2026-composite",
      dateRange: { from: "2024-08-01", to: "2024-08-31" },
    },
    rightLayerConfig: {
      type: "raster",
      collectionId: "blackmarble-hd-daily-june2026",
      dateRange: { from: "2024-09-28", to: "2024-09-28" },
    },
  },
];
