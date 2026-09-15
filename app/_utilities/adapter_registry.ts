import { makeWorkshopCardSection } from "@/app/site-config/content.helpers";
import type {
  CardAdapterKey,
  CardAdapterSourceMap,
  CardTextOnlySection,
} from "@/app/site-config/types";

type AdapterOptions = { now: Date };

type CardAdapterRegistry = {
  [Adapter in CardAdapterKey]: {
    adapt: (source: CardAdapterSourceMap[Adapter], options: AdapterOptions) => CardTextOnlySection;
    loadingMessage: string;
  };
};

export const CARD_ADAPTERS: CardAdapterRegistry = {
  workshops: {
    adapt: makeWorkshopCardSection,
    loadingMessage: "Loading workshops…",
  },
};
