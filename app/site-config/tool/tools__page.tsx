import type { SectionIntroProps } from "@/app/components";

export const PARTNER_TOOLS_INTRO: SectionIntroProps = {
  eyebrow: "Partner Agency Tools",
  heading: (
    <>
      Tools from our <span className="text-primary">partner agencies</span>
    </>
  ),
  description:
    "Browse tools available from our partner agencies to access, visualize, and analyze air quality data.",
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
