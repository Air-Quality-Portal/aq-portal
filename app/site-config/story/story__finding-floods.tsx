import { Link } from "@teamimpact/veda-ui-blocks";
import type { StoryContent } from "@/app/site-config/types";
import { EVENT__TEXAS_FLOODS_JULY_2025 } from "../event/event__texas-floods-july-2025";
import { EVENT__US_WINTER_STORM_2026 } from "../event/event__us-winter-storm-jan-2026";

export const STORY__FINDING_FLOODS: StoryContent = {
  id: "finding-floods",
  contentType: "story",
  title: "Finding the Floods",
  thumbnailImage: {
    src: "/img/story/finding-floods.webp",
    alt: "Flooded river in Kerrville, Texas showing significant flood waters",
  },
  mastheadImage: {
    src: "/img/story/finding-floods.webp",
    alt: "Flooded river in Kerrville, Texas showing significant flood waters",
  },
  themes: ["respond"],
  categories: ["flood"],
  body: [
    {
      type: "text",
      heading: "How NASA aircraft gave Texas responders a clearer picture",
      paragraphs: [
        "When catastrophic flash flooding struck Texas Hill Country on July 4, 2025, emergency managers faced an urgent challenge: a fast-moving disaster, and a near-total lack of imagery to identify the people and places most impacted. Persistent cloud cover blocked optical satellites. Commercial radar assets struggled to see through the region's dense tree canopy. In the critical early days of search and rescue, the people making life-and-death decisions had almost no imagery of the hardest-hit areas. The NASA Disasters Program moved quickly to fill that gap. Working directly with FEMA and the Texas Division of Emergency Management, the program coordinated specialized aircraft deployments to rapidly deliver flood maps and high-resolution imagery that helped guide search and rescue efforts and resource deployment.",
      ],
    },
    {
      type: "image",
      src: "/img/story/finding-floods__kerrville-texas_flood-debris.webp",
      alt: "U.S. Air Force Master Sgt. Randy McKnight inspects the flood debris in Kerrville, Texas, July 11, 2025. Credit: Photo by Zelideth Rodriguez, 502nd Air Base Wing",
      caption:
        "U.S. Air Force Master Sgt. Randy McKnight inspects the flood debris in Kerrville, Texas, July 11, 2025. Credit: Photo by Zelideth Rodriguez, 502nd Air Base Wing",
      width: 1400,
      height: 1400,
    },
    {
      type: "text",
      heading: "Flying Over the Floods",
      paragraphs: [
        "NASA's response to the Texas floods relied on two advanced airborne instruments, each designed to see what other sensors couldn't.",
        <>
          The WB-57 high-altitude aircraft, operated by NASA’s Johnson Space Center, carries a
          nose-mounted instrument called{" "}
          <Link href="https://scifli.larc.nasa.gov/about/dynamite/">DyNAMITE</Link> that collects
          10-centimeter resolution visible and infrared imagery. Through gaps in the clouds, the
          WB-57 captured detail sharp enough to identify individual structures, debris fields, and
          flood boundaries along river corridors. NASA streamed live video feeds and imagery
          directly to responders as the flights were still in the air, providing coverage of the San
          Gabriel basin at a moment when every new piece of information was critical.
        </>,
      ],
    },
    {
      type: "image",
      src: "/img/story/finding-floods__wb57-nosecone.webp",
      alt: "NASA's high-altitude WB-57 aircraft departed July 8, 2025, from Ellington Field in Houston, TX. The DyNAMITE instrument is seen here affixed to its nose. Credit: NASA",
      caption:
        "NASA's high-altitude WB-57 aircraft departed July 8, 2025, from Ellington Field in Houston, TX. The DyNAMITE instrument is seen here affixed to its nose. Credit: NASA",
      width: 1400,
      height: 1400,
    },
    {
      type: "text",
      paragraphs: [
        <>
          NASA’s <Link href="https://uavsar.jpl.nasa.gov/">UAVSAR</Link> instrument tackled a
          different challenge: the region's dense tree canopy. UAVSAR uses L-band radar – a longer
          wavelength than most satellite synthetic aperture radar (SAR) systems – which can pass
          through vegetation to detect water pooled beneath the trees. While conventional radar sees
          only treetops, UAVSAR returned a signal from the forest floor, revealing inundation that
          would otherwise go unmeasured. Flying aboard a Gulfstream III out of NASA's Armstrong
          Flight Research Center, the instrument covered the Guadalupe, San Gabriel, and Colorado
          River basins across three days of flights, providing the first publicly available observed
          flood maps of the disaster.
        </>,
      ],
    },
    {
      type: "image",
      src: "/img/story/finding-floods__gis-texas-flooding-uavsar-austin.webp",
      alt: "This map shows classifications that help identify flooded urban areas, croplands, vegetation, and open water using UAVSAR data collected during flights on July 9, 2025. The UAVSAR flights were coordinated by NASA’s Disasters Program, NASA’s Airborne Sciences Program, and NASA’s Jet Propulsion Laboratory, and flew out of NASA’s Armstrong Flight Research Center at Edwards Air Force Base in California. Credit: NASA",
      caption:
        "This map shows classifications that help identify flooded urban areas, croplands, vegetation, and open water using UAVSAR data collected during flights on July 9, 2025. The UAVSAR flights were coordinated by NASA’s Disasters Program, NASA’s Airborne Sciences Program, and NASA’s Jet Propulsion Laboratory, and flew out of NASA’s Armstrong Flight Research Center at Edwards Air Force Base in California. Credit: NASA",
      width: 1400,
      height: 1400,
    },
    {
      type: "text",
      heading: "From the Hill Country to Orbit",
      paragraphs: [
        "The 2025 Texas floods showed how NASA's advanced instruments fill critical information gaps, and new orbital assets are extending these capabilities further than ever.",
        <>
          UAVSAR served as a direct scientific precursor to{" "}
          <Link href="https://science.nasa.gov/mission/nisar/">NISAR</Link>, the joint NASA and ISRO
          synthetic aperture radar satellite that began delivering data in early 2026. What UAVSAR
          demonstrated over the Texas Hill Country – such as under-canopy flood detection, rapid
          turnaround, actionable data in an active emergency – is precisely what NISAR now provides
          routinely on a global scale.
        </>,
        <>
          NASA also now has expanded access to high-resolution imagery from space. Through the{" "}
          <Link href="https://science.nasa.gov/earth-science/csda/">
            Commercial Satellite Data Acquisition Program
          </Link>
          , the NASA Disasters Program can rapidly task commercial satellites to gather detailed
          imagery of active disasters. These data support a range of efforts – from building damage
          assessment and road disruption mapping to search and rescue operations – offering broad
          coverage across a variety of advanced sensors.
        </>,
        "Flash floods remain among the most difficult disasters to observe in real time. When cloud cover, dense vegetation, and fast-moving water converge, the gap between what responders can see and what they need to know can be life-threatening. The NASA Disasters Program works to close that gap with the right sensors, the right science, and the right partnerships.",
      ],
    },
    {
      type: "sectionCardSimple",
      heading: "Resources & Learning",
      cards: [EVENT__TEXAS_FLOODS_JULY_2025, EVENT__US_WINTER_STORM_2026],
    },
  ],
};
