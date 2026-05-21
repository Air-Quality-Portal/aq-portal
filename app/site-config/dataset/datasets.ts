import type { Category, IterableItemWithId, Theme } from "@/app/site-config/types";

type Dataset = {
  contentType: "dataset";
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  callToAction: {
    href: string;
    label: string;
  };
  themes: Theme[];
  category: Category[];
};

export const DATASETS: IterableItemWithId<Dataset>[] = [
  {
    id: "lorem-ipsum-dolor",
    contentType: "dataset",
    title: "Lorem ipsum dolor sit amet Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: { src: "/img/logo-emblem.svg", alt: "placeholder image" },
    callToAction: { href: "/data-gallery/lorem-ipsum-dolor", label: "View Data" },
    themes: ["prepare"],
    category: ["severewx", "flood", "tropical cyclone"],
  },
];
