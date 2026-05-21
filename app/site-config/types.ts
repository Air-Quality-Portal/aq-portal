export type IterableItemWithId<T> = T & { id: string };

export type ContentType = "story" | "dataset" | "training" | "event" | "news";

export type Theme = "respond" | "build" | "prepare" | "recover";

export type Category = "severewx" | "fire" | "heat" | "flood" | "tropical cyclone";

export type ContentBlock =
  | { type: "text"; heading?: string; headingLevel?: "h2" | "h3"; paragraphs: string[] }
  | { type: "list"; heading?: string; headingLevel?: "h2" | "h3"; items: string[] }
  | { type: "note"; text: string }
  | { type: "cta"; label: string; href: string }
  | { type: "slider"; images: { src: string; alt: string }[] }
  | { type: "video"; src: string; title?: string; caption?: string }
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
};
