import type { ContentBlock } from "@/app/site-config/types";

export type ResourcesPageBody = {
  body: ContentBlock[];
};

export const RESOURCES_PAGE_BODY: ResourcesPageBody = {
  body: [
    {
      type: "text",
      heading: "Training Resources",
      headingLevel: "h2",
      paragraphs: ["Training resources placeholder content."],
    },
  ],
};
