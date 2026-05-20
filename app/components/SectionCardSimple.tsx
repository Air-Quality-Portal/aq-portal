import type { CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import { CardSimple } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, SectionHeading, type SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/components/types";
import { STYLE_CARDSIMPLE_HEIGHT } from "../site-config/constants";

type SectionCardSimpleProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: IterableItemWithId<CardSimpleProps>[];
};

export const SectionCardSimple = ({
  sectionHeading,
  cards,
  bgColor,
  children,
}: SectionCardSimpleProps) => {
  return (
    <Section bgColor={bgColor}>
      {sectionHeading && <SectionHeading>{sectionHeading}</SectionHeading>}
      <div className="grid-row grid-gap-2 margin-bottom-6">
        {cards.map((props) => (
          <div
            key={props.id}
            className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2"
            style={{ height: STYLE_CARDSIMPLE_HEIGHT }}
          >
            <CardSimple {...props} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
