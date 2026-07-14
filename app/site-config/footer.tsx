import type { FooterProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

const primaryNavItems: FooterProps["primaryNavItems"] = [
  { label: "Tool Catalog", href: "/tools" },
  { label: "Data Catalog", href: "/data-gallery" },
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
    href: "",
    isExternal: true,
  },
  {
    label: "Office of the Inspector General",
    href: "https://oig.nasa.gov/",
    isExternal: true,
  },
  {
    label: "FOIA Requests",
    href: "",
    isExternal: true,
  },
  {
    label: "Performance Reports",
    href: "",
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
    href: "https://www.nasa.gov",
    isExternal: true,
  },
];

const portalDetails: FooterProps["portalDetails"] = {
  contacts: [
    {
      label: "Responsible Official:",
      name: "Katherine Knowland",
      email: "",
    },
  ],
  logo: <Image src="/img/logo-emblem.svg" alt="AIR4US" width={121} height={124} priority />,
  title: "",
  tagline: "Empowering US air quality decisions through Earth observations.",
  updatedDate: "June 1, 2026",
};

export const MOCK_FOOTER_PROPS: FooterProps = {
  portalDetails,
  primaryNavItems,
  secondaryNavItems,
  utilityNavItems,
};
