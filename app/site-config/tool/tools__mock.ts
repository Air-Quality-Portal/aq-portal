import type { ToolContent } from "@/app/site-config/types";

/**
 * Placeholder tools used only to demonstrate the tools-catalog layout and
 * pagination. Titles/descriptions are lorem ipsum, categories cycle a small
 * set of placeholder values, thumbnails use placeholder images, and each card
 * links out to an external placeholder URL.
 */

const MOCK_COUNT = 20;

const CATEGORIES = ["cat lorem", "cat ipsum", "cat dolor", "cat sit", "cat amet"];

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
    contentType: "tool",
    title: `${toTitleCase(titleWords)} Tool ${n}`,
    fullname: toTitleCase(fullnameWords),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: `https://example.com/tools/${n}`,
    tagPrimary: "Agency",
    // Index-driven variation so card tags differ; de-duplicate.
    categories: [
      ...new Set([
        CATEGORIES[index % CATEGORIES.length],
        CATEGORIES[(index + 2) % CATEGORIES.length],
      ]),
    ],
    thumbnailImage: {
      src: "https://placehold.co/600x400/png",
      alt: `Placeholder tool thumbnail ${n}`,
    },
  };
};

export const TOOLS: ToolContent[] = Array.from({ length: MOCK_COUNT }, (_, index) =>
  makeMockTool(index),
);
