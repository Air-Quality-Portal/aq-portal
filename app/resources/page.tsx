import { Card } from "@teamimpact/veda-ui-blocks";
import { ContentBlockRenderer, Section } from "@/app/components";
import { RESOURCES_PAGE_BODY } from "@/app/site-config/resources";

export default function ResourcesPage() {
  return (
    <>
      <Section>
        {" "}
        <Card
          className="no-image"
          isMastHead
          imagePosition="cover"
          title="Training Resources"
          image={<svg role="presentation" aria-hidden="true" />}
        />
      </Section>
      {RESOURCES_PAGE_BODY.body.map((block, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
        <ContentBlockRenderer key={i} block={block} />
      ))}
    </>
  );
}
