import { Link } from "@teamimpact/veda-ui-blocks";
import "@/app/styles/resources.css";
import type { ContentBlock } from "@/app/site-config/types";

export type ResourcesPageBody = {
  body: ContentBlock[];
};

const SAMPLE_FAQ = [
  "AIR4US Data Access Guide (PDF)",
  "TEMPO Level-2 Product User Guide",
  "MAIAC Algorithm Theoretical Basis Document",
  "AQS Data Mart User Guide",
  "HYSPLIT Model Documentation",
  "GEOS-CF Output Variables Reference",
];

export const RESOURCES_PAGE_BODY: ResourcesPageBody = {
  body: [
    {
      type: "text",
      heading: "Getting Started",
      headingLevel: "h2",
      paragraphs: [
        "AIR4US provides training materials for air quality professionals, researchers, and decision-makers at all experience levels. Use the resources below to learn how to access, interpret, and apply the data and tools available through this portal.",
        "All training materials are freely available. Video tutorials can be completed at your own pace. Workshops and webinars are offered live with registration required — recordings are posted here within two weeks of each event.",
      ],
    },

    {
      type: "text",
      heading: "Video Tutorials",
      headingLevel: "h2",
      paragraphs: [
        "Self-paced video tutorials covering key datasets, tools, and workflows available through the AIR4US Portal.",
      ],
    },
    {
      type: "text",
      heading: "Documentation",
      headingLevel: "h2",
      paragraphs: [
        "Technical documentation, data guides, and algorithm theoretical basis documents (ATBDs) for datasets and tools available through the AIR4US Portal.",
      ],
    },
    {
      type: "text",
      content: [
        <div key="cta" className="margin-bottom-2 resources-cta-grid">
          {SAMPLE_FAQ.map((faq) => (
            <Link
              key={faq}
              isExternal
              variant="button-outline"
              className="width-full display-flex flex-justify flex-align-center text-primary font-sans-sm  !border-base hover:bg-base-lighter link-custom-shadow"
            >
              <span>{faq}</span>
            </Link>
          ))}
        </div>,
      ],
    },
  ],
};
