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
  /** Vertical spacing between card rows, in USWDS spacing units. @default 2 */
  rowGap?: 2 | 4 | 6;
};

export const SectionCardDetailed = ({
  sectionHeading,
  description,
  cards,
  maxColumns = 2,
  rowGap = 2,
  children,
  ...sectionProps
}: SectionCardDetailedProps) => {
  const gridColumnClass = maxColumns === 1 ? "grid-col-12" : "grid-col-12 tablet:grid-col-6";

  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      {description && <p className="text-base">{description}</p>}
      <div className={`grid-row grid-gap-4 margin-bottom-neg-${rowGap}`}>
        {cards.map((props) => (
          <div key={props.id} className={`${gridColumnClass} margin-bottom-${rowGap}`}>
            <CardDetailed {...props} className={props.className ?? "height-card-md"} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
