"use client";

import { GeoConfigProvider, StacCompareMap } from "@teamimpact/veda-ui-blocks";
import { DATAVIZ_MAP_CONFIG } from "@/app/site-config/home/home-dataviz-map";
import { STAC_ENDPOINTS } from "@/app/site-config/map";

export function DataVisualizationSection() {
  return (
    <GeoConfigProvider
      stacApiUrl={STAC_ENDPOINTS.stacApiUrl}
      titilerBaseUrl={STAC_ENDPOINTS.titilerBaseUrl}
    >
      <div className="display-flex height-card-lg">
        <StacCompareMap
          baseMapStyle={DATAVIZ_MAP_CONFIG.baseMapStyle}
          initialViewState={DATAVIZ_MAP_CONFIG.initialViewState}
          leftLayerConfig={DATAVIZ_MAP_CONFIG.leftLayer}
          rightLayerConfig={DATAVIZ_MAP_CONFIG.rightLayer}
        />
      </div>
    </GeoConfigProvider>
  );
}
