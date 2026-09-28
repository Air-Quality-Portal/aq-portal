import { Card } from "@teamimpact/veda-ui-blocks";
import "./styles/home.css";
import {
  Section,
  SectionIntro,
  ToolCatalog,
  ToolHighlight,
  VisualizationToolIntro,
} from "@/app/components";
import { FEATURED_TOOLS, VISUALIZATION_TOOL_INTRO } from "@/app/site-config/tool";
import { HOMEPAGE_EXPLORE_INTRO, HOMEPAGE_VISUALIZE_INTRO } from "./site-config/home/home_page";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";

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
          <ToolHighlight intro={HOMEPAGE_VISUALIZE_INTRO} />
        </Section>
      )}
      <Section className="margin-top-0">
        <VisualizationToolIntro {...VISUALIZATION_TOOL_INTRO} />
      </Section>
      <Section>
        <SectionIntro {...HOMEPAGE_EXPLORE_INTRO} />

        <ToolCatalog tools={FEATURED_TOOLS} layout="feature" />
      </Section>
    </>
  );
}
