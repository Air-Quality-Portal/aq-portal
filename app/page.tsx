import { Card } from "@teamimpact/veda-ui-blocks";
import { Section } from "./components";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";

export default function Home() {
  return (
    <Section>
      <div className="display-flex desktop:minh-card-lg">
        <Card {...MOCK_CARD_MASTHEAD} />
      </div>
    </Section>
  );
}
