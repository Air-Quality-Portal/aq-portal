import type { HeaderProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

const MOCK_NAV_ITEM_WITH_DROPDOWN_1 = [
  {
    label: "Explore By Need",
    subItems: [
      { label: "Prepare", href: "/prepare" },
      { label: "Respond", href: "/respond" },
      { label: "Recover", href: "/recover" },
      { label: "Build Resilience", href: "/resilience" },
    ],
  },
];

const MOCK_NAV_ITEM_WITH_DROPDOWN_2 = [
  {
    label: "Explore Data",
    subItems: [
      { label: "Data Gallery", href: "/data-gallery" },
      {
        label: "Data Visualization",
        href: "https://data-visualization.disasters.openveda.cloud/",
        isExternal: true,
      },
      { label: "Data Processing", href: "/data-processing" },
    ],
  },
];
const MOCK_NAV_ITEM_WITH_DROPDOWN_3 = [
  {
    label: "Resources & Learning",
    subItems: [
      { label: "Training", href: "/training" },
      { label: "News, Events & Stories", href: "/news-events" },
    ],
  },
];

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    logo: <Image src="/img/logo-header.png" alt="Disasters.gov" width={148} height={52} />,
    url: "/",
  },
  navItems: [
    { label: "About us", href: "/about" },
    ...MOCK_NAV_ITEM_WITH_DROPDOWN_1,
    ...MOCK_NAV_ITEM_WITH_DROPDOWN_2,
    ...MOCK_NAV_ITEM_WITH_DROPDOWN_3,
  ],
};
