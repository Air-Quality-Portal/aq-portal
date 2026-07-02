import { Footer, Header } from "@teamimpact/veda-ui-blocks";
import type { Metadata } from "next";
import "@teamimpact/veda-ui-blocks/default.css";

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
        <main
          className="flex-1"
          style={{
            paddingLeft: "220px",
            paddingRight: "220px",
            paddingTop: "41px",
            paddingBottom: "71px",
          }}
        >
          {children}
        </main>
        <Footer {...MOCK_FOOTER_PROPS} />
      </body>
    </html>
  );
}
