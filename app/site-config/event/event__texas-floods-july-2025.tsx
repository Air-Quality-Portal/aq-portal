import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE, Link } from "@teamimpact/veda-ui-blocks";
import { Fragment } from "react";
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
    src: "/img/event/texas-floods-july-2025.webp",
    alt: "UAVSAR flood classification around Lake Travis, Texas showing water and affected land cover",
  },
  mastheadImage: {
    src: "/img/event/texas-floods-july-2025.webp",
    alt: "Flooded river and neighborhoods in Kerrville, Texas after July 2025 flooding",
    caption:
      "UAVSAR data collected from July 9 NASA flights was used to classify the likely areas of flooded developed areas (red), flooded croplands (orange), and areas of open water (blue) around Lake Travis, Texas.",
    attribution: "NASA",
  },
  themes: ["respond"],
  categories: ["flood"],
  lastUpdatedDate: "2025-07-09",
  startDate: "July 4, 2025",
  region: "Texas, North America",
  body: [
    {
      type: "text",
      heading: "",
      paragraphs: [
        "Beginning July 4, 2025, torrential rainfall from the remnants of Tropical Storm Barry triggered catastrophic flooding across Texas Hill Country, particularly in Kerr County as the Guadalupe River rose rapidly. The floods caused significant loss of life, widespread property damage, power outages, and prompted hundreds of emergency rescues.",
        <Fragment key="texas-floods-july-2025-parargraph-1">
          The NASA Disasters Program activated to support the Texas Department of Emergency
          Management, FEMA Region 6, and the non-profit Save the Children. NASA{" "}
          <Link href="/news-events/finding-floods">deployed two aircraft</Link> over the San Gabriel
          and Colorado river basins, collecting high-resolution optical imagery to support search
          and rescue operations, and UAVSAR radar imagery to identify flooded regions when clouds
          and trees obscured other sensors. NASA also shared satellite precipitation data, landslide
          risk assessments, and infrastructure impact analyses to help guide responders in deploying
          resources.
        </Fragment>,
      ],
    },
    {
      type: "sectionCardFeatured",
      card: {
        id: "finding-floods",
        title: "Finding the Floods",
        description:
          "When flooding struck Texas Hill Country, NASA deployed two specialized aircraft to give responders a clearer picture.",
        callToAction: {
          label: "Learn More",
          href: "/news-events/finding-floods",
        },
        image: {
          alt: "When flooding struck Texas Hill Country, NASA deployed two specialized aircraft to give responders a clearer picture.",
          src: "/img/story/finding-floods.webp",
        },
        imagePosition: "right",
      },
    },
    {
      type: "stacSingleLayer",
      heading: "Explore the UAVSAR Flood Maps",
      initialViewState: { longitude: -99, latitude: 30.0, zoom: 10 },
      baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
      layerConfig: {
        type: "raster",
        collectionId: "uavsar-unetclassified-composite",
        collectionAssetId: "unetclassified",
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
    {
      type: "text",
      heading: "Product Gallery",
      headingLevel: "h2",
      paragraphs: ["Product galleries under development. Will be available by September release."],
    },
  ],
};
