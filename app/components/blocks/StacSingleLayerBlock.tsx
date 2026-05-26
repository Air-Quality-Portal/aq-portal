"use client";

import { GeoConfigProvider, StacSingleLayerMap } from "@teamimpact/veda-ui-blocks";

import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { ContentBlock } from "@/app/site-config/types";

type StacSingleLayerBlockProps = {
  block: Extract<ContentBlock, { type: "stacSingleLayer" }>;
};

export function StacSingleLayerBlock({ block }: StacSingleLayerBlockProps) {
  const { stacApiUrl, titilerBaseUrl, baseMapStyle, initialViewState, layerConfig } = {
    ...DEFAULT_STAC_CONFIG,
    ...block,
  };

  return (
    <GeoConfigProvider stacApiUrl={stacApiUrl} titilerBaseUrl={titilerBaseUrl}>
      <div className="display-flex height-card-lg">
        <StacSingleLayerMap
          baseMapStyle={baseMapStyle}
          initialViewState={initialViewState}
          layerConfig={layerConfig}
        />
      </div>
    </GeoConfigProvider>
  );
}
