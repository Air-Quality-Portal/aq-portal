import { Banner, Footer } from "@teamimpact/veda-ui-blocks";
import type { Metadata } from "next";
import "@teamimpact/veda-ui-blocks/disasters.css";

import { HeaderWithCurrentPath } from "@/app/components";
import { MOCK_FOOTER_PROPS } from "./site-config/footer";

export const metadata: Metadata = {
  title: "Disasters portal",
  description: "Disasters portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollPaddingTop: "5rem" }}>
      <body
        className="minh-viewport"
        style={{
          display: "grid",
          gridTemplateRows: "auto auto 1fr auto" /* banner, header, main, footer */,
        }}
      >
        <Banner />
        <HeaderWithCurrentPath />
        <main>{children}</main>
        <Footer {...MOCK_FOOTER_PROPS} />
      </body>
    </html>
  );
}
