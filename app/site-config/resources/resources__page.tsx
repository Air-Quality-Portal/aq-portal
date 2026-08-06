import Image from "next/image";
import type {
  ContentBlock,
  LinkSection,
  TutorialSection,
  WorkshopSection,
} from "@/app/site-config/types";

export type ResourcesPageBody = {
  body: ContentBlock[];
  linkSections?: LinkSection[];
  tutorials?: TutorialSection;
  workshopSection?: WorkshopSection;
};

export const RESOURCES_PAGE_BODY: ResourcesPageBody = {
  body: [
    {
      type: "text",
      heading: "Getting Started",
      headingLevel: "h3",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },

    {
      type: "text",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      headingLevel: "h4",
      paragraphs: [
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      ],
    },
    {
      type: "text",
      paragraphs: [
        <Image
          key="placeholder"
          src="https://placehold.co/880x400"
          alt="Placeholder"
          width={880}
          height={400}
          unoptimized
        />,
      ],
    },
  ],

  workshopSection: {
    heading: "Workshops & Webinars",
    headingLevel: "h3",
    lead: "Live training events hosted by NASA, NOAA, and EPA scientists. Registration is free and open to air quality professionals, researchers, and students.",
    workshops: [
      {
        id: "workshop-summer-2026-1",
        title: "AIR4US Summer Training Workshop (July 14-16, 2026)",
        href: "#",
        description:
          "Three-day intensive training covering satellite data products, ground-based monitoring networks, and model evaluation techniques. Open to state and local air quality agency staff.",
        tags: ["IN PERSON + VIRTUAL"],
        callToAction: { label: "Register", href: "#" },
      },
      {
        id: "workshop-summer-2026-2",
        title: "AIR4US Summer Training Workshop (July 14-16, 2026)",
        href: "#",
        description:
          "Three-day intensive training covering satellite data products, ground-based monitoring networks, and model evaluation techniques. Open to state and local air quality agency staff.",
        tags: ["IN PERSON + VIRTUAL"],
        callToAction: { label: "Register", href: "#" },
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

  tutorials: {
    heading: "Video Tutorials",
    headingLevel: "h3",
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
  },
};
