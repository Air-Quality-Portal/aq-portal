import type { StyleSpecification } from "maplibre-gl";

export const basemapNasaBlueMarble = {
  id: "nasa-blue-marble",
  title: "NASA Blue Marble",
  style: {
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
};
