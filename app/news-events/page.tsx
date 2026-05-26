import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead, Section } from "@/app/components";
import { DATASTORIES } from "@/app/site-config/datastory";
import { NEWS } from "@/app/site-config/news";
import { NEWS_EVENTS_CARD_MASTHEAD } from "@/app/site-config/news-events/news-events-card-masthead";
import { STORIES } from "@/app/site-config/story";
import { makeCardDetailedImageLeftProps } from "../site-config/content.helpers";

export default function NewsEventsCollectionPage() {
  const items = [...NEWS, ...STORIES, ...DATASTORIES];

  return (
    <>
      <PageMasthead {...NEWS_EVENTS_CARD_MASTHEAD} />
      <Section>
        <div className="grid-row grid-gap">
          {items.map(({ id, thumbnailImage, contentType, categories, themes, ...card }) => (
            <div key={id} className="grid-col-12 margin-y-1 desktop:margin-y-2">
              <CardDetailed
                {...makeCardDetailedImageLeftProps({
                  id,
                  thumbnailImage,
                  contentType,
                  tags: [contentType, ...categories, ...themes],
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
