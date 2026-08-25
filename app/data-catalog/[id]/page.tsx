import { notFound } from "next/navigation";
import { Fragment } from "react";
import {
  BackToCatalogLink,
  ContentBlockRenderer,
  ContentHeading,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
  SectionCardDetailed,
  SectionCardTextOnly,
  SectionLinks,
} from "@/app/components";
import { AppLinkStyled } from "@/app/components/AppLink";
import {
  getMetadataFieldTag,
  makeCardDetailedImageLeftProps,
  makeCardMastHeadProps,
  makeTutorialCardSection,
} from "@/app/site-config/content.helpers";
import { DATASETS, getDatasetsByIds } from "@/app/site-config/dataset";
import type { DatasetCitationSection, RelatedDatasetsSection } from "@/app/site-config/types";

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

export default async function DatasetItemPage(props: PageProps<"/data-catalog/[id]">) {
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
      <BackToCatalogLink href="/data-catalog" />

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
                      <AppLinkStyled
                        href={actions.primary.href}
                        isExternal={actions.primary.isExternal}
                        variant="button"
                      >
                        {actions.primary.label}
                      </AppLinkStyled>
                    </div>
                  )}
                </Fragment>
              ))}

              {linkSections?.map((section, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                <SectionLinks key={index} section={section} />
              ))}

              {tutorials && <SectionCardTextOnly section={makeTutorialCardSection(tutorials)} />}

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
