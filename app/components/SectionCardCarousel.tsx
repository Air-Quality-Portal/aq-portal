import { Card, type CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";
import type { IterableItemWithId } from "./types";

type SectionCardCarouselProps = {
  sectionHeading?: ReactNode;
  cards: IterableItemWithId<CardSimpleProps>[];
};

export const SectionCardCarousel = ({ sectionHeading, cards }: SectionCardCarouselProps) => {
  return (
    <section className="padding-y-7">
      <div className="grid-container">
        {sectionHeading && (
          <SectionHeading className="margin-bottom-4">{sectionHeading}</SectionHeading>
        )}
      </div>
      <div className="grid-container">
        <div className="grid-row grid-gap-2 margin-bottom-neg-2">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className="grid-col-12 tablet:grid-col-6 desktop:grid-col-6 margin-bottom-2"
              >
                <Card {...card} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
