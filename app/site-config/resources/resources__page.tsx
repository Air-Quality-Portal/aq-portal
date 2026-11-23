import { makeTaggedCardSection, makeTutorialCardSection } from "@/app/_utilities/content.helpers";
import type { ContentBlock, WorkshopSection } from "@/app/site-config/types";

export type ResourcesPageBody = {
  body: ContentBlock[];
  workshops?: WorkshopSection;
  partnerResources?: ContentBlock[];
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
              "An introductory video explaining the AIR4US Visualization Tool's user interface and basic functions. NOTE: THIS IS A PLACEHOLDER FOR A POTENTIAL TUTORIAL TO BE CREATED LATER",
            href: "#",
            duration: "10 MIN",
            level: "beginner",
          },
          {
            title: "Visualizing near-real-time air quality information",
            description:
              "Use the near-real-time air quality information available via AIR4US to assess the current air quality situation in your area. NOTE: THIS IS A PLACEHOLDER FOR A POTENTIAL TUTORIAL TO BE CREATED LATER",
            href: "#",
            duration: "10 MIN",
            level: "beginner",
          },
          {
            title: "Forecasting high-ozone events",
            description:
              "Use Ozone and other related data available in AIR4US to predict high-ozone events in your area. NOTE: THIS IS A PLACEHOLDER FOR A POTENTIAL TUTORIAL TO BE CREATED LATER",
            href: "#",
            duration: "15 MIN",
            level: "intermediate",
          },
          {
            title: "Long-term air quality trend analysis",
            description:
              "Use AIR4US to assess long-term trends in air quality using a combination of monitor data, satellite information, and retrospective model simulations. NOTE: THIS IS A PLACEHOLDER FOR A POTENTIAL TUTORIAL TO BE CREATED LATER",
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
        lead: "Tutorial resources for tools provided by our partner agencies, accessible via the Air-Quality Tool Catalog. This section will continue to be updated.",
        tutorials: [
          {
            title:
              "NASA ARSET: Analyzing TEMPO Aerosol Products Imagery for Smoke and Dust Events, Part 2",
            description:
              "Learn how to access near-real-time and archived TEMPO aerosol product imagery on the NOAA AerosolWatch website. This tutorial also demonstrates how to interpret TEMPO observations to assess the scope of smoke and blowing dust aerosol hazards and their potential impacts on air quality.",
            href: "https://www.youtube.com/watch?v=EGjhVLz3PoE",
            duration: "90 min",
            level: "intermediate",
          },
          {
            title: "How to Use the AirNow Website",
            description:
              "A user guide for navigating the AirNow website, including tracking local air quality and wildfire smoke events, viewing air quality forecasts, and finding historical data or specific monitor locations.",
            href: "https://www.airnow.gov/fasm-v4/how-to-use/",
            duration: "5 min",
            level: "beginner",
          },
          {
            title: "RAP- and HRRR-Smoke Operational forecasting models User's Guide",
            description:
              "A user guide for NOAA's operational RAP-Smoke and HRRR-Smoke forecasting models. It provides essential instructions on understanding the models' diagnostic products, navigating data formats, and utilizing various visualization platforms.",
            href: "https://rapidrefresh.noaa.gov/hrrr/HRRRsmoke/HRRR-Smoke_VIIRS_Activefire_user_guide.pdf",
            duration: "10 min",
            level: "intermediate",
          },
          {
            title: "Air Quality Forecast Guidance Page Help",
            description:
              "Learn how to navigate NOAA's National Weather Service's Air Quality Forecast Guidance interactive map. It provides detailed instructions on how to navigate the tool's features, including selecting specific air quality elements (like ozone or smoke), adjusting forecast times, and using the map controls to view regional data.",
            href: "https://airquality.weather.gov/staticpages/help.php",
            duration: "10 min",
            level: "intermediate",
          },
          {
            title: "Empowering Fire Managers: New HLS Capabilities in NASA's FIRMS",
            description:
              "An overview of NASA's Fire Information for Resource Management System (FIRMS) and practical demonstrations of Harmonized Landsat and Sentinel-2 (HLS) satellite data capabilities using recent wildfire events.",
            href: "https://www.youtube.com/watch?v=FKmhevWg0AE",
            duration: "30 min",
            level: "advanced",
          },
        ],
      }),
    },
  ],

  workshops: {
    heading: "Workshops & Webinars",
    headingLevel: "h2",
    lead: "Explore training events hosted by AIR4US partner agencies and affiliated organizations, and view registration details for upcoming events and available resources from past events.",
    workshops: [
      {
        id: "workshop-geostationary-aerosols-2026",
        title:
          "Geostationary Remote Sensing of Aerosols for Air Quality Applications in North America",
        href: "https://www.earthdata.nasa.gov/learn/trainings/geostationary-remote-sensing-aerosols-air-quality-applications-north-america",
        startDate: "2026-10-13T15:00:00Z",
        endDate: "2026-10-15T16:30:00Z",
        description:
          "This training provides an overview of TEMPO capabilities and available NOAA aerosol products generated using synergistic TEMPO and ABI observations. Instructors demonstrate how to access and interpret near real-time and archived TEMPO aerosol products imagery on the NOAA AerosolWatch website. NOTE: THIS IS AN EXAMPLE OF HOW UPCOMING EVENTS MAY BE CROSS-LISTED TO AIR4US",
        tags: ["WEBINAR"],
        callToActions: {
          registration: {
            label: "Register",
            href: "https://www.earthdata.nasa.gov/learn/trainings/geostationary-remote-sensing-aerosols-air-quality-applications-north-america",
          },
        },
      },
      {
        id: "workshop-air4us-summer-2027",
        title: "AIR4US Summer Training Workshop 2027",
        href: "",
        startDate: "2027-07-13T14:00:00Z",
        endDate: "2027-07-15T21:00:00Z",
        description:
          "Three-day intensive training covering how to use AIR4US to visualize and compare satellite data products, ground-based monitoring networks, and model outputs. Open to federal, state, local, and tribal air quality agency staff. NOTE: THIS IS AN EXAMPLE OF HOW A FUTURE AIR4US WORKSHOP MIGHT BE ADVERTISED",
        tags: ["VIRTUAL WORKSHOP", "IN-PERSON WORKSHOP"],
        callToActions: { registration: { label: "Register", href: "" } },
      },
    ],
  },

  partnerResources: [
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
    // {
    //   type: "links",
    //   heading: "Documentation",
    //   headingLevel: "h3",
    //   lead: "To be added later",
    //   links: [],
    // },
  ],
};
