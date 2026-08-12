import { CardContact } from "@teamimpact/veda-ui-blocks";
import { ContentHeading, ContentLead, Section } from "@/app/components";
import type { ContactSection } from "@/app/site-config/types";

export function SectionContacts({ section }: { section: ContactSection }) {
  return (
    <Section isMultiColumnLayout>
      {section.heading && (
        <ContentHeading heading={section.heading} headingLevel={section.headingLevel ?? "h2"} />
      )}
      <ContentLead lead={section.lead} />
      <div className="display-flex flex-column gap-4">
        {section.contacts.map((contact) => (
          <CardContact
            key={contact.email}
            title={contact.title}
            titleAs={contact.titleAs ?? "h3"}
            name={contact.name}
            email={contact.email}
          />
        ))}
      </div>
    </Section>
  );
}
