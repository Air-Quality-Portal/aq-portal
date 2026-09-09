import {
  makeTutorialCardSection,
  makeWorkshopCardSection,
} from "@/app/site-config/content.helpers";
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
      ...makeWorkshopCardSection({
        heading: "Workshops & Webinars",
        headingLevel: "h2",
        lead: "Explore training events hosted by AIR4US partner agencies and affiliated organizations, and view registration details for upcoming events and available resources from past events. ",
        workshops: [
          {
            id: "workshop-geostationary-aerosols-2026",
            title:
              "Geostationary Remote Sensing of Aerosols for Air Quality Applications in North America",
            href: "https://www.earthdata.nasa.gov/learn/training/geostationary-remote-sensing-aerosols-air-quality-applications-north-america",
            description:
              "This training provides an overview of TEMPO capabilities and available NOAA aerosol products generated using synergistic TEMPO and ABI observations. Instructors demonstrate how to access and interpret near real-time and archived TEMPO aerosol products imagery on the NOAA AerosolWatch website.",
            tags: ["WEBINAR"],
            callToAction: {
              label: "Register",
              href: "https://www.earthdata.nasa.gov/learn/training/geostationary-remote-sensing-aerosols-air-quality-applications-north-america",
            },
          },
          {
            id: "workshop-air4us-summer-2027",
            title: "AIR4US Summer Training Workshop 2027",
            href: "#",
            description:
              "Three-day intensive training covering how to use AIR4US to visualize and compare satellite data products, ground-based monitoring networks, and model outputs. Open to federal, state, local, and tribal air quality agency staff.",
            tags: ["VIRTUAL WORKSHOP", "IN-PERSON WORKSHOP"],
            callToAction: { label: "Register", href: "#" },
          },
        ],
      }),
    },

    {
      type: "links",
      heading: "Documentation",
      headingLevel: "h3",
      lead: "Technical documentation and guides for resources available through the AIR4US Portal",
      links: [
        {
          label: "MODIS/VIIRS/GOES — official dataset page",
          href: "#",
          isExternal: true,
        },
        {
          label: "NASA / NOAA documentation",
          href: "#",
          isExternal: true,
        },
        {
          label: "Algorithm Theoretical Basis Document (ATBD)",
          href: "#",
          isExternal: true,
        },
        {
          label: "Data quality & validation report",
          href: "#",
          isExternal: true,
        },
        {
          label: "Related publications",
          href: "#",
          isExternal: true,
        },
      ],
    },
  ],
};
