import type { CardMiniProps } from "@teamimpact/veda-ui-blocks";
import { CardMini } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components";
import type { IterableItemWithId } from "@/app/site-config/types";

type SectionCardMiniProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: [
    IterableItemWithId<CardMiniProps>,
    IterableItemWithId<CardMiniProps>,
    IterableItemWithId<CardMiniProps>,
    IterableItemWithId<CardMiniProps>,
  ];
};

export const SectionCardMini = ({
  sectionHeading,
  cards,
  children,
  ...sectionProps
}: SectionCardMiniProps) => {
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {cards.map((props) => (
          <div
            key={props.id}
            className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 height-card-xs"
          >
            <CardMini {...props} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
