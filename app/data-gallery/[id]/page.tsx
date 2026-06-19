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
import { CONTENT_TYPES } from "@/app/site-config/types";

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataset = DATASETS.find((d) => d.id === id);

  if (!dataset) notFound();

  const {
    contentType,
    title,
    mastheadImage,
    categories,
    body,
    relatedContent: relatedIds = [],
  } = dataset;

  // TODO: Move to content helpers, and broaden to fit any content type use case
  // Can related content be of a different content type?
  const relatedItems = relatedIds.flatMap((relId) => {
    const rel = DATASETS.find((d) => d.id === relId);
    if (!rel) return [];
    return [
      {
        id: rel.id,
        title: rel.title,
        href: `${CONTENT_TYPES[rel.contentType].route}/${rel.id}`,
        categories: rel.categories,
      },
    ];
  });

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ mastheadImage, title })} />

      {/* Placeholder content only */}
      {!body && (
        <PageStatus
          heading="Under Development"
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
                categories={categories}
                relatedContent={relatedItems}
              />
            </div>
            <div className="grid-col-12 desktop:grid-col-9">
              <div className="margin-top-neg-7">
                {body?.map((block, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                  <ContentBlockRenderer key={index} block={block} isMultiColumnLayout />
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
