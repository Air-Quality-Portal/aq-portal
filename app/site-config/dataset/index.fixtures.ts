import type { DatasetContent } from "@/app/site-config/types";

export function createTestDataset(
  id: string,
  overrides: Partial<DatasetContent> = {},
): DatasetContent {
  return {
    id,
    contentType: "dataset",
    title: `Test Dataset (${id})`,
    description: "A test dataset for unit testing",
    thumbnailImage: { src: "", alt: "" },
    mastheadImage: { src: "", alt: "" },
    metadata: {
      tags: [
        { category: "Data Type", values: ["Satellite"] },
        { category: "Latency", values: ["Retrospective (15+ days)"] },
        { category: "Parameter", values: ["Smoke", "PM₂.₅"] },
        { category: "Topic", values: ["Wildfire Smoke", "High Ozone"] },
      ],
    },
    ...overrides,
  };
}

export const testDataset1 = createTestDataset("test-dataset-1");

export const testDataset2 = createTestDataset("test-dataset-2", {
  description: "Another test dataset for search and filtering",
});

export const testDataset3 = createTestDataset("test-dataset-3", {
  metadata: {
    tags: [
      { category: "Data Type", values: ["Forecast model"] },
      { category: "Parameter", values: ["Smoke", "PM₂.₅", "PM10"] },
      { category: "Topic", values: ["sample", "test"] },
    ],
  },
});
