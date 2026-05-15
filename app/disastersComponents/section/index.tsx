import React, { type PropsWithChildren, type ReactNode } from "react";

type SectionProps = React.ComponentProps<"section"> & {
  heading?: ReactNode;
  link?: ReactNode;
  bgColor?: "base-lightest";
};

export const Section = ({
  children,
  bgColor,
  heading,
  link,
  ...props
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className={`margin-y-7 ${bgColor ? `bg-${bgColor} padding-y-7` : ""}`} {...props}>
      <div className="grid-container">{children}</div>
    </section>
  );
};
