"use client";

import { GeoConfigProvider, StacCompareMap } from "@teamimpact/veda-ui-blocks";

import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { ContentBlock } from "@/app/site-config/types";

type StacCompareBlockProps = {
  block: Extract<ContentBlock, { type: "stacCompare" }>;
};

export function StacCompareBlock({ block }: StacCompareBlockProps) {
  const {
    stacApiUrl,
    titilerBaseUrl,
    baseMapStyle,
    initialViewState,
    leftLayerConfig,
    rightLayerConfig,
  } = {
    ...DEFAULT_STAC_CONFIG,
    ...block,
  };

  return (
    <GeoConfigProvider stacApiUrl={stacApiUrl} titilerBaseUrl={titilerBaseUrl}>
      <div className="display-flex height-card-lg">
        <StacCompareMap
          baseMapStyle={baseMapStyle}
          initialViewState={initialViewState}
          leftLayerConfig={leftLayerConfig}
          rightLayerConfig={rightLayerConfig}
        />
      </div>
    </GeoConfigProvider>
  );
}
