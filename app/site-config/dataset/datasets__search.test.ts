import { describe, expect, it } from "vitest";
import { searchDatasets } from "./datasets__search";
import { createTestDataset } from "./index.fixtures";

const titleMatch = createTestDataset("title-match", {
  title: "Signal observations",
});
const providerMatch = createTestDataset("provider-match", {
  metadata: {
    fields: {
      provider: { label: "Data Provider", value: "Signal Agency" },
    },
  },
});
const tagMatch = createTestDataset("tag-match", {
  metadata: { tags: ["signal"] },
});
const spatialCoverageMatch = createTestDataset("spatial-match", {
  metadata: {
    fields: {
      spatialCoverage: { label: "Spatial Coverage", value: "Signal Region" },
    },
  },
});
const descriptionMatch = createTestDataset("description-match", {
  description: "Measurements from the signal network",
});

const DATASETS = [descriptionMatch, spatialCoverageMatch, tagMatch, providerMatch, titleMatch];

describe("searchDatasets", () => {
  it("searches title, provider, tags, spatial coverage, and description", () => {
    const results = searchDatasets(DATASETS, "signal");

    expect(results).toHaveLength(5);
    expect(results.map(({ id }) => id)).toEqual([
      "title-match",
      "spatial-match",
      "tag-match",
      "provider-match",
      "description-match",
    ]);
  });

  it("ranks title matches above metadata matches and description matches last", () => {
    const results = searchDatasets(DATASETS, "signal");

    expect(results.at(0)).toBe(titleMatch);
    expect(results.at(-1)).toBe(descriptionMatch);
  });

  it("does not search metadata fields outside the approved configuration", () => {
    const dataset = createTestDataset("parameters-only", {
      metadata: {
        fields: {
          parameters: { label: "Parameters", value: "Unobtainium" },
        },
      },
    });

    expect(searchDatasets([dataset], "unobtainium")).toEqual([]);
  });
});
