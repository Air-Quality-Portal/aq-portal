"use client";

import { GeoConfigProvider, StacSingleLayerMap } from "@teamimpact/veda-ui-blocks";
import type { ContentBlock } from "@/app/site-config/types";

type StacSingleLayerBlockProps = {
  block: Extract<ContentBlock, { type: "stacSingleLayer" }>;
};

export function StacSingleLayerBlock({ block }: StacSingleLayerBlockProps) {
  const { stacLayer } = block;

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
