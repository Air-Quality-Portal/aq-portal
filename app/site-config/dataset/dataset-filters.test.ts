import { describe, expect, it } from "vitest";
import { filterDatasetsByTags, generateDatasetFilters, getIdFromValue } from "./dataset-filters";
import { createTestDataset } from "./index.fixtures";

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
  it("generates filters from datasets", () => {
    const datasets = [createTestDataset("test-1")];
    const filters = generateDatasetFilters(datasets);

    expect(filters).toHaveLength(4);
    expect(filters.map((f) => f.label)).toEqual(["Data Type", "Latency", "Parameter", "Topic"]);
  });

  it("extracts unique options per category", () => {
    const datasets = [
      createTestDataset("test-1", {
        metadata: {
          tags: [
            { category: "Data Type", options: ["Satellite", "Satellite"] },
            { category: "Parameter", options: ["Smoke", "Fire"] },
          ],
        },
      }),
      createTestDataset("test-2", {
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
    expect(dataTypeFilter?.options.map((o) => o.label)).toEqual(["Satellite"]);
    expect(parameterFilter?.options.map((o) => o.label)).toEqual(["Smoke", "Fire"]);
  });

  it("maintains category order", () => {
    const datasets = [
      createTestDataset("test-1", {
        metadata: {
          tags: [
            { category: "Topic", options: ["Test"] },
            { category: "Latency", options: ["Test"] },
            { category: "Data Type", options: ["Test"] },
            { category: "Parameter", options: ["Test"] },
          ],
        },
      }),
    ];

    const filters = generateDatasetFilters(datasets);

    expect(filters.map((f) => f.label)).toEqual(["Data Type", "Latency", "Parameter", "Topic"]);
  });
});

describe("filterDatasetsByTags", () => {
  it("returns all datasets when no filters selected", () => {
    const datasets = [createTestDataset("test-1"), createTestDataset("test-2")];

    const results = filterDatasetsByTags(datasets, []);

    expect(results).toHaveLength(2);
  });

  it("filters datasets by tag ID", () => {
    const datasets = [
      createTestDataset("test-1", {
        metadata: {
          tags: [{ category: "Parameter", options: ["Smoke"] }],
        },
      }),
      createTestDataset("test-2", {
        metadata: {
          tags: [{ category: "Parameter", options: ["Fire"] }],
        },
      }),
    ];

    const results = filterDatasetsByTags(datasets, ["smoke"]);

    expect(results).toHaveLength(1);
    expect(results[0].id).toBe("test-1");
  });

  it("returns datasets matching any selected tag", () => {
    const datasets = [
      createTestDataset("test-1", {
        metadata: {
          tags: [{ category: "Parameter", options: ["Smoke"] }],
        },
      }),
      createTestDataset("test-2", {
        metadata: {
          tags: [{ category: "Parameter", options: ["Fire"] }],
        },
      }),
      createTestDataset("test-3", {
        metadata: {
          tags: [{ category: "Parameter", options: ["Dust"] }],
        },
      }),
    ];

    const results = filterDatasetsByTags(datasets, ["smoke", "fire"]);

    expect(results).toHaveLength(2);
    expect(results.map((d) => d.id)).toEqual(["test-1", "test-2"]);
  });

  it("handles subscripts in filter matching", () => {
    const datasets = [
      createTestDataset("test-1", {
        metadata: {
          tags: [{ category: "Parameter", options: ["PM₂.₅"] }],
        },
      }),
    ];

    const results = filterDatasetsByTags(datasets, ["pm2-5"]);

    expect(results).toHaveLength(1);
  });

  it("returns empty array when no datasets match", () => {
    const datasets = [
      createTestDataset("test-1", {
        metadata: {
          tags: [{ category: "Parameter", options: ["Smoke"] }],
        },
      }),
    ];

    const results = filterDatasetsByTags(datasets, ["nonexistent"]);

    expect(results).toHaveLength(0);
  });
});
