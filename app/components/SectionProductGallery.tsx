import type { CardDetailedProps } from "@teamimpact/veda-ui-blocks";
import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";

type SectionProductGallery = SectionProps & {
  sectionHeading?: ReactNode;
  cards: IterableItemWithId<CardDetailedProps>[];
};

export const SectionProductGallery = ({
  sectionHeading,
  cards,
  children,
  ...sectionProps
}: SectionProductGallery) => {
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      <div className="grid-col-12 grid-gap-2 margin-bottom-neg-2">
        {cards.map((props) => (
          <div key={props.id} className={`grid-row margin-bottom-2 height-card-sm`}>
            <CardDetailed imagePosition="left" {...props} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
