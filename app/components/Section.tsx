import type { ComponentProps, PropsWithChildren } from "react";

export type SectionProps = ComponentProps<"section"> & {
  bgColor?: "base-lightest";
};

export const Section = ({
  children,
  bgColor,
  className,
  ...props
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      className={`${className ?? ""} margin-y-7 ${bgColor ? `bg-${bgColor} padding-y-7` : ""}`}
      {...props}
    >
      <div className="grid-container">{children}</div>
    </section>
  );
};
