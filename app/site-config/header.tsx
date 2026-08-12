import type { HeaderProps } from "@teamimpact/veda-ui-blocks";

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    logo: <></>,
    url: "/",
    title: (
      <>
        <span style={{ color: "var(--color-accent-cool-theme-color-accent-cool, #00BDE3)" }}>
          AIR
        </span>
        <span
          style={{
            color: "var(--color-primary-theme-color-primary-dark, #1A4480)",
          }}
        >
          4US
        </span>
      </>
    ),
  },
  navItems: [
    { label: "Tools Catalog", href: "/tools" },
    { label: "Data Catalog", href: "/data-gallery" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about" },
  ],
};
