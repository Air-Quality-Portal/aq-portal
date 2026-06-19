import { Section, type SectionProps } from "@/app/components/Section";

type OverviewItem = { title: string; content: React.ReactNode };

type SectionOverviewItemProps = {
  overviewItems: OverviewItem[];
};

const ContainerItem = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <div className="grid-col-12 tablet:grid-col-4 margin-bottom-2">
    <div className="font-body-md margin-bottom-1 text-semibold">{title}</div>
    <span className="padding-top-1">{content}</span>
  </div>
);

type SectionOverviewProps = SectionProps & SectionOverviewItemProps;

export const SectionOverview = ({
  overviewItems,
  className = "",
  children,
  ...rest
}: SectionOverviewProps) => {
  return (
    <Section className={`padding-bottom-3 ${className}`} {...rest}>
      <h2 className="font-sans-3xl margin-top-0">Overview</h2>
      <div className={"grid-row border-top border-bottom border-base-light padding-top-2"}>
        {overviewItems.map((i: OverviewItem) => (
          <ContainerItem key={i.title} {...i} />
        ))}
      </div>
      {children}
    </Section>
  );
};
