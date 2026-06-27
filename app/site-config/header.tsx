import type { HeaderProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    logo: <Image src="/img/logo-header.png" alt="Disasters.gov" width={148} height={52} />,
    url: "/",
  },
  navItems: [
    { label: "Tool Catalog", href: "/tools" },
    { label: "Data Catalog", href: "/data-gallery" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
  ],
  currentPath: "/",
};
