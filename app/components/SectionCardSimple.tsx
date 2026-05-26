import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { CardSimple } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";

type SectionCardSimpleProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: [
    IterableItemWithId<CardSimpleProps>,
    IterableItemWithId<CardSimpleProps>,
    IterableItemWithId<CardSimpleProps>,
    IterableItemWithId<CardSimpleProps>,
  ];
};

export const SectionCardSimple = ({
  sectionHeading,
  cards,
  children,
  ...sectionProps
}: SectionCardSimpleProps) => {
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {cards.map((props) => (
          <div
            key={props.id}
            className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 height-card-md"
          >
            <CardSimple {...props} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
