import { describe, expect, it } from "vitest";
import {
  filterDatasetsByTags,
  generateDatasetFilters,
  getFilterLabel,
  getIdFromValue,
} from "./dataset-filters";
import { createTestDataset, testDataset1, testDataset2, testDataset3 } from "./index.fixtures";

describe("getIdFromValue", () => {
  it("converts values to clean kebab-case IDs", () => {
    expect(getIdFromValue("Regulatory Monitor")).toBe("regulatory-monitor");
    expect(getIdFromValue("Data Type ")).toBe("data-type");
  });

  it("handles subscripts", () => {
    expect(getIdFromValue("PM₂.₅")).toBe("pm2-5");
    expect(getIdFromValue("NO₂")).toBe("no2");
  });

  it("removes leading and trailing dashes", () => {
    expect(getIdFromValue("-test-")).toBe("test");
    expect(getIdFromValue("___test___")).toBe("test");
  });
});

describe("generateDatasetFilters", () => {
  it("generates filters from datasets in the expected order", () => {
    const filters = generateDatasetFilters([testDataset1]);

    expect(filters).toHaveLength(4);
    expect(filters.map((f) => f.label)).toEqual(["Data Type", "Latency", "Parameter", "Topic"]);
  });

  it("extracts unique options per category", () => {
    const datasets = [
      createTestDataset("unique-test-1", {
        metadata: {
          tags: [
            { category: "Data Type", options: ["Satellite", "Satellite"] },
            { category: "Parameter", options: ["Smoke", "Fire"] },
          ],
        },
      }),
      createTestDataset("unique-test-2", {
        metadata: {
          tags: [{ category: "Parameter", options: ["Fire"] }],
        },
      }),
    ];

    const filters = generateDatasetFilters(datasets);
    const dataTypeFilter = filters.find((f) => f.label === "Data Type");
    const parameterFilter = filters.find((f) => f.label === "Parameter");

    expect(dataTypeFilter?.options).toHaveLength(1);
    expect(parameterFilter?.options).toHaveLength(2);
  });
});

describe("filterDatasetsByTags", () => {
  it("returns all datasets when no filters selected", () => {
    const results = filterDatasetsByTags([testDataset1, testDataset2, testDataset3], []);

    expect(results).toHaveLength(3);
  });

  it("filters datasets by single and multiple tag IDs", () => {
    const singleTag = filterDatasetsByTags([testDataset1, testDataset3], ["satellite"]);
    expect(singleTag).toHaveLength(1);

    const multipleTags = filterDatasetsByTags(
      [testDataset1, testDataset3],
      ["smoke", "forecast-model"],
    );
    expect(multipleTags).toHaveLength(2);
  });

  it("handles subscripts in filter matching", () => {
    const results = filterDatasetsByTags([testDataset3], ["pm2-5"]);

    expect(results).toHaveLength(1);
    expect(results[0].id).toBe("test-dataset-3");
  });

  it("returns empty array when no datasets match", () => {
    const results = filterDatasetsByTags([testDataset1], ["nonexistent"]);

    expect(results).toHaveLength(0);
  });
});

describe("getFilterLabel", () => {
  it("returns the label for a known filter value", () => {
    const filters = generateDatasetFilters([testDataset1]);
    const label = getFilterLabel(filters, "satellite");

    expect(label).toBe("Satellite");
  });

  it("returns the value itself when no matching label found", () => {
    const filters = generateDatasetFilters([testDataset1]);
    const label = getFilterLabel(filters, "nonexistent");

    expect(label).toBe("nonexistent");
  });

  it("handles subscripts in filter labels", () => {
    const filters = generateDatasetFilters([testDataset3]);
    const label = getFilterLabel(filters, "pm2-5");

    expect(label).toBe("PM₂.₅");
  });
});
