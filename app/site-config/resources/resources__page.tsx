import { AppImage } from "@/app/components/AppImage";
import { makeTutorialCardSection } from "@/app/site-config/content.helpers";
import type { ContentBlock, LinkSection, WorkshopSection } from "@/app/site-config/types";

export type ResourcesPageBody = {
  body: ContentBlock[];
  workshops?: WorkshopSection;
  linkSections?: LinkSection[];
};

export const RESOURCES_PAGE_BODY: ResourcesPageBody = {
  body: [
    {
      type: "text",
      heading: "Getting Started",
      headingLevel: "h2",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },

    {
      type: "cardTextOnly",
      ...makeTutorialCardSection({
        heading: "Video Tutorials",
        headingLevel: "h2",
        lead: "Self-paced video tutorials covering key datasets, tools, and workflows available through the AIR4US Portal.",
        tutorials: [
          {
            title: "Getting started with MODIS/VIIRS/GOES",
            description:
              "An introduction to the MODIS/VIIRS/GOES dataset — what it measures, how it is produced, and when to use it.",
            href: "#",
            duration: "10 MIN",
            level: "beginner",
          },
          {
            title: "Accessing and downloading MODIS/VIIRS/GOES data",
            description:
              "Find, subset, and download MODIS/VIIRS/GOES data, with tips for common file formats and access tools.",
            href: "#",
            duration: "20 MIN",
            level: "intermediate",
          },
          {
            title: "Accessing and downloading MODIS/VIIRS/GOES data",
            description:
              "Find, subset, and download MODIS/VIIRS/GOES data, with tips for common file formats and access tools.",
            href: "#",
            duration: "20 MIN",
            level: "intermediate",
          },
          {
            title: "Exploring MODIS/VIIRS/GOES in the AIR4US visualization tool",
            description:
              "Load MODIS/VIIRS/GOES layers in the AIR4US visualization tool and interpret them alongside other air quality data.",
            href: "#",
            duration: "15 MIN",
            level: "advanced",
          },
        ],
      }),
    },

    {
      type: "text",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      headingLevel: "h3",
      paragraphs: [
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      ],
    },

    {
      type: "text",
      paragraphs: [
        <AppImage
          key="placeholder"
          src="https://placehold.co/880x400"
          alt="Placeholder"
          width={880}
          height={400}
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />,
      ],
    },
  ],

  workshops: {
    heading: "Workshops & Webinars",
    headingLevel: "h2",
    lead: "Live training events hosted by NASA, NOAA, and EPA scientists. Registration is free and open to air quality professionals, researchers, and students.",
    workshops: [
      {
        id: "workshop-fall-2026",
        title: "AIR4US Fall Training Workshop 2026",
        href: "#",
        startsAt: "2026-10-20T15:00:00Z",
        dateLabel: "October 20–22, 2026",
        description:
          "Three-day intensive training covering satellite data products, ground-based monitoring networks, and model evaluation techniques. Open to state and local air quality agency staff.",
        tags: ["IN-PERSON + VIRTUAL"],
        callToActions: { registration: { label: "Register", href: "#" } },
      },
      {
        id: "wildfire-smoke-webinars",
        title: "Wildfire Smoke Monitoring Webinar",
        href: "#",
        startsAt: "2026-11-05T15:00:00Z",
        dateLabel: "November 5, 2026",
        description:
          "A 90-minute webinar featuring case studies from recent wildfire events, with presentations from NASA, NOAA, and EPA scientists.",
        tags: ["WEBINAR"],
        callToActions: { registration: { label: "Register", href: "#" } },
      },
      {
        id: "data-fusion-pm25-2026",
        title: "Data Fusion Techniques for PM2.5 Estimation",
        href: "#",
        startsAt: "2026-11-12T15:00:00Z",
        dateLabel: "November 12, 2026",
        description:
          "Half-day workshop on combining satellite retrievals, model output, and ground measurements to produce high-resolution PM2.5 surfaces for health research.",
        tags: ["VIRTUAL WORKSHOP"],
        callToActions: { registration: { label: "Register", href: "#" } },
      },
      {
        id: "air-sensor-calibration-2026",
        title: "Air Sensor Calibration and Data Quality",
        href: "#",
        startsAt: "2026-12-03T15:00:00Z",
        dateLabel: "December 3, 2026",
        description:
          "Practical guidance for calibrating low-cost air sensors and evaluating data quality for community monitoring projects.",
        tags: ["WEBINAR"],
        callToActions: { registration: { label: "Register", href: "#" } },
      },
      {
        id: "workshop-summer-2026",
        title: "AIR4US Summer Training Workshop 2026",
        href: "#",
        startsAt: "2026-07-14T15:00:00Z",
        dateLabel: "July 14–16, 2026",
        description:
          "Three-day intensive training on satellite data products, monitoring networks, and model evaluation. Recording and materials now available.",
        tags: ["IN-PERSON + VIRTUAL"],
        callToActions: { recording: { label: "View recording", href: "#" } },
      },
      {
        id: "satellite-aod-pm25-2026",
        title: "Satellite AOD for PM2.5 Estimation",
        href: "#",
        startsAt: "2026-05-08T15:00:00Z",
        dateLabel: "May 8, 2026",
        description:
          "Hands-on workshop on using MODIS and VIIRS aerosol optical depth to estimate surface PM2.5 for health and exposure studies.",
        tags: ["VIRTUAL WORKSHOP"],
        callToActions: { recording: { label: "View recording", href: "#" } },
      },
      {
        id: "hysplit-trajectory-2026",
        title: "Introduction to HYSPLIT Trajectory Modeling",
        href: "#",
        startsAt: "2026-03-19T15:00:00Z",
        dateLabel: "March 19, 2026",
        description:
          "Beginner webinar on running forward and backward trajectories in HYSPLIT to trace smoke and dust transport pathways.",
        tags: ["WEBINAR"],
        callToActions: { recording: { label: "View recording", href: "#" } },
      },
      {
        id: "air-quality-data-2026",
        title: "Finding and Using Air Quality Data",
        href: "#",
        startsAt: "2026-02-12T15:00:00Z",
        dateLabel: "February 12, 2026",
        description:
          "An introduction to finding, comparing, and downloading satellite and ground-based air quality observations.",
        tags: ["WEBINAR"],
        callToActions: { recording: { label: "View recording", href: "#" } },
      },
    ],
  },

  linkSections: [
    {
      heading: "Documentation",
      headingLevel: "h3",
      lead: "Documentation, algorithm details, and background reading for MODIS/VIIRS/GOES.",
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
