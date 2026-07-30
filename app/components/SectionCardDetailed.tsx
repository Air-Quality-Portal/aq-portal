import type { CardDetailedProps } from "@teamimpact/veda-ui-blocks";
import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";

type SectionCardDetailedProps = SectionProps & {
  sectionHeading?: ReactNode;
  description?: string;
  cards: IterableItemWithId<CardDetailedProps>[];
  /** Cards per row on tablet and up. @default 2 */
  maxColumns?: 1 | 2;
};

export const SectionCardDetailed = ({
  sectionHeading,
  description,
  cards,
  maxColumns = 2,
  children,
  ...sectionProps
}: SectionCardDetailedProps) => {
  const gridColumnClass = maxColumns === 1 ? "grid-col-12" : "grid-col-12 tablet:grid-col-6";

  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      {description && <p className="text-base">{description}</p>}
      <div className="grid-row ">
        {cards.map((props) => (
          <div key={props.id} className={`${gridColumnClass} margin-bottom-1`}>
            <CardDetailed {...props} className={props.className ?? "height-card-md"} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
