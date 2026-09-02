"use client";

import type { ComponentProps } from "react";
import { AppLinkStyled } from "@/app/components/AppLink";

type SectionHeadingProps = ComponentProps<"h2"> & {
  href?: string;
  linkLabel?: string;
};

export const SectionHeading = ({
  href,
  linkLabel,
  children,
  className,
  ...props
}: SectionHeadingProps) => {
  return (
    <div className="display-flex flex-justify flex-align-center">
      <h2 className={`${className ?? ""} font-sans-2xl padding-bottom-2 margin-0`} {...props}>
        {children}
      </h2>
      {href && (
        <AppLinkStyled href={href} variant="arrow" size="lg">
          {linkLabel ?? "View All"}
        </AppLinkStyled>
      )}
    </div>
  );
};
