import { Card } from "@teamimpact/veda-ui-blocks";

import {
  Section,
  SectionCardSimple,
  SectionCardSimpleMosaic,
  SectionHeading,
} from "@/app/components";

import "./styles/home.css";

import { MOCK_CARD_LETSCONNECT } from "./site-config/home/home-card-lets_connect";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";
import { NEWS_EVENTS_CARDS } from "./site-config/home/home-sectioncardmosaic-news-events";
import { RESOURCES_LEARNING_CARDS } from "./site-config/home/home-sectioncardsimple-resources-learning";

export default function Home() {
  return (
    <>
      <div className="home-card-masthead display-flex minh-card-xl">
        <Card {...MOCK_CARD_MASTHEAD} />
      </div>
      <SectionCardSimpleMosaic sectionHeading="News & Events" cards={NEWS_EVENTS_CARDS} />
      {/* Data Visualization */}
      <Section>
        <SectionHeading>Data Visualization</SectionHeading>
        <p>TODO: Map block</p>
      </Section>
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
