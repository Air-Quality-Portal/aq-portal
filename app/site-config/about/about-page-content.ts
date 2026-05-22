type AboutPageCTA = {
  label: string;
  href: string;
};

type AboutPageContent = {
  heroTitle: string;
  sectionHeading: string;
  missionParagraph: string;
  contactCTA: AboutPageCTA;
  newsletterCTA: AboutPageCTA;
};

export const ABOUT_PAGE_CONTENT: AboutPageContent = {
  heroTitle: "About the NASA Disasters Program",
  sectionHeading: "Advancing Science for Disaster Resilience",
  missionParagraph:
    "The NASA Disasters Program puts Earth science to work for those who make critical decisions before, during, and after disasters. We translate NASA's unmatched view of Earth from space into actionable insights, helping emergency managers, government agencies, and industry partners prepare for high-impact hazards, respond effectively when disasters strike, and recover more fully in their aftermath. From hurricanes and volcanoes to floods and earthquakes, we use NASA’s data, tools, and expertise to build resilience in communities across the U.S. and around the world.",
  contactCTA: {
    label: "Contact Our Team",
    href: "mailto:hq-em-disasters@mail.nasa.gov",
  },
  newsletterCTA: {
    label: "Sign up for the NASA Disasters Community Newsletter",
    href: "https://lp.constantcontactpages.com/sl/ICIOyJI",
  },
};
