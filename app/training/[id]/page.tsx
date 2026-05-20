import { PageStatus } from "@/app/components/";

export default async function TrainingItemPage(props: PageProps<"/training/[id]">) {
  const { id } = await props.params;
  return (
    <PageStatus
      label={`Trainings item: ${id}`}
      heading="Under development"
      description="The page you're looking for is under development."
    />
  );
}
