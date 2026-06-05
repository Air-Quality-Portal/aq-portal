import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE, Link } from "@teamimpact/veda-ui-blocks";
import { Fragment } from "react";
import type { EventContent } from "@/app/site-config/types";

import { TRAINING__EO_PRE_POST_FIRE_MONITORING } from "../training/training__eo-pre-post-fire-monitoring";
import { TRAINING__FUNDAMENTALS_REMOTE_SENSING } from "../training/training__fundamentals-remote-sensing";
import { TRAINING__LIFELINES_WILDFIRE_WORKFLOW } from "../training/training__lifelines-wildfire-workflow";

export const EVENT__SOUTHERN_CALIFORNIA_FIRE_JAN_2025: EventContent = {
  id: "southern-california-fire-jan-2025",
  contentType: "event",
  title: "Southern California Wildfires January 2025",
  thumbnailImage: {
    src: "/img/event/southern-california-fire-jan-2025.webp",
    alt: "Infrared satellite imagery of the Palisades fire in Malibu, CA, from Jan. 12, 2025.",
  },
  mastheadImage: {
    src: "/img/event/southern-california-fire-jan-2025.webp",
    alt: "Infrared satellite imagery of the Palisades fire in Malibu, CA, from Jan. 12, 2025.",
  },
  themes: ["respond"],
  categories: ["fire"],
  region: " Los Angeles County, North America",
  startDate: "Jan. 10, 2025",
  linkUSGovernment: {
    label: "Learn more",
    href: "https://www.usa.gov/california-wildfires",
  },
  linkDHSFEMA: {
    label: "Learn more",
    href: "https://www.fema.gov/california-wildfires",
  },
  body: [
    {
      type: "text",
      paragraphs: [
        "Beginning Jan. 7, 2025, several major wildfires swept through Los Angeles County, driven by powerful Santa Ana winds. The Palisades Fire, Eaton Fire, and Hurst Fire caused widespread destruction across communities from Pacific Palisades to Pasadena and San Fernando, resulting in significant loss of life, property damage, and power outages. The California Governor's Office of Emergency Services (CalOES), the Los Angeles County Office of Emergency Management, and FEMA Region 9 requested NASA's support to address several critical situational awareness needs – including identifying burned structures and damaged critical infrastructure, assessing fire extent, monitoring air quality and methane emissions, and tracking power outages across affected communities.",
        <Fragment key="2">
          The NASA Disasters Program participated in coordination calls hosted by CalOES and FEMA to
          align with responder priorities. Mapping the scope of destruction was an early focus –
          NASA shared multispectral imagery, including Sentinel-2, Landsat, and Maxar analysis, to
          characterize burned areas and potential structural losses, while Synthetic Aperture Radar
          (SAR){" "}
          <Link href="https://www.earthdata.nasa.gov/learn/tutorials/change-detection-using-opera-sentinel-1-rtc">
            Sentinel-1 change detection analysis{" "}
          </Link>{" "}
          pinpointed locations of potential infrastructure damage to help guide ground team
          deployment.{" "}
          <Link href="https://www.earthdata.nasa.gov/dashboard/data-catalog/nighttime-lights-SE">
            Black Marble
          </Link>{" "}
          nighttime lights near real-time data gave local, state and federal partners a running
          picture of which communities had likely lost power and how electrical grid restoration
          progressed across the region. Where smoke and emissions posed possible risks to public
          health, <Link href="https://tempo.si.edu/">TEMPO</Link> satellite data characterized air
          quality and assessed adverse health conditions. To assess potential risks of hazardous
          materials on the ground, NASA deployed{" "}
          <Link href="https://earth.jpl.nasa.gov/estd-missions/airborne/aviris-3/">AVIRIS-3</Link> –
          an airborne hyperspectral instrument – collecting 3–4 meter resolution imagery to generate
          ash fraction maps and detect methane emissions from potential gas leaks.
        </Fragment>,
      ],
    },
    {
      type: "stacCompare",
      heading: "Explore the AVIRIS-3 Hyperspectral Imagery",
      initialViewState: { longitude: -118.148, latitude: 34.195, zoom: 13 },
      baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
      leftLayerConfig: {
        type: "raster",
        collectionId: "aviris3-rgb-subdaily",
        collectionAssetId: "rgb",
        dateRange: { from: "2025-01-11", to: "2025-01-11" },
      },
      rightLayerConfig: {
        type: "raster",
        collectionId: "aviris3-rgb-subdaily",
        collectionAssetId: "rgb",
        dateRange: { from: "2025-01-16", to: "2025-01-16" },
      },
    },
    {
      type: "sectionCardSimple",
      heading: "Resources & Learning",
      cards: [
        TRAINING__LIFELINES_WILDFIRE_WORKFLOW,
        TRAINING__FUNDAMENTALS_REMOTE_SENSING,
        TRAINING__EO_PRE_POST_FIRE_MONITORING,
      ],
    },
    {
      type: "list",
      heading: "External Resources",
      items: [
        {
          label: "NASA Wildfire Data Access & Tools",
          href: "https://www.earthdata.nasa.gov/topics/human-dimensions/wildfires/data-access-tools",
        },
        {
          label: "NASA Earthdata Pathfinders - Wildfires",
          href: "https://earthdata.nasa.gov/learn/pathfinders/wildfire-data-pathfinder",
        },
        {
          label: "Fire Information for Resource Management (FIRMS)",
          href: "https://firms.modaps.eosdis.nasa.gov/",
        },
        {
          label: "Global Wildfire Information System (GWIS)",
          href: "https://gwis.jrc.ec.europa.eu/",
        },
        {
          label: "Global Fire Weather Database (GFWED)",
          href: "https://data.giss.nasa.gov/impacts/gfwed/",
        },
      ],
    },
    {
      type: "list",
      heading: "NASA Earth Observatory",
      headingLevel: "h4",
      items: [
        {
          label: "The Palisades Fire's Footprint",
          href: "https://earthobservatory.nasa.gov/images/153831/the-palisades-fires-footprint",
        },
        {
          label: "Eaton Fire Leaves California Landscape Charred",
          href: "https://earthobservatory.nasa.gov/images/153821/eaton-fire-leaves-california-landscape-charred",
        },
        {
          label: "Fires Tear Through Los Angeles",
          href: "https://earthobservatory.nasa.gov/images/153793/fires-tear-through-los-angeles",
        },
        {
          label: "Smoke Streams from Palisades and Eaton Fires",
          href: "https://earthobservatory.nasa.gov/images/153813/smoke-streams-from-palisades-and-eaton-fires",
        },
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
