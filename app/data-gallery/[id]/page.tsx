import { Link } from "@teamimpact/veda-ui-blocks";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import {
  BackToCatalogLink,
  ContentBlockRenderer,
  ContentHeading,
  ContentLead,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
  SectionCardDetailed,
} from "@/app/components";
import {
  getMetadataFieldTag,
  makeButtonOutlineLink,
  makeCardDetailedImageLeftProps,
  makeCardDetailedTextOnlyProps,
  makeCardMastHeadProps,
  makeSimpleTag,
} from "@/app/site-config/content.helpers";
import { DATASETS, getDatasetsByIds } from "@/app/site-config/dataset";
import type {
  DatasetCitationSection,
  DatasetLinkSection,
  DatasetTutorialSection,
  RelatedDatasetsSection,
} from "@/app/site-config/types";

const TUTORIAL_LEVEL_COLOR: Record<string, string> = {
  beginner: "success",
  intermediate: "info",
  advanced: "secondary",
};

function DatasetLinks({ section }: { section: DatasetLinkSection }) {
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

function DatasetTutorials({ section }: { section: DatasetTutorialSection }) {
  const cards = section.tutorials.map((tutorial) =>
    makeCardDetailedTextOnlyProps({
      id: tutorial.href,
      className: "height-full border-1px border-base-lighter",
      title: tutorial.title,
      href: tutorial.href,
      description: tutorial.description,
      tags: [
        ...(tutorial.duration ? [makeSimpleTag(tutorial.duration)] : []),
        ...(tutorial.level
          ? [
              {
                ...makeSimpleTag(tutorial.level.toUpperCase()),
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

function DatasetCitation({ section }: { section: DatasetCitationSection }) {
  return (
    <Section
      isMultiColumnLayout
      className="border-top-2px border-base-lightest padding-top-2 margin-bottom-0"
    >
      <p className="font-mono-3xs text-base text-uppercase margin-top-0 margin-bottom-2">
        {section.heading ?? "Cite this dataset"}
      </p>
      <p className="font-body-3xs margin-0 text-base">{section.text}</p>
    </Section>
  );
}

function DatasetRelated({ section }: { section: RelatedDatasetsSection }) {
  const cards = getDatasetsByIds(section.datasetIds).map((dataset) =>
    makeCardDetailedImageLeftProps({
      id: dataset.id,
      contentType: dataset.contentType,
      title: dataset.title,
      description: dataset.description,
      thumbnailImage: dataset.thumbnailImage,
      tagPrimary: getMetadataFieldTag(dataset.metadata, "provider"),
      tags: dataset.metadata.tags,
    }),
  );

  return (
    <SectionCardDetailed
      isMultiColumnLayout
      rowGap={6}
      description={section.description}
      sectionHeading={
        section.heading && <ContentHeading heading={section.heading} headingLevel="h3" />
      }
      cards={cards}
    />
  );
}

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataset = DATASETS.find((d) => d.id === id);

  if (!dataset) notFound();

  const {
    title,
    mastheadImage,
    body,
    actions,
    metadata,
    linkSections,
    tutorials,
    citation,
    relatedDatasets,
  } = dataset;
  const hasContent = Boolean(
    body || linkSections?.length || tutorials || citation || relatedDatasets,
  );

  return (
    <Section>
      <PageMasthead
        {...makeCardMastHeadProps({
          mastheadImage,
          title,
          tagPrimary: getMetadataFieldTag(metadata, "provider"),
          imagePosition: "right",
          isMastHead: true,
        })}
      />
      <BackToCatalogLink href="/data-gallery" />

      {/* Placeholder content only */}
      {!hasContent && (
        <PageStatus
          heading="Under Development"
          description="The page you're looking for is under development."
        />
      )}

      {/* Content */}
      {hasContent && (
        <>
          <div className="grid-row grid-gap margin-top-3">
            <div className="grid-col-12 desktop:grid-col-8">
              {body?.map((block, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                <Fragment key={index}>
                  <ContentBlockRenderer
                    block={block}
                    isMultiColumnLayout
                    className={index === 0 ? "margin-top-0" : ""}
                  />

                  {/* Primary action rendered inline after the intro block */}
                  {index === 0 && actions && (
                    <div className="display-flex flex-wrap margin-top-4" style={{ gap: "1rem" }}>
                      <Link
                        href={actions.primary.href}
                        isExternal={actions.primary.isExternal}
                        variant="button"
                      >
                        {actions.primary.label}
                      </Link>
                    </div>
                  )}
                </Fragment>
              ))}

              {linkSections?.map((section, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                <DatasetLinks key={index} section={section} />
              ))}

              {tutorials && <DatasetTutorials section={tutorials} />}

              {citation && <DatasetCitation section={citation} />}
            </div>
            <div className="grid-col-12 desktop:grid-offset-1 desktop:grid-col-3">
              <PageSidebar metadata={metadata} />
            </div>
          </div>

          {/* Spans the page container, outside the sidebar column */}
          {relatedDatasets && <DatasetRelated section={relatedDatasets} />}
        </>
      )}
    </Section>
  );
}
