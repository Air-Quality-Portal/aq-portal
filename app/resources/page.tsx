import { Card, InPageNavigation } from "@teamimpact/veda-ui-blocks";
import { ContentBlockRenderer, Section } from "@/app/components";
import { RESOURCES_PAGE_BODY, RESOURCES_PAGE_MASTHEAD } from "@/app/site-config/resources";

const RESOURCES_CONTENT_ID = "resources-page-content";

export default function ResourcesPage() {
  const { body } = RESOURCES_PAGE_BODY;

  return (
    <Section>
      <Card className="height-masthead" isMastHead title={RESOURCES_PAGE_MASTHEAD.title} />

      <div className="grid-row grid-gap margin-top-6">
        <div className="grid-col-3 display-none desktop:display-block">
          <InPageNavigation
            data-title-text="ON THIS PAGE"
            data-main-content-selector={`#${RESOURCES_CONTENT_ID}`}
          />
        </div>
        <div className="grid-col-9 usa-prose" id={RESOURCES_CONTENT_ID}>
          {body.map((block, i) => (
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
