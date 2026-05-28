import { CardSimple, Tag } from "@teamimpact/veda-ui-blocks";
import { notFound } from "next/navigation";
import {
  ContentBlockRenderer,
  PageMasthead,
  PageStatus,
  Section,
  SectionHeading,
} from "@/app/components/";
import { makeCardMastHeadProps, makeCardSimpleProps } from "@/app/site-config/content.helpers";
import { DATASTORIES } from "@/app/site-config/datastory";
import { EVENTS } from "@/app/site-config/event";
import { NEWS } from "@/app/site-config/news";
import { STORIES } from "@/app/site-config/story";
import { TRAININGS, TRAININGS_EXTERNAL } from "@/app/site-config/training";
import type { DetailPageContent } from "@/app/site-config/types";

const DETAIL_CONTENT: DetailPageContent[] = [...STORIES, ...DATASTORIES, ...NEWS, ...EVENTS];
const TRAINING_CONTENT = [...TRAININGS, ...TRAININGS_EXTERNAL];

export default async function NewsEventsItemPage(props: PageProps<"/news-events/[id]">) {
  const { id } = await props.params;

  const contentItem = DETAIL_CONTENT.find((entry) => entry.id === id);

  if (!contentItem) notFound();

  const { mastheadImage, title } = contentItem;

  const formattedDate =
    contentItem.contentType === "event" && contentItem.date
      ? new Date(contentItem.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      : null;

  const resourcesCards =
    contentItem.contentType === "event"
      ? (contentItem.resourcesLearning ?? [])
          .map((trainingId) => TRAINING_CONTENT.find((training) => training.id === trainingId))
          .filter((training): training is (typeof TRAINING_CONTENT)[number] => !!training)
          .map((training) => makeCardSimpleProps(training))
      : [];

  const hasEventDetails = contentItem.contentType === "event" && !!contentItem.body?.length;
  const summaryText = contentItem.contentType === "event" ? contentItem.description : undefined;
  const mastheadProps = makeCardMastHeadProps(
    hasEventDetails && contentItem.contentType === "event"
      ? { mastheadImage }
      : { mastheadImage, title },
  );

  return (
    <>
      <div className="position-relative">
        <PageMasthead {...mastheadProps} />

        {hasEventDetails &&
          contentItem.contentType === "event" &&
          (formattedDate || summaryText) && (
            <div className="position-absolute bottom-0 left-0 right-0 z-100 margin-bottom-4">
              <div className="grid-container">
                <div className="display-flex flex-wrap grid-gap-sm margin-bottom-2">
                  {formattedDate && (
                    <Tag color="primary-lighter" textColor="primary-dark">
                      Updated: {formattedDate}
                    </Tag>
                  )}
                </div>

                <h1 className="font-mono-3xl text-normal text-white text-uppercase flex-align-self-start margin-bottom-2 margin-top-0">
                  {title}
                </h1>

                {summaryText && (
                  <p className="font-body-md text-white padding-2 margin-0 maxw-tablet-lg">
                    {summaryText}
                  </p>
                )}
              </div>
            </div>
          )}
      </div>

      {!hasEventDetails && (
        <Section className="margin-top-4 margin-bottom-0">
          <PageStatus
            label={`News, Data Story, Story, or Event Item: ${id}`}
            heading="Under development"
            description="The page you're looking for is under development."
          />
        </Section>
      )}

      {hasEventDetails && contentItem.contentType === "event" && (
        <Section>
          <div className="grid-row grid-gap">
            <div className="grid-col-12 desktop:grid-col-3">
              <aside
                className="bg-base-lightest padding-3 margin-bottom-4 position-sticky"
                style={{ top: "68px" }}
              />
            </div>

            <div className="grid-col-12 desktop:grid-col-9 margin-top-neg-7">
              {contentItem.body?.map((block, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
                <div key={i}>
                  <ContentBlockRenderer block={block} />
                </div>
              ))}

              {!!resourcesCards.length && (
                <section id="resources-learning" className="margin-y-7">
                  <div className="grid-container">
                    <SectionHeading href="/training">Resources & Learning</SectionHeading>
                    <div className="grid-row grid-gap-2 margin-bottom-neg-2">
                      {resourcesCards.map((props) => (
                        <div
                          key={props.id}
                          className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-bottom-2 height-card-md"
                        >
                          <CardSimple {...props} />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {(mastheadImage.caption || mastheadImage.attribution) && (
                <div className="margin-top-4 padding-top-2 border-top border-base-lighter">
                  <p className="font-body-2xs text-base-dark margin-0 line-height-sans-4">
                    <span className="text-bold">Banner Image:</span> {mastheadImage.caption}
                    {mastheadImage.attribution && (
                      <>
                        {" "}
                        <span className="text-bold">Credit:</span> {mastheadImage.attribution}
                      </>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
