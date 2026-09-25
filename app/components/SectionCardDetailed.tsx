import type { CardDetailedProps } from "@teamimpact/veda-ui-blocks";
import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import type { ComponentProps, ReactNode } from "react";
import { formatPollutants } from "@/app/_utilities/pollutants.helpers";
import { Section, type SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";

type SectionCardDetailedProps = SectionProps & {
  sectionHeading?: ReactNode;
  description?: string;
  beforeCards?: ReactNode;
  cardsContainerProps?: ComponentProps<"div">;
  cards: IterableItemWithId<CardDetailedProps>[];
  /** Cards per row on tablet and up. @default 2 */
  maxColumns?: 1 | 2;
  /** Vertical spacing between card rows, in USWDS spacing units. @default 2 */
  rowGap?: 2 | 4 | 6;
};

export const SectionCardDetailed = ({
  sectionHeading,
  description,
  beforeCards,
  cardsContainerProps,
  cards,
  maxColumns = 2,
  rowGap = 2,
  children,
  ...sectionProps
}: SectionCardDetailedProps) => {
  const gridColumnClass = maxColumns === 1 ? "grid-col-12" : "grid-col-12 tablet:grid-col-6";
  const cardsContent = (
    <>
      <div className={`grid-row grid-gap-4 margin-bottom-neg-${rowGap}`}>
        {cards.map(({ key, id, className, ...props }) => (
          <div key={`div-${id}`} className={`${gridColumnClass} margin-bottom-${rowGap}`}>
            <CardDetailed
              key={key}
              {...props}
              id={`card-${id}`}
              className={className ?? "height-card-md"}
            />
          </div>
        ))}
      </div>
      {children}
    </>
  );

  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      {description && <p className="text-base">{formatPollutants(description)}</p>}
      {beforeCards}
      {cardsContainerProps ? <div {...cardsContainerProps}>{cardsContent}</div> : cardsContent}
    </Section>
  );
};
