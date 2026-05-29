import { notFound } from "next/navigation";
import { PageMasthead, PageStatus, Section } from "@/app/components/";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { DATASTORIES } from "@/app/site-config/datastory";
import { EVENTS } from "@/app/site-config/event";
import { NEWS } from "@/app/site-config/news";
import { STORIES } from "@/app/site-config/story";

export default async function NewsEventsItemPage(props: PageProps<"/news-events/[id]">) {
  const { id } = await props.params;

  const contentItem = [...STORIES, ...DATASTORIES, ...NEWS, ...EVENTS].find((s) => s.id === id);

  if (!contentItem) notFound();

  const { mastheadImage, title } = contentItem;

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ mastheadImage, title })} />

      <Section className="margin-top-4 margin-bottom-0">
        <PageStatus
          label={`News, Data Story, or Story Item: ${id}`}
          heading="Under development"
          description="The page you're looking for is under development."
        />
      </Section>
    </>
  );
}
