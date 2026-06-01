import {
  ContentBlockRenderer,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
  SectionOverview,
} from "@/app/components";
import {
  transformEventToPageMastHeadProps,
  transformEventToSectionOverviewProps,
} from "@/app/site-config/event/event.helpers";
import type { EventContent } from "@/app/site-config/types";

export default async function EventItemPage(contentItem: EventContent) {
  // TO DO: this will need to account for inpage navigation once implements

  const { id, contentType, themes, categories, body } = contentItem;

  return (
    <>
      {/* Hero */}
      <PageMasthead {...transformEventToPageMastHeadProps(contentItem)} />

      {/* Placeholder content only */}
      {!body && (
        <PageStatus
          label={`Event Item: ${id}`}
          heading="Under development"
          description="The page you're looking for is under development."
        />
      )}

      {/* Content */}
      {body && (
        <Section>
          <div className="grid-row grid-gap">
            {/* Sidebar */}
            {/* TODO: DatasetSidebar will need to be elevated to a general sidebar component 
          this will also be placement for the inpage navigation once ready */}
            <div className="grid-col-12 desktop:grid-col-3">
              <PageSidebar contentType={contentType} themes={themes} categories={categories} />
            </div>
            {/* Content */}
            <div className="grid-col-12 desktop:grid-col-9">
              <SectionOverview
                {...transformEventToSectionOverviewProps(contentItem)}
                isMultiColumnLayout
              />

              {body?.map((block, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
                <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
