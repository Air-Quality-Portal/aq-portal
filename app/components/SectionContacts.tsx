import { CardCTA } from "@teamimpact/veda-ui-blocks";
import { ContentHeading, ContentLead, Section } from "@/app/components";
import type { ContactSection } from "@/app/site-config/types";

export function SectionContacts({ section }: { section: ContactSection }) {
  return (
    <Section isMultiColumnLayout>
      {section.heading && (
        <ContentHeading heading={section.heading} headingLevel={section.headingLevel ?? "h2"} />
      )}
      <ContentLead lead={section.lead} />
      <div className="display-flex flex-column">
        {section.contacts.map((contact) => (
          <CardCTA
            className="margin-bottom-3"
            key={contact.email}
            title={<span className="font-body-sm text-bold">{contact.title}</span>}
            callToAction={{
              label: contact.label,
              href: `mailto:${contact.email}`,
              isExternal: false,
              variant: "text",
            }}
          />
        ))}
      </div>
    </Section>
  );
}
