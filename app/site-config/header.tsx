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
        href: "https://data-visualization.disasters.openveda.cloud/?datasets=%5B%7B%22id%22%3A%22rgb%22%2C%22settings%22%3A%7B%22isVisible%22%3Atrue%2C%22opacity%22%3A100%2C%22analysisMetrics%22%3A%5B%7B%22id%22%3A%22mean%22%2C%22label%22%3A%22Average%22%2C%22chartLabel%22%3A%22Average%22%2C%22themeColor%22%3A%22infographicB%22%7D%2C%7B%22id%22%3A%22std%22%2C%22label%22%3A%22St+Deviation%22%2C%22chartLabel%22%3A%22St+Deviation%22%2C%22themeColor%22%3A%22infographicD%22%7D%5D%7D%7D%2C%7B%22id%22%3A%22gaia-january2025-composite-total%22%2C%22settings%22%3A%7B%22isVisible%22%3Atrue%2C%22opacity%22%3A100%2C%22analysisMetrics%22%3A%5B%7B%22id%22%3A%22mean%22%2C%22label%22%3A%22Average%22%2C%22chartLabel%22%3A%22Average%22%2C%22themeColor%22%3A%22infographicB%22%7D%2C%7B%22id%22%3A%22std%22%2C%22label%22%3A%22St+Deviation%22%2C%22chartLabel%22%3A%22St+Deviation%22%2C%22themeColor%22%3A%22infographicD%22%7D%5D%7D%7D%5D&taxonomy=%7B%7D&search=&date=2025-01-11T06%3A00%3A00.000Z",
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
    { label: "About Us", href: "/about" },
    ...MOCK_NAV_ITEM_WITH_DROPDOWN_1,
    ...MOCK_NAV_ITEM_WITH_DROPDOWN_2,
    ...MOCK_NAV_ITEM_WITH_DROPDOWN_3,
  ],
  currentPath: "/",
};
