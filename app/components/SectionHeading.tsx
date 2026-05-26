"use client";

import { Link } from "@teamimpact/veda-ui-blocks";
import NextLink from "next/link";

import type { ComponentProps } from "react";

type SectionHeadingProps = ComponentProps<"h2"> & {
  href?: ComponentProps<typeof NextLink>["href"];
};

export const SectionHeading = ({ href, children, className, ...props }: SectionHeadingProps) => {
  return (
    <div className="display-flex flex-justify flex-align-center">
      <h2 className={`${className ?? ""} font-sans-2xl padding-bottom-2 margin-0`} {...props}>
        {children}
      </h2>
      {href && (
        // TODO: update once the veda-ui-blocks is updated to include the Link component
        <Link as={NextLink} href={href} variant="arrow" size="lg">
          View All
        </Link>
      )}
    </div>
  );
};
