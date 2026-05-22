import { notFound } from "next/navigation";
import { PageMasthead, PageStatus, Section } from "@/app/components/";
import { STORIES } from "@/app/site-config/story";

export default async function NewsEventsItemPage(props: PageProps<"/news-events/[id]">) {
  const { id } = await props.params;

  const story = STORIES.find((s) => s.id === id);

  if (!story) notFound();

  const { mastheadImage: image, title } = story;

  return (
    <>
      <PageMasthead {...{ image, title }} />

      <Section className="margin-top-4 margin-bottom-0">
        <PageStatus
          label={`Story Item: ${id}`}
          heading="Under development"
          description="The page you're looking for is under development."
        />
      </Section>
    </>
  );
}
