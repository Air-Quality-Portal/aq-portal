import type { ToolContent } from "@/app/site-config/types";

export function createTestTool(id: string, overrides: Partial<ToolContent> = {}): ToolContent {
  return {
    id,
    title: `Test Tool (${id})`,
    fullname: `Test Tool Full Name (${id})`,
    description: "A test tool for unit testing",
    href: "https://example.com/tool",
    tagPrimary: "Test",
    thumbnailImage: { src: "", alt: "" },
    ...overrides,
  };
}

export const testTool1 = createTestTool("air-quality-monitor", {
  title: "Air Quality Monitor",
  fullname: "EPA Air Quality Monitoring Tool",
  tagPrimary: "Air Quality",
});

export const testTool2 = createTestTool("pm25-analyzer", {
  title: "PM2.5 Analyzer",
  fullname: "Particulate Matter 2.5 Analyzer",
  tagPrimary: "Pollution",
  additionalTags: ["Air Quality", "PM2.5"],
});

export const testTool3 = createTestTool("ozone-tracker", {
  title: "Ozone Level Tracker",
  fullname: "Ground-level Ozone Tracker",
  tagPrimary: "Pollution",
});
