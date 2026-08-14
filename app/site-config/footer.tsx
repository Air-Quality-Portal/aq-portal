import type { FooterProps } from "@teamimpact/veda-ui-blocks";

const primaryNavItems: FooterProps["primaryNavItems"] = [
  { label: "Tools Catalog", href: "/tools" },
  { label: "Data Catalog", href: "/data-catalog" },
  { label: "Resources", href: "/training" },
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

const portalDetails: FooterProps["portalDetails"] = {
  contacts: [
    {
      label: "Responsible Official:",
      name: "Katherine Knowland",
      email: "k.e.knowland@nasa.gov",
    },
  ],
  title: (
    <span>
      <span style={{ color: "var(--color-accent-cool-theme-color-accent-cool, #00BDE3)" }}>
        AIR
      </span>
      <span style={{ color: "var(--color-primary-theme-color-white, #ffffff)" }}>4US</span>
    </span>
  ),
  tagline: "Empowering US air quality decisions through Earth observations.",
  updatedDate: "June 1, 2026",
};

export const MOCK_FOOTER_PROPS: FooterProps = {
  portalDetails,
  primaryNavItems,
  secondaryNavItems,
  utilityNavItems,
};
