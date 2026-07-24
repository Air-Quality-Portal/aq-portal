import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__MOCK: DatasetContent = {
  id: "sentinel-2-true-color",
  contentType: "dataset",
  title: "Sentinel-2 True Color Imagery",
  description:
    "The True Color RGB composite provides a product of how the surface would look to the naked eye from space.",
  thumbnailImage: {
    src: "https://picsum.photos/id/237/200/300",
    alt: "Sample Text",
  },
  mastheadImage: {
    src: "https://picsum.photos/id/174/1304/480",
    alt: "Aerial landscape sample imagery",
  },
  metadata: {
    provider: { label: "Data Provider", value: ["US EPA"] },
    parameters: {
      label: "Parameters & Units",
      value: ["PM2.5 µg/m³", "NO₂ppb molecules/cm²", "HCHOmolecules/cm²", "SO₂ppb"],
    },
    spatialCoverage: { label: "Spatial Coverage", value: ["United States"] },
    temporalCoverage: { label: "Temporal Coverage", value: ["1980 – Present"] },
    temporalResolution: { label: "Temporal Resolution", value: ["Hourly"] },
    updateFrequency: { label: "Update Frequency", value: ["Hourly"] },
    latency: { label: "Latency", value: ["Low - near real-time to daily"] },
    spatialResolution: { label: "Spatial Resolution", value: ["Varies by product"] },
    dataFormat: { label: "Data Format", value: ["CSV, JSON, API"] },
    versionHistory: { label: "Version History", value: ["v2.1 (current)"] },
  },

  actions: {
    primary: {
      label: "Open Visualization Tool",
      href: "https://example.com/visualization",
      isExternal: true,
    },
  },

  body: [
    {
      type: "text",
      paragraphs: [
        "The True Color RGB provides a product of how the surface would look to the naked eye from space. The True Color RGB is produced using the 3 visible wavelength bands (red, green, and blue) from the respective sensor. Some minor atmospheric corrections have occurred.",
      ],
    },
  ],
};
