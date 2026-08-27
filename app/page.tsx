import { Card, CardDetailed, Carousel } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { Section, SectionIntro, VisualizationToolIntro } from "@/app/components";
import { makePrimaryTag } from "@/app/site-config/content.helpers";
import { TOOLS } from "@/app/site-config/tool";
import {
  HOMEPAGE_EXPLORE_INTRO,
  HOMEPAGE_VISUALIZE_INTRO,
  VISUALIZATION_TOOL_INTRO,
} from "./site-config/home/home_page";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";

const hrefLabel = (href: string) => href.replace(/^https?:\/\//, "").replace(/\/$/, "");

const FEATURED_COUNT = 3;

export default function Home() {
  const featuredTools = TOOLS.slice(0, FEATURED_COUNT); //These are featured in the top carousel
  return (
    <>
      <Section>
        <div className="display-flex desktop:minh-card-lg">
          <Card {...MOCK_CARD_MASTHEAD} />
        </div>
      </Section>
      {featuredTools.length > 0 && (
        <Section className="padding-top-7">
          <SectionIntro {...HOMEPAGE_VISUALIZE_INTRO} />

          <Carousel
            className="height-card-lg"
            maxVisibleItems={1}
            items={featuredTools.map((tool) => ({
              image: (
                <Image
                  {...tool.thumbnailImage}
                  fill
                  sizes="(max-width: 880px) 100vw, 880px"
                  style={{ objectFit: "cover" }}
                />
              ),
            }))}
          />
        </Section>
      )}
      <Section className="margin-top-0">
        <VisualizationToolIntro {...VISUALIZATION_TOOL_INTRO} />
      </Section>
      <Section>
        <SectionIntro {...HOMEPAGE_EXPLORE_INTRO} />

        <div className="grid-row grid-gap">
          {TOOLS.slice(0, 4).map((tool, index) => {
            const desktopCol =
              index % 4 === 0 || index % 4 === 3 ? "desktop:grid-col-7" : "desktop:grid-col-5";
            return (
              <div
                key={tool.id}
                className={`grid-col-12 tablet:grid-col-6 ${desktopCol} margin-y-1 desktop:margin-y-2`}
              >
                <CardDetailed
                  className="height-full border-1px border-base-lighter"
                  imagePosition="top"
                  image={
                    <Image
                      {...tool.thumbnailImage}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  }
                  tagPrimary={tool.tagPrimary ? makePrimaryTag(tool.tagPrimary) : undefined}
                  intro={tool.fullname}
                  title={
                    <div className="blocks-card-detailed__title font-sans-lg text-light">
                      {tool.title}
                    </div>
                  }
                  description={tool.description}
                  tags={
                    tool.additionalTags
                      ? tool.additionalTags?.map((label) => {
                          return {
                            label: label,
                            variant: "text",
                            color: "base",
                            className: "font-mono-2xs",
                          };
                        })
                      : undefined
                  }
                  callToActionSecondary={{
                    href: tool.href,
                    label: hrefLabel(tool.href),
                    variant: "text",
                    isExternal: true,
                  }}
                />
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
