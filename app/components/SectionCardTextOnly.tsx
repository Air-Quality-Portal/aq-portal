import { ContentHeading, SectionCardDetailed } from "@/app/components";
import { makeCardDetailedTextOnlyProps } from "@/app/site-config/content.helpers";
import type { CardTextOnlySection } from "@/app/site-config/types";

export function SectionCardTextOnly({
  section,
  maxColumns = 1,
}: {
  section: CardTextOnlySection;
  /** Cards per row on tablet and up. @default 1 */
  maxColumns?: 1 | 2;
}) {
  const cards = section.items.map(({ callToAction, ...item }) => ({
    ...makeCardDetailedTextOnlyProps({
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
      cards={cards}
    />
  );
}
