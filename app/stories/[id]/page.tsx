import { PageStatus } from "@/app/components/";

export default async function StoriesItemPage(props: PageProps<"/stories/[id]">) {
  const { id } = await props.params;
  return (
    <PageStatus
      label={`Stories Item: ${id}`}
      heading="Under development"
      description="The page you're looking for is under development."
    />
  );
}
