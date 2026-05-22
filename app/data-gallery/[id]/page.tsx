import { notFound } from "next/navigation";

import { PageMasthead } from "@/app/components";
import { DATASETS } from "@/app/site-config/dataset";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/data-gallery-card-masthead";

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataset = DATASETS.find((d) => d.id === id);

  if (!dataset) notFound();

  return (
    <PageMasthead
      image={DATA_GALLERY_CARD_MASTHEAD.image}
      title={dataset.title}
      description={dataset.description}
    />
  );
}
