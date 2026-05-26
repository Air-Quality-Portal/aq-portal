import type { ComponentProps, PropsWithChildren } from "react";

export type SectionProps = ComponentProps<"section"> & {
  bgColor?: "base-lightest";
  isMultiColumnLayout?: boolean;
};

export const Section = ({
  children,
  bgColor,
  isMultiColumnLayout,
  className,
  ...props
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      className={`${className ?? ""} margin-y-7 ${bgColor ? `bg-${bgColor} padding-y-7` : ""}}`}
      {...props}
    >
      <div className={`grid-container ${isMultiColumnLayout ? "padding-x-0" : ""}`}>{children}</div>
    </section>
  );
};
