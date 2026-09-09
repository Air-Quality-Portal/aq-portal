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
    metadata: { tags: [] },
    ...overrides,
  };
}

export const testDataset1 = createTestDataset("test-dataset-1");
export const testDataset2 = createTestDataset("test-dataset-2");
export const testDataset3 = createTestDataset("test-dataset-3");
