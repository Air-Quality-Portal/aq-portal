import { describe, expect, it } from "vitest";
import { TOOLS } from "./tools__mock";
import { searchTools } from "./tools__search";

describe("searchTools", () => {
  it("returns all tools when query is empty", () => {
    const results = searchTools(TOOLS, "");
    expect(results).toEqual(TOOLS);
  });

  it("returns all tools when query is undefined", () => {
    const results = searchTools(TOOLS);
    expect(results).toEqual(TOOLS);
  });

  it("returns empty array when no matches found", () => {
    const results = searchTools(TOOLS, "noSuchTool");
    expect(results).toHaveLength(0);
  });

  it("matches by title (highest priority)", () => {
    const results = searchTools(TOOLS, "air quality");
    expect(results[0].id).toBe("air-quality-monitor");
  });

  it("matches PM2.5 with hyphen and dot", () => {
    const results = searchTools(TOOLS, "PM2.5");
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe("pm25-analyzer");
  });

  it("uses AND matching: all terms must match", () => {
    const results = searchTools(TOOLS, "air quality");
    expect(results).toContainEqual(TOOLS[0]); // Matched by title and tagPrimary
    expect(results).toContainEqual(TOOLS[1]); // Matched by additionalTags

    // "air monitoring" should only match the first tool
    const narrowed = searchTools(TOOLS, "air monitoring");
    expect(narrowed).toHaveLength(1);
    expect(narrowed[0].id).toBe("air-quality-monitor");
  });

  it("does prefix matching: half-typed words work", () => {
    const results = searchTools(TOOLS, "monit");
    expect(results[0].id).toBe("air-quality-monitor");
  });

  it("is case insensitive", () => {
    const results1 = searchTools(TOOLS, "air");
    const results2 = searchTools(TOOLS, "AIR");
    const results3 = searchTools(TOOLS, "Air");
    expect(results1).toEqual(results2);
    expect(results2).toEqual(results3);
  });

  it("ranks title matches higher than tag matches", () => {
    // "Air Quality Monitor" has "Air Quality" in title (weight 8)
    // "PM2.5 Analyzer" has "Air Quality" in tags (weight 4)
    const results = searchTools(TOOLS, "air");
    expect(results[0].id).toBe("air-quality-monitor");
    expect(results[1].id).toBe("pm25-analyzer");
  });

  it("preserves original order for equal-scoring results", () => {
    const results = searchTools(TOOLS, "monitor");
    // Both first and second tool have "monitor", but first should stay first
    expect(results[0].id).toBe("air-quality-monitor");
  });
});
