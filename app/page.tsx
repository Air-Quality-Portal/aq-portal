import { Card, Carousel } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { Section, SectionIntro, ToolCatalog, VisualizationToolIntro } from "@/app/components";
import { FEATURED_COUNT, TOOLS } from "@/app/site-config/tool";
import {
  HOMEPAGE_EXPLORE_INTRO,
  HOMEPAGE_VISUALIZE_INTRO,
  VISUALIZATION_TOOL_INTRO,
} from "./site-config/home/home_page";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";

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

        <ToolCatalog
          tools={TOOLS.slice(0, 4)}
          getColClassName={(i) => {
            const desktopCol =
              i % 4 === 0 || i % 4 === 3 ? "desktop:grid-col-7" : "desktop:grid-col-5";
            return `grid-col-12 tablet:grid-col-6 ${desktopCol} margin-y-1 desktop:margin-y-2`;
          }}
        />
      </Section>
    </>
  );
}
