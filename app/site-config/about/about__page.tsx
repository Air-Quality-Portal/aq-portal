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
      heading: "Advancing Science for Disaster Resilience",
      headingLevel: "h2",
      paragraphs: [
        `The NASA Disasters Program puts Earth science to work for those who make critical
          decisions before, during, and after disasters. We translate NASA's unmatched view of Earth
          from space into actionable insights, helping emergency managers, government agencies, and
          industry partners prepare for high-impact hazards, respond effectively when disasters
          strike, and recover more fully in their aftermath. From hurricanes and volcanoes to floods
          and earthquakes, we use NASA's data, tools, and expertise to build resilience in
          communities across the U.S. and around the world.`,
      ],
    },
    {
      type: "text",
      heading: "Our Team",
      headingLevel: "h2",
      paragraphs: [
        <>
          <Image
            src="/img/about/disasters-team.webp"
            alt="NASA Disasters Team"
            width="1200"
            height="800"
          />
        </>,
      ],
    },
    {
      type: "text",
      heading: "Connect with us",
      headingLevel: "h2",
      paragraphs: [
        <Fragment key="hq-em-disasters@mail.nasa.gov">
          <Link href="mailto:hq-em-disasters@mail.nasa.gov" variant="text">
            Contact Our Team
          </Link>
          <br />
          <br />
          <Link
            href="https://lp.constantcontactpages.com/sl/ICIOyJI"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            Sign up for the NASA Disasters Community Newsletter
          </Link>
        </Fragment>,
      ],
    },
  ],
};
