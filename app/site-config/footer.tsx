import type { FooterProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

const primaryNavItems: FooterProps["primaryNavItems"] = [
  { label: "About Us", href: "/about" },
  { label: "Explore Themes", href: "/" },
  { label: "Data", href: "https://www.data.gov", isExternal: true },
  { label: "Resources & Learning", href: "/resources" },
];

const secondaryNavItems: FooterProps["secondaryNavItems"] = [
  { label: "Image Use Policy", href: "https://www.nasa.gov/accessibility/", isExternal: true },
  {
    label: "Privacy policy",
    href: "https://www.nasa.gov/nasa-web-privacy-policy-and-important-notices/",
    isExternal: true,
  },
];

const utilityNavItems: FooterProps["utilityNavItems"] = [
  { label: "Visit nasa.gov", href: "https://www.nasa.gov", isExternal: true },
];

const portalDetails: FooterProps["portalDetails"] = {
  contacts: [
    {
      label: "Page Manager:",
      name: "Jacob Reed",
      email: "jacob.reed@nasa.gov",
    },
    {
      label: "NASA Responsible Official:",
      name: "Shanna McClain",
      email: "shanna.mcclain@nasa.gov",
    },
  ],
  logo: <Image src="/img/logo-emblem.svg" alt="Disasters.gov" width={121} height={124} priority />,
  title: "Disasters Portal",
  tagline: "Partnership-Oriented Resource for Training, Analysis, and Learning",
  updatedDate: "Nov 27, 2025",
};

export const MOCK_FOOTER_PROPS: FooterProps = {
  portalDetails,
  primaryNavItems,
  secondaryNavItems,
  utilityNavItems,
};
