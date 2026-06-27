import { Link } from "@teamimpact/veda-ui-blocks";
import { notFound } from "next/navigation";

import {
  ContentBlockRenderer,
  PageMasthead,
  PageSidebar,
  PageStatus,
  Section,
} from "@/app/components";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { DATASETS } from "@/app/site-config/dataset";

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  const dataset = DATASETS.find((d) => d.id === id);

  if (!dataset) notFound();

  const { title, mastheadImage, body, actions, category1, category2, category3 } = dataset;

  return (
    <>
      <PageMasthead
        {...makeCardMastHeadProps({
          mastheadImage,
          title,
          tagPrimary: category1[0],
          colorMode: "light",
          imagePosition: "right",
          isMastHead: false,
        })}
      />

      <Section>
        {/* Back to catalog */}
        <Link
          href="/data-gallery"
          variant="text"
          className="display-inline-flex flex-align-center text-primary text-bold margin-bottom-4"
        >
          <span aria-hidden="true" className="margin-right-1">
            &larr;
          </span>
          Back to Data Catalog
        </Link>

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
            <div className="grid-col-12 desktop:grid-col-8">
              {body?.map((block, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                <ContentBlockRenderer key={index} block={block} isMultiColumnLayout />
              ))}

              {/* Action buttons */}
              {actions && (
                <div className="display-flex flex-wrap margin-top-4" style={{ gap: "1rem" }}>
                  <Link
                    href={actions.primary.href}
                    isExternal={actions.primary.isExternal}
                    variant="button"
                  >
                    {actions.primary.label}
                  </Link>
                  {actions.secondary && (
                    <Link
                      href={actions.secondary.href}
                      isExternal={actions.secondary.isExternal}
                      variant="button-outline"
                    >
                      {actions.secondary.label}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="grid-col-12 desktop:grid-col-4">
              <PageSidebar category1={category1} category2={category2} category3={category3} />
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
