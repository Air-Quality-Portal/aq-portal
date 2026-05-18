import type { ComponentProps, ReactNode } from "react";

export const SectionHeading = ({
  children,
  className,
  anchorId,
  ...props
}: ComponentProps<"h2"> & { anchorId?: ReactNode }) => {
  return (
    <h2
      id={anchorId ? (typeof anchorId === "string" ? anchorId : undefined) : undefined}
      className={`font-sans-2xl padding-bottom-2 margin-0 ${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </h2>
  );
};
