import type { ToolContent } from "@/app/site-config/types";

/**
 * Placeholder tools used only to demonstrate the tools-catalog layout and
 * pagination. Titles/descriptions are lorem ipsum, categories cycle a small
 * set of placeholder values, thumbnails use placeholder images, and each card
 * links out to an external placeholder URL.
 */

const MOCK_COUNT = 10;

const ADDITIONAL_TAGS = ["cat lorem", "cat ipsum", "cat dolor", "cat sit", "cat amet"];

const LOREM =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt".split(
    " ",
  );

const toTitleCase = (words: string[]) =>
  words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const makeMockTool = (index: number): ToolContent => {
  const n = index + 1;
  const titleWords = [LOREM[index % LOREM.length], LOREM[(index + 3) % LOREM.length]];
  const fullnameWords = [
    LOREM[index % LOREM.length],
    LOREM[(index + 2) % LOREM.length],
    LOREM[(index + 4) % LOREM.length],
  ];

  return {
    id: `mock-tool-${n}`,
    title: `${toTitleCase(titleWords)} Tool ${n}`,
    fullname: toTitleCase(fullnameWords),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: `https://example.com/tools/${n}`,
    tagPrimary: "Agency",
    // Index-driven variation so card tags differ; de-duplicate.
    additionalTags: [
      ...new Set([
        ADDITIONAL_TAGS[index % ADDITIONAL_TAGS.length],
        ADDITIONAL_TAGS[(index + 2) % ADDITIONAL_TAGS.length],
      ]),
    ],
    thumbnailImage: {
      src: "https://placehold.co/600x400/png",
      alt: `Placeholder tool thumbnail ${n}`,
    },
  };
};

const REAL_WORLD_TOOLS: ToolContent[] = [
  {
    id: "air-quality-monitor",
    title: "Air Quality Monitor",
    fullname: "EPA Air Quality Monitoring Tool",
    description: "Monitor air quality across regions",
    href: "https://example.com/air-quality",
    tagPrimary: "Air Quality",
    thumbnailImage: {
      src: "https://placehold.co/600x400/png",
      alt: "Air Quality Monitor",
    },
  },
  {
    id: "pm25-analyzer",
    title: "PM2.5 Analyzer",
    fullname: "Particulate Matter 2.5 Analyzer",
    description: "Analyze PM2.5 levels in your area",
    href: "https://example.com/pm25",
    tagPrimary: "Pollution",
    additionalTags: ["Air Quality", "PM2.5"],
    thumbnailImage: {
      src: "https://placehold.co/600x400/png",
      alt: "PM2.5 Analyzer",
    },
  },
  {
    id: "ozone-tracker",
    title: "Ozone Level Tracker",
    fullname: "Ground-level Ozone Tracker",
    description: "Track ozone levels by location",
    href: "https://example.com/ozone",
    tagPrimary: "Pollution",
    thumbnailImage: {
      src: "https://placehold.co/600x400/png",
      alt: "Ozone Level Tracker",
    },
  },
];

export const TOOLS: ToolContent[] = [
  ...REAL_WORLD_TOOLS,
  ...Array.from({ length: MOCK_COUNT }, (_, index) => makeMockTool(index)),
];
