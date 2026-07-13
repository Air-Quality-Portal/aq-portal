import { Footer, Header } from "@teamimpact/veda-ui-blocks";
import type { Metadata } from "next";
import "@teamimpact/veda-ui-blocks/default.css";
// Switch to the air4us theme stylesheet once it is published from the monorepo.
// Run `pnpm run theme:air4us:local` to apply it locally for development.

import { MOCK_FOOTER_PROPS } from "./site-config/footer";
import { MOCK_HEADER_PROPS } from "./site-config/header";

export const metadata: Metadata = {
  title: "Air4US Portal",
  description: "Air4US Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="display-flex flex-column minh-viewport">
        <Header {...MOCK_HEADER_PROPS} />
        <main>{children}</main>
        <Footer {...MOCK_FOOTER_PROPS} />
      </body>
    </html>
  );
}
