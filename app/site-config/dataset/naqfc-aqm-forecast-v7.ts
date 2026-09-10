import type { DatasetContent } from "@/app/site-config/types";

export const NAQFC_AQM_FORECAST_V7: DatasetContent = {
  id: "naqfc-aqm-forecast-v7",
  contentType: "dataset",
  title: "NAQFC Regional Model Guidance: AQM O₃ and PM₂.₅ Forecasts",
  description:
    "Model-generated 72-hour forecast guidance for surface ozone (O₃) and PM₂.₅ across the United States",
  thumbnailImage: {
    src: "/images/datasets/naqfc-aqm-card.webp",
    alt: "Map of forecasted continental U.S. PM2.5 levels with low values in green and higher concentrations in orange and red. The color transitions align with the EPA’s PM2.5 concentration breakpoints for each AQI category.",
  },
  mastheadImage: {
    src: "/images/datasets/naqfc-aqm-banner.webp",
    alt: "Map of forecasted continental U.S. PM2.5 levels with low values in green and higher concentrations in orange and red. The color transitions align with the EPA’s PM2.5 concentration breakpoints for each AQI category.",
  },
  metadata: {
    tags: [
      "Wildfire smoke",
      "High ozone",
      "Criteria pollutant monitoring",
      "Transboundary pollution",
      "Dust storm",
    ],
    fields: {
      provider: { label: "Data Provider", value: ["NOAA", "NWS"], delimiter: " / " },
      parameters: {
        label: "Parameters & Units",
        value: [
          "Surface Ozone (O₃) Concentration, parts per billion (ppb)",
          "Bias-corrected Surface Ozone (O₃) Concentration, parts per billion (ppb)",
          "Surface Particulate Matter 2.5 (PM₂.₅) Concentration, micrograms per cubic meter (µg/m³)",
          "Bias-corrected Surface Particulate Matter 2.5 (PM₂.₅) Concentration, micrograms per cubic meter (µg/m³)",
        ],
        delimiter: "\n",
      },
      spatialCoverage: { label: "Spatial Coverage", value: "CONUS, Alaska, Hawaii" },
      temporalCoverage: {
        label: "Temporal Coverage",
        value: "Version 7: May 14, 2024 - Present",
      },
      temporalResolution: {
        label: "Temporal Resolution",
        value: "Hourly averages (72-hour forecast)",
      },
      updateFrequency: {
        label: "Update Frequency",
        value: "Twice per day, 06:00 and 12:00 UTC",
      },
      latency: {
        label: "Latency",
        value: ["NODD: ~3 - 5 hours", "NOMADS: ~ 15 minutes"],
        delimiter: "\n",
      },
      spatialResolution: {
        label: "Spatial Resolution",
        value: "5 km (CONUS), 6 km (Alaska), 2.5 km (Hawaii)",
      },
      dataFormat: { label: "Data Format", value: "GRIB2" },
      versionHistory: {
        label: "Version History",
        value:
          "NAQFC AQM v7 O3 and PM2.5 forecasts (hourly averages only) were incorporated into AIR4US in September 2026.",
      },
      fileFormat: { label: "File Format", value: "grib2" },
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
        "The National Air Quality Forecasting Capability (NAQFC) provides model-generated air-quality forecast guidance from three prediction systems: the Air Quality Model (AQM), Hybrid Single-Particle Lagrangian Integrated Trajectory model (HYSPLIT), and Rapid Refresh (RAP) model. This dataset includes 72-hour forecast guidance from the AQM for hourly ozone (O₃) and PM₂.₅ across three domains: the continental United States (CONUS), Alaska, and Hawaii. These data are horizontally gridded at 5 km over CONUS, 6 km over Alaska, and 2.5 km over Hawaii. O₃ concentrations are reported in parts per billion (ppb), and PM₂.₅ is reported in micrograms per cubic meter (µg/m³). The model forecast is updated twice daily at 0600 and 1200 UTC.",
      ],
    },
    {
      type: "note",
      label: "Recommended use",
      text: "This dataset is best suited for air-quality forecasting, public health warnings, pollutant monitoring, and event analysis. We recommend validation by comparing it with ground-based observations.",
    },
  ],
  linkSections: [
    {
      heading: "Learn more",
      headingLevel: "h3",
      links: [
        {
          label: "NOAA NAQFC Website",
          href: "https://vlab.noaa.gov/web/osti-modeling/air-quality",
          isExternal: true,
        },
        {
          label: "Air Quality Forecast Guidance Viewer",
          href: "https://airquality.weather.gov/",
          isExternal: true,
        },
      ],
    },
    {
      heading: "Download data",
      headingLevel: "h3",
      links: [
        {
          label: "NAQFC Data Access (NOAA Open Data Dissemination, NODD)",
          href: "https://registry.opendata.aws/noaa-nws-naqfc-pds/",
          isExternal: true,
        },
        {
          label: "NAQFC Data Access (NOMADS, 2-day only)",
          href: "https://nomads.ncep.noaa.gov/pub/data/nccf/com/aqm/prod/",
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
        title: "Air Quality Forecast Guidance Viewer Help",
        description: "How to use the Air Quality Forecast Guidance Viewer Tool",
        href: "https://airquality.weather.gov/staticpages/help.php",
        duration: "5 min",
        level: "beginner",
      },
    ],
  },
  citation: {
    heading: "Cite this dataset",
    text: "NOAA National Air Quality Forecast Capability (NAQFC) Regional Model Guidance was accessed on DATE from https://registry.opendata.aws/noaa-nws-naqfc-pds.",
  },
  relatedDatasets: {
    heading: "Related datasets",
    datasetIds: ["epa-aqs-concentrations"],
  },
};
