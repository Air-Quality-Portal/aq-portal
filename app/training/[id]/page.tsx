import { Card, Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Section, ThemeTag } from "@/app/components";
import { trainings } from "@/app/site-config/training";
import { TrainingBlock } from "@/app/training/TrainingBlock";

export default async function TrainingItemPage(props: PageProps<"/training/[id]">) {
  const { id } = await props.params;
  const training = trainings.find((t) => t.id === id);

  if (!training) notFound();

  const formattedDate = new Date(training.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <Section className="margin-top-4 margin-bottom-0">
        <Card
          image={
            <Image
              src={training.heroImage.src}
              alt={training.heroImage.alt}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          }
          className="minh-masthead"
        />

        {/* Full-width title and date */}
        <h1 className="font-heading-2xl margin-bottom-2">{training.title}</h1>
        <Tag color="primary-lighter" textColor="primary-dark">
          Updated: {formattedDate}
        </Tag>
      </Section>

      {/* Content */}
      <Section>
        <div className="grid-row grid-gap">
          {/* Sidebar */}

          <div className="grid-col-12 desktop:grid-col-3">
            <aside className="bg-base-lightest padding-4">
              {training.themes.length > 0 && (
                <div className="margin-bottom-3">
                  <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Theme</p>
                  <div className="display-flex flex-wrap">
                    {training.themes.map((theme) => (
                      <ThemeTag key={theme} theme={theme} />
                    ))}
                  </div>
                </div>
              )}

              {training.tags.length > 0 && (
                <div className="margin-bottom-3">
                  <p className="text-bold font-body-sm margin-top-0 margin-bottom-2">Hazard</p>
                  <div className="display-flex flex-wrap">
                    {training.tags.map((tag) => (
                      <div key={tag} className="margin-right-1 margin-bottom-1">
                        <Tag color="primary-lighter" textColor="primary-dark">
                          {tag}
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
            {training.body.map((block, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
              <TrainingBlock key={i} block={block} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
