import { describe, expect, it } from "vitest";
import { formatBuildDate } from "./footer";

describe("formatBuildDate", () => {
  it("should return the formatted build date", () => {
    const result = formatBuildDate();
    expect(result).toMatch(/^[A-Za-z]+\s\d{1,2},\s\d{4}$/); // Tests expected pattern ("August 28, 2026")
  });
});
