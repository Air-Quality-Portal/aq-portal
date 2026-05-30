import { Link } from "@teamimpact/veda-ui-blocks";
import type { EventContent } from "@/app/site-config/types";

export const EVENT__TYPHOON_SINLAKU_2026: EventContent = {
  id: "typhoon-sinlaku-2026",
  contentType: "event",
  title: "Typhoon Sinlaku April 2026",
  lastUpdatedDate: "April 24, 2026",
  thumbnailImage: {
    src: "/img/event/typhoon-sinlaku-2026.webp",
    alt: "Banner Image: Suomi-NPP VIIRS Image of Typhoon Sinlaku with boundary overlay of the Mariana Islands, collected on April 13, 2026. Credit: NASA",
  },
  mastheadImage: {
    src: "/img/event/typhoon-sinlaku-2026.webp",
    alt: "Banner Image: Suomi-NPP VIIRS Image of Typhoon Sinlaku with boundary overlay of the Mariana Islands, collected on April 13, 2026. Credit: NASA",
  },
  themes: ["respond"],
  categories: ["tropical cyclone", "severewx"],
  overview: {
    region: "Northern Mariana Islands, Oceania",
    startDate: "April 14, 2026",
    disastersType: "Hurricanes & Cyclones",
  },
  body: [
    {
      type: "text",
      heading: "Typhoon Sinlaku",
      headingLevel: "h2",
      paragraphs: [
        "NASA supported U.S. response agencies when Typhoon Sinlaku struck the Northern Mariana Islands and Guam.",
        "Typhoon Sinlaku brought high winds and heavy rainfall to the Northern Mariana Islands and Guam, causing widespread power blackouts, flooding, and extensive damage to homes and infrastructure.",
        <>
          In coordination with FEMA and other federal partners, the NASA Disasters Program worked
          with FEMA, USGS, the American Red Cross and the Centers for Medicare and Medicaid Services
          to support the U.S. response to the storm. The program shared satellite-based maps and
          data with partners, including NASA Black Marble data to assess power outages, landslide
          hazard assessment maps, and imagery from commercial partners – enabled by NASA&apos;s{" "}
          <Link href="https://science.nasa.gov/earth-science/csda/">
            Commercial Satellite Data Acquisition Program
          </Link>{" "}
          – that provided context and situational awareness. NASA also shared IMERG satellite
          precipitation data to assess rainfall impacts when ground-based weather radars on the
          islands were disabled by the storm.
        </>,
      ],
    },
    {
      type: "image",
      src: "/img/event/typhoon-sinlaku-umbra-guam.webp",
      alt: "Radar backscatter image of Antonio B Won Pat International Airport in Guam, captured by satellites on April 14, 2026",
      caption:
        'Radar backscatter image of Antonio B Won Pat International Airport in Guam, captured by satellites on April 14, 2026. Synthetic aperture radar (SAR) sensors have the ability to "see through" clouds to capture images of homes and infrastructure even in the midst of a hurricane. This image includes copyrighted material of Umbra. All rights reserved. This work utilized data made available through the NASA Commercial Satellite Data Acquisition (CSDA) program.',
      width: 1920,
      height: 1080,
    },
  ],
};
