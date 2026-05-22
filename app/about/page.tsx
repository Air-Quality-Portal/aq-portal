import { Section, SectionHeading } from "@/app/components";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about-page-content";

export default function AboutPage() {
  return (
    <Section>
      <div className="grid-row">
        <div className="grid-col-12 desktop:grid-col-10 widescreen:grid-col-8 desktop:margin-left-1">
          <h1 className="font-ui-3xl text-bold text-primary-dark line-height-sans-1 margin-bottom-3 maxw-mobile">
            {ABOUT_PAGE_BODY.pageTitle}
          </h1>
          <SectionHeading className="text-primary-dark">
            {ABOUT_PAGE_BODY.sectionHeading}
          </SectionHeading>
          <p className="margin-bottom-4">{ABOUT_PAGE_BODY.missionParagraph}</p>
          <div className="display-flex flex-column flex-gap-1 flex-align-start">
            {ABOUT_PAGE_BODY.ctas.map((cta, index) => (
              <a
                key={`${cta.href}-${cta.label}`}
                href={cta.href}
                target={cta.target}
                rel={cta.rel}
                className={`text-primary text-bold text-underline ${index < ABOUT_PAGE_BODY.ctas.length - 1 ? "margin-bottom-1" : ""}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
