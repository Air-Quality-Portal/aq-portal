import { notFound } from "next/navigation";
import {
  ContentBlockRenderer,
  OverviewBlock,
  PageMasthead,
  Section,
  Sidebar,
} from "@/app/components";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { EVENTS } from "@/app/site-config/event";

export default async function EventItemPage(props: PageProps<"/news-events/[id]">) {
  const { id } = await props.params;

  const event = EVENTS.find((t) => t.id === id);

  if (!event) notFound();
  //TO DO: this will need to account for inpage navigation once implements
  const showSidebar = event.themes.length > 0 || event.categories.length > 0;
  const { title, description, mastheadImage, themes, categories, body, date, contentType } = event;

  return (
    <>
      {/* Hero */}
      <PageMasthead {...makeCardMastHeadProps({ mastheadImage, title, description, date })} />

      {/* Content */}
      <Section>
        <div className="grid-row grid-gap">
          {/* Sidebar */}
          {/* TO DO: DatasetSidebar will need to be elevated to a general sidebar component this will also be placement for the inpage navigation once ready*/}
          {showSidebar && (
            <div className="grid-col-12 desktop:grid-col-3">
              <Sidebar themes={themes} categories={categories} contentType={contentType} />
            </div>
          )}
          {/* Main content */}
          <div className={`grid-col-12${showSidebar ? " desktop:grid-col-9" : ""}`}>
            {event.overview && (
              <OverviewBlock {...event.overview} isMultiColumnLayout={showSidebar} />
            )}
            {body?.map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} isMultiColumnLayout={showSidebar} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
