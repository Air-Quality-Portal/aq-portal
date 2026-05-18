import { CardCTA, type CardProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

const MOCK_FEATURE_CTACARDS_PROPS = [
  {
    title: "Prepare",
    description: "Anticipate risk and boost readiness.",
    url: "/prepare",
    accentColor: "#f67e09",
  },
  {
    title: "Respond",
    description: "Support real-time decisions with timely insights.",
    url: "/respond",
    accentColor: "#c91b6e",
  },
  {
    title: "Recover",
    description: "Assess impacts and rebuild stronger.",
    url: "/recover",
    accentColor: "#4f6fae",
  },
  {
    title: "Build Resilience",
    description: "Safeguard communities for enduring impact.",
    url: "/build-resilience",
    accentColor: "#1d9950",
  },
];

const MOCK_FEATURE_CTACARDS_SECTION = (
  <div className="grid-row grid-gap-lg">
    {MOCK_FEATURE_CTACARDS_PROPS.map((cardProps) => (
      <div
        key={cardProps.title}
        className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 padding-top-205"
      >
        <CardCTA {...cardProps} />
      </div>
    ))}
  </div>
);

export const MOCK_CARD_HOMEPAGE_HERO: CardProps = {
  image: (
    <Image
      alt="Earth from space"
      src="/img/home/home-card-hero.webp"
      fill
      style={{ objectFit: "cover" }}
      preload={true}
    />
  ),
  title: <h1 className="font-heading-3xl text-bold text-white margin-0">Disasters PORTAL</h1>,
  description: "Empowering disaster insights with actionable Earth science information.",
  callToAction: {
    label: "Learn About Us",
    href: "/link",
  },
  colorMode: "brand",
  isMastHead: true,
  children: MOCK_FEATURE_CTACARDS_SECTION,
};
