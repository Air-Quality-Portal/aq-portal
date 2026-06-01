import { notFound } from "next/navigation";
import { ContentBlockRenderer, PageMasthead, PageStatus, Section } from "@/app/components";
import { PageSideBar } from "@/app/components/PageSidebar";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { DATASTORIES } from "@/app/site-config/datastory";
import { EVENTS } from "@/app/site-config/event";
import { NEWS } from "@/app/site-config/news";
import { STORIES } from "@/app/site-config/story";
import EventItemPage from "./page_event";

export default async function NewsEventsItemPage(props: PageProps<"/news-events/[id]">) {
  const { id } = await props.params;

  const contentItem = [...STORIES, ...DATASTORIES, ...NEWS, ...EVENTS].find((i) => i.id === id);

  if (!contentItem) notFound();

  const { contentType } = contentItem;

  // event page layout
  if (contentType === "event") return EventItemPage(contentItem);

  // story, datastory, news page layout
  const { title, mastheadImage, themes, categories, body } = contentItem;

  return (
    <>
      {/* Hero */}
      <PageMasthead {...makeCardMastHeadProps({ mastheadImage, title })} />

      {/* Placeholder content only */}
      {!body && (
        <PageStatus
          label={`Story, Datastory, or News Item: ${id}`}
          heading="Under development"
          description="The page you're looking for is under development."
        />
      )}

      {/* Content */}
      <Section>
        <div className="grid-row grid-gap">
          {/* Sidebar */}
          {/* TODO: DatasetSidebar will need to be elevated to a general sidebar component 
          this will also be placement for the inpage navigation once ready */}
          <div className="grid-col-12 desktop:grid-col-3">
            <PageSideBar contentType={contentType} themes={themes} categories={categories} />
          </div>

          {/* Content */}
          <div className={"grid-col-12 desktop:grid-col-9"}>
            {body?.map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
