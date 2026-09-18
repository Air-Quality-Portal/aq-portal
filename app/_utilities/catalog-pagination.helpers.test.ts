import { describe, expect, it } from "vitest";
import { firstSearchParam, paginateCatalogItems } from "./catalog-pagination.helpers";

const ITEMS = ["a", "b", "c", "d", "e"];

describe("firstSearchParam", () => {
  it("returns a single value unchanged", () => {
    expect(firstSearchParam("air")).toBe("air");
  });

  it("returns the first of repeated values", () => {
    expect(firstSearchParam(["air", "water"])).toBe("air");
  });

  it("returns an empty string when the param is absent", () => {
    expect(firstSearchParam(undefined)).toBe("");
    expect(firstSearchParam([])).toBe("");
  });
});

describe("paginateCatalogItems", () => {
  it("returns the requested page", () => {
    expect(paginateCatalogItems(ITEMS, "2", 2)).toEqual({
      pageItems: ["c", "d"],
      currentPage: 2,
      totalPages: 3,
    });
  });

  it("returns a partial last page", () => {
    expect(paginateCatalogItems(ITEMS, "3", 2).pageItems).toEqual(["e"]);
  });

  it("falls back to page 1 when the page is missing or not a whole number", () => {
    for (const page of [undefined, "", "abc", "2abc", "2.5", "2e3", []]) {
      expect(paginateCatalogItems(ITEMS, page, 2).currentPage).toBe(1);
    }
  });

  it("clamps pages outside the valid range", () => {
    expect(paginateCatalogItems(ITEMS, "0", 2).currentPage).toBe(1);
    expect(paginateCatalogItems(ITEMS, "-4", 2).currentPage).toBe(1);
    expect(paginateCatalogItems(ITEMS, "99", 2)).toMatchObject({
      pageItems: ["e"],
      currentPage: 3,
    });
  });

  it("uses the first of repeated page values", () => {
    expect(paginateCatalogItems(ITEMS, ["2", "3"], 2).currentPage).toBe(2);
  });

  it("has one empty page when there are no items", () => {
    expect(paginateCatalogItems([], "3", 2)).toEqual({
      pageItems: [],
      currentPage: 1,
      totalPages: 1,
    });
  });

  it("rejects a page size that is not a positive integer", () => {
    for (const perPage of [0, -1, 1.5, Number.NaN]) {
      expect(() => paginateCatalogItems(ITEMS, "1", perPage)).toThrow(TypeError);
    }
  });
});
