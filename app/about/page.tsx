import { Card, InPageNavigation } from "@teamimpact/veda-ui-blocks";
import { ContentBlockRenderer } from "@/app/components/ContentBlockRenderer";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about__page";
import { Section } from "../components";

const ABOUT_CONTENT_ID = "about-page-content";

export default function AboutPage() {
  return (
    <Section>
      <Card className=" height-masthead" isMastHead title={"About AIR4US"} />

      <div className="grid-container padding-y-7">
        <div className="grid-row grid-gap">
          <div className="grid-col-3 display-none desktop:display-block">
            <InPageNavigation
              data-title-text="ON THIS PAGE"
              data-main-content-selector={`#${ABOUT_CONTENT_ID}`}
            />
          </div>
          <div className="grid-col-9 usa-prose" id={ABOUT_CONTENT_ID}>
            {ABOUT_PAGE_BODY.body.map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
