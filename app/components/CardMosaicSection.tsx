import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { CardSimple } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";

import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

type CardWithId = CardSimpleProps & { id: string };

type CardMosaicSectionProps = {
  sectionHeading?: ReactNode;
  cards: CardWithId[];
};

/**
 * Mosaic grid: [0] featured (2 cols), [1] regular (1 col), [2–3] compact stacked (1 col).
 * Expects exactly 4 cards.
 */
export const CardMosaicSection = ({ sectionHeading, cards }: CardMosaicSectionProps) => {
  return (
    <Section>
      {sectionHeading && <SectionHeading>{sectionHeading}</SectionHeading>}
      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {/* Featured card: full-width → desktop: 2 of 4 cols */}
        <div className="grid-col-12 desktop:grid-col-6 margin-bottom-2 height-mobile">
          <CardSimple {...cards[0]} />
        </div>
        {/* Regular card: full-width → tablet: half → desktop: 1 of 4 cols */}
        <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 height-mobile">
          <CardSimple {...cards[1]} />
        </div>
        {/* Stacked half-height cards: full-width → tablet: half → desktop: 1 of 4 cols */}
        <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 display-flex flex-column height-mobile">
          <div className="flex-1 margin-bottom-2">
            <CardSimple {...cards[2]} size="compact" />
          </div>
          <div className="flex-1">
            <CardSimple {...cards[3]} size="compact" />
          </div>
        </div>
      </div>
    </Section>
  );
};
