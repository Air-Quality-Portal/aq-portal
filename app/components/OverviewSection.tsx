import { Link } from "@teamimpact/veda-ui-blocks";
import type { OverviewSection } from "@/app/site-config/types";
import { Section } from "./Section";

const ContainerItem = ({ title, prop }: { title: string; prop: string }) => (
  <div className="grid-col-4">
    <div className="font-body-md margin-bottom-1 text-semibold">{title}</div>
    <span className="padding-top-1">{prop}</span>
  </div>
);

export const OverviewBlock = ({
  region,
  startDate,
  disastersType,
  overviewLink1,
  overviewLink2,
  isMultiColumnLayout,
}: OverviewSection & { isMultiColumnLayout?: boolean }) => {
  return (
    <Section isMultiColumnLayout={isMultiColumnLayout} className="margin-top-0">
      <h2 className="font-sans-3xl margin-top-0">Overview</h2>
      <div
        className={`grid-row padding-y-2 border-top border-base-light ${overviewLink1 || overviewLink2 ? "" : "border-bottom"}`}
      >
        {region && <ContainerItem title="Region" prop={region} />}
        {startDate && <ContainerItem title="Start Date" prop={startDate} />}

        {disastersType && <ContainerItem title="Disaster Type" prop={disastersType} />}
      </div>
      {overviewLink1 || overviewLink2 ? (
        <div className="grid-row border-bottom border-base-light padding-bottom-2">
          {overviewLink1 && (
            <div className="grid-col-4">
              <Link className="font-body-md margin-bottom-1 text-semibold" href={overviewLink1}>
                What the U.S. government is doing
              </Link>
            </div>
          )}
          {overviewLink2 && (
            <div className="grid-col-4">
              <Link className="font-body-md margin-bottom-1 text-semibold" href={overviewLink2}>
                What DHS and FEMA are doing
              </Link>
            </div>
          )}
        </div>
      ) : null}
    </Section>
  );
};
