import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";
import type { ContentBlock } from "@/app/site-config/types";

export const HOME_CONTENT: ContentBlock[] = [
  {
    type: "stacCompare",
    heading: "Data Visualization",
    initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
    baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
    leftLayerConfig: {
      type: "raster",
      collectionId: "blackmarble-june2026-composite",
      collectionAssetId: "blackmarble_hd",
      dateRange: { from: "2024-08-01", to: "2024-08-31" },
      hideLegend: true,
    },
    rightLayerConfig: {
      type: "raster",
      collectionId: "blackmarble-hd-daily-june2026",
      collectionAssetId: "blackmarble_hd",
      dateRange: { from: "2024-09-28", to: "2024-09-28" },
    },
  },
];
