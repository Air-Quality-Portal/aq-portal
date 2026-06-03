"use client";

import { GeoConfigProvider, StacSingleLayerMap } from "@teamimpact/veda-ui-blocks";

import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { ContentBlock } from "@/app/site-config/types";

type StacSingleLayerBlockProps = {
  block: Extract<ContentBlock, { type: "stacSingleLayer" }>;
};

export function StacSingleLayerBlock({ block }: StacSingleLayerBlockProps) {
  const { caption, ...blockConfig } = block;

  const { stacApiUrl, titilerBaseUrl, baseMapStyle, initialViewState, layerConfig } = {
    ...DEFAULT_STAC_CONFIG,
    ...blockConfig,
  };

  return (
    <GeoConfigProvider stacApiUrl={stacApiUrl} titilerBaseUrl={titilerBaseUrl}>
      <figure className="margin-0">
        <div className="display-flex height-card-lg">
          <StacSingleLayerMap
            baseMapStyle={baseMapStyle}
            initialViewState={initialViewState}
            layerConfig={layerConfig}
          />
        </div>
        {caption && (
          <figcaption className="font-body-sm text-base margin-top-1">{caption}</figcaption>
        )}
      </figure>
    </GeoConfigProvider>
  );
}
