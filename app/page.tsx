import { Card } from "@teamimpact/veda-ui-blocks";

import { SectionCardSimple, SectionCardSimpleMosaic } from "@/app/components";

import { STYLE_HOME_MASTHEAD_HEIGHT } from "./site-config/constants";
import { MOCK_CARD_HOMEPAGE_HERO } from "./site-config/home/home-card-hero";
import { MOCK_CARD_LETSCONNECT } from "./site-config/home/home-card-lets_connect";
import { NEWS_EVENTS_CARDS } from "./site-config/home/home-sectioncardmosaic-news-events";
import { RESOURCES_LEARNING_CARDS } from "./site-config/home/home-sectioncardsimple-resources-learning";

export default function Home() {
  return (
    <>
      <div className="display-flex" style={{ minHeight: STYLE_HOME_MASTHEAD_HEIGHT }}>
        <Card {...MOCK_CARD_HOMEPAGE_HERO} />
      </div>
      <SectionCardSimpleMosaic sectionHeading="News & Events" cards={NEWS_EVENTS_CARDS} />
      {/* Data Visualization */}
      <section className="padding-y-7">
        <div className="grid-container">
          <h2 className="margin-bottom-8 font-heading-2xl">Data Visualization</h2>
          <p>TODO: Map block</p>
        </div>
      </section>
      <SectionCardSimple
        sectionHeading="Resources & Learning"
        cards={RESOURCES_LEARNING_CARDS}
        bgColor="base-lightest"
      >
        <div className="grid-row">
          <Card {...MOCK_CARD_LETSCONNECT} />
        </div>
      </SectionCardSimple>
    </>
  );
}
