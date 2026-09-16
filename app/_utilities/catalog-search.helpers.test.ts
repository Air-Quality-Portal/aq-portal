import { describe, expect, it } from "vitest";
import { normalizeQueryParam, normalizeTagsParam } from "./catalog-search.helpers";

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
