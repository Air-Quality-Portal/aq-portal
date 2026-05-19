import { PageStatus } from "@/app/components/";

export default async function EventItemPage(props: PageProps<"/events/[id]">) {
  const { id } = await props.params;
  return (
    <PageStatus
      label={`Event Item: ${id}`}
      heading="Under development"
      description="The page you're looking for is under development."
    />
  );
}
