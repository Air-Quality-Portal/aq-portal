"use client";

import { Link } from "@teamimpact/veda-ui-blocks";
import NextLink from "next/link";

import type { ComponentProps } from "react";

export type SectionHeadingProps = ComponentProps<"h2"> & {
  href?: string;
  linkLabel?: string;
  sectionDescriptor?: "explore" | "visualize";
};

export const SectionHeading = ({
  href,
  linkLabel,
  children,
  className,
  sectionDescriptor,
  ...props
}: SectionHeadingProps) => {
  return (
    <div className="display-flex flex-justify flex-align-center">
      <div>
        {" "}
        <p className=" text-uppercase font-body-xs opacity-70 padding-bottom-1 margin-0">
          {sectionDescriptor}
        </p>
        <h2
          className={`${className ?? ""} font-serif-2xl text-light padding-bottom-2 margin-0`}
          {...props}
        >
          {children}
        </h2>
      </div>
      {href && (
        <Link
          as={NextLink}
          href={href as ComponentProps<typeof NextLink>["href"]}
          variant="button-outline"
          size="md"
        >
          {linkLabel ?? "View All"}
        </Link>
      )}
    </div>
  );
};
