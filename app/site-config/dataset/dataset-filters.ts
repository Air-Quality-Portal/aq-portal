import type { DatasetFilter } from "@/app/site-config/types";

export const DATASET_FILTERS: DatasetFilter[] = [
  {
    id: "data-type",
    label: "Data Type",
    options: [
      { label: "Regulatory Monitor", value: "reg-monitor" },
      { label: "Air Sensor", value: "airsensor" },
      { label: "Meterological Station", value: "met-station" },
      { label: "Other ground-based monitor", value: "ground-based" },
      { label: "Satellite", value: "satellite" },
      { label: "Forecast Model", value: "forecast" },
      { label: "Retrospective Model", value: "retro-model" },
    ],
  },
  {
    id: "parameter",
    label: "Parameter",
    options: [
      { label: "PM speciation", value: "pm" },
      { label: "AOD", value: "aod" },
      { label: "UV Aerosol Index", value: "uv-aerosol-index" },
      { label: "Angstrom Component", value: "angstrom" },
      { label: "CO", value: "co" },
      { label: "Dust", value: "dust" },
      { label: "Smoke", value: "smoke" },
      { label: "Fire", value: "fire" },
      { label: "HCHO", value: "hcho" },
      { label: "NO₂", value: "no2" },
      { label: "O₃", value: "o3" },
      { label: "PM2.5", value: "pm2.5" },
    ],
  },
  {
    id: "use-case",
    label: "Use Case",
    options: [
      { label: "Wildfire Smoke", value: "wildfire" },
      { label: "High Ozone", value: "ozone" },
      { label: "Criteria Pollutant Monitoring", value: "pollutant-monitoring" },
      { label: "Industrial Emissions", value: "industrial-emissions" },
      { label: "On-Road Emissions", value: "on-road-emissions" },
      { label: "Dust Storm", value: "dust-storm" },
      { label: "Transboundary Pollution", value: "transboundary-pollution" },
      { label: "Hazardous Air Pollutants", value: "hazardous-air-pollutants" },
    ],
  },
];
