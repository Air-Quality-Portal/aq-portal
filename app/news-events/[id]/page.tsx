import { PageStatus } from "@/app/components/";

export default async function NewsEventsItemPage(props: PageProps<"/news-events/[id]">) {
  const { id } = await props.params;
  return (
    <PageStatus
      label={`News & Events Item: ${id}`}
      heading="Under development"
      description="The page you're looking for is under development."
    />
  );
}
