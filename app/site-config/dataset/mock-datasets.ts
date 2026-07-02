import type { Category1, Category2, Category3, DatasetContent } from "@/app/site-config/types";

/**
 * Placeholder datasets used only to demonstrate the data-gallery pagination
 * Titles/descriptions are lorem ipsum,
 * categories cycle the `CATEGORY_MAP` values, thumbnails use picsum seeds, and
 * there is no `body`, so each detail page renders the "Under Development"
 * placeholder.
 */

const MOCK_COUNT = 24;

const CATEGORY1: Category1[] = ["c1 lorem", "c1 ipsum", "c1 dore"];
const CATEGORY2: Category2[] = ["c2 lorem", "c2 ipsum", "c2 dore"];
const CATEGORY3: Category3[] = ["c3 lorem", "c3 ipsum", "c3 dore"];

const LOREM =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt".split(
    " ",
  );

const toTitleCase = (words: string[]) =>
  words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const makeMockDataset = (index: number): DatasetContent => {
  const n = index + 1;
  const titleWords = [LOREM[index % LOREM.length], LOREM[(index + 3) % LOREM.length]];

  return {
    id: `mock-dataset-${n}`,
    contentType: "dataset",
    title: `${toTitleCase(titleWords)} Dataset ${n}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnailImage: {
      src: "https://placehold.co/200x400.png",
      alt: `Placeholder dataset thumbnail ${n}`,
    },
    mastheadImage: {
      src: "https://placehold.co/300x250.png",
      alt: `Placeholder dataset masthead ${n}`,
    },
    // Index-driven variation so card tags differ; de-duplicate category3.
    category1: [CATEGORY1[index % CATEGORY1.length]],
    category2: [CATEGORY2[(index + 1) % CATEGORY2.length]],
    category3: [
      ...new Set([CATEGORY3[index % CATEGORY3.length], CATEGORY3[(index + 2) % CATEGORY3.length]]),
    ],
  };
};

export const MOCK_DATASETS: DatasetContent[] = Array.from({ length: MOCK_COUNT }, (_, index) =>
  makeMockDataset(index),
);
