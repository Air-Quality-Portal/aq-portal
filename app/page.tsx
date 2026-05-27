import { Card } from "@teamimpact/veda-ui-blocks";

import {
  ContentBlockRenderer,
  SectionCardSimple,
  SectionCardSimpleMosaic,
  SectionHeading,
} from "@/app/components";

import "./styles/home.css";

import { makeCardSimpleProps } from "./site-config/content.helpers";
import { MOCK_CARD_LETSCONNECT } from "./site-config/home/home-card-lets_connect";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";
import { HOME_CONTENT } from "./site-config/home/home-content";
import { NEWS_EVENTS_CARDS } from "./site-config/home/home-sectioncardmosaic-news-events";
import { RESOURCES_LEARNING_CARDS } from "./site-config/home/home-sectioncardsimple-resources-learning";
import { typedMap } from "./site-config/typed.helpers";

export default function Home() {
  return (
    <>
      <div className="home-card-masthead display-flex minh-card-xl">
        <Card {...MOCK_CARD_MASTHEAD} />
      </div>
      <SectionCardSimpleMosaic
        sectionHeading={<SectionHeading href="/news-events">News & Events</SectionHeading>}
        cards={typedMap(NEWS_EVENTS_CARDS, makeCardSimpleProps)}
      />
      {HOME_CONTENT.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
      <SectionCardSimple
        sectionHeading={<SectionHeading href="/training">Resources & Learning</SectionHeading>}
        cards={typedMap(RESOURCES_LEARNING_CARDS, makeCardSimpleProps)}
        bgColor="base-lightest"
        className="margin-bottom-0"
      >
        <div className="grid-row margin-top-7">
          <Card {...MOCK_CARD_LETSCONNECT} />
        </div>
      </SectionCardSimple>
    </>
  );
}
