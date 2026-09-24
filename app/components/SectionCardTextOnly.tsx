import type { ComponentProps, ReactNode } from "react";
import { makeCardDetailedTextOnlyProps } from "@/app/_utilities/content.helpers";
import { ContentHeading, SectionCardDetailed } from "@/app/components";
import type { CardTextOnlySection } from "@/app/site-config/types";

export function SectionCardTextOnly({
  section,
  maxColumns = 1,
  beforeCards,
  cardsContainerProps,
  children,
}: {
  section: CardTextOnlySection;
  /** Cards per row on tablet and up. @default 1 */
  maxColumns?: 1 | 2;
  beforeCards?: ReactNode;
  cardsContainerProps?: ComponentProps<"div">;
  children?: ReactNode;
}) {
  const cards = section.items.map(({ id, callToAction, ...item }) => ({
    key: id,
    ...makeCardDetailedTextOnlyProps({
      id,
      ...item,
      className: "height-full border-1px border-base-lighter",
    }),
    ...(callToAction && {
      callToAction: { ...callToAction, variant: "button" as const, style: { flex: "none" } },
    }),
  }));

  return (
    <SectionCardDetailed
      isMultiColumnLayout
      maxColumns={maxColumns}
      description={section.lead}
      sectionHeading={
        section.heading && (
          <ContentHeading heading={section.heading} headingLevel={section.headingLevel ?? "h3"} />
        )
      }
      beforeCards={beforeCards}
      cardsContainerProps={cardsContainerProps}
      cards={cards}
    >
      {children}
    </SectionCardDetailed>
  );
}
