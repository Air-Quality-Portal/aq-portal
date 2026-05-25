import { Link } from "@teamimpact/veda-ui-blocks";
import type { OverviewSection } from "../site-config/types";

export const OverviewBlock = ({
  region,
  startDate,
  disastersType,
  DhsAndFema,
  usGovtDoing,
  showSidebar,
}: OverviewSection & { showSidebar: boolean }) => {
  const ContainerItem = ({ title, prop }: { title: string; prop: string }) => {
    return (
      <div className="grid-col-4">
        <div className="font-body-md margin-bottom-1 text-semibold">{title}</div>
        <span className="padding-t-1">{prop}</span>
      </div>
    );
  };

  return (
    <section className=" margin-bottom-7 ">
      <div className={`grid-container ${!showSidebar ? "padding-0" : ""}`}>
        <h2 className="font-sans-3xl margin-top-0">Overview</h2>
        <div
          className={`grid-row  padding-y-2 border-top border-base-light ${DhsAndFema || usGovtDoing ? "" : "border-bottom"}`}
        >
          {region && <ContainerItem title="Region" prop={region} />}
          {startDate && <ContainerItem title="Start Date" prop={startDate} />}

          {disastersType && <ContainerItem title="Disaster Type" prop={disastersType} />}
        </div>
        {DhsAndFema || usGovtDoing ? (
          <div className="grid-row border-bottom border-base-light padding-bottom-2">
            {usGovtDoing && (
              <div className="grid-col-4">
                <Link className="font-body-md margin-bottom-1 text-semibold" href={usGovtDoing.url}>
                  {usGovtDoing.text}
                </Link>
              </div>
            )}
            {DhsAndFema && (
              <div className="grid-col-4">
                <Link className="font-body-md margin-bottom-1 text-semibold" href={DhsAndFema.url}>
                  {DhsAndFema.text}
                </Link>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
};
