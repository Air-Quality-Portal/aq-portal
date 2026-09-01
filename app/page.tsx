import { Card } from "@teamimpact/veda-ui-blocks";
import {
  Section,
  SectionIntro,
  ToolCatalog,
  ToolHighlights,
  VisualizationToolIntro,
} from "@/app/components";
import { CATALOG_TOOLS, FEATURED_TOOLS } from "@/app/site-config/tool";
import {
  HOMEPAGE_EXPLORE_INTRO,
  HOMEPAGE_VISUALIZE_INTRO,
  VISUALIZATION_TOOL_INTRO,
} from "./site-config/home/home_page";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";

/** How many catalog tools the homepage previews before "View all tools". */
const HOMEPAGE_CATALOG_COUNT = 4;

export default function Home() {
  return (
    <>
      <Section>
        <div className="display-flex desktop:minh-card-lg">
          <Card {...MOCK_CARD_MASTHEAD} />
        </div>
      </Section>
      {FEATURED_TOOLS.length > 0 && (
        <Section className="padding-top-7">
          <ToolHighlights intro={HOMEPAGE_VISUALIZE_INTRO} tools={FEATURED_TOOLS} />
        </Section>
      )}
      <Section className="margin-top-0">
        <VisualizationToolIntro {...VISUALIZATION_TOOL_INTRO} />
      </Section>
      <Section>
        <SectionIntro {...HOMEPAGE_EXPLORE_INTRO} />

        <ToolCatalog tools={CATALOG_TOOLS.slice(0, HOMEPAGE_CATALOG_COUNT)} layout="feature" />
      </Section>
    </>
  );
}
