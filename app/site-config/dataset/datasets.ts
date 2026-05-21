import type { Category, Theme } from "@/app/site-config/types";

type Dataset = {
  id: string;
  contentType: "dataset";
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  themes: Theme[];
  categories: Category[];
};

export const DATASETS: Dataset[] = [
  {
    id: "lorem-ipsum-dolor",
    contentType: "dataset",
    title: "Lorem ipsum dolor sit amet Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: { src: "/img/logo-emblem.svg", alt: "placeholder image" },
    themes: ["prepare"],
    categories: ["severewx", "flood", "tropical cyclone"],
  },
];
