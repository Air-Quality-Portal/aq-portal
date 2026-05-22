import { Card, type CardProps } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components/";
import type { IterableItemWithId } from "@/app/site-config/types";

export type SectionCardCarouselProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: IterableItemWithId<CardProps>[];
};

export const SectionCardCarousel = ({
  sectionHeading,
  cards,
  children,
  ...sectionProps
}: SectionCardCarouselProps) => {
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}

      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="grid-col-12 tablet:grid-col-6 margin-bottom-2 display-flex height-card-md"
            >
              <Card {...card} />
            </div>
          );
        })}
      </div>
      {children}
    </Section>
  );
};
