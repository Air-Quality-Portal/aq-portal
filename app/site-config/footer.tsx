import type { FooterProps } from "@teamimpact/veda-ui-blocks";

import { LogoEmblem } from "@/app/components";

const primaryNavItems: FooterProps["primaryNavItems"] = [
  { label: "About Us", href: "/about" },
  { label: "Data Gallery", href: "/data-gallery" },
  { label: "News & Events", href: "/news-events" },
  { label: "Training", href: "/training" },
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
  logo: (
    <div className="text-white">
      <LogoEmblem width={78} height={80} ariaLabel="Disasters.gov" />
    </div>
  ),
  title: "Disasters Portal",
  tagline: "Partnership-Oriented Resource for Training, Analysis, and Learning",
  updatedDate: "June 1, 2026",
};

export const MOCK_FOOTER_PROPS: FooterProps = {
  portalDetails,
  primaryNavItems,
  secondaryNavItems,
  utilityNavItems,
};
