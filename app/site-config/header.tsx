import type { HeaderProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    logo: <Image src="/img/logo-emblem.svg" alt="AIR4US" width={67} height={68} />,
    url: "/",
  },
  navItems: [
    { label: "Tool Catalog", href: "/tools" },
    { label: "Data Catalog", href: "/data-catalog" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
  ],
  currentPath: "/",
};
