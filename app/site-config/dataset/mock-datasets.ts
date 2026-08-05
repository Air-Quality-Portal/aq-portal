import type {
  ContentBlock,
  DatasetContent,
  DatasetLinkSection,
  DatasetMetadataEntry,
} from "@/app/site-config/types";

/**
 * Placeholder catalog datasets, generated from the seed list below so the
 * gallery has enough content to page through. Titles, descriptions, tags and
 * providers are realistic; every other value is invented. Each one follows the
 * same shape as DATASET__MOCK — `metadata.tags` drives the card tags, the
 * remaining metadata fields fill the sidebar, and the body/link/tutorial
 * sections exercise the detail-page renderer.
 *
 * These are the single source of truth for their card content: a
 * "Related datasets" section references them by id rather than redefining any
 * details.
 */

/** One value as a string, several as an array — same rule as a metadata entry. */
type MetadataValue = DatasetMetadataEntry["value"];

type RawDataset = {
  id: string;
  title: string;
  description: string;
  /** Topic tags shown on catalog and related-dataset cards. */
  tags: string[];
  provider: MetadataValue;
  parameters: MetadataValue;
  spatialCoverage: MetadataValue;
  spatialResolution: MetadataValue;
  temporalCoverage: MetadataValue;
  temporalResolution: MetadataValue;
  updateFrequency: MetadataValue;
  latency: MetadataValue;
  dataFormat: MetadataValue;
};

const MOCK_DETAILS: RawDataset[] = [
  {
    id: "aqs-airnow",
    title: "AQS / AirNow Air Quality Monitoring Data",
    description:
      "Real-time and historical ground-level air quality measurements from EPA's nationwide monitoring network. Incorporates PM2.5, ozone, CO, and NO₂ with IMPROVE and CASTNet quality flags.",
    tags: ["Air Quality", "EPA", "PM2.5", "Ground Station", "Real-Time"],
    provider: "US EPA",
    parameters: ["PM2.5 µg/m³", "Ozone ppb", "CO ppm", "NO₂ ppb"],
    spatialCoverage: "United States",
    spatialResolution: "Point (station)",
    temporalCoverage: "1980 – Present",
    temporalResolution: "Hourly",
    updateFrequency: "Hourly",
    latency: "Low - near real-time",
    dataFormat: ["CSV", "JSON", "API"],
  },
  {
    id: "nasa-firms",
    title: "NASA FIRMS: Active Fire & Thermal Anomaly Data",
    description:
      "Near real-time active fire and thermal anomaly detections from MODIS and VIIRS instruments, providing global fire coverage within 3 hours of satellite overpass.",
    tags: ["Fire Detection", "NASA", "Satellite", "MODIS/VIIRS", "Global"],
    provider: "NASA",
    parameters: ["Fire radiative power MW", "Brightness temperature K", "Detection confidence"],
    spatialCoverage: "Global",
    spatialResolution: ["375 m (VIIRS)", "1 km (MODIS)"],
    temporalCoverage: "2000 – Present",
    temporalResolution: "Sub-daily (per overpass)",
    updateFrequency: "Every 3 hours",
    latency: "Low - near real-time",
    dataFormat: ["CSV", "Shapefile", "API"],
  },
  {
    id: "tempo",
    title: "TEMPO: Tropospheric Emissions: Monitoring of Pollution",
    description:
      "Hourly daytime air quality observations from geostationary orbit over North America, measuring ozone, NO₂, HCHO, and aerosols at unprecedented spatial resolution.",
    tags: ["Air Quality", "NASA", "Satellite", "Ozone", "NO₂"],
    provider: "NASA",
    parameters: ["NO₂ molecules/cm²", "HCHO molecules/cm²", "Ozone DU", "Aerosol index"],
    spatialCoverage: "North America",
    spatialResolution: "2 km x 4.75 km at nadir",
    temporalCoverage: "2023 – Present",
    temporalResolution: "Hourly (daylight)",
    updateFrequency: "Hourly",
    latency: "Low - near real-time to daily",
    dataFormat: ["NetCDF", "COG"],
  },
  {
    id: "aerosolwatch",
    title: "AerosolWatch Datasets",
    description:
      "Integrated aerosol optical depth and composition data from AERONET ground stations and multi-satellite retrievals, supporting air quality and long-term climate research.",
    tags: ["Aerosol", "NASA", "AOD", "Ground Station", "Multi-Sensor"],
    provider: "NASA",
    parameters: ["AOD 550 nm", "Ångström exponent", "Fine mode fraction"],
    spatialCoverage: "Global",
    spatialResolution: "Point (station) to 10 km",
    temporalCoverage: "1993 – Present",
    temporalResolution: "Sub-hourly to daily",
    updateFrequency: "Daily",
    latency: "Moderate - 1 to 3 days",
    dataFormat: ["CSV", "NetCDF", "API"],
  },
  {
    id: "modis-viirs-goes-dust",
    title: "MODIS / VIIRS / GOES Imagery: Dust Channel",
    description:
      "Multi-platform satellite imagery for detecting and tracking aerosol plumes, dust storms, and smoke events from both polar-orbiting and geostationary satellite platforms.",
    tags: ["Imagery", "NASA", "NOAA", "Dust", "Aerosol"],
    provider: ["NASA", "NOAA"],
    parameters: ["Dust RGB composite", "Split-window brightness temperature difference"],
    spatialCoverage: "Global",
    spatialResolution: "500 m – 2 km",
    temporalCoverage: "2002 – Present",
    temporalResolution: "5 minutes (GOES) to daily (polar)",
    updateFrequency: "Continuous",
    latency: "Low - near real-time",
    dataFormat: ["GeoTIFF", "PNG", "NetCDF"],
  },
  {
    id: "maiac-aod",
    title: "MAIAC AOD: Multi-Angle Atmospheric Correction",
    description:
      "High-resolution 1 km aerosol optical depth retrievals from MODIS using a time-series algorithm, delivering enhanced accuracy over land and ocean surfaces worldwide.",
    tags: ["AOD", "NASA", "Satellite", "PM2.5", "1 km Resolution"],
    provider: "NASA",
    parameters: ["AOD 470 nm", "AOD 550 nm", "Column water vapor"],
    spatialCoverage: "Global",
    spatialResolution: "1 km",
    temporalCoverage: "2000 – Present",
    temporalResolution: "Daily",
    updateFrequency: "Daily",
    latency: "Moderate - 1 to 3 days",
    dataFormat: ["HDF", "COG"],
  },
  {
    id: "omi",
    title: "OMI: Ozone Monitoring Instrument",
    description:
      "Daily global column measurements of ozone, NO₂, SO₂, formaldehyde, and aerosol properties from NASA's Aura satellite at approximately 13 km spatial resolution.",
    tags: ["Ozone", "NASA", "Satellite", "NO₂", "SO₂"],
    provider: "NASA",
    parameters: ["Total column ozone DU", "NO₂ molecules/cm²", "SO₂ DU", "UV aerosol index"],
    spatialCoverage: "Global",
    spatialResolution: "13 km x 24 km at nadir",
    temporalCoverage: "2004 – Present",
    temporalResolution: "Daily",
    updateFrequency: "Daily",
    latency: "Moderate - 1 to 3 days",
    dataFormat: ["HDF-EOS", "NetCDF"],
  },
  {
    id: "hms-smoke-polygons",
    title: "HMS Smoke Polygons",
    description:
      "Daily wildfire smoke plume extent polygons from NOAA's Hazard Mapping System, manually analyzed from satellite imagery to support smoke forecasting and public health alerts.",
    tags: ["Smoke", "NOAA", "Satellite", "Wildfire", "Fire Mapping"],
    provider: "NOAA",
    parameters: ["Smoke plume extent", "Plume density (light / medium / heavy)"],
    spatialCoverage: "North America",
    spatialResolution: "Analyst-drawn polygon",
    temporalCoverage: "2005 – Present",
    temporalResolution: "Daily",
    updateFrequency: "Daily",
    latency: "Low - same day",
    dataFormat: ["Shapefile", "KML"],
  },
];

/** How many datasets to generate, enough to make the catalog pagination demonstrable. */
const MOCK_COUNT = 24;

/**
 * The id and title of every generated dataset, in catalog order. The seed list is
 * cycled until MOCK_COUNT is reached: the first pass keeps each seed's own id and
 * title, later passes get a numbered suffix so both stay unique. Resolving these
 * up front lets "Related datasets" reference ids guaranteed to exist.
 */
const MOCK_KEYS = Array.from({ length: MOCK_COUNT }, (_, index) => {
  const seed = MOCK_DETAILS[index % MOCK_DETAILS.length];
  const pass = Math.floor(index / MOCK_DETAILS.length);

  return pass === 0
    ? { id: seed.id, title: seed.title }
    : { id: `${seed.id}-${pass + 1}`, title: `${seed.title} (${pass + 1})` };
});

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const LOREM_LONG = `${LOREM_SHORT} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

/** Same block sequence as DATASET__MOCK, with lorem ipsum standing in for the prose. */
const makeMockBody = (): ContentBlock[] => [
  { type: "text", paragraphs: [LOREM_LONG, LOREM_SHORT] },
  { type: "note", label: "Recommended use", text: LOREM_SHORT },
];

const makeMockLinkSections = (title: string): DatasetLinkSection[] => [
  {
    heading: "Documentation",
    lead: `Documentation, algorithm details, and background reading for ${title}.`,
    links: [
      { label: `${title} — official dataset page`, href: "https://example.com/dataset" },
      { label: "Provider documentation", href: "https://example.com/docs" },
      { label: "Algorithm Theoretical Basis Document (ATBD)", href: "https://example.com/atbd" },
      { label: "Data quality & validation report", href: "https://example.com/validation" },
    ],
  },
  {
    heading: "Download data",
    lead: `Access ${title} through the provider portal or download it directly.`,
    links: [
      { label: "Access via provider data portal", href: "https://example.com/portal" },
      { label: "Bulk download (NetCDF / HDF / CSV)", href: "https://example.com/bulk" },
      { label: "API & programmatic access", href: "https://example.com/api" },
    ],
  },
];

const makeMockDataset = (index: number): DatasetContent => {
  const seed = MOCK_DETAILS[index % MOCK_DETAILS.length];
  const { id, title } = MOCK_KEYS[index];
  // The three datasets that follow this one, wrapping at the end of the catalog.
  const relatedIds = [1, 2, 3].map((offset) => MOCK_KEYS[(index + offset) % MOCK_COUNT].id);
  const providerText = Array.isArray(seed.provider) ? seed.provider.join(" / ") : seed.provider;

  return {
    id,
    contentType: "dataset",
    title,
    description: seed.description,
    thumbnailImage: {
      src: `https://picsum.photos/seed/${id}/400/600`,
      alt: `Placeholder thumbnail for ${title}`,
    },
    mastheadImage: {
      src: `https://picsum.photos/seed/${id}/1304/480`,
      alt: `Placeholder masthead for ${title}`,
    },
    metadata: {
      tags: seed.tags,
      fields: {
        provider: { label: "Data Provider", value: seed.provider, delimiter: " / " },
        parameters: { label: "Parameters & Units", value: seed.parameters, delimiter: "\n" },
        spatialCoverage: { label: "Spatial Coverage", value: seed.spatialCoverage },
        temporalCoverage: { label: "Temporal Coverage", value: seed.temporalCoverage },
        temporalResolution: { label: "Temporal Resolution", value: seed.temporalResolution },
        updateFrequency: { label: "Update Frequency", value: seed.updateFrequency },
        latency: { label: "Latency", value: seed.latency },
        spatialResolution: {
          label: "Spatial Resolution",
          value: seed.spatialResolution,
          delimiter: ", ",
        },
        dataFormat: { label: "Data Format", value: seed.dataFormat, delimiter: ", " },
        versionHistory: { label: "Version History", value: `v${1 + (index % 3)}.${index % 5}` },
      },
    },
    body: makeMockBody(),
    linkSections: makeMockLinkSections(title),
    tutorials: {
      heading: "Tutorials",
      lead: `Self-paced tutorials to help you get started with ${title}.`,
      tutorials: [
        {
          title: `Getting started with ${title}`,
          description: LOREM_SHORT,
          href: "https://example.com/tutorial/getting-started",
          duration: "10 min",
          level: "beginner",
        },
        {
          title: `Accessing and downloading ${title} data`,
          description: LOREM_SHORT,
          href: "https://example.com/tutorial/downloading",
          duration: "20 min",
          level: "intermediate",
        },
      ],
    },
    citation: {
      heading: "Cite this dataset",
      text: `${providerText}. ${title}, ${seed.temporalCoverage}. ${LOREM_SHORT} Accessed via the AIR4US Portal, https://example.com/${id}.`,
    },
    relatedDatasets: {
      heading: "Related datasets",
      description:
        "Other datasets in the catalog you can explore in the AIR4US visualization tool.",
      datasetIds: relatedIds,
    },
  };
};

export const MOCK_DATASETS: DatasetContent[] = Array.from({ length: MOCK_COUNT }, (_, index) =>
  makeMockDataset(index),
);
