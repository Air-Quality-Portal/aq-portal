import type { FooterProps } from "@teamimpact/veda-ui-blocks";

const primaryNavItems: FooterProps["primaryNavItems"] = [
  { label: "Tools Catalog", href: "/tools" },
  { label: "Data Catalog", href: "/data-catalog" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

const secondaryNavItems: FooterProps["secondaryNavItems"] = [
  {
    label: "Accessibility Support",
    href: "https://www.nasa.gov/accessibility/",
    isExternal: true,
  },
  {
    label: "No FEAR Act data",
    href: "https://www.nasa.gov/no-fear-act/",
    isExternal: true,
  },
  {
    label: "Office of the Inspector General",
    href: "https://oig.nasa.gov/",
    isExternal: true,
  },
  {
    label: "FOIA Requests",
    href: "https://www.nasa.gov/foia/",
    isExternal: true,
  },
  {
    label: "Performance Reports",
    href: "https://www.nasa.gov/organizations/budget-annual-reports/agency-financial-reports/",
    isExternal: true,
  },

  {
    label: "Privacy Policy",
    href: "https://www.nasa.gov/nasa-web-privacy-policy-and-important-notices/",
    isExternal: true,
  },
];

const utilityNavItems: FooterProps["utilityNavItems"] = [
  {
    text: "Looking for U.S. government information and services? ",
    label: "  Visit USA.gov",
    href: "https://www.usa.gov",
    isExternal: true,
  },
];

const buildDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

/*
 * `NEXT_PUBLIC_BUILD_TIME` is set in next.config.ts and inlined at build time.
 * Formatting in UTC keeps the server-rendered and hydrated markup identical.
 * Falls back to the current date if the value is missing or unparseable.
 */
export function formatBuildDate(): string {
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME;
  const parsed = buildTime ? new Date(buildTime) : null;
  const date = parsed && !Number.isNaN(parsed.getTime()) ? parsed : new Date();

  return buildDateFormatter.format(date);
}

const portalDetails: FooterProps["portalDetails"] = {
  contacts: [
    {
      label: "Responsible Official:",
      name: "Katherine Knowland",
      email: "k.e.knowland@nasa.gov",
    },
  ],
  title: "AIR4US",
  tagline: "Empowering US air quality decisions through Earth observations.",
  updatedDate: formatBuildDate(),
};

export const MOCK_FOOTER_PROPS: FooterProps = {
  portalDetails,
  primaryNavItems,
  secondaryNavItems,
  utilityNavItems,
};
