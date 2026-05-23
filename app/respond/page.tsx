import { PageMasthead, PageStatus } from "@/app/components/";
import { RESPOND_CONTENT } from "../site-config/theme/theme__respond";

export default function RespondPage() {
  const { theme, subtitle, mastheadImage } = RESPOND_CONTENT;

  return (
    <>
      <PageMasthead {...{ theme, subtitle, mastheadImage }} />

      <PageStatus
        label="Respond"
        heading="Under development"
        description="The page you're looking for is under development."
      />
    </>
  );
}
