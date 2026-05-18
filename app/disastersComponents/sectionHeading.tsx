import type { ComponentProps, ReactNode } from "react";

export const SectionHeading = ({ children, className, id, ...props }: ComponentProps<"h2">) => {
  return (
    <h2
      id={id}
      className={`font-sans-2xl padding-bottom-2 margin-0 ${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </h2>
  );
};
