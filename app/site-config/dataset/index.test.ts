import { describe, expect, it, vi } from "vitest";
import * as module from ".";

vi.mock("./epa-aqs-concentrations", async () => {
  const { testDataset1 } = await import("./index.fixtures");
  return { EPA_AQS_CONCENTRATIONS: testDataset1 };
});

vi.mock("./naqfc-aqm-forecast-v7", async () => {
  const { testDataset2 } = await import("./index.fixtures");
  return { NAQFC_AQM_FORECAST_V7: testDataset2 };
});

vi.mock("./tempo-hcho-column-grid-v04-provisional", async () => {
  const { testDataset3 } = await import("./index.fixtures");
  return { TEMPO_HCHO_COLUMN_GRID_V04_PROVISIONAL: testDataset3 };
});

vi.mock("./tempo-no2-column-grid-v04-provisional", async () => {
  const { createTestDataset } = await import("./index.fixtures");
  return { TEMPO_NO2_COLUMN_GRID_V04_PROVISIONAL: createTestDataset("test-dataset-4") };
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
