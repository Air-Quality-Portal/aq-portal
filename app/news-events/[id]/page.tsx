import { Card, CardSimple, Tag } from "@teamimpact/veda-ui-blocks";
import type { Route } from "next";
import Image from "next/image";
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

  const item = DETAIL_CONTENT.find((entry) => entry.id === id);

  if (!item) notFound();

  const { mastheadImage, title } = item;

  const formattedDate =
    item.contentType === "event" && item.date
      ? new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      : null;

  const resourcesCards =
    item.contentType === "event"
      ? (item.resourcesLearning ?? [])
          .map((trainingId) => TRAINING_CONTENT.find((training) => training.id === trainingId))
          .filter((training): training is (typeof TRAINING_CONTENT)[number] => !!training)
          .map((training) => makeCardSimpleProps(training))
      : [];

  const hasEventDetails = item.contentType === "event" && !!item.body?.length;
  const summaryText = item.contentType === "event" ? item.description : undefined;
  const sidebarNavigation = item.contentType === "event" ? (item.sidebarNavigation ?? []) : [];
  const defaultActiveSidebarId =
    sidebarNavigation.find((entry) => entry.id === "overview")?.id ?? sidebarNavigation[0]?.id;
  const mastheadProps = makeCardMastHeadProps(
    hasEventDetails && item.contentType === "event" ? { mastheadImage } : { mastheadImage, title },
  );

  const storyOfImpactContentId =
    item.contentType === "event" && item.storyOfImpact
      ? item.relatedContent?.[0] || item.storyOfImpact.href.replace("/stories/", "")
      : undefined;

  const storyOfImpactContent =
    item.contentType === "event" && storyOfImpactContentId
      ? STORIES.find((story) => story.id === storyOfImpactContentId)
      : undefined;

  const storyOfImpactImage = storyOfImpactContent?.thumbnailImage ?? item.thumbnailImage;

  return (
    <>
      <div className="position-relative">
        <PageMasthead {...mastheadProps} />

        {hasEventDetails && item.contentType === "event" && (formattedDate || summaryText) && (
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

      {hasEventDetails && item.contentType === "event" && (
        <Section>
          <div className="grid-row grid-gap">
            <div className="grid-col-12 desktop:grid-col-3">
              <aside
                className="bg-base-lightest padding-3 margin-bottom-4 position-sticky"
                style={{ top: "68px" }}
              >
                {!!sidebarNavigation.length && (
                  <nav aria-label="On this page">
                    <h2 className="font-sans-2xs text-uppercase text-primary-dark text-bold margin-top-0 margin-bottom-2">
                      On this page
                    </h2>
                    <ul className="usa-list usa-list--unstyled margin-0">
                      {sidebarNavigation.map((entry) => {
                        const isActive = entry.id === defaultActiveSidebarId;

                        return (
                          <li key={entry.id} className="margin-bottom-0 position-relative">
                            <span
                              aria-hidden="true"
                              className={`position-absolute left-0 top-0 bottom-0 ${
                                isActive ? "bg-primary-dark" : "bg-base-lighter"
                              }`}
                              style={{ width: isActive ? "3px" : "1px" }}
                            />
                            <a
                              href={`#${entry.id}`}
                              aria-current={isActive ? "location" : undefined}
                              className={`display-block padding-y-05 padding-left-2 text-no-underline text-bold ${
                                isActive
                                  ? "text-primary-dark"
                                  : "text-primary hover:text-primary-dark"
                              }`}
                            >
                              {entry.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                )}
              </aside>
            </div>

            <div className="grid-col-12 desktop:grid-col-9 margin-top-neg-7">
              {item.body?.map((block, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
                <div key={i}>
                  <ContentBlockRenderer block={block} />

                  {"id" in block && block.id === "overview" && item.storyOfImpact && (
                    <section id="story-of-impact" className="margin-y-7">
                      <div className="grid-container">
                        <Card
                          title={item.storyOfImpact.title}
                          description={item.storyOfImpact.description}
                          callToAction={{
                            href: item.storyOfImpact.href as Route,
                            label: item.storyOfImpact.ctaLabel,
                          }}
                          image={
                            <Image
                              {...storyOfImpactImage}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 600px"
                            />
                          }
                          imagePosition="right"
                          colorMode="light"
                          className="height-card-sm"
                        />
                      </div>
                    </section>
                  )}
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
