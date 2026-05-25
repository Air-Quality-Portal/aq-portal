import { Link } from "@teamimpact/veda-ui-blocks";

import { LogoEmblem, Section, SectionHeading } from "@/app/components";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about-page-content";

export default function AboutPage() {
  return (
    <Section>
      <div className="grid-row">
        <div className="grid-col-12">
          <div className="display-flex flex-row flex-align-start margin-bottom-2">
            <div className="text-primary flex-shrink-0 margin-bottom-0 margin-right-3">
              <LogoEmblem
                width={ABOUT_PAGE_BODY.emblem.width}
                height={ABOUT_PAGE_BODY.emblem.height}
                ariaLabel={ABOUT_PAGE_BODY.emblem.ariaLabel}
                className="display-block"
              />
            </div>
            <h1 className="text-bold line-height-sans-1 margin-0">{ABOUT_PAGE_BODY.pageTitle}</h1>
          </div>
          <SectionHeading className="text-primary-dark">
            {ABOUT_PAGE_BODY.sectionHeading}
          </SectionHeading>
          <p className="margin-top-0">{ABOUT_PAGE_BODY.missionParagraph}</p>
          <div className="display-flex flex-column flex-align-start">
            {ABOUT_PAGE_BODY.ctas.map((cta, index) => (
              <Link
                key={`${cta.href}-${cta.label}`}
                href={cta.href}
                target={cta.target}
                rel={cta.rel}
                variant="text"
                isExternal
                className={index < ABOUT_PAGE_BODY.ctas.length - 1 ? "margin-bottom-1" : ""}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
