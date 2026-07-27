import type { DatasetContent } from "@/app/site-config/types";

/**
 * Additional catalog datasets. These are the single source of truth for their
 * card content — the "Related datasets" section references them by id rather
 * than redefining any details.
 */

export const AQS_AIRNOW__MOCK: DatasetContent = {
  id: "aqs-airnow",
  contentType: "dataset",
  title: "AQS / AirNow Air Quality Monitoring Data",
  description:
    "Real-time and historical ground-level air quality measurements from EPA's nationwide monitoring network. Incorporates PM2.5, ozone, CO, and NO₂ with IMPROVE and CASTNet quality flags.",
  categories: ["Air Quality", "EPA", "PM2.5", "Ground Station", "Real-time"],
  thumbnailImage: {
    src: "https://picsum.photos/id/1015/400/600",
    alt: "Map of United States air quality monitoring coverage",
  },
  mastheadImage: {
    src: "https://picsum.photos/id/1015/1304/480",
    alt: "Map of United States air quality monitoring coverage",
  },
  metadata: {
    provider: { label: "Data Provider", value: ["US EPA"] },
  },
};

export const NASA_FIRMS__MOCK: DatasetContent = {
  id: "nasa-firms",
  contentType: "dataset",
  title: "NASA FIRMS: Active Fire & Thermal Anomaly Data",
  description:
    "Near real-time active fire and thermal anomaly detections from MODIS and VIIRS instruments, providing global fire coverage within 3 hours of satellite overpass.",
  categories: ["Fire Detection", "NASA", "Satellite", "MODIS/VIIRS", "Global"],
  thumbnailImage: {
    src: "https://picsum.photos/id/1016/400/600",
    alt: "Satellite imagery of thermal anomalies",
  },
  mastheadImage: {
    src: "https://picsum.photos/id/1016/1304/480",
    alt: "Satellite imagery of thermal anomalies",
  },
  metadata: {
    provider: { label: "Data Provider", value: ["NASA"] },
  },
};

export const MAIAC_AOD__MOCK: DatasetContent = {
  id: "maiac-aod",
  contentType: "dataset",
  title: "MAIAC AOD: Multi-Angle Atmospheric Correction",
  description:
    "High-resolution 1 km aerosol optical depth retrievals from MODIS using a time-series algorithm, delivering enhanced accuracy over land and ocean surfaces worldwide.",
  categories: ["AOD", "NASA", "Satellite", "PM2.5", "1 km Resolution"],
  thumbnailImage: {
    src: "https://picsum.photos/id/1018/400/600",
    alt: "Aerosol optical depth map",
  },
  mastheadImage: {
    src: "https://picsum.photos/id/1018/1304/480",
    alt: "Aerosol optical depth map",
  },
  metadata: {
    provider: { label: "Data Provider", value: ["NASA"] },
  },
};
