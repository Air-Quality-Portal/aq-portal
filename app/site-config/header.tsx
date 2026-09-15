import type { HeaderProps } from "@teamimpact/veda-ui-blocks";
import { SiteTitle } from "../components/SiteTitle";

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    url: "/",
    title: <SiteTitle usColor="var(--color-primary-dark)" />,
  },
  navItems: [
    { label: "Tools Catalog", href: "/tools" },
    { label: "Data Catalog", href: "/data-catalog" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
  ],
};
