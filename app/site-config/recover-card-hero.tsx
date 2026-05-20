import type { CardProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const MOCK_CARD_RECOVER_HERO: CardProps = {
  image: (
    <Image
      alt="Aerial view of debris removal operations in Mayfield, Kentucky after severe storm damage"
      src="/img/recover/hero/debris-removal-mayfield.webp"
      fill
      style={{ objectFit: "cover" }}
      preload={true}
    />
  ),
  title: (
    <h1 className="font-mono-3xl text-normal text-uppercase text-ls-3 text-white bg-accent-cool flex-align-self-start margin-0">
      Recover
    </h1>
  ),
  description: "Assess impacts and rebuild stronger.",
  colorMode: "brand",
  isMastHead: true,
};
