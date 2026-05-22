import type { StyleSpecification } from "maplibre-gl";

export const BASEMAP_STYLES = {
  nasaBlueMarble: {
    version: 8,
    sources: {
      "nasa-blue-marble": {
        type: "raster",
        tiles: [
          "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_NextGeneration/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg",
        ],
        tileSize: 256,
        maxzoom: 8,
        attribution: "Imagery courtesy NASA EOSDIS/GIBS",
      },
    },
    layers: [
      {
        id: "nasa-blue-marble",
        type: "raster",
        source: "nasa-blue-marble",
      },
    ],
  } satisfies StyleSpecification,
  dark: {
    version: 8,
    name: "Dark",
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
      },
    },
    layers: [
      {
        id: "background",
        type: "background",
        paint: { "background-color": "#1a1a1a" },
      },
      {
        id: "osm",
        type: "raster",
        source: "osm",
        minzoom: 0,
        maxzoom: 18,
        paint: { "raster-opacity": 0.5 },
      },
    ],
  } satisfies StyleSpecification,
  light: {
    version: 8,
    name: "Light",
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
      },
    },
    layers: [
      {
        id: "background",
        type: "background",
        paint: { "background-color": "#f5f5f5" },
      },
      {
        id: "osm",
        type: "raster",
        source: "osm",
        minzoom: 0,
        maxzoom: 18,
      },
    ],
  } satisfies StyleSpecification,
} as const;
