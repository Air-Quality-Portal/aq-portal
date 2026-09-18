import {
  type CatalogSearchField,
  searchCatalogItems,
} from "@/app/_utilities/catalog-search.helpers";
import { getMetadataFieldTag } from "@/app/_utilities/content.helpers";
import type { DatasetContent } from "@/app/site-config/types";

const DATASET_SEARCH_FIELDS: CatalogSearchField<DatasetContent>[] = [
  { weight: 9, textOf: (dataset) => [dataset.title] },
  {
    weight: 4,
    textOf: (dataset) => [getMetadataFieldTag(dataset.metadata, "provider")],
  },
  { weight: 4, textOf: (dataset) => dataset.metadata.tags ?? [] },
  {
    weight: 4,
    textOf: (dataset) => [getMetadataFieldTag(dataset.metadata, "spatialCoverage")],
  },
  { weight: 1, textOf: (dataset) => [dataset.description] },
];

/** Search only the dataset fields approved for catalog discovery. */
export const searchDatasets = (datasets: DatasetContent[], query?: string): DatasetContent[] =>
  searchCatalogItems(datasets, query, DATASET_SEARCH_FIELDS);
