import { Link } from "@teamimpact/veda-ui-blocks";
import { ContentHeading, ContentLead, Section } from "@/app/components";
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
            <Link {...makeButtonOutlineLink(link.href, link.isExternal)}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
