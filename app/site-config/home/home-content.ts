import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";
import { MAP_CAROUSEL_ITEMS } from "@/app/site-config/map";
import type { ContentBlock, MapCarouselBlockProps } from "@/app/site-config/types";

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
    caption:
      "NASA Black Marble Day-Night Band (BRDF-Corrected) HD Pre- and Post-Hurricane Helene Images for the Augusta, Georgia area. The image is in an inferno color scale. Yellow represents the presence of more light; dark blue less lights. Observations may be obscured by total or partial cloud cover. Other factors such as snow reflectance, moon phase, wildfires, and wildfire smoke may distort light radiance and require further analysis when assessing power outages.",
  },
];

export const HOME_MAP_CAROUSEL_ITEMS: MapCarouselBlockProps = {
  maps: MAP_CAROUSEL_ITEMS,
  heading: "Air quality data Visualization Tool",
  linkLabel: "View all data",
  href: "#",
};
