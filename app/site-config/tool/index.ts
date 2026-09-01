import { TOOLS } from "./tools__mock";

export { TOOLS } from "./tools__mock";
export { AIR4US_TOOL_INTRO, PARTNER_TOOLS_INTRO } from "./tools__page";
export { searchTools } from "./tools__search";

/** Promoted to the carousels on the homepage and the tools catalog. */
export const FEATURED_TOOLS = TOOLS.filter((tool) => tool.isFeatured);

/** The rest -- what the catalog grids list and search over. */
export const CATALOG_TOOLS = TOOLS.filter((tool) => !tool.isFeatured);
