// import Image from "next/image";
import { Card } from "@teamimpact/veda-ui-blocks";
import { Section } from "@/app/components";
import { ContentBlockRenderer } from "@/app/components/ContentBlockRenderer";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about__page";

export default function AboutPage() {
  return (
    <>
      <Section>
        <Card
          className="no-image"
          isMastHead
          imagePosition="cover"
          title="About AIR4US"
          image={<svg role="presentation" aria-hidden="true" />}
        />
      </Section>
      {ABOUT_PAGE_BODY.body.map((block, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
        <ContentBlockRenderer key={i} block={block} />
      ))}
    </>
  );
}
