import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { CardSimple } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";
import { getGridColumnClass } from "./component.helpers";

type SectionCardSimpleProps = SectionProps & {
  sectionHeading?: ReactNode;
  description?: string;
  cards: IterableItemWithId<CardSimpleProps>[];
};

export const SectionCardSimple = ({
  sectionHeading,
  description,
  cards,
  children,
  ...sectionProps
}: SectionCardSimpleProps) => {
  const gridColumnClass = getGridColumnClass(cards.length);
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      {description && <p className="text-base margin-top-0 margin-bottom-3">{description}</p>}
      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {cards.map(({ key: _key, ...cardProps }) => (
          <div key={cardProps.id} className={`${gridColumnClass} margin-bottom-2 height-card-md`}>
            <CardSimple {...cardProps} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
