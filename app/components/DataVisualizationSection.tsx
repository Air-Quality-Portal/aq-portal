"use client";

import { GeoConfigProvider, StacCompareMap } from "@teamimpact/veda-ui-blocks";
import { DATAVIZ_MAP_CONFIG } from "@/app/site-config/home/home-dataviz-map";

export function DataVisualizationSection() {
  return (
    <GeoConfigProvider
      stacApiUrl={DATAVIZ_MAP_CONFIG.stacApiUrl}
      titilerBaseUrl={DATAVIZ_MAP_CONFIG.titilerBaseUrl}
    >
      <div className="display-flex" style={{ height: 480 }}>
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
