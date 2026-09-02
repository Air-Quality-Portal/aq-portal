import type { ReactNode } from "react";
import { AppLinkStyled } from "@/app/components/AppLink";

export type SectionIntroProps = {
  /** Small uppercase label above the heading. */
  eyebrow: string;
  /** Heading copy; wrap an accented phrase in `<span className="text-primary">`. */
  heading: ReactNode;
  description?: string;
  /** Optional outline button aligned to the right of the heading block. */
  callToAction?: {
    label: string;
    href: string;
  };
};

export const SectionIntro = ({
  eyebrow,
  heading,
  description,
  callToAction,
}: SectionIntroProps) => (
  <div className="display-flex flex-justify flex-align-start flex-wrap margin-bottom-3">
    <div className="flex-fill">
      <p className="font-mono-3xs text-base-light text-uppercase text-ls-1 margin-top-0 margin-bottom-1">
        {eyebrow}
      </p>
      <h2 className="font-heading-lg line-height-serif-3 text-light text-ink margin-0">
        {heading}
      </h2>
      {description && (
        <p className="font-sans-sm line-height-sans-5 text-normal text-base margin-top-1 margin-bottom-0 tablet:grid-col-6">
          {description}
        </p>
      )}
    </div>
    {callToAction && (
      <AppLinkStyled href={callToAction.href} variant="button-outline">
        {callToAction.label}
      </AppLinkStyled>
    )}
  </div>
);
