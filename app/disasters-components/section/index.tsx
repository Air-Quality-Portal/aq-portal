import type { ReactNode } from "react";
import "./styles.scss";

export const Section = ({
  children,
  greyBackground,
}: {
  children: ReactNode;
  greyBackground?: boolean;
}) => {
  return (
    <section
      className={`padding-top-7 ${greyBackground && "full-bleed-bg bg-base-lightest padding-bottom-7"}`}
    >
      {children}
    </section>
  );
};
