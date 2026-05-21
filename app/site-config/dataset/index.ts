import type { DatasetContent } from "@/app/site-config/types";

export const DATASETS: DatasetContent[] = [
  {
    id: "lorem-ipsum-dolor",
    contentType: "dataset",
    title: "Lorem ipsum dolor sit amet Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    thumbnailImage: { src: "/img/logo-emblem.svg", alt: "placeholder image" },
    themes: ["prepare"],
    categories: ["severewx", "flood", "tropical cyclone"],
    mastheadImage: {
      src: "/img/card-masthead.webp",
      alt: "",
    },
  },
];
