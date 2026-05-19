import Link from "next/link";
import type { ComponentProps } from "react";

export type SectionHeadingProps = ComponentProps<"h2"> & {
  href?: ComponentProps<typeof Link>["href"];
};

export const SectionHeading = ({ href, children, className, ...props }: SectionHeadingProps) => {
  return (
    <div className="display-flex flex-justify flex-align-center">
      <h2
        className={`font-sans-2xl padding-bottom-2 margin-0 ${className ? ` ${className}` : ""}`}
        {...props}
      >
        {children}
      </h2>
      {href && (
        // TODO: update once the veda-ui-blocks is updated to include the Link component
        <Link href={href}>View All</Link>
      )}
    </div>
  );
};
