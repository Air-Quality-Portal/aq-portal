import type { CardProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const MOCK_CARD_FEATURED_LETSCONNECT: CardProps = {
  className: "bg-base-light",
  title: "Let's connect",
  description:
    "We welcome partners across government, academia, and industry to connect with us, share perspectives, and help shape how Earth science is applied before, during, and after disasters. Together, we build a growing community committed to improving decision-making and outcomes for communities at risk. ",
  callToAction: {
    label: "Subscribe for Updates",
    href: "/link",
  },
  callToActionSecondary: {
    label: "Contact Our Team",
    href: "/link",
  },
  image: (
    <Image
      alt="Earth from space"
      src="/img/home/home-cardfeatured-letsconnect.webp"
      fill
      style={{ objectFit: "cover" }}
    />
  ),
  imagePosition: "right",
};
