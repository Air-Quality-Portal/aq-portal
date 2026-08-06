import { Card, CardContact, InPageNavigation } from "@teamimpact/veda-ui-blocks";
import { ContentBlockRenderer, ContentHeading, Section } from "@/app/components";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about__page";

const ABOUT_CONTENT_ID = "about-page-content";

export default function AboutPage() {
  const { body, contacts } = ABOUT_PAGE_BODY;

  return (
    <Section>
      <Card className="height-masthead" isMastHead title={"About AIR4US"} />

      <div className="grid-container padding-y-7">
        <div className="grid-row grid-gap">
          <div className="grid-col-3 display-none desktop:display-block">
            <InPageNavigation
              title="On THIS PAGE"
              contentSelector={`#${ABOUT_CONTENT_ID}`}
              headingElements="h3"
            />
          </div>
          <div className="grid-col-9 usa-prose" id={ABOUT_CONTENT_ID}>
            {body.map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} />
            ))}
            {contacts && (
              <Section>
                {contacts.heading && (
                  <ContentHeading heading={contacts.heading} headingLevel={contacts.headingLevel} />
                )}
                {contacts.lead && <p>{contacts.lead}</p>}
                <div className="margin-top-2">
                  {contacts.contacts.map((contact) => (
                    <CardContact
                      key={contact.email}
                      className="margin-bottom-2"
                      {...contact}
                      titleAs={contact.titleAs ?? "h4"}
                    />
                  ))}
                </div>
              </Section>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
