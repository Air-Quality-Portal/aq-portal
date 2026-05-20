import { Card, CardMini, CardSimple } from "@teamimpact/veda-ui-blocks";
import { Section, SectionHeading } from "@/app/components";
import { MOCK_CARD_RECOVER_HERO } from "@/app/site-config/recover/recover-card-hero";
import {
  MOCK_CARD_RECOVER_LATEST_EVENT_1,
  MOCK_CARD_RECOVER_LATEST_EVENT_2,
  MOCK_CARD_RECOVER_LATEST_EVENT_3,
  MOCK_CARD_RECOVER_LATEST_EVENT_4,
} from "@/app/site-config/recover/recover-latest-events";
import { MOCK_RECOVER_CARD_RESOURCE_LEARNING } from "@/app/site-config/recover/recover-resources-learning";
import {
  MOCK_CARD_RECOVER_STORY_1,
  MOCK_CARD_RECOVER_STORY_2,
  MOCK_CARD_RECOVER_STORY_3,
  MOCK_CARD_RECOVER_STORY_4,
} from "@/app/site-config/recover/recover-stories-of-impact";

export default function Recover() {
  return (
    <>
      <div className="display-flex" style={{ minHeight: "484px" }}>
        <Card {...MOCK_CARD_RECOVER_HERO} />
      </div>

      {/* Stories of Impact */}
      <Section>
        <SectionHeading>Stories of Impact</SectionHeading>
        <div className="grid-row grid-gap-2 margin-bottom-neg-2">
          {/* Feature card: full-width → desktop: 2 of 4 cols */}
          <div className="grid-col-12 desktop:grid-col-6 margin-bottom-2 height-mobile">
            <CardSimple {...MOCK_CARD_RECOVER_STORY_1} />
          </div>
          {/* Regular card: full-width → tablet: half → desktop: 1 of 4 cols */}
          <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 height-mobile">
            <CardSimple {...MOCK_CARD_RECOVER_STORY_2} />
          </div>
          {/* Stacked half-height cards: full-width → tablet: half → desktop: 1 of 4 cols */}
          <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 display-flex flex-column height-mobile">
            <div className="flex-1 margin-bottom-2">
              <CardSimple {...MOCK_CARD_RECOVER_STORY_3} size="compact" />
            </div>
            <div className="flex-1">
              <CardSimple {...MOCK_CARD_RECOVER_STORY_4} size="compact" />
            </div>
          </div>
        </div>
      </Section>

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
              <CardMini {...MOCK_CARD_RECOVER_LATEST_EVENT_1} />
            </div>
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2">
              <CardMini {...MOCK_CARD_RECOVER_LATEST_EVENT_2} />
            </div>
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2">
              <CardMini {...MOCK_CARD_RECOVER_LATEST_EVENT_3} />
            </div>
            <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2">
              <CardMini {...MOCK_CARD_RECOVER_LATEST_EVENT_4} />
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Learning */}
      <Section>
        <SectionHeading>Resources & Learning</SectionHeading>
        <div className="grid-row grid-gap-2 margin-bottom-6">
          {MOCK_RECOVER_CARD_RESOURCE_LEARNING.map((cardProps) => (
            <div
              key={cardProps.id}
              className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2"
              style={{ minHeight: "484px" }}
            >
              <CardSimple {...cardProps} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
