import type { ComponentProps } from "react";

export const SectionHeading = ({ children, className, ...props }: ComponentProps<"h2">) => {
  return (
    <h2
      className={`font-sans-2xl padding-bottom-2 margin-0 ${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </h2>
  );
};
