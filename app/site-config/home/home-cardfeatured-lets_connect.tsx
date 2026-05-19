import type { CardProps } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

export const MOCK_CARD_FEATURED_LETSCONNECT: CardProps = {
  className: "bg-base-light",
  title: "Let's connect",
  description:
    "We welcome partners across government, academia, and industry to connect with us, share perspectives, and help shape how Earth science is applied before, during, and after disasters. Together, we build a growing community committed to improving decision-making and outcomes for communities at risk. ",
  callToAction: {
    label: "Subscribe for Updates",
    href: "https://lp.constantcontactpages.com/sl/ICIOyJI",
  },
  callToActionSecondary: {
    label: "Contact Our Team",
    href: "mailto:nasa-disasters-portal-owner@lists.nasa.gov",
  },
  image: (
    <Image
      alt="Earth from space"
      src="/img/home/home-cardfeatured-letsconnect.webp"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
      fill
      style={{ objectFit: "cover" }}
    />
  ),
  imagePosition: "right",
};
