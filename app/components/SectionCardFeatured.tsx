import { Card, type CardProps } from "@teamimpact/veda-ui-blocks";
import { Section, type SectionProps } from "@/app/components";

type SectionCardFeaturedProps = SectionProps & {
  card: CardProps;
};

export const SectionCardFeatured = ({
  card,
  children,
  ...sectionProps
}: SectionCardFeaturedProps) => (
  <Section {...sectionProps}>
    <div className="grid-row">
      <Card {...card} />
    </div>
    {children}
  </Section>
);
