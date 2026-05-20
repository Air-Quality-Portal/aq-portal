import { Card, CardMini, CardSimple } from "@teamimpact/veda-ui-blocks";
import { SectionCardCarousel, SectionCardSimpleMosaic } from "../components";
import { MOCK_CARD_RESPOND_HERO } from "../site-config/respond/respond-card-hero";
import { MOCK_RESPOND_DATA_STORIES } from "../site-config/respond/respond-data-stories";
import {
  MOCK_CARD_SOUTHERN_CALIFORNIA_FIRES_JAN_2025,
  MOCK_CARD_TEXAS_FLOODS_JULY_2025,
  MOCK_CARD_TYPHOON_SINLAKU_APRIL_2026,
  MOCK_CARD_US_WINTER_STORM_JAN_2026,
} from "../site-config/respond/respond-latest-events";
import { MOCK_RESPOND_CARD_RESOURCE_LEARNING } from "../site-config/respond/respond-resources-learning";
import {
  MOCK_CARD_BEYOND_FLAMES,
  MOCK_CARD_FINDING_THE_FLOODS,
  MOCK_CARD_HURRICANE_HELENE,
  MOCK_CARD_TRACKING_TORNADOE,
} from "../site-config/respond/respond-stories-of-impact";

export default function respond() {
  return (
    <>
      <div className="display-flex" style={{ minHeight: "484px" }}>
        <Card {...MOCK_CARD_RESPOND_HERO} />
      </div>
      {/* STORIES OF IMPACT */}
      <SectionCardSimpleMosaic
        sectionHeading="News & Events"
        cards={[
          MOCK_CARD_FINDING_THE_FLOODS,
          MOCK_CARD_TRACKING_TORNADOE,
          MOCK_CARD_BEYOND_FLAMES,
          MOCK_CARD_HURRICANE_HELENE,
        ]}
      />

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
      <SectionCardCarousel sectionHeading="Data Stories" cards={MOCK_RESPOND_DATA_STORIES} />
      {/* Resource & Learning */}
      <section className="padding-y-7">
        <div className="grid-container">
          <h2 className="margin-bottom-8 font-heading-2xl">Resource & Learning</h2>
          <div className="grid-row grid-gap-2 margin-bottom-6">
            {MOCK_RESPOND_CARD_RESOURCE_LEARNING.map((props) => (
              <div
                key={props.id}
                className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2"
                style={{ minHeight: "484px" }}
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
