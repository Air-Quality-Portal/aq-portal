import type { FooterProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

const primaryNavItems: FooterProps["primaryNavItems"] = [
  { label: "Tool Catalog", href: "/tools" },
  { label: "Data Catalog", href: "/data-catalog" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

const secondaryNavItems: FooterProps["secondaryNavItems"] = [
  {
    label: "Accessibiility support",
    href: "#",
    isExternal: true,
  },
  {
    label: "No FEAR Act data",
    href: "#",
    isExternal: true,
  },
  {
    label: "Office of the Inspector General",
    href: "#",
    isExternal: true,
  },
  {
    label: "FOIA Requests",
    href: "#",
    isExternal: true,
  },
  {
    label: "Performance reports",
    href: "#",
    isExternal: true,
  },
  {
    label: "Privacy Policy",
    href: "#",
    isExternal: true,
  },
];

const utilityNavItems: FooterProps["utilityNavItems"] = [
  { label: "Visit nasa.gov", href: "https://www.nasa.gov", isExternal: true },
];

const portalDetails: FooterProps["portalDetails"] = {
  contacts: [
    {
      label: "Responsible Official:",
      name: "Katherine Knowland",
      email: "#",
    },
  ],
  logo: <Image src="/img/logo-emblem.svg" alt="Disasters.gov" width={121} height={124} priority />,
  title: "NASA Disasters PORTAL",
  tagline: "Partnership-Oriented Resource for Training, Analysis, and Learning",
  updatedDate: "June 1, 2026",
};

export const MOCK_FOOTER_PROPS: FooterProps = {
  portalDetails,
  primaryNavItems,
  secondaryNavItems,
  utilityNavItems,
};
