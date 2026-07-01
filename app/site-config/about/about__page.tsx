import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { Fragment } from "react";
import type { ContentBlock } from "@/app/site-config/types";

export type AboutPageBody = {
  body: ContentBlock[];
};

export const ABOUT_PAGE_BODY: AboutPageBody = {
  body: [
    {
      type: "text",
      heading: "A Multi-Agency Platform for Integrating Air Quality Information",
      headingLevel: "h2",
      paragraphs: [
        <span key="body" className="about-section-body">
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.'
        </span>,
      ],
    },
    {
      type: "text",
      paragraphs: [
        <Image
          key="placeholder"
          src="https://placehold.co/600x400"
          alt="Placeholder"
          width={600}
          height={400}
          unoptimized
        />,
      ],
    },

    {
      type: "text",
      heading: "Contact",
      headingLevel: "h2",
      paragraphs: [
        <span key="body" className="about-section-body">
          "Have questions about the AIR4US Portal, its datasets, or how to get involved? Reach out
          to the team below.",{" "}
        </span>,

        <Fragment key="contact-links">
          <br />
          <Link href="mailto:katherineknowland@nasa.gov" variant="text">
            Resposible Official
          </Link>
          <br />
          <br />
          <Link
            href="mailto:air4us@nasa.gov"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            General Inquiries
          </Link>
          <br />
          <br />
          <Link href="" rel="noopener noreferrer" target="_blank" variant="text">
            Partner Agencies
          </Link>
        </Fragment>,
      ],
    },
  ],
};
