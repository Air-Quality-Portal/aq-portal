import { Link } from "@teamimpact/veda-ui-blocks";

import type { TrainingContent } from "@/app/site-config/types";

export const lifelinesWildfireWorkflow: TrainingContent = {
  id: "lifelines-wildfire-workflow",
  contentType: "training",
  title: "NASA Lifelines Data Studio: Wildfire Early Warning Workflow",
  description:
    "This module offers a guided, browser-based approach to wildfire early warning using free NASA satellite data.",
  thumbnailImage: {
    src: "/img/resources-learning-lifelines-wildfire-workflow.webp",
    alt: "NASA Lifelines Data Studio cover image showing wildfire data workflow",
  },
  date: "2026-01-15",
  themes: ["prepare", "respond"],
  categories: ["fire"],
  heroImage: {
    src: "/img/resources-learning-lifelines-wildfire-workflow.webp",
    alt: "Satellite-derived wildfire data workflow showing fire detections and risk zones",
  },
  body: [
    {
      type: "text",
      paragraphs: [
        "Wildfires are increasing in frequency and intensity across the globe, threatening communities, critical infrastructure, and ecosystems with little warning. Timely, data-driven information is essential for responders and decision-makers to protect lives and coordinate action before and during a wildfire.",
        "This training module introduces a near real-time approach to wildfire early warning built on freely available NASA satellite data. Using active fire detections from the NASA Fire Information for Resource Management System (FIRMS), the module walks users through identifying fire locations, delineating risk zones, and assessing exposure of populations and infrastructure — all within a guided, interactive environment requiring no software installation.",
        "Ready to set up your own Wildfire Early Warning Alert System?",
        // biome-ignore lint/correctness/useJsxKeyInIterable: key applied by renderer
        <Link
          href="https://colab.research.google.com/github/seamusgeraty/wildfire-early-warning/blob/main/Wildfire_Early_Warning_Module.ipynb"
          variant="button"
        >
          Wildfire Early Warning Module
        </Link>,
      ],
    },
    {
      type: "slider",
      images: [
        {
          src: "/img/training/lifelines-wildfire-workflow/slider-code.webp",
          alt: "Code and markdown in the Google Colab environment",
        },
        {
          src: "/img/training/lifelines-wildfire-workflow/slider-output.webp",
          alt: "Polished PDF situation briefing with wildfire risk map and exposure figures",
        },
      ],
    },
    {
      type: "list",
      heading: "Module Contents",
      items: [
        "Creating an AOI and accessing relevant infrastructure, land cover, and population data assets.",
        "Fetching active fire detections from NASA FIRMS (VIIRS NOAA-21 or Landsat OLI) for a defined area of interest.",
        "Generating 2 km, 5 km, and 10 km risk zones around fire detections.",
        "Identifying buildings and critical infrastructure within each risk zone.",
        "Estimating population exposure using WorldPop gridded population data.",
        "Analyzing land cover and fuel types using ESA WorldCover.",
        "Producing a PDF situation briefing, an inline summary, and a GeoJSON package ready for use in QGIS or other GIS platforms or dashboards.",
      ],
    },
    {
      type: "text",
      paragraphs: [
        "The module is designed to be accessible to humanitarian practitioners with varying levels of technical experience. Users access the module through a single link that opens a pre-configured environment in Google Colab — no software installation or coding experience is required to run the analysis.",
      ],
    },
    {
      type: "note",
      text: "While the module is designed to minimize technical barriers, a basic understanding of GIS concepts is recommended for users in order to prepare their own data inputs (area of interest, building layer, population raster) or adapt the workflow for a specific operational context.",
    },
    {
      type: "image",
      src: "/img/training/lifelines-wildfire-workflow/lifelines-logo-blue.webp",
      alt: "NASA Lifelines logo",
      width: 1495,
      height: 190,
      maxWidth: "200px",
    },
    {
      type: "text",
      heading: "About NASA Lifelines and Data Studios",
      paragraphs: [
        "This module was developed by NASA Lifelines, a NASA Disasters initiative that connects NASA Earth observation data and expertise with the humanitarian community to support disaster preparedness, response, and resilience.",
        "NASA Lifelines Data Studios help humanitarians navigate openly available data and resources with a better understanding of exactly what they are looking for and how to use it.",
        <>
          Explore more training resources at NASA Lifelines Data Studios:{" "}
          <Link href="https://nasalifelines.org/data-studios/">
            https://nasalifelines.org/data-studios
          </Link>
          .
        </>,
      ],
    },
    {
      type: "list",
      heading: "Other Links",
      items: [
        { label: "NASA Lifelines", href: "https://nasalifelines.org/" },
        { label: "NASA FIRMS", href: "https://firms.modaps.eosdis.nasa.gov/map/" },
      ],
    },
  ],
};
