import type { CONTENT_THEMES } from "@/app/site-config/constants";

export type IterableItemWithId<T> = T & { id: string };

export type Theme = keyof typeof CONTENT_THEMES;

export type ContentBlock =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "note"; text: string }
  | { type: "cta"; label: string; href: string }
  | { type: "slider"; images: { src: string; alt: string }[] }
  | {
      type: "about";
      logo: { src: string; alt: string };
      heading: string;
      paragraphs: string[];
      links: { label: string; href: string }[];
    }
  | { type: "links"; heading?: string; items: { label: string; href: string }[] };

export type TrainingContent = {
  id: string;
  title: string;
  date: string;
  themes: Theme[];
  tags: string[];
  heroImage: {
    src: string;
    alt: string;
    caption?: string;
    attribution?: string;
  };
  description: string;
  body: ContentBlock[];
  relatedContent?: string[];
  lessonMaterials?: { label: string; href: string }[];
  additionalResources?: { label: string; href: string }[];
};
