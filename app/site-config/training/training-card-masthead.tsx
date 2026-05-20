import type { CardProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const TRAINING_CARD_MASTHEAD: CardProps = {
  image: <Image alt="" src="/img/training/training-card-masthead.webp" sizes="100vw" fill />,
  title: <h1 className="font-heading-3xl text-bold text-white margin-0">TRAINING</h1>,
  description:
    "Empowering disaster management communities through relevant user-driven training resources.",
  colorMode: "brand",
  isMastHead: true,
};
