import type { HeaderProps } from "@teamimpact/veda-ui-blocks";
import { Tag } from "@teamimpact/veda-ui-blocks";
import { SiteTitle } from "../components/SiteTitle";

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    url: "/",
    title: (
      <span className="display-flex flex-align-center">
        <SiteTitle usColor="var(--color-primary-dark)" />
        <Tag variant="solid" color="warning" textColor="primary-dark" className="margin-left-2">
          BETA
        </Tag>
      </span>
    ),
  },
  navItems: [
    { label: "Tools Catalog", href: "/tools" },
    { label: "Data Catalog", href: "/data-catalog" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
  ],
};
