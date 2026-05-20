import { Card } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/data-gallery/data-gallery-card-masthead";

export default function DataGalleryPage() {
  return (
    <div className="display-flex minh-masthead">
      <Card
        image={
          <Image
            src={DATA_GALLERY_CARD_MASTHEAD.imageSrc}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
          />
        }
        title={
          <h1 className="font-mono-3xl text-bold text-white margin-0">
            {DATA_GALLERY_CARD_MASTHEAD.title}
          </h1>
        }
        description={DATA_GALLERY_CARD_MASTHEAD.description}
        colorMode="brand"
        isMastHead
      />
    </div>
  );
}
