import type { ToolContent } from "@/app/site-config/types";

/** Fields a query is matched against, flattened into one lowercase string. */
const searchableText = (tool: ToolContent) =>
  [tool.title, tool.fullname, tool.description, tool.tagPrimary, ...(tool.additionalTags ?? [])]
    .join(" ")
    .toLowerCase();

/**
 * Filters tools by a free-text query. Terms are matched with AND, so each
 * additional word narrows the results. A blank query returns every tool.
 */
export const searchTools = (tools: ToolContent[], query?: string): ToolContent[] => {
  const terms = (query ?? "").toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return tools;

  return tools.filter((tool) => {
    const text = searchableText(tool);
    return terms.every((term) => text.includes(term));
  });
};
