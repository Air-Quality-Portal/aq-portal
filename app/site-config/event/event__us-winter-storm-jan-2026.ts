import type { EventContent } from "@/app/site-config/types";

export const EVENT__US_WINTER_STORM_2026: EventContent = {
  id: "us-winter-storm-jan-2026",
  contentType: "event",
  title: "U.S. Winter Storm Jan 2026",
  date: "Jan. 28, 2026",
  thumbnailImage: {
    src: "/img/event/hazard-pattern-swirls.webp",
    alt: "Hazard pattern swirls in shades of blue",
  },
  mastheadImage: {
    src: "/img/event/hazard-pattern-swirls.webp",
    alt: "Hazard pattern swirls in shades of blue",
  },
  themes: ["respond"],
  categories: ["winter weather"],
  overview: {
    region: "U.S., North America",
    startDate: "Jan. 23, 2026",
    disastersType: "Winter Weather",
  },
  body: [
    {
      type: "text",
      paragraphs: [
        "A large winter storm impacted much of the continental U.S., bringing snow, ice, and subfreezing temperatures. NASA’s Disasters Program is sharing maps and data to support state and federal response agencies.",
      ],
    },
  ],
};
