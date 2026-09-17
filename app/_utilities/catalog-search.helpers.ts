import type { CatalogSearchParams } from "../site-config/types";

export type CatalogSearchField<T> = {
  weight: number;
  textOf: (item: T) => (string | undefined)[];
};

/** Split punctuation-delimited text into case-insensitive letter and number tokens. */
const tokenize = (text: string) =>
  text
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);

/** Whole-word matches score twice as highly as prefix matches. */
const scoreTerm = (term: string, tokens: string[], weight: number) => {
  if (tokens.includes(term)) return weight * 2;
  return tokens.some((token) => token.startsWith(term)) ? weight : 0;
};

/**
 * Filters catalog items by a free-text query and orders them by relevance. Terms are
 * matched with AND, so each additional word narrows the results. A blank query
 * returns every catalog in its original order. At least one field is required,
 * and every field must have a finite, positive weight.
 */
export const searchCatalogItems = <T>(
  items: T[],
  query: string | undefined,
  weightedFields: CatalogSearchField<T>[],
): T[] => {
  if (
    weightedFields.length === 0 ||
    weightedFields.some(({ weight }) => !Number.isFinite(weight) || weight <= 0)
  ) {
    throw new TypeError(
      "Catalog search requires one or more fields, each with a finite, positive weight",
    );
  }

  const terms = tokenize(query ?? "");
  if (terms.length === 0) return items;

  return (
    items
      .map((item, index) => {
        const fields = weightedFields.map(({ weight, textOf }) => ({
          weight,
          tokens: tokenize(textOf(item).join(" ")),
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

        return { item, index, score };
      })
      .filter((match) => match !== null)
      // Sorting is stable, so items of equal relevance keep their catalog order.
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .map(({ item }) => item)
  );
};

export const normalizeQueryParam = (q?: string | string[]): string =>
  typeof q === "string" ? q : "";

export const normalizeTagsParam = (tags?: string | string[]): string[] => {
  return tags === undefined ? [] : Array.isArray(tags) ? tags : [tags];
};

export const normalizeCatalogSearchParams = (params: {
  q?: string | string[];
  tags?: string | string[];
}): CatalogSearchParams => ({
  query: normalizeQueryParam(params.q),
  selectedTags: normalizeTagsParam(params.tags),
});
