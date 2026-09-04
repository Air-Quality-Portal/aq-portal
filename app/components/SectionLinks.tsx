import { ContentHeading, ContentLead, Section } from "@/app/components";
import { AppLinkStyled } from "@/app/components/AppLink";
import { makeButtonOutlineLink } from "@/app/site-config/content.helpers";
import type { LinkSection } from "@/app/site-config/types";

export function SectionLinks({ section }: { section: LinkSection }) {
  return (
    <Section isMultiColumnLayout>
      {section.heading && <ContentHeading heading={section.heading} headingLevel="h3" />}
      <ContentLead lead={section.lead} />
      <ul className="usa-list usa-list--unstyled">
        {section.links.map((link) => (
          <li key={link.href} className="margin-bottom-1">
            <AppLinkStyled {...makeButtonOutlineLink(link.href, link.isExternal)}>
              {link.label}
            </AppLinkStyled>
          </li>
        ))}
      </ul>
    </Section>
  );
}
