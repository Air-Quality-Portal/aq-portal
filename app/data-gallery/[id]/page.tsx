import { notFound } from "next/navigation";

import {
  ContentBlockRenderer,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
} from "@/app/components";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { DATASETS } from "@/app/site-config/dataset";
import { EVENTS } from "@/app/site-config/event";
import { CONTENT_TYPES } from "@/app/site-config/types";

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataset = DATASETS.find((d) => d.id === id);

  if (!dataset) notFound();

  const {
    contentType,
    title,
    description,
    mastheadImage,
    themes,
    categories,
    body,
    relatedContent: relatedIds = [],
  } = dataset;

  // TODO: Move to content helpers, and broaden to fit any content type use case
  // Can related content be of a different content type?
  const relatedItems = relatedIds.flatMap((relId) => {
    const rel = DATASETS.find((d) => d.id === relId) || EVENTS.find((e) => e.id === relId);
    if (!rel) return [];
    return [
      {
        id: rel.id,
        title: rel.title,
        href: `${CONTENT_TYPES[rel.contentType].route}/${rel.id}`,
        themes: rel.themes,
        categories: rel.categories,
      },
    ];
  });

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ mastheadImage, title, description })} />

      {/* Placeholder content only */}
      {!body && (
        <PageStatus
          label={`Dataset Item: ${id}`}
          heading="Under development"
          description="The page you're looking for is under development."
        />
      )}

      {/* Content */}
      {body && (
        <Section>
          <div className="grid-row grid-gap">
            <div className="grid-col-12 desktop:grid-col-3">
              {/* TO DO: DatasetSidebar needs to be updated to a generic sidebar component */}
              <PageSidebar
                contentType={contentType}
                themes={themes}
                categories={categories}
                relatedContent={relatedItems}
              />
            </div>
            <div className="grid-col-12 desktop:grid-col-9">
              <h2 className="font-heading-xl margin-top-0 margin-bottom-2">Dataset Details</h2>
              {body?.map((block, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                <ContentBlockRenderer key={index} block={block} isMultiColumnLayout />
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
