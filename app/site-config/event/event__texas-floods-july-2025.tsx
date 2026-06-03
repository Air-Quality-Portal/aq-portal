import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { EventContent } from "@/app/site-config/types";
import { TRAINING__EO_BUILDING_EXPOSURE } from "../training/training__eo-building-exposure";
import { TRAINING__FUNDAMENTALS_REMOTE_SENSING } from "../training/training__fundamentals-remote-sensing";
import { TRAINING__INTRODUCTION_TO_SAR } from "../training/training__introduction-to-sar";

export const EVENT__TEXAS_FLOODS_JULY_2025: EventContent = {
  id: "texas-floods-july-2025",
  contentType: "event",
  title: "Texas Floods July 2025",
  description:
    "Following catastrophic flooding in Texas Hill Country, NASA supported response agencies with satellite and airborne data to assess flood extent and aid search and rescue.",
  thumbnailImage: {
    src: "/img/event/UAVSAR_Banner_TexasFloods.webp",
    alt: "UAVSAR flood classification around Lake Travis, Texas showing water and affected land cover",
  },
  mastheadImage: {
    src: "/img/event/texas-floods-july-2025.webp",
    alt: "Flooded river and neighborhoods in Kerrville, Texas after July 2025 flooding",
    caption:
      "UAVSAR data collected from July 9 NASA flights was used to classify the likely areas of flooded developed areas (red), flooded croplands (orange), and areas of open water (blue) around Lake Travis, Texas.",
    attribution: "NASA",
  },
  date: "2025-07-09",
  region: "Texas, North America",
  startDate: "July 4, 2025",
  body: [
    {
      type: "text",
      heading: "",
      paragraphs: [
        "Beginning July 4, 2025, torrential rainfall from the remnants of Tropical Storm Barry triggered catastrophic flooding across Texas Hill Country, particularly in Kerr County as the Guadalupe River rose rapidly. The floods caused significant loss of life, widespread property damage, power outages, and prompted hundreds of emergency rescues.",
        <>
          The NASA Disasters Program activated to support the Texas Department of Emergency
          Management, FEMA Region 6, and the non-profit Save the Children. NASA{" "}
          <Link href="/news-events/finding-floods">deployed two aircraft</Link> over the San Gabriel
          and Colorado river basins, collecting high-resolution optical imagery to support search
          and rescue operations, and UAVSAR radar imagery to identify flooded regions when clouds
          and trees obscured other sensors. NASA also shared satellite precipitation data, landslide
          risk assessments, and infrastructure impact analyses to help guide responders in deploying
          resources.
        </>,
      ],
    },
    {
      type: "ctaCard",
      card: {
        title: "Finding the Floods",
        description:
          "When flooding struck Texas Hill Country, NASA deployed two specialized aircraft to give responders a clearer picture.",
        callToAction: {
          label: "Learn More",
          href: "/news-events/finding-floods",
        },
        image: (
          <Image
            alt="When flooding struck Texas Hill Country, NASA deployed two specialized aircraft to give responders a clearer picture."
            src="/img/story/finding-floods.webp"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            fill
            style={{ objectFit: "cover" }}
          />
        ),
        imagePosition: "right",
      },
    },
    {
      type: "stacSingleLayer",
      heading: "Explore the UAVSAR Flood Maps",
      headingLevel: "h3",
      initialViewState: { longitude: -97.7, latitude: 30.43, zoom: 10 },
      layerConfig: {
        type: "raster",
        collectionId: "uavsar-unetclassified-composite",
        dateRange: { from: "2025-07-09", to: "2025-07-09" },
      },
    },
    {
      type: "sectionCardSimple",
      heading: "Resources & Learning",
      cards: [
        TRAINING__FUNDAMENTALS_REMOTE_SENSING,
        TRAINING__INTRODUCTION_TO_SAR,
        TRAINING__EO_BUILDING_EXPOSURE,
      ],
    },
  ],
  themes: ["respond"],
  categories: ["flood"],
};
