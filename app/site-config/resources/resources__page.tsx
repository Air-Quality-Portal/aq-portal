import { makeTaggedCardSection, makeTutorialCardSection } from "@/app/site-config/content.helpers";
import type { ContentBlock } from "@/app/site-config/types";

export type ResourcesPageBody = {
  body: ContentBlock[];
};

export const RESOURCES_PAGE_BODY: ResourcesPageBody = {
  body: [
    {
      type: "text",
      heading: "Getting Started",
      headingLevel: "h2",
      paragraphs: [
        "Browse the resources below to learn how to use the AIR4US Visualization Tool, as well as how to access, interpret, and apply the data and tools available through the AIR4US Portal.",
        "All training materials are freely available. Tutorials can be completed at your own pace. Register for upcoming workshops and webinars, and access resources from past events.",
      ],
    },

    {
      type: "cardTextOnly",
      ...makeTutorialCardSection({
        heading: "AIR4US Visualization Tool Tutorials",
        headingLevel: "h2",
        lead: "Self-paced tutorials covering key datasets, tools, and workflows available through the AIR4US Visualization Tool",
        tutorials: [
          {
            title: "Getting Started with AIR4US",
            description:
              "An introductory video explaining the AIR4US Visualization Tool's user interface and basic functions.",
            href: "#",
            duration: "10 MIN",
            level: "beginner",
          },
          {
            title: "Visualizing near-real-time air quality information",
            description:
              "Use the near-real-time air quality information available via AIR4US to assess the current air quality situation in your area.",
            href: "#",
            duration: "10 MIN",
            level: "beginner",
          },
          {
            title: "Forecasting high-ozone events",
            description:
              "Use Ozone and other related data available in AIR4US to predict high-ozone events in your area.",
            href: "#",
            duration: "15 MIN",
            level: "intermediate",
          },
          {
            title: "Long-term air quality trend analysis",
            description:
              "Use AIR4US to assess long-term trends in air quality using a combination of monitor data, satellite information, and retrospective model simulations.",
            href: "#",
            duration: "30 MIN",
            level: "advanced",
          },
        ],
      }),
    },

    {
      type: "cardTextOnly",
      ...makeTutorialCardSection({
        heading: "Partner Agency Tool Tutorials",
        headingLevel: "h2",
        lead: "Tutorial resources for tools provided by our partner agencies, accessible via the Air-Quality Tool Catalog.",
        tutorials: [
          {
            title: "RSIG3D Video Demonstrations",
            description:
              "A series of short tutorial videos illustrating how to use RSIG3D to view, retrieve, and save data. NOTE: THIS IS AN EXAMPLE FOR HOW TUTORIALS ON PARTNER AGENCY TOOLS CAN BE CROSS-LISTED ON AIR4US",
            href: "https://www.epa.gov/hesc/rsig3d-video-demonstrations",
            duration: "30 MIN",
            level: "intermediate",
          },
          {
            title: "Get Started with NASA Worldview",
            description:
              "Learn how to use Worldview to explore and visualize NASA Earth science imagery to see hurricanes forming, wildfires spreading, icebergs drifting, and more. NOTE: THIS IS AN EXAMPLE FOR HOW TUTORIALS ON PARTNER AGENCY TOOLS CAN BE CROSS-LISTED ON AIR4US",
            href: "https://www.earthdata.nasa.gov/learn/tutorials/get-started-nasa-worldview",
            duration: "20 MIN",
            level: "beginner",
          },
        ],
      }),
    },

    {
      type: "cardTextOnly",
      ...makeTaggedCardSection({
        heading: "Workshops & Webinars",
        headingLevel: "h2",
        lead: "Explore training events hosted by AIR4US partner agencies and affiliated organizations, and view registration details for upcoming events and available resources from past events.",
        items: [
          {
            id: "workshop-geostationary-aerosols-2026",
            title:
              "Geostationary Remote Sensing of Aerosols for Air Quality Applications in North America",
            href: "https://www.earthdata.nasa.gov/learn/trainings/geostationary-remote-sensing-aerosols-air-quality-applications-north-america",
            description:
              "This training provides an overview of TEMPO capabilities and available NOAA aerosol products generated using synergistic TEMPO and ABI observations. Instructors demonstrate how to access and interpret near real-time and archived TEMPO aerosol products imagery on the NOAA AerosolWatch website.",
            tags: ["WEBINAR"],
            callToAction: {
              label: "Register",
              href: "https://www.earthdata.nasa.gov/learn/trainings/geostationary-remote-sensing-aerosols-air-quality-applications-north-america",
              isExternal: true,
            },
          },
          {
            id: "workshop-air4us-summer-2027",
            title: "AIR4US Summer Training Workshop 2027",
            href: "#",
            description:
              "Three-day intensive training covering how to use AIR4US to visualize and compare satellite data products, ground-based monitoring networks, and model outputs. Open to federal, state, local, and tribal air quality agency staff.",
            tags: ["VIRTUAL WORKSHOP", "IN-PERSON WORKSHOP"],
            callToAction: { label: "Register", href: "#", isExternal: true },
          },
        ],
      }),
    },

    {
      type: "cardTextOnly",
      ...makeTaggedCardSection({
        heading: "Partner Resource Pages",
        headingLevel: "h2",
        lead: "Resources provided by our partner agencies.",
        items: [
          {
            id: "partner-resource-arset",
            title: "Applied Remote Sensing Training",
            href: "https://www.earthdata.nasa.gov/data/projects/arset/learn?topic[14867]=14867",
            description:
              "The Applied Remote Sensing Training (ARSET) program offers online and in-person trainings covering a range of datasets, web portals, and analysis tools and their application to air quality, among other topics.",
            tags: ["NASA"],
          },
          {
            id: "partner-resource-haqast",
            title: "Health and Air Quality Applied Sciences Team",
            href: "https://haqast.wisc.edu/getting-started/",
            description:
              "Resources for getting started with using remote sensing data for health and air quality applications, collected and curated by NASA Health and Air Quality Applied Sciences Team (HAQAST) members.",
            tags: ["NASA"],
          },
          {
            id: "partner-resource-airknowledge",
            title: "Air Knowledge",
            href: "https://airknowledge.gov/",
            description:
              "Training material focused on the Clean Air Act program areas associated with ambient air quality planning and stationary source emissions control regulation.",
            tags: ["EPA"],
          },
          {
            id: "partner-resource-star-atmospheric",
            title: "STAR Atmospheric Composition Product Training",
            href: "https://www.star.nesdis.noaa.gov/atmospheric-composition-training/index.php",
            description:
              "The STAR Aerosols and Atmospheric Composition Science Team conducts training courses on aerosol, fire, and trace gas satellite products from ABI, VIIRS, TROPOMI & TEMPO. The objectives of the training program are to increase access to the satellite products and promote their proper use in air quality applications in operations & research.",
            tags: ["NOAA"],
          },
        ],
      }),
    },

    {
      type: "links",
      heading: "Documentation",
      headingLevel: "h3",
      lead: "To be added later",
      links: [],
    },
  ],
};
