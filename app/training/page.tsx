import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { PageMasthead, Section } from "@/app/components";
import { TRAININGS } from "@/app/site-config/training";
import { PAGE__CARD_MASTHEAD } from "@/app/site-config/training/page__card-masthead";
import { makeCardDetailedProps } from "../site-config/content.helpers";

export default function TrainingCollectionPage() {
  return (
    <>
      <PageMasthead {...PAGE__CARD_MASTHEAD} />
      <Section>
        <div className="grid-row grid-gap">
          {TRAININGS.map(({ id, categories, themes, ...card }) => (
            <div key={id} className="grid-col-12 tablet:grid-col-6">
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
