import { describe, expect, it } from "vitest";
import {
  type CatalogSearchField,
  normalizeQueryParam,
  normalizeTagsParam,
  searchCatalogItems,
} from "./catalog-search.helpers";

type CatalogItem = {
  id: string;
  title?: string;
  tags?: string[];
};

const ITEMS: CatalogItem[] = [
  { id: "air-monitor", title: "Air Quality Monitor", tags: ["sensors"] },
  { id: "pm25", title: "PM2.5 Analyzer", tags: ["air quality"] },
  { id: "water-monitor", title: "Water Monitor", tags: ["sensors"] },
];

const WEIGHTED_FIELDS: CatalogSearchField<CatalogItem>[] = [
  { weight: 8, textOf: (item) => [item.title] },
  { weight: 4, textOf: (item) => item.tags ?? [] },
];

describe("searchCatalogItems", () => {
  it("returns all items in their original order when query is empty", () => {
    expect(searchCatalogItems(ITEMS, "", WEIGHTED_FIELDS)).toEqual(ITEMS);
    expect(searchCatalogItems(ITEMS, "   ", WEIGHTED_FIELDS)).toEqual(ITEMS);
    expect(searchCatalogItems(ITEMS, "... ---", WEIGHTED_FIELDS)).toEqual(ITEMS);
    expect(searchCatalogItems(ITEMS, undefined, WEIGHTED_FIELDS)).toEqual(ITEMS);
  });

  it("returns an empty array when no items match", () => {
    expect(searchCatalogItems(ITEMS, "volcano", WEIGHTED_FIELDS)).toEqual([]);
  });

  it("returns an empty array when the input collection is empty", () => {
    expect(searchCatalogItems([], "air", WEIGHTED_FIELDS)).toEqual([]);
  });

  it("rejects an empty field configuration", () => {
    expect(() => searchCatalogItems(ITEMS, "air", [])).toThrowError(TypeError);
  });

  it.each([
    0,
    -1,
    Number.NaN,
    Number.POSITIVE_INFINITY,
  ])("rejects the invalid field weight %s", (weight) => {
    expect(() =>
      searchCatalogItems(ITEMS, "air", [{ weight, textOf: (item) => [item.title] }]),
    ).toThrowError(TypeError);
  });

  it("matches without regard to case", () => {
    const lowerCaseResults = searchCatalogItems(ITEMS, "air", WEIGHTED_FIELDS);
    const upperCaseResults = searchCatalogItems(ITEMS, "AIR", WEIGHTED_FIELDS);

    expect(upperCaseResults).toEqual(lowerCaseResults);
  });

  it("matches tokens when query and field text use different punctuation", () => {
    const results = searchCatalogItems(ITEMS, "PM2-5", WEIGHTED_FIELDS);

    expect(results).toEqual([ITEMS[1]]);
  });

  it("matches prefixes of words", () => {
    const results = searchCatalogItems(ITEMS, "monit", WEIGHTED_FIELDS);

    expect(results).toEqual([ITEMS[0], ITEMS[2]]);
  });

  it("requires every query term to match", () => {
    const results = searchCatalogItems(ITEMS, "air monitor", WEIGHTED_FIELDS);

    expect(results).toEqual([ITEMS[0]]);
  });

  it("allows query terms to match across different fields", () => {
    const results = searchCatalogItems(ITEMS, "analyzer quality", WEIGHTED_FIELDS);

    expect(results).toEqual([ITEMS[1]]);
  });

  it("ranks matches in higher-weighted fields first", () => {
    const results = searchCatalogItems(ITEMS, "air", WEIGHTED_FIELDS);

    expect(results).toEqual([ITEMS[0], ITEMS[1]]);
  });

  it("ranks whole-word matches above prefix matches at the same weight", () => {
    const items = [
      { id: "prefix", title: "Airborne particles" },
      { id: "whole", title: "Air particles" },
    ];

    const results = searchCatalogItems(items, "air", [
      { weight: 1, textOf: (item) => [item.title] },
    ]);

    expect(results).toEqual([items[1], items[0]]);
  });

  it("preserves catalog order when relevance scores are equal", () => {
    const results = searchCatalogItems(ITEMS, "monitor", WEIGHTED_FIELDS);

    expect(results).toEqual([ITEMS[0], ITEMS[2]]);
  });

  it("handles missing optional field values", () => {
    const items = [{ id: "untitled" }, { id: "named", title: "Named item" }];

    const results = searchCatalogItems(items, "named", [
      { weight: 1, textOf: (item) => [item.title] },
    ]);

    expect(results).toEqual([items[1]]);
  });

  it("does not match an item with no searchable field values", () => {
    const item = { id: "empty", title: undefined, tags: [] };

    expect(searchCatalogItems([item], "air", WEIGHTED_FIELDS)).toEqual([]);
  });
});

describe("normalizeQueryParam", () => {
  it("returns the string as-is when q is a single string", () => {
    expect(normalizeQueryParam("air quality")).toBe("air quality");
  });

  it("returns an empty string when q is undefined", () => {
    expect(normalizeQueryParam(undefined)).toBe("");
  });

  it("returns an empty string when q is already empty", () => {
    expect(normalizeQueryParam("")).toBe("");
  });

  it("returns an empty string when multiple ?q= keys are present", () => {
    expect(normalizeQueryParam(["first", "second"])).toBe("");
  });
});

describe("normalizeTagsParam", () => {
  it("returns an empty array when tags is undefined", () => {
    expect(normalizeTagsParam(undefined)).toEqual([]);
  });

  it("wraps a single tag string into a one-item array", () => {
    expect(normalizeTagsParam("EPA")).toEqual(["EPA"]);
  });

  it("returns the array as-is for repeated ?tags= keys", () => {
    expect(normalizeTagsParam(["EPA", "NASA"])).toEqual(["EPA", "NASA"]);
  });
});
