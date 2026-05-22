import { BASEMAP_STYLES } from "@/app/site-config/map/basemap";

export const DATAVIZ_MAP_CONFIG = {
  baseMapStyle: BASEMAP_STYLES.nasaBlueMarble,
  initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
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
};
