import { Tag } from "@teamimpact/veda-ui-blocks";
import { notFound } from "next/navigation";
import { ContentBlockRenderer, PageMasthead, Section, ThemeTag } from "@/app/components/";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { STORIES } from "@/app/site-config/story";

export default async function StoryItemTemplate(props: PageProps<"/stories/[id]">) {
  const { id } = await props.params;
  const story = STORIES.find((t) => t.id === id);

  if (!story) notFound();

  return (
    <>
      {/* Hero */}
      <PageMasthead {...makeCardMastHeadProps(story)} />

      {/* Content */}
      <Section>
        <div className="grid-row grid-gap">
          {/* Sidebar */}
          <div className="grid-col-12 desktop:grid-col-3">
            <aside className="bg-base-lightest padding-4 margin-bottom-4">
              {story.contentType.length > 0 && (
                <div className="margin-bottom-3">
                  <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Type</p>
                  <div className="display-flex flex-wrap grid-gap-sm">
                    <div className="margin-right-1 margin-bottom-1">
                      <Tag color="primary-lighter" textColor="primary-dark">
                        {story.contentType}
                      </Tag>
                    </div>
                  </div>
                </div>
              )}
              {story.themes.length > 0 && (
                <div className="margin-bottom-3">
                  <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Theme</p>
                  <div className="display-flex flex-wrap grid-gap-sm">
                    {story.themes.map((theme) => (
                      <div key={theme} className="margin-right-1 margin-bottom-1">
                        <ThemeTag key={theme} theme={theme} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {story.categories.length > 0 && (
                <div className="margin-bottom-3">
                  <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Hazard</p>
                  <div className="display-flex flex-wrap">
                    {story.categories.map((category) => (
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

          {/* Main content */}
          <div className="grid-col-12 desktop:grid-col-9 margin-top-neg-7">
            {story.body?.map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <ContentBlockRenderer key={i} block={block} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
