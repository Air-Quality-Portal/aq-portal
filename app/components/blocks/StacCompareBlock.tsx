"use client";

import { GeoConfigProvider, StacCompareMap } from "@teamimpact/veda-ui-blocks";
import { STAC_ENDPOINTS } from "@/app/site-config/map";
import type { ContentBlock } from "@/app/site-config/types";

type StacCompareBlockProps = {
  block: Extract<ContentBlock, { type: "stacCompare" }>;
};

export function StacCompareBlock({ block }: StacCompareBlockProps) {
  return (
    <GeoConfigProvider
      stacApiUrl={block.stacApiUrl ?? STAC_ENDPOINTS.stacApiUrl}
      titilerBaseUrl={block.titilerBaseUrl ?? STAC_ENDPOINTS.titilerBaseUrl}
    >
      <div className="display-flex height-card-lg">
        <StacCompareMap
          baseMapStyle={block.baseMapStyle}
          initialViewState={block.initialViewState}
          leftLayerConfig={block.leftLayerConfig}
          rightLayerConfig={block.rightLayerConfig}
        />
      </div>
    </GeoConfigProvider>
  );
}
