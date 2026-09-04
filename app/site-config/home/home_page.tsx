import type { SectionIntroProps, VisualizationToolIntroProps } from "@/app/components";

export const HOMEPAGE_VISUALIZE_INTRO: SectionIntroProps = {
  eyebrow: "VISUALIZE",
  heading: (
    <>
      Air quality data <span className="text-primary">Visualization Tool</span>
    </>
  ),
  headingSize: "xl",
  callToAction: {
    label: "View all data",
    href: "/data-catalog",
  },
};

export const HOMEPAGE_EXPLORE_INTRO: SectionIntroProps = {
  eyebrow: "EXPLORE",
  heading: (
    <>
      Air quality data <span className="text-primary">Tools Catalog</span>
    </>
  ),
  headingSize: "xl",
  callToAction: {
    label: "View all tools",
    href: "/tools",
  },
};

export const VISUALIZATION_TOOL_INTRO: VisualizationToolIntroProps = {
  heading: "Fire Smoke North-America",
  description:
    "High resolution, interactive forecasts of hourly, daily average and daily maximum concentrations of PM2.5 smoke particles at ground level from wildfires.",
  callToAction: {
    label: "Open Visualization Tool",
    href: "#",
  },
};
