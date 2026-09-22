import { CardSimple } from "@teamimpact/veda-ui-blocks";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import {
  getMetadataFieldTag,
  makeCardMastHeadProps,
  makePrimaryTag,
  makeTutorialCardSection,
} from "@/app/_utilities/content.helpers";
import {
  BackToCatalogLink,
  ContentBlockRenderer,
  ContentHeading,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
  SectionCardTextOnly,
  SectionLinks,
} from "@/app/components";
import { AppImage } from "@/app/components/AppImage";
import { AppLinkStyled } from "@/app/components/AppLink";
import { DATASETS, getDatasetsByIds } from "@/app/site-config/dataset";
import {
  CONTENT_TYPES,
  type DatasetCitationSection,
  type RelatedDatasetsSection,
} from "@/app/site-config/types";

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
  const datasets = getDatasetsByIds(section.datasetIds);

  return (
    <Section isMultiColumnLayout>
      {section.heading && <ContentHeading heading={section.heading} headingLevel="h3" />}
      <div className="grid-row grid-gap-4">
        {datasets.map((dataset) => {
          const tagPrimary = getMetadataFieldTag(dataset.metadata, "provider");
          return (
            <div key={dataset.id} className="grid-col-6">
              <CardSimple
                href={`${CONTENT_TYPES.dataset.route}/${dataset.id}`}
                title={dataset.title}
                image={<AppImage {...dataset.thumbnailImage} fill sizes="50vw" />}
                tag={tagPrimary ? makePrimaryTag(tagPrimary) : undefined}
                size="sm"
              />
            </div>
          );
        })}
      </div>
    </Section>
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
      <BackToCatalogLink href={CONTENT_TYPES.dataset.route} />

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

              {relatedDatasets && <DatasetRelated section={relatedDatasets} />}
            </div>
            <div className="grid-col-12 desktop:grid-offset-1 desktop:grid-col-3">
              <PageSidebar metadata={metadata} />
            </div>
          </div>

          {/* Spans the page container, outside the sidebar column */}
        </>
      )}
    </Section>
  );
}
