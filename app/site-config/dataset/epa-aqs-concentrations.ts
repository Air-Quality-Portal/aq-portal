import type { DatasetContent } from "@/app/site-config/types";

export const EPA_AQS_CONCENTRATIONS: DatasetContent = {
  id: "epa-aqs-concentrations",
  contentType: "dataset",
  title: "Air Quality System (AQS) Surface Air Quality Monitor Data",
  description:
    "Validated hourly average pollutant data collected by EPA, state, local, and tribal air pollution control agencies from thousands of monitors nationwide",
  thumbnailImage: {
    src: "/images/datasets/epa-aqs-card.webp",
    alt: "EPA AQS CO, NO2, O3, PM and SO2 monitor locations pinned on a map of the Eastern United States with a grey background",
  },
  mastheadImage: {
    src: "/images/datasets/epa-aqs-banner.webp",
    alt: "EPA AQS CO, NO2, O3, PM and SO2 monitor locations pinned on a map of the Eastern United States with a grey background",
  },
  metadata: {
    tags: [
      "Criteria pollutant monitoring",
      "Wildfire smoke",
      "Industrial emissions",
      "On-road emissions",
      "Agricultural emissions",
      "High ozone",
      "Dust storm",
      "Transboundary pollution",
    ],
    fields: {
      provider: { label: "Data Provider", value: "EPA" },
      parameters: {
        label: "Parameters & Units",
        value: [
          "Surface Particulate Matter (PM₁₀   and PM₂.₅) Concentration, micrograms per cubic meter (µg/m³)",
          "Surface Ozone (O₃) Concentration, parts per million (ppm)",
          "Surface Carbon Monoxide (CO) Concentration, parts per million (ppm)",
          "Surface Nitrogen Dioxide (NO₂) Concentration, parts per billion (ppb)",
          "Surface Sulfur Dioxide (SO₂) Concentration, parts per billion (ppb)",
        ],
        delimiter: "\n",
      },
      spatialCoverage: { label: "Spatial Coverage", value: "United States" },
      temporalCoverage: {
        label: "Temporal Coverage",
        value: "January 1, 1999 - Present (varies per station)",
      },
      temporalResolution: { label: "Temporal Resolution", value: "Hourly averages" },
      updateFrequency: { label: "Update Frequency", value: "Quarterly" },
      latency: { label: "Latency", value: "~6 months" },
      spatialResolution: { label: "Spatial Resolution", value: "Point" },
      dataFormat: { label: "Data Format", value: "JSON" },
      versionHistory: {
        label: "Version History",
        value:
          "AQS hourly concentrations of PM₁₀, PM₂.₅, O₃, CO, NO₂, and SO₂ were incorporated into AIR4US in September 2026.",
      },
      fileFormat: { label: "File Format", value: "json" },
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
        "The Air Quality System (AQS) contains ambient air sample data collected by the EPA, state, local, and tribal air pollution control agencies from thousands of monitors across the United States. This dataset in AIR4US includes hourly averages from 1999 to the present for the criteria pollutants: ozone (O₃), carbon monoxide (CO), sulfur dioxide (SO₂), nitrogen dioxide (NO₂), and particulate matter (PM₂.₅ and PM₁₀). Concentration measurements for O₃ and CO are reported in parts per million (ppm), and for NO₂ and SO₂ in parts per billion (ppb). PM₂.₅ and PM₁₀ concentration measurements are in micrograms per cubic meter (µg/m³). Real-time air-quality data are not available from AQS. It can take six months or more from the time data are collected until they are validated and added to the AQS. Near real-time air-quality monitor data are available via AirNow.",
      ],
    },
    {
      type: "note",
      label: "Recommended use",
      text: "This dataset is best suited for analyzing long-term trends, monitoring compliance, and assessing public health. You can also pair it with satellite retrievals and model output for ground-truth validation and bias correction.",
    },
  ],
  linkSections: [
    {
      heading: "Learn more",
      headingLevel: "h3",
      links: [
        { label: "EPA AQS Website", href: "https://www.epa.gov/aqs", isExternal: true },
        {
          label: "AQS User Guides",
          href: "https://www.epa.gov/aqs/aqs-user-guide",
          isExternal: true,
        },
        {
          label: "EPA Outdoor Air Quality Data",
          href: "https://www.epa.gov/outdoor-air-quality-data",
          isExternal: true,
        },
        {
          label: "EPA AirData Air Quality Monitor Interactive Map",
          href: "https://epa.maps.arcgis.com/apps/webappviewer/index.html?id=5f239fd3e72f424f98ef3d5def547eb5&extent=-146.2334,13.1913,-46.3896,56.5319",
          isExternal: true,
        },
      ],
    },
    {
      heading: "Download data",
      headingLevel: "h3",
      links: [
        {
          label: "EPA AQS Data Download",
          href: "https://aqs.epa.gov/aqsweb/airdata/download_files.html",
          isExternal: true,
        },
        {
          label: "EPA AQS API",
          href: "https://aqs.epa.gov/aqsweb/documents/data_api.html",
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
        title: "AQS Training",
        description:
          "Access provides free, online training to help users learn to effectively navigate AQS and build their skills",
        href: "https://www.epa.gov/aqs/aqs-training",
        duration: "30 min",
        level: "intermediate",
      },
    ],
  },
  citation: {
    heading: "Cite this dataset",
    text: "US Environmental Protection Agency. Air Quality System Data Mart [internet database] available via https://www.epa.gov/outdoor-air-quality-data. Accessed Month DD, YYYY.",
  },
  relatedDatasets: {
    heading: "Related datasets",
    datasetIds: ["naqfc-aqm-forecast-v7", "tempo-no2-column-grid-v04-provisional"],
  },
};
