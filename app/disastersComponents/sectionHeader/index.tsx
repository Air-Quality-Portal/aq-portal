import type React from "react";

export const SectionHeader = ({ children, className, ...props }: React.ComponentProps<"h2">) => {
  return (
    <h2
      className={`font-sans-2xl padding-bottom-2 margin-0 ${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </h2>
  );
};
