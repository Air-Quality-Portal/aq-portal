"use client";

import { GeoConfigProvider, StacSingleLayerMap } from "@teamimpact/veda-ui-blocks";
import type { StacLayer } from "@/app/site-config/types";

type DatasetMapProps = {
  stacLayer: StacLayer;
};

export function DatasetMap({ stacLayer }: DatasetMapProps) {
  return (
    <GeoConfigProvider stacApiUrl={stacLayer.stacApiUrl} titilerBaseUrl={stacLayer.titilerBaseUrl}>
      <div className="display-flex height-card-lg">
        <StacSingleLayerMap
          baseMapStyle={stacLayer.baseMapStyle}
          initialViewState={stacLayer.initialViewState}
          layerConfig={{
            type: stacLayer.type,
            collectionId: stacLayer.collectionId,
            dateRange: stacLayer.dateRange,
          }}
        />
      </div>
    </GeoConfigProvider>
  );
}
