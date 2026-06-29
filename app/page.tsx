import { Card } from "@teamimpact/veda-ui-blocks";
import "./styles/home.css";
import { MapCarouselBlock } from "./components";
import { MOCK_CARD_MASTHEAD } from "./site-config/home/home-card-masthead";
import { HOME_MAP_CAROUSEL_ITEMS } from "./site-config/home/home-content";

export default function Home() {
  return (
    <>
      <div className="home-card-masthead display-flex minh-card-xl">
        <Card {...MOCK_CARD_MASTHEAD} />
      </div>
      <MapCarouselBlock {...HOME_MAP_CAROUSEL_ITEMS} />
    </>
  );
}
