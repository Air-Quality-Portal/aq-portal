import { SectionHeading } from "@/app/components";

export function ContentHeading({
  heading,
  headingLevel,
}: {
  heading: string;
  headingLevel?: "h2" | "h3" | "h4";
}) {
  if (headingLevel === "h4") return <div className="font-sans-md margin-bottom-1">{heading}</div>;

  if (headingLevel === "h3") return <div className="font-sans-lg margin-bottom-1">{heading}</div>;

  return <SectionHeading>{heading}</SectionHeading>;
}
