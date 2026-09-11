import type { DatasetContent } from "@/app/site-config/types";

export const TEMPO_HCHO_COLUMN_GRID_V04_PROVISIONAL: DatasetContent = {
  id: "tempo-hcho-column-grid-v04-provisional",
  contentType: "dataset",
  title: "TEMPO Gridded HCHO Total Column V04",
  description:
    "Hourly daytime observations of total column formaldehyde (HCHO) across Greater North America measured by TEMPO",
  thumbnailImage: {
    src: "/images/datasets/tempo-hcho-card.webp",
    alt: "TEMPO formaldehyde data in a blue to yellow scale collected July 29, 2026, on a map over the southeastern United States",
  },
  mastheadImage: {
    src: "/images/datasets/tempo-hcho-banner.webp",
    alt: "TEMPO formaldehyde data in a blue to yellow scale collected July 29, 2026, on a map over the southeastern United States",
  },
  metadata: {
    tags: [
      "Wildfire smoke",
      "High ozone",
      "Industrial emissions",
      "Hazardous air pollutants",
      "Agricultural emissions",
    ],
    fields: {
      provider: {
        label: "Data Provider",
        value: ["NASA", "SAO"],
        delimiter: " / ",
      },
      parameters: {
        label: "Parameters & Units",
        value: [
          "Vertical Column Formaldehyde (HCHO) Density, molecules per square centimeter (molec/cm²)",
        ],
        delimiter: "\n",
      },
      spatialCoverage: { label: "Spatial Coverage", value: "North America" },
      temporalCoverage: { label: "Temporal Coverage", value: "August 2, 2023 - Present" },
      temporalResolution: { label: "Temporal Resolution", value: "Hourly daytime scans" },
      updateFrequency: {
        label: "Update Frequency",
        value: "Hourly during daytime hours",
      },
      latency: { label: "Latency", value: "~3 to 24 hours" },
      spatialResolution: { label: "Spatial Resolution", value: "0.02°" },
      dataFormat: { label: "Data Format", value: "NetCDF-4" },
      versionHistory: {
        label: "Version History",
        value:
          "V04 Provisional data was added to AIR4US in September 2026 with QA filtering applied.",
      },
      fileFormat: { label: "File Format", value: "NetCDF-4" },
    },
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
        "The TEMPO (Tropospheric Emissions: Monitoring of Pollution) mission is a geostationary satellite mission that measures air quality over North America during daylight hours at a high spatial resolution and with a temporal resolution of one hour or less. The formaldehyde (HCHO) Level 3 (PROVISIONAL) dataset provides information on total column HCHO measured in molecules per square centimeter (molecules/cm³). In the AIR4US tool low quality pixels have been filtered out using the following threshold: effective cloud fraction > 0.5, solar zenith angle > 80, quality flag > 1. TEMPO Level 3 products have a spatial resolution of 0.02° and are generated using an area-weighted regridding algorithm, combining information from all Level 2 files in a TEMPO East-West scan cycle. This dataset reached provisional validation on December 9, 2024. The TEMPO gridded HCHO product contains hourly daytime scans across North America, with more frequent scans in the morning over the eastern portion of the field of regard and in the evenings over the western portion. Data are available from August 2, 2023, to the present.",
      ],
    },
    {
      type: "note",
      label: "Recommended use",
      text: "This dataset is best suited for air-quality forecasting, pollutant monitoring, and satellite-based estimations of surface-level pollutant concentrations.",
    },
  ],
  linkSections: [
    {
      heading: "Learn more",
      headingLevel: "h3",
      links: [
        {
          label: "TEMPO Trace Gas and Cloud Level 2 and 3 Data Products: User Guide",
          href: "https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_trace_gas_clouds_user_guide_V2.1.pdf",
          isExternal: true,
        },
        {
          label: "TEMPO Mission Website",
          href: "https://tempo.si.edu/",
          isExternal: true,
        },
        {
          label: "NASA’s TEMPO Mission Page",
          href: "https://science.nasa.gov/mission/tempo/",
          isExternal: true,
        },
      ],
    },
    {
      heading: "Download data",
      headingLevel: "h3",
      links: [
        {
          label: "TEMPO HCHO Level 3 (PROVISIONAL) Data Access",
          href: "https://doi.org/10.5067/IS-40e/TEMPO/HCHO_L3.004",
          isExternal: true,
        },
      ],
    },
  ],
  tutorials: {
    heading: "Tutorials",
    headingLevel: "h3",
    tutorials: [
      {
        title: "TEMPO ARSET Training",
        description:
          "Overview of TEMPO capabilities, available trace gas data products, and how TEMPO data can be visualized",
        href: "https://www.earthdata.nasa.gov/learn/trainings/geostationary-remote-sensing-trace-gases-air-quality-applications-north-america",
        duration: "180 min",
        level: "intermediate",
      },
    ],
  },
  citation: {
    heading: "Cite this dataset",
    text: "Liu, X. (2026). TEMPO gridded formaldehyde total column V04 (PROVISIONAL) [Dataset]. NASA Langley Atmospheric Science Data Center Distributed Active Archive Center. https://doi.org/10.5067/IS-40E/TEMPO/HCHO_L3.004 Date Accessed: YYYY-MM-DD",
  },
  relatedDatasets: {
    heading: "Related datasets",
    datasetIds: ["tempo-no2-column-grid-v04-provisional"],
  },
};
