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
    <video
      src="/img/home/home-card-hero-video.mp4"
      aria-hidden="true"
      tabIndex={-1}
      poster="/img/home/home-card-hero-poster.webp"
      autoPlay
      muted
      loop
      playsInline
    />
  ),
  title: (
    <div className="grid-row grid-gap-4 flex-align-center">
      <div className="grid-col-12 tablet:grid-col-auto">
        <Image src="/img/logo-emblem.svg" alt="" aria-hidden width={177} height={182} />
      </div>
      <div className="grid-col-12 tablet:grid-col-fill">
        <h1 className="font-heading-3xl text-bold text-white margin-0 margin-bottom-2">
          Disasters PORTAL
        </h1>
        <p className="text-white margin-0 margin-bottom-4 measure-4">
          Empowering disaster insights with actionable Earth science information
        </p>
        <a href="/about" className="usa-button">
          Learn About Us
        </a>
      </div>
    </div>
  ),
  colorMode: "brand",
  isMastHead: true,
  children: MOCK_FEATURE_CTACARDS_SECTION,
};
