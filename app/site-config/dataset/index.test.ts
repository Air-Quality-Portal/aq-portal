import { describe, expect, it } from "vitest";
import { getDatasetsByIds } from ".";

describe("getDatasetsByIds", () => {
  it("returns empty array when no matches found", () => {
    const results = getDatasetsByIds(["noSuchDataset"]);
    expect(results).toHaveLength(0);

    const emptyResults = getDatasetsByIds([""]);
    expect(emptyResults).toHaveLength(0);
  });

  it("returns datasets by ids", () => {
    const results = getDatasetsByIds(["maiac-aod-3", "hms-smoke-polygons-3"]);
    expect(results).toHaveLength(2);
  });
});
