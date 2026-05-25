import { CardMini, CardSimple } from "@teamimpact/veda-ui-blocks";
import {
  PageMasthead,
  Section,
  SectionCardCarousel,
  SectionCardSimpleMosaic,
  SectionHeading,
} from "../components";
import { MOCK_CARD_RESPOND_HERO } from "../site-config/respond/respond-card-hero";
import {
  MOCK_CARD_SOUTHERN_CALIFORNIA_FIRES_JAN_2025,
  MOCK_CARD_TEXAS_FLOODS_JULY_2025,
  MOCK_CARD_TYPHOON_SINLAKU_APRIL_2026,
  MOCK_CARD_US_WINTER_STORM_JAN_2026,
} from "../site-config/respond/respond-latest-events";
import { MOCK_RESPOND_CARD_RESOURCE_LEARNING } from "../site-config/respond/respond-resources-learning";
import { MOCK_RESPOND_DATA_STORIES } from "../site-config/respond/respond-sectioncardcarousel-data-stories";
import {
  MOCK_CARD_BEYOND_FLAMES,
  MOCK_CARD_FINDING_THE_FLOODS,
  MOCK_CARD_HURRICANE_HELENE,
  MOCK_CARD_TRACKING_TORNADO,
} from "../site-config/respond/respond-sectioncardsimplemosaic-stories-of-impact";

export default function RespondPage() {
  return (
    <>
      <PageMasthead {...MOCK_CARD_RESPOND_HERO} />

      {/* STORIES OF IMPACT */}
      <SectionCardSimpleMosaic
        sectionHeading={<SectionHeading>News & Events</SectionHeading>}
        cards={[
          MOCK_CARD_FINDING_THE_FLOODS,
          MOCK_CARD_TRACKING_TORNADO,
          MOCK_CARD_BEYOND_FLAMES,
          MOCK_CARD_HURRICANE_HELENE,
        ]}
      />

      {/* Data Visualization */}
      <Section>
        <SectionHeading>Data Visualization</SectionHeading> <p>TODO: Map block</p>
      </Section>

      {/* Latest Events */}
      <Section>
        <SectionHeading>Latest Events</SectionHeading>

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
      </Section>

      {/* Data Stories */}
      <SectionCardCarousel
        sectionHeading={<SectionHeading>Data Stories</SectionHeading>}
        cards={MOCK_RESPOND_DATA_STORIES}
      />
      {/* Resource & Learning */}

      <Section>
        <SectionHeading>Resources & Learning</SectionHeading>

        <div className="grid-row grid-gap-2 margin-bottom-6">
          {MOCK_RESPOND_CARD_RESOURCE_LEARNING.map((props) => (
            <div
              key={props.id}
              className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 minh-card-md"
            >
              <CardSimple {...props} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
