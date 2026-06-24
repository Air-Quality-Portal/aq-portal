import { PageMasthead, Section } from "@/app/components";
import { RESOURCES_PAGE_MASTHEAD } from "@/app/site-config/resources";
import { makeCardMastHeadProps } from "../site-config/content.helpers";

export default function ResourcesPage() {
  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(RESOURCES_PAGE_MASTHEAD)} />
      <Section>
        <div className="grid-row">
          <div className="grid-col-12">
            <p className="font-sans-md text-base-dark margin-y-0">
              Training resources placeholder content.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
