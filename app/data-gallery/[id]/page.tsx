import { notFound } from "next/navigation";

import { ContentBlockRenderer, PageMasthead, Section } from "@/app/components";
import { DATASETS } from "@/app/site-config/dataset";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/data-gallery-card-masthead";
import { DatasetSidebar } from "./DatasetSidebar";

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataset = DATASETS.find((d) => d.id === id);

  if (!dataset) notFound();

  const { title, description, themes, categories, body } = dataset;

  return (
    <>
      <PageMasthead
        image={DATA_GALLERY_CARD_MASTHEAD.image}
        title={title}
        description={description}
      />
      <Section>
        <div className="grid-row grid-gap">
          <div className="grid-col-12 desktop:grid-col-3">
            <DatasetSidebar themes={themes} categories={categories} />
          </div>
          <div className="grid-col-12 desktop:grid-col-9">
            <h2 className="font-heading-xl margin-top-0 margin-bottom-2">Dataset Details</h2>
            {body.map((block, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
              <ContentBlockRenderer key={index} block={block} inline />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
