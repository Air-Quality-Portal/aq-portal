import type { Metadata } from "next";
import { Banner, Footer, Header } from "@teamimpact/veda-ui-blocks";
import "@teamimpact/veda-ui-blocks/disasters.css";

import { MOCK_FOOTER_PROPS } from "./site-config/footer";
import { MOCK_HEADER_PROPS } from "./site-config/header";

export const metadata: Metadata = {
  title: "Disasters portal",
  description: "Disasters portal",
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
