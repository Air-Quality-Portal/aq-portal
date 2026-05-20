import { Card } from "@teamimpact/veda-ui-blocks";

import { TRAINING_CARD_MASTHEAD } from "@/app/site-config/training/training-card-masthead";

export default function TrainingCollectionPage() {
  return (
    <div className="display-flex minh-masthead">
      <Card {...TRAINING_CARD_MASTHEAD} />
    </div>
  );
}
