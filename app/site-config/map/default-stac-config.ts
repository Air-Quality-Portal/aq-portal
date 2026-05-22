import { BASEMAP_STYLES } from "./basemap";
import { STAC_ENDPOINTS } from "./stac-endpoints";

export const DEFAULT_STAC_CONFIG = {
  stacApiUrl: STAC_ENDPOINTS.stacApiUrl,
  titilerBaseUrl: STAC_ENDPOINTS.titilerBaseUrl,
  baseMapStyle: BASEMAP_STYLES.nasaBlueMarble,
  initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
} as const;
