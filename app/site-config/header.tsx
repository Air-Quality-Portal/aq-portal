import type { HeaderProps } from "@teamimpact/veda-ui-blocks";
import { SiteTitle } from "../components/SiteTitle";

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    /*
     * Placeholder for a portal with no logo mark: blocks requires `logo` and
     * renders its anchor unconditionally, so this leaves an empty link in the
     * header and a 1rem gap that indents the wordmark from the content column.
     * Both go away once a release with NASA-IMPACT/tinacms-portal-monorepo#459
     * (optional `logo`) is picked up here — delete this line then.
     */
    logo: <></>,
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
