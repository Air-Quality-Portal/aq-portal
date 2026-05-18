import { Card, CardMini, CardSimple } from "@teamimpact/veda-ui-blocks";
import { STYLE_CARDSIMPLE_HEIGHT, STYLE_THEME_MASTHEAD_HEIGHT } from "../site-config/constants";
import { MOCK_CARD_RESPOND_HERO } from "./respond-card-hero";
import {
  MOCK_DATA_STORY_HURRICANE_HELENE,
  MOCK_DATA_STORY_HURRICANE_MILTON,
} from "./respond-data-stories";
import {
  MOCK_CARD_SOUTHERN_CALIFORNIA_FIRES_JAN_2025,
  MOCK_CARD_TEXAS_FLOODS_JULY_2025,
  MOCK_CARD_TYPHOON_SINLAKU_APRIL_2026,
  MOCK_CARD_US_WINTER_STORM_JAN_2026,
} from "./respond-latest-events";
import {
  RESPOND_CARD_RESOURCES_LEARNING_FUNDAMENTALS_OF_REMOTE_SENSING,
  RESPOND_CARD_RESOURCES_LEARNING_INTRODUCTION_TO_SAR,
  RESPOND_CARD_RESOURCES_LEARNING_NASA_LIFELINES,
  RESPOND_CARD_RESOURCES_LEARNING_USING_EARTH_OBSERVATIONS,
} from "./respond-resources-learning";
import {
  MOCK_CARD_BEYOND_FLAMES,
  MOCK_CARD_FINDING_THE_FLOODS,
  MOCK_CARD_HURRICANE_HELENE,
  MOCK_CARD_TRACKING_TORNADOE,
} from "./respond-stories-of-impact";

export default function respond() {
  return (
    <>
      <div className="display-flex" style={{ minHeight: STYLE_THEME_MASTHEAD_HEIGHT }}>
        <Card {...MOCK_CARD_RESPOND_HERO} />
      </div>
      {/* STORIES OF IMPACT */}
      <section className="padding-top-7">
        <div className="grid-container">
          <h2 className="margin-bottom-8 font-heading-2xl">News & Events</h2>
          <div className="grid-row grid-gap-2 margin-bottom-neg-2">
            {/* Feature card: full-width → desktop: 2 of 4 cols */}
            <div className="grid-col-12 desktop:grid-col-6 margin-bottom-2 height-mobile">
              <CardSimple {...MOCK_CARD_FINDING_THE_FLOODS} />
            </div>
            {/* Regular card: full-width → tablet: half → desktop: 1 of 4 cols */}
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 height-mobile">
              <CardSimple {...MOCK_CARD_TRACKING_TORNADOE} />
            </div>
            {/* Stacked half-height cards: full-width → tablet: half → desktop: 1 of 4 cols */}
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 display-flex flex-column height-mobile">
              <div className="flex-1 margin-bottom-2">
                <CardSimple {...MOCK_CARD_BEYOND_FLAMES} size="compact" />
              </div>
              <div className="flex-1">
                <CardSimple {...MOCK_CARD_HURRICANE_HELENE} size="compact" />
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
      {/* Latest Events */}
      <section className="padding-y-7">
        <div className="grid-container">
          <h2 className="margin-bottom-8 font-heading-2xl">Latest Events</h2>
        </div>
        <div className="grid-container">
          <div className="grid-row grid-gap-2 margin-bottom-neg-2">
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2">
              <CardMini {...MOCK_CARD_TYPHOON_SINLAKU_APRIL_2026} />
            </div>
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2">
              <CardMini {...MOCK_CARD_US_WINTER_STORM_JAN_2026} />
            </div>
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2">
              <CardMini {...MOCK_CARD_TEXAS_FLOODS_JULY_2025} />
            </div>
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2">
              <CardMini {...MOCK_CARD_SOUTHERN_CALIFORNIA_FIRES_JAN_2025} />
            </div>
          </div>
        </div>
      </section>
      {/* Data Stories */}
      <section className="padding-y-7">
        <div className="grid-container">
          <h2 className="margin-bottom-8 font-heading-2xl">Data Stories</h2>
        </div>
        <div className="grid-container">
          <div className="grid-row grid-gap-2 margin-bottom-neg-2">
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-6 margin-bottom-2">
              <Card {...MOCK_DATA_STORY_HURRICANE_MILTON} />
            </div>

            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-6 margin-bottom-2">
              <Card {...MOCK_DATA_STORY_HURRICANE_HELENE} />
            </div>
          </div>
        </div>
      </section>
      {/* Resource & Learning */}
      <section className="padding-y-7">
        <div className="grid-container">
          <h2 className="margin-bottom-8 font-heading-2xl">Resource & Learning</h2>
          <div className="grid-row grid-gap-2 margin-bottom-6">
            {[
              RESPOND_CARD_RESOURCES_LEARNING_NASA_LIFELINES,
              RESPOND_CARD_RESOURCES_LEARNING_FUNDAMENTALS_OF_REMOTE_SENSING,
              RESPOND_CARD_RESOURCES_LEARNING_INTRODUCTION_TO_SAR,
              RESPOND_CARD_RESOURCES_LEARNING_USING_EARTH_OBSERVATIONS,
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
        </div>
      </section>
    </>
  );
}
