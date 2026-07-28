import type { CardDetailedProps } from "@teamimpact/veda-ui-blocks";
import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";

type SectionCardDetailedProps = SectionProps & {
  sectionHeading?: ReactNode;
  description?: string;
  cards: IterableItemWithId<CardDetailedProps>[];
};

export const SectionCardDetailed = ({
  sectionHeading,
  description,
  cards,
  children,
  ...sectionProps
}: SectionCardDetailedProps) => {
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      {description && <p className="text-base margin-top-0 margin-bottom-3">{description}</p>}
      <div className="grid-row grid-gap">
        {cards.map((props) => (
          <div
            key={props.id}
            className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-2"
          >
            <CardDetailed {...props} className={props.className ?? "height-card-md"} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
