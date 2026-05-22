import { NASA_BLUE_MARBLE_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";

export const DATAVIZ_MAP_CONFIG = {
  stacApiUrl: "https://dev.disasters.openveda.cloud/api/stac",
  titilerBaseUrl: "https://dev.disasters.openveda.cloud/api/raster",
  baseMapStyle: NASA_BLUE_MARBLE_BASEMAP_STYLE,
  leftLayer: {
    type: "raster" as const,
    collectionId: "blackmarble-june2026-composite",
    dateRange: { from: "2024-08-01", to: "2024-08-31" },
  },
  rightLayer: {
    type: "raster" as const,
    collectionId: "blackmarble-hd-daily-june2026",
    dateRange: { from: "2024-09-28", to: "2024-09-28" },
  },
  initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
};
