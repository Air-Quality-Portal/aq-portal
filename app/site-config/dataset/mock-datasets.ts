import type { ContentBlock, DatasetContent } from "@/app/site-config/types";

/**
 * Placeholder datasets used only to make the data-gallery pagination
 * demonstrable. They follow the same shape as DATASET__MOCK: `categories`
 * drives the card tags, `metadata` carries the dataset's properties, and
 * `body` is built from the same block sequence, so both the catalog card and
 * the detail page render exactly as an authored dataset would.
 */

const MOCK_COUNT = 24;

type RawDataset = {
  title: string;
  description: string;
  categories: string[];
  provider: string;
  parameters: string[];
  spatialCoverage: string;
  spatialResolution: string;
  temporalCoverage: string;
  temporalResolution: string;
  updateFrequency: string;
  latency: string;
  dataFormat: string;
};

const MOCK_DETAILS: RawDataset[] = [
  {
    title: "TEMPO Nitrogen Dioxide",
    description:
      "Hourly daytime column NO₂ retrievals over North America from the geostationary TEMPO instrument, supporting urban air quality and emissions monitoring.",
    categories: ["Air Quality", "NASA", "NO₂", "Satellite", "Hourly"],
    provider: "NASA",
    parameters: ["NO₂ molecules/cm²", "Cloud fraction"],
    spatialCoverage: "North America",
    spatialResolution: "2 km x 4.75 km at nadir",
    temporalCoverage: "2023 – Present",
    temporalResolution: "Hourly (daylight)",
    updateFrequency: "Hourly",
    latency: "Low - near real-time to daily",
    dataFormat: "NetCDF, COG",
  },
  {
    title: "AirNow Surface PM2.5",
    description:
      "Quality-controlled hourly fine particulate matter concentrations from the nationwide regulatory monitoring network, with AQI categories.",
    categories: ["Air Quality", "EPA", "PM2.5", "Ground Station", "Real-time"],
    provider: "US EPA",
    parameters: ["PM2.5 µg/m³", "AQI"],
    spatialCoverage: "United States",
    spatialResolution: "Point (station)",
    temporalCoverage: "1999 – Present",
    temporalResolution: "Hourly",
    updateFrequency: "Hourly",
    latency: "Low - near real-time",
    dataFormat: "CSV, JSON, API",
  },
  {
    title: "HRRR Smoke Forecast",
    description:
      "Near-surface smoke and vertically integrated smoke forecasts from the High-Resolution Rapid Refresh model, updated each hour.",
    categories: ["Wildfire", "NOAA", "Smoke", "Model Output", "Forecast"],
    provider: "NOAA",
    parameters: ["Near-surface smoke µg/m³", "Vertically integrated smoke"],
    spatialCoverage: "Continental United States",
    spatialResolution: "3 km",
    temporalCoverage: "2020 – Present",
    temporalResolution: "Hourly",
    updateFrequency: "Hourly",
    latency: "Low - near real-time",
    dataFormat: "GRIB2",
  },
  {
    title: "MAIAC Aerosol Optical Depth",
    description:
      "Daily 1 km aerosol optical depth retrieved from MODIS using the MAIAC algorithm, widely used as a proxy for surface PM2.5.",
    categories: ["AOD", "NASA", "Satellite", "PM2.5", "1 km Resolution"],
    provider: "NASA",
    parameters: ["AOD 550 nm", "Column water vapor"],
    spatialCoverage: "Global",
    spatialResolution: "1 km",
    temporalCoverage: "2000 – Present",
    temporalResolution: "Daily",
    updateFrequency: "Daily",
    latency: "Moderate - 1 to 3 days",
    dataFormat: "HDF, COG",
  },
];

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const LOREM_LONG = `${LOREM_SHORT} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

/**
 * Same block sequence as DATASET__MOCK, with lorem ipsum standing in for the
 * prose so every mock detail page exercises the full renderer.
 */
const makeMockBody = (title: string, relatedIds: string[]): ContentBlock[] => [
  {
    type: "text",
    paragraphs: [LOREM_LONG, LOREM_SHORT],
  },
  {
    type: "note",
    label: "Recommended use",
    text: LOREM_SHORT,
  },
  {
    type: "linkList",
    heading: "Documentation",
    headingLevel: "h3",
    lead: `Documentation, algorithm details, and background reading for ${title}.`,
    links: [
      {
        label: `${title} — official dataset page`,
        href: "https://example.com/dataset",
        isExternal: true,
      },
      { label: "Provider documentation", href: "https://example.com/docs", isExternal: true },
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
    ],
  },
  {
    type: "linkList",
    heading: "Download data",
    headingLevel: "h3",
    lead: `Access ${title} through the provider portal or download it directly.`,
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
    ],
  },
  {
    type: "tutorialList",
    heading: "Tutorials",
    headingLevel: "h3",
    lead: `Self-paced tutorials to help you get started with ${title}.`,
    tutorials: [
      {
        title: `Getting started with ${title}`,
        description: LOREM_SHORT,
        href: "https://example.com/tutorial/getting-started",
        duration: "10 min",
        level: "Beginner",
      },
      {
        title: `Accessing and downloading ${title} data`,
        description: LOREM_SHORT,
        href: "https://example.com/tutorial/downloading",
        duration: "20 min",
        level: "Intermediate",
      },
    ],
  },
  {
    type: "relatedDatasets",
    heading: "Related datasets",
    headingLevel: "h3",
    description: "Other datasets in the catalog you can explore in the AIR4US visualization tool.",
    datasetIds: relatedIds,
  },
];

const makeMockDataset = (index: number): DatasetContent => {
  const n = index + 1;
  const archetype = MOCK_DETAILS[index % MOCK_DETAILS.length];
  const version = `v${1 + (index % 3)}.${index % 5} (current)`;
  const title = `${archetype.title} ${n}`;
  // The three mocks that follow this one, wrapping at the end of the list.
  const relatedIds = [1, 2, 3].map(
    (offset) => `mock-dataset-${((index + offset) % MOCK_COUNT) + 1}`,
  );

  return {
    id: `mock-dataset-${n}`,
    contentType: "dataset",
    title,
    description: archetype.description,
    categories: archetype.categories,
    thumbnailImage: {
      src: `https://picsum.photos/seed/mock-dataset-${n}/200/300`,
      alt: `Placeholder thumbnail for ${archetype.title}`,
    },
    mastheadImage: {
      src: `https://picsum.photos/seed/mock-dataset-${n}/1304/480`,
      alt: `Placeholder masthead for ${archetype.title}`,
    },
    metadata: {
      provider: { label: "Data Provider", value: [archetype.provider] },
      parameters: { label: "Parameters & Units", value: archetype.parameters },
      spatialCoverage: { label: "Spatial Coverage", value: [archetype.spatialCoverage] },
      temporalCoverage: { label: "Temporal Coverage", value: [archetype.temporalCoverage] },
      temporalResolution: { label: "Temporal Resolution", value: [archetype.temporalResolution] },
      updateFrequency: { label: "Update Frequency", value: [archetype.updateFrequency] },
      latency: { label: "Latency", value: [archetype.latency] },
      spatialResolution: { label: "Spatial Resolution", value: [archetype.spatialResolution] },
      dataFormat: { label: "Data Format", value: [archetype.dataFormat] },
      versionHistory: { label: "Version History", value: [version] },
    },
    body: makeMockBody(title, relatedIds),
  };
};

export const MOCK_DATASETS: DatasetContent[] = Array.from({ length: MOCK_COUNT }, (_, index) =>
  makeMockDataset(index),
);
