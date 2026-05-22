"use client";

import { GeoConfigProvider, StacSingleLayerMap } from "@teamimpact/veda-ui-blocks";
import { DATAVIZ_MAP_CONFIG } from "@/app/site-config/home/home-dataviz-map";
import type { DatasetLayer, DateRange } from "@/app/site-config/types";

type DatasetMapProps = {
  layer: DatasetLayer;
  dateRange: DateRange;
};

export function DatasetMap({ layer, dateRange }: DatasetMapProps) {
  return (
    <GeoConfigProvider
      stacApiUrl={DATAVIZ_MAP_CONFIG.stacApiUrl}
      titilerBaseUrl={DATAVIZ_MAP_CONFIG.titilerBaseUrl}
    >
      <div className="display-flex" style={{ height: 480 }}>
        <StacSingleLayerMap
          baseMapStyle={DATAVIZ_MAP_CONFIG.baseMapStyle}
          initialViewState={DATAVIZ_MAP_CONFIG.initialViewState}
          layerConfig={{ ...layer, dateRange }}
        />
      </div>
    </GeoConfigProvider>
  );
}
