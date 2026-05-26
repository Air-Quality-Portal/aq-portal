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

  const isCardSimpleProps = (
    c: IterableItemWithId<CardProps | CardSimpleProps>,
  ): c is IterableItemWithId<CardSimpleProps> => "url" in c;

  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}

      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className={`grid-col-12 tablet:grid-col-6 ${dynamicGridClassName(cards)} margin-bottom-2 display-flex height-card-md`}
            >
              {cardComponentType === "simple" && isCardSimpleProps(card) ? (
                <CardSimple {...card} />
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
