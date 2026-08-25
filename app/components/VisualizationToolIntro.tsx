import { Link } from "@teamimpact/veda-ui-blocks";

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
  <div className="display-flex flex-align-start flex-justify-between">
    <div>
      <h1 className="text-primary font-sans-lg text-normal line-height-1 margin-0">{heading}</h1>
      <p className="font-sans-xs line-height-sans-5 text-normal text-base margin-top-1 margin-bottom-0">
        {description}
      </p>
    </div>
    <div className="flex-align-end margin-left-auto">
      <Link variant="button" isExternal href={callToAction.href}>
        {callToAction.label}
      </Link>
    </div>
  </div>
);
