import type { ToolContent } from "@/app/site-config/types";

export const TOOLS: ToolContent[] = [
  {
    id: "aermod",
    title: "AERMOD",
    fullname: "Model Software",
    description:
      "A steady-state plume model required for regulatory compliance that incorporates air dispersion based on turbulence structure and surface scaling concepts",
    href: "https://www.epa.gov/scram/air-quality-dispersion-modeling-preferred-and-recommended-models#aermod",
    tagPrimary: "EPA",
    additionalTags: ["Retrospective model"],
    thumbnailImage: {
      src: "/img/tools_images/aermod_tool_catalog_card.webp",
      alt: "Contoured model output from EPA's AERMOD atmospheric dispersion model.",
      attribution: "Avizo Experts-Conseils",
      attributionLink:
        "https://en.wikipedia.org/wiki/AERMOD#/media/File:R%C3%A9sultat_de_mod%C3%A9lisation_de_dispersion_atmosph%C3%A9rique_-_Avizo_Experts-Conseils.png",
    },
  },
  {
    id: "aerosolwatch",
    title: "AerosolWatch",
    fullname: "Online Visualization",
    description:
      "Tool that generates animations or snapshots of aerosol and fire-related observations from satellite and ground sensors in near real time",
    href: "https://www.star.nesdis.noaa.gov/smcd/spb/aq/AerosolWatch/",
    tagPrimary: "NOAA",
    additionalTags: [
      "AOD",
      "Satellite",
      "PM2.5",
      "True-Color Imagery",
      "Near real time (1 - 3 hours)",
    ],
    thumbnailImage: {
      src: "/img/tools_images/aerosolwatch_tool_catalog_card.webp",
      alt: "Satellite image of North America showing clouds overlaid with points indicating hourly surface PM2.5 concentrations",
      attribution: "NOAA",
      attributionLink: "https://www.star.nesdis.noaa.gov/smcd/spb/aq/AerosolWatch/",
    },
    isFeatured: true,
  },
  {
    id: "airdata",
    title: "AirData",
    fullname: "Data Repository",
    description:
      "Database of Environmental Protection Agency's (EPA) outdoor air-quality monitoring data that enables the generation of summary figures and reports",
    href: "https://www.epa.gov/outdoor-air-quality-data",
    tagPrimary: "EPA",
    additionalTags: [
      "Regulatory monitor",
      "Retrospective (>15 days)",
      "Criteria pollutant monitoring",
    ],
    thumbnailImage: {
      src: "/img/tools_images/airdata_tool_catalog_card.webp",
      alt: "An EPA Air Quality Monitors map showing locations of active air-quality tracking stations across North America and parts of the Caribbean",
      attribution: "EPA",
      attributionLink: "https://www.epa.gov/outdoor-air-quality-data",
    },
  },
  {
    id: "airnow-tech",
    title: "AirNow Tech",
    fullname: "Online Visualization",
    description:
      "Website aimed at those supplying data to AirNow, supporting air-quality data management, analysis, and decision support",
    href: "https://www.airnowtech.org/",
    tagPrimary: "EPA",
    additionalTags: [
      "Meteorological station",
      "Regulatory monitor",
      "Forecast (0 - 3 days)",
      "Criteria pollutant monitoring",
    ],
    thumbnailImage: {
      src: "/img/tools_images/airnow_tech_tool_catalog_card.webp",
      alt: "An air-quality line graph showing ozone levels in parts per billion (ppb) measured on August 11, 2012, in Los Angeles County, California",
      attribution: "EPA",
      attributionLink: "https://www.airnowtech.org/",
    },
  },
  {
    id: "airnow-aq-map",
    title: "AirNow Air Quality Map",
    fullname: "Online Visualization",
    description:
      "Interactive map of air quality from AirNow, including current conditions, forecast, time-series loop animation, and historical data archive",
    href: "https://gispub.epa.gov/airnow/?monitors=ozonepm",
    tagPrimary: "EPA",
    additionalTags: ["Regulatory monitor", "Forecast (0 - 3 days)", "PM2.5", "O₃", "PM10"],
    thumbnailImage: {
      src: "/img/tools_images/airnow_aq_map_tool_catalog_card.webp",
      alt: "Map of the United States showing points and contours of surface ozone and particulate matter concentrations",
      attribution: "EPA",
      attributionLink:
        "https://gispub.epa.gov/airnow/?monitors=ozonepm&xmin=-15856741.327273149&xmax=-7090331.427305187&ymin=2540951.4161893316&ymax=6650206.056799315",
    },
  },
  {
    id: "airnow-fire-smoke-map",
    title: "AirNow Fire and Smoke Map",
    fullname: "Online Visualization",
    description: "Map of current fire and smoke locations alongside Air Quality Index (AQI) values",
    href: "https://fire.airnow.gov/",
    tagPrimary: "EPA",
    additionalTags: ["Smoke", "Fire", "Air sensor", "Regulatory monitor", "PM2.5"],
    thumbnailImage: {
      src: "/img/tools_images/airnow_fire_map_tool_catalog_card.webp",
      alt: "Map of the United States showing fire locations, smoke plumes, and points representing surface PM2.5 concentrations",
      attribution: "EPA",
      attributionLink: "https://fire.airnow.gov/#3.92/40.37/-101.21",
    },
    isFeatured: true,
  },
  {
    id: "airnow-mobile-app",
    title: "AirNow Mobile App",
    fullname: "Visualization Software",
    description:
      "Mobile application for accessing current and forecast air-quality data, as well as the interactive AirNow Fire and Smoke map",
    href: "https://www.airnow.gov/airnow-mobile-app/",
    tagPrimary: "EPA",
    additionalTags: [
      "Forecast (0 - 3 days)",
      "Regulatory monitor",
      "Criteria pollutant monitoring",
    ],
    thumbnailImage: {
      src: "/img/tools_images/airnow_mobile_app_tool_catalog_card.webp",
      alt: "EPA's AirNow mobile application interface showing the current Air Quality Index (AQI) for Petaluma, California, dated October 21, 2021",
      attribution: "EPA",
      attributionLink: "https://www.airnow.gov/sites/default/files/inline-images/dial-app.png",
    },
  },
  {
    id: "aqs-aq-monitor-map",
    title: "AQS Air Quality Monitor Map",
    fullname: "Online Visualization",
    description:
      "Map that lets users toggle the locations of all Air Quality System (AQS) stations on and off to view site metadata and download the corresponding data",
    href: "https://epa.maps.arcgis.com/apps/webappviewer/index.html?id=5f239fd3e72f424f98ef3d5def547eb5",
    tagPrimary: "EPA",
    additionalTags: ["Regulatory monitor", "Criteria pollutant monitoring"],
    thumbnailImage: {
      src: "/img/tools_images/aqs_aq_monitor_map_tool_catalog_card.webp",
      alt: "Map of the United States showing markers for active AQS monitors for ozone, carbon monoxide, and PM2.5",
      attribution: "EPA",
      attributionLink:
        "https://epa.maps.arcgis.com/apps/webappviewer/index.html?id=5f239fd3e72f424f98ef3d5def547eb5",
    },
  },
  {
    id: "aqs-api",
    title: "AQS API",
    fullname: "Data Repository",
    description:
      "Tool for application developers and data analysts that provides row-level pollutant and meteorological data from the Environmental Protection Agency's (EPA's) Air Quality System database",
    href: "https://aqs.epa.gov/aqsweb/documents/data_api.html",
    tagPrimary: "EPA",
    additionalTags: ["Criteria pollutant monitoring", "Regulatory monitor"],
    thumbnailImage: {
      src: "/img/tools_images/aqs_api_tool_catalog_card.webp",
      alt: "An EPA AirData Air Quality Monitors map of the United States, densely populated with multi-colored location pins indicating monitoring stations across the country",
      attribution: "EPA",
      attributionLink: "https://aqs.epa.gov/aqsweb/documents/data_api.html",
    },
  },
  {
    id: "cmaq",
    title: "CMAQ",
    fullname: "Model Software",
    description:
      "An open-source air-quality model from the Environmental Protection Agency that estimates ozone, particulates, toxics, and the deposition of acids, nutrients, and other pollutants",
    href: "https://www.epa.gov/cmaq",
    tagPrimary: "EPA",
    additionalTags: ["Retrospective model", "Forecast model", "Counterfactual model simulation"],
    thumbnailImage: {
      src: "/img/tools_images/cmaq_tool_catalog_card.webp",
      alt: "Spatial map of predicted ozone concentrations across the United States, generated by the CMAQ model",
      attribution: "EPA",
      attributionLink: "https://www.epa.gov/sites/default/files/2016-12/ozone_example.jpg",
    },
  },
  {
    id: "cobra",
    title: "COBRA",
    fullname: "Online Model",
    description:
      'Modeling tool that uses "what-if" scenarios to evaluate the effects of changes to energy policies and programs on human health at different jurisdictional levels',
    href: "https://www.epa.gov/cobra/what-cobra",
    tagPrimary: "EPA",
    additionalTags: ["Counterfactual model simulation", "PM2.5", "SO₂", "Hazardous air pollutants"],
    thumbnailImage: {
      src: "/img/tools_images/cobra_tool_catalog_card.webp",
      alt: "An interactive map of the United States displaying surface ozone concentration levels in micrograms per cubic meter by county",
      attribution: "EPA",
      attributionLink: "https://cobra.epa.gov/",
    },
  },
  {
    id: "ember",
    title: "EMBER",
    fullname: "Data Repository",
    description:
      "Screening tool that allows users to access Expedited Modeling of Burn Events Results (EMBER) data, which is useful for evaluating wildfire impacts on ozone abundance",
    href: "https://www.epa.gov/air-quality-analysis/expedited-modeling-burn-events-results-ember",
    tagPrimary: "EPA",
    additionalTags: [
      "Retrospective (>15 days)",
      "Counterfactual model simulation",
      "O₃",
      "PM2.5",
      "High ozone",
    ],
    thumbnailImage: {
      src: "/img/tools_images/embers_tool_catalog_card.webp",
      alt: "A regional map of North America generated by the U.S. EPA EMBER tool that illustrates fire emissions and smoke impacts on ground-level ozone concentrations",
      attribution: "EPA",
      attributionLink:
        "https://awsedap.epa.gov/public/single/?appid=ef2c5326-6e19-4c1f-94f6-bd5a63cf240f&sheet=fGzBmv&theme=horizon&opt=ctxmenu,currsel&identity=preview",
    },
  },
  {
    id: "firms-fire-maps",
    title: "FIRMS Fire Maps",
    fullname: "Online Visualization",
    description:
      "Access and create maps from Landsat, Visible Infrared Imaging Radiometer Suite (VIIRS), and Moderate Resolution Imaging Spectroradiometer (MODIS) fire and thermal anomaly datasets",
    href: "https://firms.modaps.eosdis.nasa.gov/map/",
    tagPrimary: "NASA",
    additionalTags: ["Fire", "Satellite", "Near real time (1 - 3 hours)", "Wildfire smoke"],
    thumbnailImage: {
      src: "/img/tools_images/firms_fire_map_tool_catalog_card.webp",
      alt: "A global satellite map with red points marking satellite-detected fire locations",
      attribution: "NASA",
      attributionLink: "https://firms.modaps.eosdis.nasa.gov/map/#d:24hrs;@0.0,0.0,3.0z",
    },
  },
  {
    id: "fluid-geos-cf",
    title: "FLUID GEOS-CF",
    fullname: "Online Visualization",
    description:
      "Forecast datagrams, static and animated surface concentration maps, column density maps, and analysis at station locations for the Goddard Earth Observing System - Composition Forecast (GEOS-CF) model",
    href: "https://fluid.nccs.nasa.gov/cf/",
    tagPrimary: "NASA",
    additionalTags: ["Forecast (4 - 9 days)", "Forecast model", "Transboundary pollution"],
    thumbnailImage: {
      src: "/img/tools_images/fluid_geos_cf_tool_catalog_card.webp",
      alt: "Forecast map of the United States showing surface NO2 concentration shaded in green from the GEOS-CF model",
      attribution: "NCCS NASA",
      attributionLink:
        "https://fluid.nccs.nasa.gov/cf/classic_geos_cf_v2/?stream=GEOSCFFC&field=no2sfc&level=0&fcst=20260831T090000&region=nam&tau=003",
    },
  },
  {
    id: "geos-chem",
    title: "GEOS-Chem",
    fullname: "Model Software",
    description:
      "State-of-the-art model that can simulate air quality and its sensitivity to alternative scenarios",
    href: "https://www.geos-chem.org",
    tagPrimary: "NASA-funded",
    additionalTags: ["Forecast model", "Retrospective model", "Counterfactual model simulation"],
    thumbnailImage: {
      src: "/img/tools_images/geos_chem_tool_catalog_card.webp",
      alt: "Global map of ozone concentrations from the GEOS-Chem model",
      attribution: "GEOS-Chem",
      attributionLink: "https://geoschem.github.io/img/GCHP_C720_O3_Frame.png",
    },
  },
  {
    id: "giovanni",
    title: "Giovanni",
    fullname: "Online Visualization",
    description:
      "Visualize and plot selected geophysical parameters from NASA datasets, including model, observational, and reanalysis data, without downloading any data",
    href: "https://giovanni.gsfc.nasa.gov/giovanni/",
    tagPrimary: "NASA",
    additionalTags: ["PM2.5", "Retrospective model", "Satellite", "AOD", "NO₂"],
    thumbnailImage: {
      src: "/img/tools_images/giovanni_tool_catalog_card.webp",
      alt: "Time-averaged map of MODIS Aerosol Optical Depth across the United States",
      attribution: "NASA",
      attributionLink:
        "https://giovanni.gsfc.nasa.gov/giovanni/#service=TmAvMp&starttime=2026-08-01T00:00:00Z&endtime=2026-08-30T23:59:59Z&bbox=-144.8437,2.9414,-32.3437,63.4102&data=MOD08_D3_6_1_AOD_550_Dark_Target_Deep_Blue_Combined_Mean",
    },
  },
  {
    id: "goes-image-viewer",
    title: "GOES Image Viewer",
    fullname: "Online Visualization",
    description:
      "View and animate a wide array of Geostationary Operational Environmental Satellite (GOES) imagery and products",
    href: "https://www.star.nesdis.noaa.gov/goes/index.php",
    tagPrimary: "NOAA",
    additionalTags: ["Dust", "Fire", "True-Color Imagery", "Satellite", "Meteorology"],
    thumbnailImage: {
      src: "/img/tools_images/goes_image_viewer_tool_catalog_card.webp",
      alt: "Satellite true-color image over the United States from the GOES Image Viewer",
      attribution: "NOAA",
      attributionLink:
        "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/CONUS/GEOCOLOR/20262441636_GOES19-ABI-CONUS-GEOCOLOR-2500x1500.jpg",
    },
  },
  {
    id: "hms-fire-smoke-current-analysis",
    title: "HMS Fire & Smoke",
    fullname: "Online Visualization",
    description:
      "Displays the most recent data from the Hazard Mapping System (HMS) Fire and Smoke Product",
    href: "https://www.ospo.noaa.gov/products/land/hms.html#maps",
    tagPrimary: "NOAA",
    additionalTags: ["Smoke", "Fire", "Satellite", "Short latency (3 - 24 hours)"],
    thumbnailImage: {
      src: "/img/tools_images/hms_current_analysis_tool_catalog_card.webp",
      alt: "Map of North America showing shaded contours of smoke plume density and fire point locations",
      attribution: "NOAA",
      attributionLink: "https://www.ospo.noaa.gov/products/land/hms.html#maps",
    },
  },
  {
    id: "hrrr-model-maps",
    title: "HRRR Model Maps",
    fullname: "Online Visualization",
    description:
      "View maps of meteorological and smoke data from the High-Resolution Rapid Refresh (HRRR) model, a National Oceanic and Atmospheric Administration (NOAA) near real-time 3-km resolution model",
    href: "https://rapidrefresh.noaa.gov/hrrr/",
    tagPrimary: "NOAA",
    additionalTags: [
      "Forecast model",
      "Smoke",
      "Meteorology",
      "Forecast (0 - 3 days)",
      "Wildfire smoke",
    ],
    thumbnailImage: {
      src: "/img/tools_images/hrrr_model_maps_tool_catalog_card.webp",
      alt: "Map of the United States showing vertically integrated smoke concentration from the HRRR-Smoke model",
      attribution: "NOAA",
      attributionLink: "https://rapidrefresh.noaa.gov/hrrr/HRRRsmoke/",
    },
  },
  {
    id: "hysplit",
    title: "HYSPLIT",
    fullname: "Online Model",
    description:
      "National Oceanic and Atmospheric Administration (NOAA) model that calculates backward and forward trajectories, and performs dispersion simulations using meteorological data",
    href: "https://www.arl.noaa.gov/hysplit/",
    tagPrimary: "NOAA",
    additionalTags: [
      "Forecast model",
      "Smoke",
      "Meteorology",
      "Forecast (0 - 3 days)",
      "Wildfire smoke",
    ],
    thumbnailImage: {
      src: "/img/tools_images/hysplit_tool_catalog_card.webp",
      alt: "Satellite image of Deer Park, TX, with contours of probable smoke plume dispersion derived from the HYSPLIT model",
      attribution: "NOAA/NWS",
      attributionLink:
        "https://www.arl.noaa.gov/wp_arl/wp-content/uploads/2019/03/HYSPLIT_Deer-Park-TX.jpg",
    },
  },
  {
    id: "jstar-mapper",
    title: "JSTAR Mapper",
    fullname: "Online Visualization",
    description:
      "Visualize aerosol, trace gas, land, and fire data from the National Oceanic and Atmospheric Administration (NOAA), Japan Aerospace Exploration Agency (JAXA), and European Space Agency (ESA) polar-orbiting satellites",
    href: "https://www.star.nesdis.noaa.gov/mapper/",
    tagPrimary: "NOAA",
    additionalTags: ["Satellite", "Short latency (3 - 24 hours)", "True-Color Imagery", "Fire"],
    thumbnailImage: {
      src: "/img/tools_images/jstar_mapper_tool_catalog_card.webp",
      alt: "Satellite image over North America showing clouds from NOAA JSTAR Mapper",
      attribution: "NOAA",
      attributionLink: "https://www.star.nesdis.noaa.gov/mapper/",
    },
  },
  {
    id: "melodies-monet",
    title: "MELODIES MONET",
    fullname: "Analysis Software",
    description:
      "An open-source Python diagnostic package that provides a framework to evaluate a wide range of models using a variety of observations within a common framework",
    href: "https://melodies-monet.readthedocs.io/",
    tagPrimary: "NOAA/NSF NCAR",
    thumbnailImage: {
      src: "/img/tools_images/melodies_monet_tool_catalog_card.webp",
      alt: "Map of CONUS with AirNow monitors overlaid on the RACM-ESRL grid using MELODIES-MONET",
      attribution: "NCAR/NOAA",
      attributionLink:
        "https://melodies-monet.readthedocs.io/en/stable/_images/633fe6ebb68a07605b3359817a564c2d01953169cf628308127396bb65cabe34.png",
    },
  },
  {
    id: "nasa-sport-viewer",
    title: "NASA SPoRT Viewer",
    fullname: "Online Visualization",
    description: "View and animate an array of near real-time data from satellites and models",
    href: "https://weather.ndc.nasa.gov/sport/viewer/",
    tagPrimary: "NASA",
    additionalTags: ["Dust", "True-Color Imagery", "Satellite", "Near real time (1 - 3 hours)"],
    thumbnailImage: {
      src: "/img/tools_images/nasa_sport_viewer_tool_catalog_card.webp",
      alt: "Grayscale satellite image of the United States from GOES East ABI via the NASA SPoRT Viewer",
      attribution: "NASA SPoRT",
      attributionLink:
        "https://weather.ndc.nasa.gov/sport/viewer/?dataset=goeseastabiconus&product=00p64um&mode=nrt",
    },
  },
  {
    id: "nei",
    title: "NEI",
    fullname: "Data Repository",
    description:
      "Environmental Protection Agency (EPA) emissions inventory containing air emissions sources of criteria air pollutants/precursors, hazardous air pollutants, and certain greenhouse gases",
    href: "https://awsedap.epa.gov/public/extensions/nei_report_2020/dashboard.html",
    tagPrimary: "EPA",
    additionalTags: ["Agricultural emissions", "On-road emissions", "Industrial emissions"],
    thumbnailImage: {
      src: "/img/tools_images/nei_tool_catalog_card.webp",
      alt: "A geographic map of the United States displaying a chloropleth county-level data visualization using the EPA's NEI dashboard tool",
      attribution: "EPA",
      attributionLink: "https://awsedap.epa.gov/public/extensions/nei_report_2020/dashboard.html",
    },
  },
  {
    id: "noaa-aq-forecast-viewer",
    title: "NOAA Air Quality Forecast Guidance Viewer",
    fullname: "Online Visualization",
    description:
      "Visualize any layer from the National Oceanic and Atmospheric Administration's (NOAA's) National Air Quality Forecast Capability (NAQFC) Regional Model Guidance generated within the past 7 days",
    href: "https://airquality.weather.gov/?element=ozone01_bc&mapcenter=-100.02%2C39.93&mapzoom=5&subregion=CONUS&region=CONUS",
    tagPrimary: "NOAA",
    additionalTags: ["Forecast (0 - 3 days)", "Forecast model", "PM2.5", "O₃"],
    thumbnailImage: {
      src: "/img/tools_images/noaa_aq_viewer_tool_catalog_card.webp",
      alt: "Map of the United States with forecasted surface PM2.5 concentrations",
      attribution: "NOAA/NWS",
      attributionLink:
        "https://airquality.weather.gov/?element=apm25h01&mapcenter=-100.02%2C39.93&mapzoom=5&subregion=CONUS&region=CONUS",
    },
  },
  {
    id: "rsig",
    title: "RSIG",
    fullname: "Analysis Software",
    description:
      "Provides quick and easy access to multi-terabyte environmental datasets on air quality, including satellite, modeled, and in-situ sensor data",
    href: "https://www.epa.gov/hesc/remote-sensing-information-gateway",
    tagPrimary: "EPA",
    additionalTags: ["Regulatory monitor", "Air sensor", "Satellite", "Retrospective model"],
    thumbnailImage: {
      src: "/img/tools_images/rsig_tool_catalog_card.webp",
      alt: "Map of the United States showing aerosol optical depth (AOD) from the GOES-GASP satellite visualized in the EPA RSIG tool",
      attribution: "EPA",
      attributionLink:
        "https://19january2017snapshot.epa.gov/sites/production/files/2015-09/goes-gasp.gif",
    },
    isFeatured: true,
  },
  {
    id: "satpm",
    title: "SatPM",
    fullname: "Data Repository",
    description: "Represents the distribution of fine particulate matter",
    href: "https://www.satpm.org",
    tagPrimary: "NASA-funded",
    additionalTags: [
      "PM2.5",
      "Retrospective (>15 days)",
      "Retrospective model",
      "Satellite",
      "PM speciation",
    ],
    thumbnailImage: {
      src: "/img/tools_images/satpm_tool_catalog_card.webp",
      alt: "Global map of surface PM2.5 concentration in 2024",
      attribution: "SatPM",
      attributionLink: "https://www.satpm.org/",
    },
  },
  {
    id: "tempo-no2-map",
    title: "TEMPO NO2 Map",
    fullname: "Online Visualization",
    description:
      "Interactive map displaying Tropospheric Emissions: Monitoring of Pollution (TEMPO) NO2 data with case studies, such as wildfires, traffic patterns, and agriculture",
    href: "https://tempo.si.edu/data_for_public.html",
    tagPrimary: "NASA",
    additionalTags: ["NO₂", "Satellite", "Short latency (3 - 24 hours)"],
    thumbnailImage: {
      src: "/img/tools_images/tempo_no2_map_tool_catalog_card.webp",
      alt: "Map of Los Angeles showing TEMPO satellite observations of NO2 column density from the Los Angeles wildfires in January 2025",
      attribution: "TEMPO Team",
      attributionLink:
        "https://projects.cosmicds.cfa.harvard.edu/tempo-lite/?lat=33.4773&lon=-118.5975&zoom=8&t=1736365860000&extendedRange=false",
    },
  },
  {
    id: "worldview",
    title: "WorldView",
    fullname: "Online Visualization",
    description: "Visualize a large catalog of NASA datasets, including satellite and model data",
    href: "https://worldview.earthdata.nasa.gov/",
    tagPrimary: "NASA",
    additionalTags: ["Satellite", "True-Color Imagery", "AOD", "Short latency (3 - 24 hours)"],
    thumbnailImage: {
      src: "/img/tools_images/worldview_map_tool_catalog_card.webp",
      alt: "Satellite image of the United States with clouds from NASA WorldView",
      attribution: "NASA",
      attributionLink: "https://worldview.earthdata.nasa.gov/?t=2026-08-27-T21%3A09%3A49Z",
    },
    isFeatured: true,
  },
];
