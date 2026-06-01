import { Section, type SectionProps } from "@/app/components/Section";
import type { SectionOverviewItemProps } from "@/app/site-config/event/event.helpers";

const ContainerItem = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <div className="grid-col-12 tablet:grid-col-4 margin-bottom-2">
    <div className="font-body-md margin-bottom-1 text-semibold">{title}</div>
    <span className="padding-top-1">{content}</span>
  </div>
);

type SectionOverviewProps = SectionProps & SectionOverviewItemProps;

export const SectionOverview = ({ overviewItems, className, ...rest }: SectionOverviewProps) => {
  return (
    <Section className={`margin-top-0 ${className}`} {...rest}>
      <h2 className="font-sans-3xl margin-top-0">Overview</h2>
      <div className={"grid-row border-top border-bottom border-base-light padding-top-2"}>
        {overviewItems.map((i) => (
          <ContainerItem key={i.title} {...i} />
        ))}
      </div>
    </Section>
  );
};
