import type { DatasetContent } from "@/app/site-config/types";

export const NOAA_HMS_FIRE_SMOKE: DatasetContent = {
  id: "noaa-hms-fire-smoke",
  contentType: "dataset",
  title: "NOAA Hazard Mapping System Fire and Smoke Product",
  description:
    "Fire and smoke detection data generated daily from multiple polar and geostationary satellites observations over North America",
  thumbnailImage: {
    src: "/images/datasets/noaa_hms_card_image.webp",
    alt: "HMS fire and smoke analysis from July 16, 2026, mapped over the U.S. and Canada, with light smoke in green, heavier smoke in red, and red dots for fires",
  },
  mastheadImage: {
    src: "/images/datasets/noaa_hms_banner_image.webp",
    alt: "HMS fire and smoke analysis from July 16, 2026, mapped over the U.S. and Canada, with light smoke in green, heavier smoke in red, and red dots for fires",
    attribution: "NOAA OSPO",
  },
  metadata: {
    tags: [
      "Fire",
      "Smoke",
      "Wildfire smoke",
      "Transboundary pollution",
      "Satellite",
      "Short latency (3 - 24 hours)",
    ],
    fields: {
      provider: {
        label: "Data Provider",
        value: ["NOAA HMS Fire Team"],
        delimiter: " / ",
      },
      parameters: {
        label: "Parameters & Units",
        value: [
          "Fire: Fire Radiative Power (FRP), megawatts (MW)",
          "Smoke plume density (light, medium, heavy):\nLight - 0-10 micrograms per cubic meter (μg/m³)\nMedium - 10-21 micrograms per cubic meter (μg/m³)\nHeavy - 21-32 micrograms per cubic meter (μg/m³)",
        ],
        delimiter: "\n",
      },
      spatialCoverage: { label: "Spatial Coverage", value: "North America" },
      temporalCoverage: {
        label: "Temporal Coverage",
        value:
          "Fire — KML: December 13, 2017 - Present; Shapefile: June 16, 2003 - Present; Text: June 16, 2003 - Present\nSmoke — KML: December 13, 2017 - Present; Shapefile: August 5, 2005 - Present",
      },
      temporalResolution: {
        label: "Temporal Resolution",

        value: "Fire: ~2 hours\nSmoke: Twice per day",
      },
      updateFrequency: {
        label: "Update Frequency",
        value:
          "Fire: Typically every 2 daylight hours beginning 8am ET daily\nSmoke: Twice per day (~11am - 12pm ET & 7pm - 8pm ET)",
      },
      latency: {
        label: "Latency",
        value: "Fire: ~30 min - 2 hours\nSmoke: ~4 - 8 hours",
      },
      spatialResolution: {
        label: "Spatial Resolution",
        value: "Active-fire detection - Point / Smoke product - Polygon",
      },
      dataFormat: { label: "Data Format", value: "WFS, KML, Shapefile, Text" },
      versionHistory: {
        label: "Version History",
        value: (
          <>
            HMS Fire and Smoke data was incorporated into AIR4US in September 2026, including
            historical data dating from Jan 1, 2020 onward. Both the fire detection and smoke data
            have evolved over time, responding to user requests and updated satellite data. The{" "}
            <a
              href="https://www.ospo.noaa.gov/products/land/hms.html#about"
              target="_blank"
              rel="noopener noreferrer"
            >
              website
            </a>{" "}
            lists the satellites used and the timeframes. Smoke density is not available in earlier
            data products.
          </>
        ),
      },
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
        "NOAA's Hazard Mapping System (HMS) provides active fire and smoke data products using 2km-resolution Advanced Baseline Imager (ABI) data from the GOES-19 (East) and GOES-18 (West) geostationary satellites, and 375m-resolution VIIRS data from the S-NPP, NOAA-20, and NOAA-21 polar satellites. The HMS system operates daily across North America, with fire and smoke observations beginning around 6 UTC (9 UTC) on the East Coast and around 9 UTC (12 UTC) on the West Coast. Fire detection information is typically updated every two hours, and smoke analysis information is updated throughout the day until sunset. Fire products are reported using Fire Radiative Power (FRP) values measured in megawatts (MW). Smoke products are described in terms of three plume density levels: light (0-10 micrograms per cubic meter (μg/m³)), medium (10-21 μg/m³), and heavy (21-32 μg/m³).",
      ],
    },
    {
      type: "note",
      label: "Recommended use",
      text: "This dataset is best suited for near real-time monitoring, public health alerts, and event analysis. For ground truth validation and bias correction, we recommend pairing it with a validated archival product.",
    },
  ],
  linkSections: [
    {
      heading: "Learn more",
      headingLevel: "h3",
      links: [
        {
          label: "NOAA Hazard Mapping System Website",
          href: "https://www.ospo.noaa.gov/products/land/hms.html",
          isExternal: true,
        },
      ],
    },
    {
      heading: "Download data",
      headingLevel: "h3",
      links: [
        {
          label: "NOAA Hazard Mapping System Data Access",
          href: "https://www.ospo.noaa.gov/products/land/hms.html#data",
          isExternal: true,
        },
        {
          label: "NOAA HMS Fire Detection Feature Server",
          href: "https://services2.arcgis.com/C8EMgrsFcRFL6LrL/arcgis/rest/services/NOAA_Satellite_Fire_Detections_(v1)/FeatureServer",
          isExternal: true,
        },
        {
          label: "NOAA HMS Smoke Detection Feature Server",
          href: "https://services2.arcgis.com/C8EMgrsFcRFL6LrL/arcgis/rest/services/NOAA_Satellite_Smoke_Detection_(v1)/FeatureServer",
          isExternal: true,
        },
      ],
    },
  ],
  citation: {
    heading: "Cite this dataset",
    text: (
      <>
        National Oceanic and Atmospheric Administration. (Year). Hazard Mapping System (HMS) fire
        and smoke product [Data set]. NOAA Office of Satellite and Product Operations.{" "}
        <a
          href="https://www.ospo.noaa.gov/products/land/hms.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.ospo.noaa.gov/products/land/hms.html
        </a>
      </>
    ),
  },
  relatedDatasets: {
    heading: "Related datasets",
    datasetIds: ["epa-aqs-concentrations"],
  },
};
