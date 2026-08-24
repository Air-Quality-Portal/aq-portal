import type { ToolContent } from "@/app/site-config/types";

/**
 * Splitting on anything that is not a letter or a digit keeps "PM2.5" and
 * "air-quality" matchable however the query is typed.
 */
const tokenize = (text: string) =>
  text
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);

/** A hit in the title should outrank the same word buried in a description. */
const WEIGHTED_FIELDS: {
  weight: number;
  textOf: (tool: ToolContent) => (string | undefined)[];
}[] = [
  { weight: 8, textOf: (tool) => [tool.title] },
  { weight: 4, textOf: (tool) => [tool.tagPrimary, ...(tool.additionalTags ?? [])] },
  { weight: 3, textOf: (tool) => [tool.fullname] },
  { weight: 1, textOf: (tool) => [tool.description] },
];

/**
 * Whole-word and prefix matching keeps "one" from matching "ozone" while still
 * letting a half-typed "monitor" find "monitoring". A whole word outranks a
 * prefix, so "air" places "Air Quality" above "Airborne Sensor".
 */
const scoreTerm = (term: string, tokens: string[], weight: number) => {
  if (tokens.includes(term)) return weight * 2;
  return tokens.some((token) => token.startsWith(term)) ? weight : 0;
};

/**
 * Filters tools by a free-text query and orders them by relevance. Terms are
 * matched with AND, so each additional word narrows the results. A blank query
 * returns every tool in its original order.
 */
export const searchTools = (tools: ToolContent[], query?: string): ToolContent[] => {
  const terms = tokenize(query ?? "");
  if (terms.length === 0) return tools;

  return (
    tools
      .map((tool) => {
        const fields = WEIGHTED_FIELDS.map(({ weight, textOf }) => ({
          weight,
          tokens: tokenize(textOf(tool).join(" ")),
        }));

        let score = 0;
        for (const term of terms) {
          // Every term has to land somewhere; only its strongest field counts.
          const best = Math.max(
            ...fields.map(({ tokens, weight }) => scoreTerm(term, tokens, weight)),
          );
          if (best === 0) return null;
          score += best;
        }

        return { tool, score };
      })
      .filter((match) => match !== null)
      // Sorting is stable, so tools of equal relevance keep their catalog order.
      .sort((a, b) => b.score - a.score)
      .map(({ tool }) => tool)
  );
};
