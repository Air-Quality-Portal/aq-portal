import type { SectionIntroProps, VisualizationToolIntroProps } from "@/app/components";
import type { DatasetAction } from "@/app/site-config/types";

export const VISUALIZATION_TOOL_ACTION = {
  label: "Open Visualization Tool",
  href: "https://earth.gov/air4us/data-visualization",
  isExternal: true,
} as const satisfies DatasetAction;

export const PARTNER_TOOLS_INTRO: SectionIntroProps = {
  eyebrow: "Partner Agency Tools",
  heading: (
    <>
      Tools from our <span className="text-primary">partner agencies</span>
    </>
  ),
  description:
    "Browse tools available from our partner agencies to access, visualize, and analyze air-quality data.",
};

export const AIR4US_TOOL_INTRO: SectionIntroProps = {
  eyebrow: "The AIR4US Tool",
  heading: (
    <>
      Explore air quality data in one <span className="text-primary">interactive map</span>
    </>
  ),
  description:
    "The AIR4US visualization tool brings together authoritative air-quality data from monitors, satellites, and models, so you can explore conditions across the country in a single app.",
  callToAction: {
    label: "View all data",
    href: "/data-catalog",
  },
};

export const VISUALIZATION_TOOL_INTRO: VisualizationToolIntroProps = {
  heading: "Visualize, compare and analyze data",
  description: "Interact with authoritative air-quality data from the AIR4US data catalog.",
  callToAction: VISUALIZATION_TOOL_ACTION,
};
