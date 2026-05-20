import { Card, CardDetailed } from "@teamimpact/veda-ui-blocks";

import { TRAINING_CARD_MASTHEAD } from "@/app/site-config/training/training-card-masthead";
import { TRAINING_CARDS } from "@/app/site-config/training/training-cards";

export default function TrainingCollectionPage() {
  return (
    <>
      <div className="display-flex minh-masthead">
        <Card {...TRAINING_CARD_MASTHEAD} />
      </div>
      <section className="grid-container padding-y-6">
        <div className="grid-row grid-gap">
          {TRAINING_CARDS.map(({ id, ...card }) => (
            <div key={id} className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4">
              <CardDetailed {...card} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
