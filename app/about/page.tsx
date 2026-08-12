import { Card, InPageNavigation } from "@teamimpact/veda-ui-blocks";
import { ContentBlockRenderer, Section } from "@/app/components";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about__page";

const ABOUT_CONTENT_ID = "about-page-content";

export default function AboutPage() {
  return (
    <Section>
      <Card className="height-masthead" isMastHead title="About AIR4US" />

      <div className="grid-row grid-gap margin-top-6">
        <div className="grid-col-3 display-none desktop:display-block">
          <InPageNavigation
            className="margin-top-0"
            data-title-text="ON THIS PAGE"
            data-heading-elements="h2"
            data-main-content-selector={`#${ABOUT_CONTENT_ID}`}
          />
        </div>
        <div className="grid-col-9 usa-prose" id={ABOUT_CONTENT_ID}>
          {ABOUT_PAGE_BODY.body.map((block, i) => (
            <ContentBlockRenderer
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              key={i}
              block={block}
              isMultiColumnLayout
              className={i === 0 ? "margin-top-0" : ""}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
