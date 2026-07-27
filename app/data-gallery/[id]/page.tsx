import { Link } from "@teamimpact/veda-ui-blocks";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import {
  BackToCatalogLink,
  ContentBlockRenderer,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
} from "@/app/components";
import { getMetadataFieldTag, makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { DATASETS } from "@/app/site-config/dataset";

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataset = DATASETS.find((d) => d.id === id);

  if (!dataset) notFound();

  const { title, mastheadImage, body, actions, metadata } = dataset;

  return (
    <>
      <Section>
        <PageMasthead
          {...makeCardMastHeadProps({
            mastheadImage,
            title,
            tagPrimary: getMetadataFieldTag(metadata, "provider"),
            imagePosition: "right",
          })}
        />
      </Section>
      <Section>
        <div className="grid-container">
          <BackToCatalogLink href="/data-gallery" />

          {/* Placeholder content only */}
          {!body && (
            <PageStatus
              heading="Under Development"
              description="The page you're looking for is under development."
            />
          )}

          {/* Content */}
          {body && (
            <div className="grid-row grid-gap">
              {/* Main content */}
              <div className="grid-col-12 desktop:grid-col-9">
                {body?.map((block, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                  <Fragment key={index}>
                    <ContentBlockRenderer block={block} isMultiColumnLayout />

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
              </div>

              {/* Sidebar */}
              <div className="grid-col-12 desktop:grid-col-3">
                <PageSidebar metadata={metadata} />
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
