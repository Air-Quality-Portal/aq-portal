import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";

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
