import { notFound } from "next/navigation";

import { ContentBlockRenderer, PageMasthead, PageStatus, Section } from "@/app/components";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { DATASETS } from "@/app/site-config/dataset";

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataset = DATASETS.find((d) => d.id === id);

  if (!dataset) notFound();

  const { title, mastheadImage, body } = dataset;

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
            <div className="grid-col-12">
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
