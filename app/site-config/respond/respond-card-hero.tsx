import type { CardProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const MOCK_CARD_RESPOND_HERO: CardProps = {
  image: (
    <Image
      alt="Workers assessing LA fire debris"
      src="/img/respond/LAfires-workers-debris.webp"
      fill
      style={{ objectFit: "cover" }}
      priority
    />
  ),
  title: (
    <h1 className="font-mono-3xl text-normal text-uppercase text-ls-3 text-white bg-secondary flex-align-self-start margin-0">
      Respond
    </h1>
  ),
  subtitle: "Support real-time decisions with timely insights.",
  colorMode: "brand",
  isMastHead: true,
};
