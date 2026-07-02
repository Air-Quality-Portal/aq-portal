import { Card } from "@teamimpact/veda-ui-blocks";
import "./styles/home.css";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";

export default function Home() {
  return (
    <div className="display-flex minh-card-xl">
      <Card {...MOCK_CARD_MASTHEAD} />
    </div>
  );
}
