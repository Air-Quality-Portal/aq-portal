import { type CardProps } from "@teamimpact/veda-ui-blocks";

export const MOCK_CARD_MASTHEAD: CardProps = {
  callToAction: {
    href: "/link",
    label: "Explore the Tool Catalog  → ",
  },
  className: "masthead-home",
  colorMode: "brand",
  description:
    "AIR4US is a multi-agency initiative, integrating authoritative air quality data to support local action and real-world decisions.",

  image: (
    <video autoPlay loop muted playsInline style={{ transform: "scale(1.5)" }}>
      <source src="https://svs.gsfc.nasa.gov/vis/a000000/a005500/a005572/Aerosols_AnnotationsLabel_1920x1080_30p.mp4" />
    </video>
  ),
  isMastHead: true,
  children: null,
  title: (
    <h1 className="font-heading-3xl text-light text-white margin-0">
      A unified <span className="text-accent-cool">air quality</span> data platform for
      decision-making
    </h1>
  ),
};
