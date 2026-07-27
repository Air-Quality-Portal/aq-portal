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
  categories: ["Air Quality", "NASA", "NO₂", "Satellite", "Hourly"],
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
        "The True Color RGB composite provides a product of how the surface would look to the naked eye from space. It is produced using the three visible wavelength bands (red, green, and blue) from the respective sensor. Some minor atmospheric corrections have been applied to enhance contrast between surface features.",
        "Near real-time imagery is available through the provider portal at 15-minute to 2-day refresh rates. The product is widely used by air quality forecasters, the National Weather Service, and aviation meteorologists to monitor transport events.",
      ],
    },
    {
      type: "note",
      label: "Recommended use",
      text: "Best suited for spatial mapping, transport tracking, and satellite-based estimation. Combine with ground monitors for surface-level accuracy.",
    },
    {
      type: "linkList",
      heading: "Documentation",
      headingLevel: "h3",
      lead: "Documentation, algorithm details, and background reading for Sentinel-2.",
      links: [
        {
          label: "Sentinel-2 — official dataset page",
          href: "https://example.com/dataset",
          isExternal: true,
        },
        {
          label: "ESA / Copernicus documentation",
          href: "https://example.com/docs",
          isExternal: true,
        },
        {
          label: "Algorithm Theoretical Basis Document (ATBD)",
          href: "https://example.com/atbd",
          isExternal: true,
        },
        {
          label: "Data quality & validation report",
          href: "https://example.com/validation",
          isExternal: true,
        },
        {
          label: "Related publications",
          href: "https://example.com/publications",
          isExternal: true,
        },
      ],
    },
    {
      type: "linkList",
      heading: "Download data",
      headingLevel: "h3",
      lead: "Access Sentinel-2 through the provider portal or download it directly.",
      links: [
        {
          label: "Access via provider data portal",
          href: "https://example.com/portal",
          isExternal: true,
        },
        {
          label: "Bulk download (NetCDF / HDF / CSV)",
          href: "https://example.com/bulk",
          isExternal: true,
        },
        { label: "API & programmatic access", href: "https://example.com/api", isExternal: true },
        {
          label: "Subset, reproject & reformat tool",
          href: "https://example.com/subset",
          isExternal: true,
        },
      ],
    },
    {
      type: "tutorialList",
      heading: "Tutorials",
      headingLevel: "h3",
      lead: "Self-paced tutorials to help you get started with Sentinel-2.",
      tutorials: [
        {
          title: "Getting started with Sentinel-2",
          description:
            "An introduction to the Sentinel-2 dataset — what it measures, how it is produced, and when to use it.",
          href: "https://example.com/tutorial/getting-started",
          duration: "10 min",
          level: "Beginner",
        },
        {
          title: "Accessing and downloading Sentinel-2 data",
          description:
            "Find, subset, and download Sentinel-2 data, with tips for common file formats and access tools.",
          href: "https://example.com/tutorial/downloading",
          duration: "20 min",
          level: "Intermediate",
        },
        {
          title: "Exploring Sentinel-2 in the AIR4US visualization tool",
          description:
            "Load Sentinel-2 layers in the AIR4US visualization tool and interpret them alongside other air quality data.",
          href: "https://example.com/tutorial/visualization",
          duration: "15 min",
          level: "Advanced",
        },
      ],
    },
    {
      type: "relatedDatasets",
      heading: "Related datasets",
      headingLevel: "h3",
      description:
        "Other datasets in the catalog you can explore in the AIR4US visualization tool.",
      datasetIds: ["mock-dataset-1", "mock-dataset-2", "mock-dataset-3"],
    },
  ],
};
