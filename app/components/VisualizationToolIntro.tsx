import { Link } from "@teamimpact/veda-ui-blocks";
import { formatPollutants } from "@/app/_utilities/pollutants.helpers";

export type VisualizationToolIntroProps = {
  heading: string;
  description: string;
  callToAction: {
    label: string;
    href: string;
  };
};

export const VisualizationToolIntro = ({
  heading,
  description,
  callToAction,
}: VisualizationToolIntroProps) => (
  <div className="display-flex flex-align-start flex-justify">
    <div>
      <h3 className="text-primary font-body-lg text-normal line-height-body-1 margin-0">
        {formatPollutants(heading)}
      </h3>
      <p className="font-sans-xs line-height-sans-5 text-normal text-base margin-top-1 margin-bottom-0">
        {formatPollutants(description)}
      </p>
    </div>
    <Link className="text-no-wrap" variant="button" isExternal href={callToAction.href}>
      {callToAction.label}
    </Link>
  </div>
);
