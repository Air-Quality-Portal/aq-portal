import { describe, expect, it, vi } from "vitest";
import * as module from ".";

vi.mock("./dataset__mock", async () => {
  const { testDataset1 } = await import("./index.fixtures");
  return {
    MOCK_DETAILED_DATASET: testDataset1,
  };
});

vi.mock("./datasets__mock", async () => {
  const { testDataset1, testDataset2, testDataset3 } = await import("./index.fixtures");
  return {
    MOCK_DATASETS: [testDataset1, testDataset2, testDataset3],
  };
});

describe("getDatasetsByIds", () => {
  it("returns empty array when no matches found", () => {
    const results = module.getDatasetsByIds(["noSuchDataset"]);
    expect(results).toHaveLength(0);

    const emptyResults = module.getDatasetsByIds([""]);
    expect(emptyResults).toHaveLength(0);
  });

  it("returns datasets by ids", () => {
    const results = module.getDatasetsByIds(["test-dataset-1", "test-dataset-2"]);
    expect(results).toHaveLength(2);
    expect(results[0].id).toBe("test-dataset-1");
    expect(results[1].id).toBe("test-dataset-2");
  });
});
