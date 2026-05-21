import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead } from "@/app/components";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/data-gallery-card-masthead";
import { makeCardDetailedImageLeftProps } from "../components/content.helpers";
import { DATASETS } from "../site-config/dataset/datasets";

export default function DataGalleryPage() {
  return (
    <>
      <PageMasthead {...DATA_GALLERY_CARD_MASTHEAD} />
      <section className="grid-container padding-y-6">
        <div className="grid-row grid-gap">
          {DATASETS.map(({ id, ...card }) => (
            <div key={id} className="grid-col-12">
              <CardDetailed {...makeCardDetailedImageLeftProps(card)} className="height-card-sm" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
