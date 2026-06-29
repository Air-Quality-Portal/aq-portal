import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";

import type { ContentBlock } from "@/app/site-config/types";

export const DEFAULT_STAC_CONFIG = {
  stacApiUrl: "https://openveda.cloud/api/stac",
  titilerBaseUrl: "https://openveda.cloud/api/raster",
  baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
  initialViewState: {
    longitude: -98,
    latitude: 39,
    zoom: 3,
  },
} as const;

export type MapLayerItem = Extract<ContentBlock, { type: "stacSingleLayer" }> & {
  linkLabel?: string;
  href?: string;
};

export const MAP_CAROUSEL_ITEMS: MapLayerItem[] = [
  {
    type: "stacSingleLayer",
    heading: "Black Marble HD — Pre-Helene",
    linkLabel: "Test 1",
    href: "#",
    caption:
      "NASA Black Marble Day-Night Band (BRDF-Corrected) HD composite for the Augusta, Georgia area before Hurricane Helene.",
    baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
    initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
    layerConfig: {
      type: "raster",
      collectionId: "blackmarble-june2026-composite",
      collectionAssetId: "blackmarble_hd",
      dateRange: { from: "2024-08-01", to: "2024-08-31" },
    },
  },
  {
    type: "stacSingleLayer",
    heading: "Black Marble HD — Post-Helene",
    linkLabel: "Test 2",
    href: "#",
    caption:
      "NASA Black Marble Day-Night Band (BRDF-Corrected) HD image for the Augusta, Georgia area after Hurricane Helene.",
    baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
    initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
    layerConfig: {
      type: "raster",
      collectionId: "blackmarble-hd-daily-june2026",
      collectionAssetId: "blackmarble_hd",
      dateRange: { from: "2024-09-28", to: "2024-09-28" },
    },
  },
];
