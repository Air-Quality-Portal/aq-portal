import type { HeaderProps } from "@teamimpact/veda-ui-blocks";

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    logo: <></>,
    url: "/",
    title: "AIR4US",
  },
  navItems: [
    { label: "Tools Catalog", href: "/tools" },
    { label: "Data Catalog", href: "/data-gallery" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
  ],
};
