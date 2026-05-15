import React, { type PropsWithChildren, type ReactNode } from "react";
import { SectionHeader } from "../sectionHeader";

type SectionProps = React.ComponentProps<"section"> & {
  heading?: ReactNode;
  anchorId?: ReactNode;
  bgColor?: "base-lightest";
};

export const Section = ({
  children,
  bgColor,
  heading,
  anchorId,
  ...props
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      id={anchorId ? (typeof anchorId === "string" ? anchorId : undefined) : undefined}
      className={`margin-y-7 ${bgColor ? `bg-${bgColor} padding-y-7` : ""}`}
      {...props}
    >
      <SectionHeader>{heading}</SectionHeader>
      <div className="grid-container">{children}</div>
    </section>
  );
};
