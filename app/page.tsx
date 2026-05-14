import { Card, CardSimple } from "@teamimpact/veda-ui-blocks";

import { STYLE_CARDSIMPLE_HEIGHT, STYLE_HOME_MASTHEAD_HEIGHT } from "./site-config/constants";
import { MOCK_CARD_HOMEPAGE_HERO } from "./site-config/home-card-hero";
import { MOCK_CARD_FEATURED_LETSCONNECT } from "./site-config/home-cardfeatured-lets_connect";
import {
  MOCK_CARD_NEWS_EVENTS_FEATURED,
  MOCK_CARD_NEWS_EVENTS_RESILIENCE,
  MOCK_CARD_NEWS_EVENTS_RESPONSE_MAPPER,
  MOCK_CARD_NEWS_EVENTS_TORNADO,
} from "./site-config/news-events";
import {
  MOCK_CARD_RESOURCES_LEARNING_PREPARE,
  MOCK_CARD_RESOURCES_LEARNING_RECOVER,
  MOCK_CARD_RESOURCES_LEARNING_RESILIENCE,
  MOCK_CARD_RESOURCES_LEARNING_RESPOND,
} from "./site-config/resources-learning";

export default function Home() {
  return (
    <>
      <div className="display-flex" style={{ minHeight: STYLE_HOME_MASTHEAD_HEIGHT }}>
        <Card {...MOCK_CARD_HOMEPAGE_HERO} />
      </div>
      <section className="padding-top-7">
        <div className="grid-container">
          <h2 className="margin-bottom-8 font-heading-2xl">News & Events</h2>
          <div className="grid-row grid-gap-2 margin-bottom-neg-2">
            {/* Feature card: full-width → desktop: 2 of 4 cols */}
            <div className="grid-col-12 desktop:grid-col-6 margin-bottom-2 height-mobile">
              <CardSimple {...MOCK_CARD_NEWS_EVENTS_FEATURED} />
            </div>
            {/* Regular card: full-width → tablet: half → desktop: 1 of 4 cols */}
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 height-mobile">
              <CardSimple {...MOCK_CARD_NEWS_EVENTS_RESILIENCE} />
            </div>
            {/* Stacked half-height cards: full-width → tablet: half → desktop: 1 of 4 cols */}
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 display-flex flex-column height-mobile">
              <div className="flex-1 margin-bottom-2">
                <CardSimple {...MOCK_CARD_NEWS_EVENTS_RESPONSE_MAPPER} size="compact" />
              </div>
              <div className="flex-1">
                <CardSimple {...MOCK_CARD_NEWS_EVENTS_TORNADO} size="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Data Visualization */}
      <section className="padding-y-7">
        <div className="grid-container">
          <h2 className="margin-bottom-8 font-heading-2xl">Data Visualization</h2>
          <p>TODO: Map block</p>
        </div>
      </section>

      {/* Resources & Learning */}
      <section className="bg-base-lightest padding-y-7">
        <div className="grid-container grid-gap-3">
          <h2 className="margin-bottom-8 font-heading-2xl">Resources & Learning</h2>
          <div className="grid-row grid-gap-2 margin-bottom-6">
            {[
              MOCK_CARD_RESOURCES_LEARNING_PREPARE,
              MOCK_CARD_RESOURCES_LEARNING_RESPOND,
              MOCK_CARD_RESOURCES_LEARNING_RECOVER,
              MOCK_CARD_RESOURCES_LEARNING_RESILIENCE,
            ].map((props) => (
              <div
                key={props.id}
                className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2"
                style={{
                  height: STYLE_CARDSIMPLE_HEIGHT,
                }}
              >
                <CardSimple {...props} />
              </div>
            ))}
          </div>
          <div className="grid-row">
            <Card {...MOCK_CARD_FEATURED_LETSCONNECT} />
          </div>
        </div>
      </section>
    </>
  );
}
