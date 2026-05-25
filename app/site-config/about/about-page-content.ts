export type AboutPageCTA = {
  label: string;
  href: string;
  target?: string;
  rel?: string;
};

export type AboutPageBody = {
  emblem: {
    width: number;
    height: number;
    ariaLabel?: string;
  };
  pageTitle: string;
  sectionHeading: string;
  missionParagraph: string;
  ctas: [AboutPageCTA, AboutPageCTA];
};

export const ABOUT_PAGE_BODY: AboutPageBody = {
  emblem: {
    width: 134,
    height: 138,
    ariaLabel: "NASA Disasters Program emblem",
  },
  pageTitle: "About the\nNASA Disasters\nProgram",
  sectionHeading: "Advancing Science for Disaster Resilience",
  missionParagraph:
    "The NASA Disasters Program puts Earth science to work for those who make critical decisions before, during, and after disasters. We translate NASA's unmatched view of Earth from space into actionable insights, helping emergency managers, government agencies, and industry partners prepare for high-impact hazards, respond effectively when disasters strike, and recover more fully in their aftermath. From hurricanes and volcanoes to floods and earthquakes, we use NASA’s data, tools, and expertise to build resilience in communities across the U.S. and around the world.",
  ctas: [
    {
      label: "Contact Our Team",
      href: "mailto:hq-em-disasters@mail.nasa.gov",
    },
    {
      label: "Sign up for the NASA Disasters Community Newsletter",
      href: "https://lp.constantcontactpages.com/sl/ICIOyJI",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
};
