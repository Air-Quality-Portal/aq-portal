import { CardSimple } from "@tinacms-portal/blocks";
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

// biome-ignore lint/style/noDefaultExport: Page components in Next.js must use default export
export default function Home() {
  return (
    <>
      <section className="usa-section">
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
      <section className="usa-section">
        <div className="grid-container">
          <h2 className="margin-bottom-8 font-heading-2xl">Data Visualization</h2>
          <p>TODO: Map block</p>
        </div>
      </section>

      {/* Resources & Learning */}
      <section className="usa-section bg-base-lightest">
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
                className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 height-featured"
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
