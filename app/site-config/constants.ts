import type { Theme } from "./types";

export const CONTENT_THEMES: Record<Theme, Record<string, unknown>> = {
  respond: {
    label: "respond",
    color: "secondary",
    textColor: "white",
  },
  build: {
    label: "build resilience",
    color: "success",
    textColor: "white",
  },
  prepare: {
    label: "prepare",
    color: "accent-warm",
  },
  recover: {
    label: "recover",
    color: "accent-cool",
    textColor: "text-white",
  },
} as const;
