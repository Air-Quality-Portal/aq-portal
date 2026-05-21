import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead, Section } from "@/app/components";
import { TRAINING_CARD_MASTHEAD } from "@/app/site-config/training/training-card-masthead";
import { TRAININGS } from "@/app/site-config/training/trainings";
import { makeCardDetailedProps } from "../site-config/content.helpers";

export default function TrainingCollectionPage() {
  return (
    <>
      <PageMasthead {...TRAINING_CARD_MASTHEAD} />
      <Section>
        <div className="grid-row grid-gap">
          {TRAININGS.map(({ id, ...card }) => (
            <div key={id} className="grid-col-12 tablet:grid-col-6">
              <CardDetailed
                {...makeCardDetailedProps({
                  ...card,
                  callToAction: { href: `/training/${id}`, label: "View Training" },
                })}
                className="height-card-lg"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
