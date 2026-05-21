import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";

import type { SectionCardSimpleProps } from "@/app/components/SectionCardSimple";
import { makeThemeTag } from "@/app/site-config/content.helpers";
import { TRAININGS } from "@/app/site-config/training";

const CARD_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

export const RESOURCES_LEARNING_CARDS: SectionCardSimpleProps["cards"] = [
  ...TRAININGS.map((t) => ({
    id: t.id,
    title: t.title,
    image: <Image src={t.thumbnailImage.src} alt={t.thumbnailImage.alt} fill sizes={CARD_SIZES} />,
    url: `/training/${t.id}`,
    tag: t.themes[0] ? makeThemeTag(t.themes[0]) : undefined,
  })),
  {
    id: "card-fundamentals-remote-sensing",
    title: "Fundamentals of Remote Sensing",
    image: (
      <Image
        src="/img/home/resources-learning-fundamentals-remote-sensing.webp"
        alt="NISAR satellite orbiting Earth"
        fill
        sizes={CARD_SIZES}
      />
    ),
    url: "https://www.earthdata.nasa.gov/learn/trainings/fundamentals-remote-sensing",
    tag: (
      <Tag color="#F67E09" textColor="#0D313D">
        PREPARE
      </Tag>
    ),
  },
  {
    id: "card-introduction-to-sar",
    title: "Introduction to SAR and its Applications",
    image: (
      <Image
        src="/img/home/resources-learning-introduction-to-sar.webp"
        alt="HydroSAR flood mapping over Memphis, Tennessee"
        fill
        sizes={CARD_SIZES}
      />
    ),
    url: "https://www.earthdata.nasa.gov/learn/trainings/introduction-synthetic-aperture-radar-sar-its-applications",
    tag: (
      <Tag color="#F67E09" textColor="#0D313D">
        PREPARE
      </Tag>
    ),
  },
] as SectionCardSimpleProps["cards"];
