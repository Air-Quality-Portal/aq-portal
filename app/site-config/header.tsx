import type { HeaderProps } from "@teamimpact/veda-ui-blocks";
import { SiteTitle } from "../components/SiteTitle";

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    logo: <></>,
    url: "/",
    title: (
      <SiteTitle
        color1="var(--color-accent-cool-theme-color-accent-cool, #00BDE3)"
        color2="var(--color-primary-theme-color-primary-dark, #1A4480)"
      />
    ),
  },
  navItems: [
    { label: "Tools Catalog", href: "/tools" },
    { label: "Data Catalog", href: "/data-catalog" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
  ],
};
