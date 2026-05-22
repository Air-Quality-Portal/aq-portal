import { notFound } from "next/navigation";

import { DatasetMap, PageMasthead, Section } from "@/app/components";
import { DATASETS } from "@/app/site-config/dataset";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/data-gallery-card-masthead";
import { DatasetSidebar } from "./DatasetSidebar";

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataset = DATASETS.find((d) => d.id === id);

  if (!dataset) notFound();

  const { title, description, themes, categories, stacLayer, body } = dataset;

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
            <div className="margin-bottom-4">
              {body.map((block, blockIndex) => {
                if (block.type === "text") {
                  return (
                    <div key={block.heading || `text-${blockIndex}`} className="margin-bottom-4">
                      {block.heading && (
                        <h3 className="font-heading-lg margin-bottom-1">{block.heading}</h3>
                      )}
                      {block.paragraphs.map((p) => (
                        <p
                          key={`${block.heading || blockIndex}-${String(p).slice(0, 20)}`}
                          className="margin-bottom-1"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
              {stacLayer && (
                <div className="margin-top-6 margin-bottom-6">
                  <DatasetMap stacLayer={stacLayer} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
