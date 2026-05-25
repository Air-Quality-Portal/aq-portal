import { Link } from "@teamimpact/veda-ui-blocks";

import { LogoEmblem, Section } from "@/app/components";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about-page-content";

export default function AboutPage() {
  return (
    <Section>
      <div className="grid-row">
        <div className="grid-col-12">
          <div className="display-flex flex-row flex-align-center">
            <div className="text-primary margin-right-3">
              <LogoEmblem
                width={ABOUT_PAGE_BODY.emblem.width}
                height={ABOUT_PAGE_BODY.emblem.height}
                ariaLabel={ABOUT_PAGE_BODY.emblem.ariaLabel}
                className="display-block"
              />
            </div>
            <h1 className="text-primary-dark">
              <span className="display-block">About the</span>
              <span className="display-block">NASA Disasters</span>
              <span className="display-block">Program</span>
            </h1>
          </div>
          <h2 className={`text-primary-dark font-heading-xl margin-top-3 margin-bottom-1`}>
            {ABOUT_PAGE_BODY.sectionHeading}
          </h2>
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
