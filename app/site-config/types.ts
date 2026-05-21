export type IterableItemWithId<T> = T & { id: string };

export type ContentType = "story" | "dataset" | "training" | "event" | "news";

export type Theme = "respond" | "build" | "prepare" | "recover";

export type Category = "severewx" | "fire" | "heat" | "flood" | "tropical cyclone";
