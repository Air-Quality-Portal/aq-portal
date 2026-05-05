import { Banner, Footer, Header } from "@tinacms-portal/blocks";
import type { Metadata } from "next";

// Theme CSS — one import per app, do not import two themes simultaneously.
// Swap the import path to switch themes:
//   @tinacms-portal/blocks/dist/default.css   — USWDS defaults, no custom palette
//   @tinacms-portal/blocks/dist/earthgov.css — EarthGov theme
//   @tinacms-portal/blocks/dist/disasters.css — Disasters.gov theme
import "@tinacms-portal/blocks/dist/disasters.css";
import "./styles/utilities.css";
import "./globals.css";
import { MOCK_FOOTER_PROPS } from "./site-config/footer";
import { MOCK_HEADER_PROPS } from "./site-config/header";

export const metadata: Metadata = {
  title: "Sample App",
  description: "Sample app for @tinacms-portal/blocks",
};

// biome-ignore lint/style/noDefaultExport: RootLayout components in Next.js must use default export
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="display-flex flex-column minh-viewport">
        <Banner />
        <Header {...MOCK_HEADER_PROPS} />
        <main className="flex-1">{children}</main>
        <Footer {...MOCK_FOOTER_PROPS} />
      </body>
    </html>
  );
}
