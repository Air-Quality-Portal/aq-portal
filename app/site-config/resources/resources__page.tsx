import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { ContentBlock } from "@/app/site-config/types";

export type ResourcesPageBody = {
  body: ContentBlock[];
};

const SAMPLE_FAQ = [
  {
    label: "AIR4US Data Access Guide (PDF)",
    href: "....",
  },
  {
    label: "TEMPO Level-2 Product User Guide",
    href: "....",
  },
  {
    label: "MAIAC Algorithm Theoretical Basis Document",
    href: "....",
  },
  {
    label: "AQS Data Mart User Guide",
    href: "....",
  },
  {
    label: "HYSPLIT Model Documentation",
    href: "....",
  },
  {
    label: "GEOS-CF Output Variables Reference",
    href: "....",
  },
];

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
      type: "tutorialList",
      heading: "Video Tutorials",
      headingLevel: "h3",
      lead: "Self-paced video tutorials covering key datasets, tools, and workflows available through the AIR4US Portal.",
      tutorials: [
        {
          title: "Getting started with MODIS/VIIRS/GOES",
          href: "#",
          description:
            "An introduction to the MODIS/VIIRS/GOES dataset — what it measures, how it is produced, and when to use it.",
          duration: "10 MIN",
          level: "beginner",
        },
        {
          title: "Accessing and downloading MODIS/VIIRS/GOES data",
          href: "#",
          description:
            "Find, subset, and download MODIS/VIIRS/GOES data, with tips for common file formats and access tools.",
          duration: "20 MIN",
          level: "intermediate",
        },
        {
          title: "Accessing and downloading MODIS/VIIRS/GOES data",
          href: "#",
          description:
            "Find, subset, and download MODIS/VIIRS/GOES data, with tips for common file formats and access tools.",
          duration: "20 MIN",
          level: "intermediate",
        },
        {
          title: "Exploring MODIS/VIIRS/GOES in the AIR4US visualization tool",
          href: "#",
          description:
            "Load MODIS/VIIRS/GOES layers in the AIR4US visualization tool and interpret them alongside other air quality data.",
          duration: "15 MIN",
          level: "advanced",
        },
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

    {
      type: "text",
      heading: "Workshops and Webinars",
      headingLevel: "h3",
      paragraphs: [
        "Live training events hosted by NASA, NOAA, and EPA scientists. Registration is free and open to air quality professionals, researchers, and students.",
      ],
    },

    {
      type: "text",
      headingLevel: "h3",
      heading: "Documentation",
      content: [
        "Documentation, algorithm details, and background reading for MODIS/VIIRS/GOES.",
        <div key="sample-faq" className="display-flex flex-column margin-top-2">
          {SAMPLE_FAQ.map(({ label, href }, index) => (
            <Link
              key={href}
              href={href}
              isExternal
              variant="link-row"
              className={index > 0 ? "margin-top-05" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>,
      ],
    },
  ],
};
