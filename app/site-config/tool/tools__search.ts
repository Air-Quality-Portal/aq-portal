import { type CatalogSearchField, searchCatalogItems } from "@/app/site-config/catalog-search";
import type { ToolContent } from "@/app/site-config/types";

const TOOL_SEARCH_FIELDS: CatalogSearchField<ToolContent>[] = [
  { weight: 8, textOf: (tool) => [tool.title] },
  { weight: 4, textOf: (tool) => [tool.tagPrimary, ...(tool.additionalTags ?? [])] },
  { weight: 3, textOf: (tool) => [tool.fullname] },
  { weight: 1, textOf: (tool) => [tool.description] },
];

/** Filter and relevance-sort tools while preserving source order for tied scores. */
export const searchTools = (tools: ToolContent[], query?: string): ToolContent[] =>
  searchCatalogItems(tools, query, TOOL_SEARCH_FIELDS);
