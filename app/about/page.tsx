// import Image from "next/image";

import { Section } from "@/app/components";
import { ContentBlockRenderer } from "@/app/components/ContentBlockRenderer";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about__page";

export default function AboutPage() {
  return (
    <>
      {/* Hero section: emblem + title */}
      <Section>
        <div className="bg-base-lightest padding-y-8">
          <div className="grid-container">
            <h1 className="page-hero-title">
              About{" "}
              <span
                className="page-hero-title-accent"
                style={{ color: "#1a4480", whiteSpace: "nowrap" }}
              >
                AIR4US
              </span>
            </h1>
          </div>
        </div>
      </Section>
      {ABOUT_PAGE_BODY.body.map((block, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
        <ContentBlockRenderer key={i} block={block} />
      ))}
    </>
  );
}
