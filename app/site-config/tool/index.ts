import { TOOLS } from "./tools__mock";

export { TOOLS } from "./tools__mock";
export { AIR4US_TOOL_INTRO, PARTNER_TOOLS_INTRO } from "./tools__page";
export { searchTools } from "./tools__search";

/** Promoted to the homepage; /tools lists the full catalog, featured included. */
export const FEATURED_TOOLS = TOOLS.filter((tool) => tool.isFeatured);
