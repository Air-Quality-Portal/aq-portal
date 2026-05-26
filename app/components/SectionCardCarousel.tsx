import { Card, type CardProps, CardSimple, type CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components/";
import type { IterableItemWithId } from "@/app/site-config/types";

export type SectionCardCarouselProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: IterableItemWithId<CardProps | CardSimpleProps>[];
  cardComponentType?: "simple" | "carousel";
};

export const SectionCardCarousel = ({
  sectionHeading,
  cards,
  children,
  cardComponentType,
  ...sectionProps
}: SectionCardCarouselProps) => {
  const simpleCards = cards as IterableItemWithId<CardSimpleProps>[];
  const carouselCards = cards as IterableItemWithId<CardProps>[];

  const dynamicGridClassName = (cards: IterableItemWithId<CardProps | CardSimpleProps>[]) => {
    switch (cards.length) {
      case 1:
        return "desktop:grid-col-12";
      case 2:
        return "desktop:grid-col-6";
      case 3:
        return "desktop:grid-col-4";
      default:
        return "desktop:grid-col-3";
    }
  };

  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}

      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {(cardComponentType === "simple" ? simpleCards : carouselCards).map((card) => {
          return (
            <div
              key={card.id}
              className={`grid-col-12 tablet:grid-col-6 ${dynamicGridClassName(cards)} margin-bottom-2 display-flex height-card-md`}
            >
              {cardComponentType === "simple" ? (
                <CardSimple {...(card as IterableItemWithId<CardSimpleProps>)} />
              ) : (
                <Card {...(card as IterableItemWithId<CardProps>)} />
              )}
            </div>
          );
        })}
      </div>
      {children}
    </Section>
  );
};
