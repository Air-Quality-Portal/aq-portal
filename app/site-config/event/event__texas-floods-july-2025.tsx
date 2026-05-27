import { Link } from "@teamimpact/veda-ui-blocks";
import type { EventContent } from "@/app/site-config/types";

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
  overview: {
    region: "Texas, North America",
    startDate: "July 4, 2025",
    disasterType: "Floods",
  },
  body: [
    {
      type: "list",
      id: "overview",
      heading: "Overview",
      listStyle: "metadata",
      showDividerAfterHeading: true,
      showDividerAfterItems: true,
      items: ["Region: Texas, North America", "Start Date: July 4, 2025", "Disaster Type: Floods"],
      paragraphs: [
        "Beginning July 4, 2025, torrential rainfall from the remnants of Tropical Storm Barry triggered catastrophic flooding across Texas Hill Country, particularly in Kerr County as the Guadalupe River rose rapidly. The floods caused significant loss of life, widespread property damage, power outages, and prompted hundreds of emergency rescues.",
        <>
          The NASA Disasters Program activated to support the Texas Department of Emergency
          Management, FEMA Region 6, and the non-profit Save the Children. NASA{" "}
          <Link href="/stories/finding-floods">deployed two aircraft</Link> over the San Gabriel and
          Colorado river basins, collecting high-resolution optical imagery to support search and
          rescue operations, and UAVSAR radar imagery to identify flooded regions when clouds and
          trees obscured other sensors. NASA also shared satellite precipitation data, landslide
          risk assessments, and infrastructure impact analyses to help guide responders in deploying
          resources.
        </>,
      ],
    },
    {
      type: "text",
      id: "explore-uavsar-flood-maps",
      heading: "Explore the UAVSAR Flood Maps",
      paragraphs: [
        "TODO: Embedded interactive data visualization will be added when flood maps are ready.",
      ],
    },
    {
      type: "text",
      id: "product-gallery",
      heading: "Product Gallery",
      paragraphs: ["TODO: Product gallery will be added when imagery products are ready."],
    },
  ],
  sidebarNavigation: [
    { id: "overview", label: "Overview" },
    { id: "explore-uavsar-flood-maps", label: "Explore the UAVSAR Flood Maps" },
    { id: "product-gallery", label: "Product Gallery" },
    { id: "resources-learning", label: "Resources & Learning" },
  ],
  storyOfImpact: {
    title: "Finding the Floods",
    description:
      "When flooding struck Texas Hill Country, NASA deployed two specialized aircraft to give responders a clearer picture.",
    href: "/stories/finding-floods",
    ctaLabel: "Learn More",
  },
  resourcesLearning: ["fundamentals-remote-sensing", "introduction-to-sar", "eo-building-exposure"],
  relatedContent: ["finding-floods"],
  themes: ["respond"],
  categories: ["flood"],
};
