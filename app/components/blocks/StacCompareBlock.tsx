"use client";

import { GeoConfigProvider, StacCompareMap } from "@teamimpact/veda-ui-blocks";

import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { ContentBlock } from "@/app/site-config/types";

type StacCompareBlockProps = {
  block: Extract<ContentBlock, { type: "stacCompare" }>;
};

export function StacCompareBlock({ block }: StacCompareBlockProps) {
  const { caption, ...blockConfig } = block;

  const {
    stacApiUrl,
    titilerBaseUrl,
    baseMapStyle,
    initialViewState,
    leftLayerConfig,
    rightLayerConfig,
  } = {
    ...DEFAULT_STAC_CONFIG,
    ...blockConfig,
  };

  return (
    <GeoConfigProvider stacApiUrl={stacApiUrl} titilerBaseUrl={titilerBaseUrl}>
      <figure className="margin-0">
        <div className="display-flex height-card-lg">
          <StacCompareMap
            baseMapStyle={baseMapStyle}
            initialViewState={initialViewState}
            leftLayerConfig={leftLayerConfig}
            rightLayerConfig={rightLayerConfig}
          />
        </div>
        {caption && (
          <figcaption className="font-body-sm text-base margin-top-1">{caption}</figcaption>
        )}
      </figure>
    </GeoConfigProvider>
  );
}
