import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead } from "@/app/components";
import { TRAINING_CARD_MASTHEAD } from "@/app/site-config/training/training-card-masthead";
import { TRAINING_CARDS } from "@/app/site-config/training/training-cards";

export default function TrainingCollectionPage() {
  return (
    <>
      <PageMasthead {...TRAINING_CARD_MASTHEAD} />
      <section className="grid-container padding-y-6">
        <div className="grid-row grid-gap">
          {TRAINING_CARDS.map(({ id, ...card }) => (
            <div key={id} className="grid-col-12 tablet:grid-col-6">
              <CardDetailed {...card} className="height-card-lg" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
