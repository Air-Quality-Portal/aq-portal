import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead, Section } from "@/app/components";
import { TRAININGS, TRAININGS_EXTERNAL } from "@/app/site-config/training";
import { PAGE__CARD_MASTHEAD } from "@/app/site-config/training/page__card-masthead";
import { makeCardDetailedProps } from "../site-config/content.helpers";

export default function TrainingCollectionPage() {
  return (
    <>
      <PageMasthead {...PAGE__CARD_MASTHEAD} />
      <Section>
        <div className="grid-row grid-gap">
          {[...TRAININGS, ...TRAININGS_EXTERNAL].map(({ id, hazards, themes, ...card }) => (
            <div key={id} className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-2">
              <CardDetailed
                {...makeCardDetailedProps({ ...card, id })}
                className="height-card-lg"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
