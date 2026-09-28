import { subscriptPollutantSymbols } from "@/app/_utilities/pollutants.helpers";
import { SectionHeading } from "@/app/components";
import type { ContentHeadingLevel } from "../site-config/types";

export function ContentHeading({
  heading,
  headingLevel,
}: {
  heading: string;
  headingLevel?: ContentHeadingLevel;
}) {
  const text = subscriptPollutantSymbols(heading);

  if (headingLevel === "h4")
    return <h4 className="font-heading-md margin-bottom-2 text-light">{text}</h4>;

  if (headingLevel === "h3")
    return <h3 className="font-heading-lg margin-bottom-2 text-light">{text}</h3>;

  return <SectionHeading>{text}</SectionHeading>;
}
