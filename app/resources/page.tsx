import { Card, InPageNavigation, Link } from "@teamimpact/veda-ui-blocks";
import {
  ContentBlockRenderer,
  ContentHeading,
  ContentLead,
  Section,
  SectionCardDetailed,
} from "@/app/components";
import {
  makeButtonOutlineLink,
  makeCardDetailedTextOnlyProps,
  makeWorkshopCardProps,
} from "@/app/site-config/content.helpers";
import { RESOURCES_PAGE_BODY } from "@/app/site-config/resources";
import type {
  ResourceLinkSection,
  ResourceTutorialSection,
  ResourceWorkshopSection,
} from "@/app/site-config/types";

const RESOURCES_CONTENT_ID = "resources-page-content";

const TUTORIAL_LEVEL_COLOR: Record<string, string> = {
  beginner: "success",
  intermediate: "info",
  advanced: "secondary",
};

function ResourceLinks({ section }: { section: ResourceLinkSection }) {
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

function ResourceTutorials({ section }: { section: ResourceTutorialSection }) {
  const cards = section.tutorials.map((tutorial) =>
    makeCardDetailedTextOnlyProps({
      id: tutorial.href,
      className: "height-full border-1px border-base-lighter",
      title: tutorial.title,
      href: tutorial.href,
      description: tutorial.description,
      tags: [
        ...(tutorial.duration
          ? [{ label: tutorial.duration, variant: "outline" as const, color: "base" }]
          : []),
        ...(tutorial.level
          ? [
              {
                label: tutorial.level.toUpperCase(),
                variant: "solid" as const,
                color: `${TUTORIAL_LEVEL_COLOR[tutorial.level]}-lighter`,
                textColor: `${TUTORIAL_LEVEL_COLOR[tutorial.level]}-darker`,
              },
            ]
          : []),
      ],
    }),
  );

  return (
    <SectionCardDetailed
      isMultiColumnLayout
      maxColumns={1}
      description={section.lead}
      sectionHeading={
        section.heading && <ContentHeading heading={section.heading} headingLevel="h3" />
      }
      cards={cards}
    />
  );
}

function WorkshopsSection({ section }: { section: ResourceWorkshopSection }) {
  const cards = section.workshops.map((workshop) =>
    makeWorkshopCardProps({ ...workshop, className: "height-full border-1px border-base-lighter" }),
  );

  return (
    <SectionCardDetailed
      isMultiColumnLayout
      maxColumns={1}
      description={section.lead}
      sectionHeading={
        section.heading && <ContentHeading heading={section.heading} headingLevel="h3" />
      }
      cards={cards}
    />
  );
}

export default function ResourcesPage() {
  const { body, linkSections, tutorials, workshopSection } = RESOURCES_PAGE_BODY;

  return (
    <Section>
      <Card className="height-masthead" isMastHead title={"Training Resources"} />

      <div className="grid-container padding-y-7">
        <div className="grid-row grid-gap">
          <div className="grid-col-3 display-none desktop:display-block">
            <InPageNavigation
              data-title-text="ON THIS PAGE"
              data-main-content-selector={`#${RESOURCES_CONTENT_ID}`}
            />
          </div>
          <div className="grid-col-9 usa-prose" id={RESOURCES_CONTENT_ID}>
            {body.slice(0, 1).map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
            ))}
            {tutorials && <ResourceTutorials section={tutorials} />}
            {body.slice(1).map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
            ))}
            {workshopSection && <WorkshopsSection section={workshopSection} />}
            {linkSections?.map((section, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
              <ResourceLinks key={i} section={section} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
