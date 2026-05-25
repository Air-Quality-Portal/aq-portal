import { Tag } from "@teamimpact/veda-ui-blocks";
import { notFound } from "next/navigation";

import {
  ContentBlockRenderer,
  OverviewBlock,
  PageMasthead,
  Section,
  ThemeTag,
} from "@/app/components";
import { EVENTS } from "@/app/site-config/event";

export default async function EventItemPage(props: PageProps<"/events/[id]">) {
  const { id } = await props.params;

  const events = EVENTS.find((t) => t.id === id);

  if (!events) notFound();
  //TO DO: this will need to account for inpage navigation once implements
  const showSidebar = events.themes.length > 0 || events.categories.length > 0;
  return (
    <>
      {/* Hero */}
      <PageMasthead image={events.mastheadImage} {...events} />

      {/* Full-width title and date */}

      {/* Content */}
      <Section>
        <div className="grid-row grid-gap">
          {/* Sidebar */}
          {showSidebar && (
            <div className="grid-col-12 desktop:grid-col-3 padding-0">
              <aside className="bg-base-lightest padding-4 margin-bottom-4">
                {events.themes.length > 0 && (
                  <div className="margin-bottom-3">
                    <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Theme</p>
                    <div className="display-flex flex-wrap grid-gap-sm">
                      {events.themes.map((theme) => (
                        <div key={theme} className="margin-right-1 margin-bottom-1">
                          <ThemeTag key={theme} theme={theme} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {events.categories.length > 0 && (
                  <div className="margin-bottom-3">
                    <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Hazard</p>
                    <div className="display-flex flex-wrap">
                      {events.categories.map((category) => (
                        <div key={category} className="margin-right-1 margin-bottom-1">
                          <Tag color="primary-lighter" textColor="primary-dark">
                            {category}
                          </Tag>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          )}

          {/* Main content */}
          <div className={!showSidebar ? "grid-col-12" : "grid-col-9"}>
            <OverviewBlock {...events.overview} showSidebar={showSidebar} />
            {events.body.map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} sideBarPresent={showSidebar} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
