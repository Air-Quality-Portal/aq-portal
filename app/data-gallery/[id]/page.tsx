import { PageStatus } from "@/app/components/";

export default async function DatasetItemPage(props: PageProps<"/data-gallery/[id]">) {
  const { id } = await props.params;
  return (
    <PageStatus
      label={`Dataset Item: ${id}`}
      heading="Under development"
      description="The page you're looking for is under development."
    />
  );
}
