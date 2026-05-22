import { Section, SectionHeading } from "@/app/components";
import { ABOUT_PAGE_CONTENT } from "@/app/site-config/about/about-page-content";

export default function AboutPage() {
  return (
    <Section>
      <div className="grid-row">
        <div className="grid-col-12 desktop:grid-col-10 widescreen:grid-col-8 desktop:margin-left-1">
          <h1 className="font-ui-3xl text-bold text-primary-dark line-height-sans-1 margin-bottom-3 maxw-mobile">
            {ABOUT_PAGE_CONTENT.heroTitle}
          </h1>
          <SectionHeading className="text-primary-dark">
            {ABOUT_PAGE_CONTENT.sectionHeading}
          </SectionHeading>
          <p className="font-body-md text-primary-dark margin-top-0 margin-bottom-4">
            {ABOUT_PAGE_CONTENT.missionParagraph}
          </p>
          <div className="display-flex flex-column flex-gap-1 flex-align-start">
            <a
              href={ABOUT_PAGE_CONTENT.contactCTA.href}
              className="text-primary text-bold text-underline margin-bottom-1"
            >
              {ABOUT_PAGE_CONTENT.contactCTA.label}
            </a>
            <a
              href={ABOUT_PAGE_CONTENT.newsletterCTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-bold text-underline"
            >
              {ABOUT_PAGE_CONTENT.newsletterCTA.label}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
