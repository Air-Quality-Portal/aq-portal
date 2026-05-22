import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { CardSimple } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";

export type SectionCardSimpleProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: IterableItemWithId<CardSimpleProps>[];
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
      <div className="grid-row grid-gap-2 flex-no-wrap margin-bottom-6">
        {cards.map((props) => (
          <div key={props.id} className="flex-1 margin-bottom-2 height-card-md">
            <CardSimple {...props} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
