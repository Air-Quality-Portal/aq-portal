import { Card, InPageNavigation } from "@teamimpact/veda-ui-blocks";
import { ContentBlockRenderer, Section } from "@/app/components";
import { RESOURCES_PAGE_BODY, RESOURCES_PAGE_MASTHEAD } from "@/app/site-config/resources";

const RESOURCES_CONTENT_ID = "resources-page-content";

export default function ResourcesPage() {
  const { body } = RESOURCES_PAGE_BODY;

  return (
    <Section>
      <Card className="height-masthead" isMastHead title={RESOURCES_PAGE_MASTHEAD.title} />

      <div className="grid-container padding-y-7">
        <div className="grid-row grid-gap">
          <div className="grid-col-3 display-none desktop:display-block">
            <InPageNavigation
              data-title-text="ON THIS PAGE"
              data-main-content-selector={`#${RESOURCES_CONTENT_ID}`}
            />
          </div>
          <div className="grid-col-9 usa-prose" id={RESOURCES_CONTENT_ID}>
            {body.map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
