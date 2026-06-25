import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead, Section } from "@/app/components";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
import {
  makeCardDetailedImageLeftProps,
  makeCardMastHeadProps,
} from "../site-config/content.helpers";
import { DATASETS } from "../site-config/dataset";

export default function DataGalleryPage() {
  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(DATA_GALLERY_CARD_MASTHEAD)} />
      <Section>
        <div className="grid-row grid-gap">
          {DATASETS.map(({ id, thumbnailImage, category1, category2, category3, ...card }) => (
            <div key={id} className="grid-col-12 margin-y-1 desktop:margin-y-2">
              <CardDetailed
                {...makeCardDetailedImageLeftProps({
                  id,
                  thumbnailImage,
                  tags: [...category1, ...category2, ...category3],
                  ...card,
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
