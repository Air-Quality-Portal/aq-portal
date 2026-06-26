import { ContentBlockRenderer, PageMasthead } from "@/app/components";
import { RESOURCES_PAGE_BODY, RESOURCES_PAGE_MASTHEAD } from "@/app/site-config/resources";
import { makeCardMastHeadProps } from "../site-config/content.helpers";

export default function ResourcesPage() {
  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(RESOURCES_PAGE_MASTHEAD)} />
      {RESOURCES_PAGE_BODY.body.map((block, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
        <ContentBlockRenderer key={i} block={block} />
      ))}
    </>
  );
}
