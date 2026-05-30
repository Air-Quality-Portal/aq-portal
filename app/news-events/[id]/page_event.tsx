import {
  ContentBlockRenderer,
  OverviewBlock,
  PageMasthead,
  PageStatus,
  Section,
} from "@/app/components";
import { DatasetSidebar } from "@/app/data-gallery/[id]/DatasetSidebar";
import { makeEventPageMastHeadProps } from "@/app/site-config/content.helpers";
import type { EventContent } from "@/app/site-config/types";

export default async function EventItemPage(contentItem: EventContent) {
  // TO DO: this will need to account for inpage navigation once implements

  const { id, title, mastheadImage, lastUpdatedDate, themes, categories, body } = contentItem;

  return (
    <>
      {/* Hero */}
      <PageMasthead {...makeEventPageMastHeadProps({ mastheadImage, title, lastUpdatedDate })} />

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
              <DatasetSidebar themes={themes} categories={categories} />
            </div>
            {/* Content */}
            <div className="grid-col-12 desktop:grid-col-9">
              {contentItem.overview && (
                <OverviewBlock {...contentItem.overview} isMultiColumnLayout />
              )}
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
