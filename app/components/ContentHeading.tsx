import type { ContentHeadingLevel } from "@/app/site-config/types";
import { SectionHeading } from "./SectionHeading";

export function ContentHeading({
  heading,
  headingLevel,
}: {
  heading: string;
  headingLevel?: ContentHeadingLevel;
}) {
  if (headingLevel === "h4")
    return <h4 className="font-heading-md margin-bottom-2 text-light">{heading}</h4>;

  if (headingLevel === "h3")
    return <h3 className="font-heading-lg margin-bottom-2 text-light">{heading}</h3>;

  return <SectionHeading>{heading}</SectionHeading>;
}
