import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead, Section } from "@/app/components";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/data-gallery-card-masthead";
import { makeCardDetailedImageLeftProps } from "../site-config/content.helpers";
import { DATASETS } from "../site-config/dataset";

export default function DataGalleryPage() {
  return (
    <>
      <PageMasthead {...DATA_GALLERY_CARD_MASTHEAD} />
      <Section>
        <div className="grid-row grid-gap">
          {DATASETS.map(({ id, hazards, themes, ...card }) => (
            <div key={id} className="grid-col-12">
              <CardDetailed
                {...makeCardDetailedImageLeftProps({
                  ...card,
                  id,
                  tags: [...hazards, ...themes],
                })}
                className="height-card-sm"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
