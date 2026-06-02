import { Card, Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ContentBlockRenderer, PageStatus, Section, ThemeTag } from "@/app/components";
import { toLongDate } from "@/app/site-config/content.helpers";
import { TRAININGS } from "@/app/site-config/training";

export default async function TrainingItemPage(props: PageProps<"/training/[id]">) {
  const { id } = await props.params;
  const training = TRAININGS.find((t) => t.id === id);

  if (!training) notFound();

  return (
    <>
      {/* Hero */}
      <Section>
        <Card
          image={
            <Image
              src={training.mastheadImage.src}
              alt={training.mastheadImage.alt}
              fill
              preload={true}
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          }
          imagePosition="cover"
          className="minh-masthead"
        />

        {/* Full-width title and date */}
        <h1 className="font-heading-2xl margin-bottom-2">{training.title}</h1>
        <Tag color="primary-lighter" textColor="primary-dark">
          Updated: {toLongDate(training.date)}
        </Tag>
      </Section>

      {/* Placeholder content only */}
      {!training.body && (
        <PageStatus
          heading="Under Development"
          description="The page you're looking for is under development."
        />
      )}

      {/* Content */}
      {training.body && (
        <Section>
          <div className="grid-row grid-gap">
            {/* Sidebar */}
            <div className="grid-col-12 desktop:grid-col-3">
              <aside className="bg-base-lightest padding-4 margin-bottom-4">
                {training.themes.length > 0 && (
                  <div className="margin-bottom-3">
                    <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Theme</p>
                    <div className="display-flex flex-wrap grid-gap-sm">
                      {training.themes.map((theme) => (
                        <div key={theme} className="margin-right-1 margin-bottom-1">
                          <ThemeTag key={theme} theme={theme} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {training.categories.length > 0 && (
                  <div className="margin-bottom-3">
                    <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Hazard</p>
                    <div className="display-flex flex-wrap">
                      {training.categories.map((category) => (
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
              {training.body?.map((block, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
                <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
