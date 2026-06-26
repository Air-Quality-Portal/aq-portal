import type { DatasetContent } from "@/app/site-config/types";

export const DATASET__MOCK: DatasetContent = {
  id: "sentinel-2-true-color",
  contentType: "dataset",
  title: "Sentinel-2 True Color Imagery",
  description:
    "The True Color RGB composite provides a product of how the surface would look to the naked eye from space.",
  thumbnailImage: {
    src: "https://picsum.photos/id/237/200/300",
    alt: "Sample Text",
  },
  mastheadImage: {
    src: "https://picsum.photos/id/174/1304/480",
    alt: "Aerial landscape sample imagery",
  },
  category1: ["c1 lorem"],
  category2: ["c2 lorem"],
  category3: ["c3 lorem", "c3 dore"],

  actions: [
    {
      label: "Open Visualization Tool",
      href: "https://example.com/visualization",
      isExternal: true,
      variant: "primary",
    },
    {
      label: "Learn more",
      href: "#",
      variant: "outline",
    },
  ],

  body: [
    {
      type: "text",
      paragraphs: [
        "The True Color RGB provides a product of how the surface would look to the naked eye from space. The True Color RGB is produced using the 3 visible wavelength bands (red, green, and blue) from the respective sensor. Some minor atmospheric corrections have occurred.",
      ],
    },
  ],
};
