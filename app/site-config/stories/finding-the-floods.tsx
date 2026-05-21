import { Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import type { StoryPageData } from "./types";

export const FINDING_THE_FLOODS: StoryPageData = {
  id: "finding-the-floods",
  title: "Finding the Floods",
  description:
    "When catastrophic flooding struck Texas Hill Country in July 2025, NASA deployed two specialized aircraft to give responders a clearer picture.",
  image: "/img/home/news-events-finding-floods.webp",
  imageAlt:
    "Over flight imagery of the flooding near Kerrville, Texas, July 5, 2025. Credit: Photo by Petty Officer 3rd Class Cheyenne Basurto, U.S. Coast Guard Heartland",
  href: "/stories/finding-the-floods",
  //NEEDS TAGS
  body: [
    {
      component: "section",
      children: [
        {
          component: "section-heading",
          text: "How NASA aircraft gave Texas responders a clearer picture",
        },
        {
          component: "prose",
          content: (
            <p>
              When catastrophic flash flooding struck Texas Hill Country on July 4, 2025, emergency
              managers faced an urgent challenge: a fast-moving disaster, and a near-total lack of
              imagery to identify the people and places most impacted. Persistent cloud cover
              blocked optical satellites. Commercial radar assets struggled to see through the
              region's dense tree canopy. In the critical early days of search and rescue, the
              people making life-and-death decisions had almost no imagery of the hardest-hit areas.
              The NASA Disasters Program moved quickly to fill that gap. Working directly with FEMA
              and the Texas Division of Emergency Management, the program coordinated specialized
              aircraft deployments to rapidly deliver flood maps and high-resolution imagery that
              helped guide search and rescue efforts and resource deployment.
            </p>
          ),
        },
        {
          component: "image",
          src: "/img/home/news-events-finding-floods.webp",
          alt: "U.S. Air Force Master Sgt. Randy Mcknight inspects the flood debris in Kerrville, Texas, July 11, 2025. Credit: Photo by Zelideth Rodriguez, 502nd Air Base Wing",
        },
      ],
    },
    {
      component: "section",
      children: [
        { component: "section-heading", text: "Flying Over the Floods" },
        {
          component: "prose",
          content: (
            <p>
              NASA's response to the Texas floods relied on two advanced airborne instruments, each
              designed to see what other sensors couldn't. The WB-57 high-altitude aircraft,
              operated by NASA’s Johnson Space Center, carries a nose-mounted instrument called
              DyNAMITE that collects 10-centimeter resolution visible and infrared imagery. Through
              gaps in the clouds, the WB-57 captured detail sharp enough to identify individual
              structures, debris fields, and flood boundaries along river corridors. NASA streamed
              live video feeds and imagery directly to responders as the flights were still in the
              air, providing coverage of the San Gabriel basin at a moment when every new piece of
              information was critical.
            </p>
          ),
        },
        {
          component: "image",
          src: "/img/home/news-events-finding-floods.webp",
          alt: "U.S. Air Force Master Sgt. Randy Mcknight inspects the flood debris in Kerrville, Texas, July 11, 2025. Credit: Photo by Zelideth Rodriguez, 502nd Air Base Wing",
        },
        {
          component: "prose",
          content: (
            <p>
              NASA's high-altitude WB-57 aircraft departed July 8, 2025, from Ellington Field in
              Houston, TX. The DyNAMITE instrument is seen here affixed to its nose. Credit: NASA
              NASA’s UAVSAR instrument tackled a different challenge: the region's dense tree
              canopy. UAVSAR uses L-band radar – a longer wavelength than most satellite synthetic
              aperture radar (SAR) systems – which can pass through vegetation to detect water
              pooled beneath the trees. While conventional radar sees only treetops, UAVSAR returned
              a signal from the forest floor, revealing inundation that would otherwise go
              unmeasured. Flying aboard a Gulfstream III out of NASA's Armstrong Flight Research
              Center, the instrument covered the Guadalupe, San Gabriel, and Colorado River basins
              across three days of flights, providing the first publicly available observed flood
              maps of the disaster.
            </p>
          ),
        },
        {
          component: "image",
          src: "/img/home/news-events-finding-floods.webp",
          alt: "This map shows classifications that help identify flooded urban areas, croplands, vegetation, and open water using UAVSAR data collected during flights on July 9, 2025. The UAVSAR flights were coordinated by NASA’s Disasters Program, NASA’s Airborne Sciences Program, and NASA’s Jet Propulsion Laboratory, and flew out of NASA’s Armstrong Flight Research Center at Edwards Air Force Base in California. Credit: NASA ",
        },
      ],
    },
    {
      component: "section",
      children: [
        { component: "section-heading", text: "From the Hill Country to Orbit" },
        {
          component: "prose",
          content: (
            <p>
              The 2025 Texas floods showed how NASA's advanced instruments fill critical information
              gaps, and new orbital assets are extending these capabilities further than ever.
              UAVSAR served as a direct scientific precursor to NISAR, the joint NASA and ISRO
              synthetic aperture radar satellite that began delivering data in early 2026. What
              UAVSAR demonstrated over the Texas Hill Country – such as under-canopy flood
              detection, rapid turnaround, actionable data in an active emergency – is precisely
              what NISAR now provides routinely on a global scale. NASA also now has expanded access
              to high-resolution imagery from space. Through the Commercial Satellite Data
              Acquisition Program, the NASA Disasters Program can rapidly task commercial satellites
              to gather detailed imagery of active disasters. These data support a range of efforts
              – from building damage assessment and road disruption mapping to search and rescue
              operations – offering broad coverage across a variety of advanced sensors. Flash
              floods remain among the most difficult disasters to observe in real time. When cloud
              cover, dense vegetation, and fast-moving water converge, the gap between what
              responders can see and what they need to know can be life-threatening. The NASA
              Disasters Program works to close that gap with the right sensors, the right science,
              and the right partnerships.
            </p>
          ),
        },
      ],
    },
    {
      component: "card-simple",
      heading: "Learning & Resources",
      cards: [
        {
          id: "card-fundamentals-remote-sensing",
          title: "Texas Flooding July 2025",
          image: (
            <Image
              src="/img/home/resources-learning-fundamentals-remote-sensing.webp"
              alt="NISAR satellite orbiting Earth"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ),
          url: "https://www.earthdata.nasa.gov/learn/trainings/fundamentals-remote-sensing",
          tag: (
            <Tag color="white" textColor="#0D313D">
              EVENT
            </Tag>
          ),
        },
        {
          id: "card-explore-data-july-2025-texas-floods",
          title: "Explore Data from the July 2025 Texas Floods",
          image: (
            <Image
              src="/img/home/resources-learning-introduction-to-sar.webp"
              alt="HydroSAR flood mapping over Memphis, Tennessee"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ),
          url: "https://www.earthdata.nasa.gov/learn/trainings/introduction-synthetic-aperture-radar-sar-its-applications",
          tag: (
            <Tag color="white" textColor="#0D313D">
              DATA STORY
            </Tag>
          ),
        },
      ],
    },
  ],
};
