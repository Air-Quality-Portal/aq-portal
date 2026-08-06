import { Card, InPageNavigation } from "@teamimpact/veda-ui-blocks";
import { ContentBlockRenderer, Section, SectionCardTextOnly, SectionLinks } from "@/app/components";
import {
  makeTutorialCardSection,
  makeWorkshopCardSection,
} from "@/app/site-config/content.helpers";
import { RESOURCES_PAGE_BODY } from "@/app/site-config/resources";

const RESOURCES_CONTENT_ID = "resources-page-content";

export default function ResourcesPage() {
  const { body, linkSections, tutorials, workshopSection } = RESOURCES_PAGE_BODY;

  return (
    <Section>
      <Card className="height-masthead" isMastHead title={"Training Resources"} />

      <div className="grid-container padding-y-7">
        <div className="grid-row grid-gap">
          <div className="grid-col-3 display-none desktop:display-block">
            <InPageNavigation
              data-title-text="ON THIS PAGE"
              data-main-content-selector={`#${RESOURCES_CONTENT_ID}`}
            />
          </div>
          <div className="grid-col-9 usa-prose" id={RESOURCES_CONTENT_ID}>
            {body.slice(0, 1).map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
            ))}
            {tutorials && <SectionCardTextOnly section={makeTutorialCardSection(tutorials)} />}
            {body.slice(1).map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
            ))}
            {workshopSection && (
              <SectionCardTextOnly section={makeWorkshopCardSection(workshopSection)} />
            )}
            {linkSections?.map((section, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
              <SectionLinks key={i} section={section} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
