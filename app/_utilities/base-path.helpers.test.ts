import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("withBasePath", () => {
  describe("when NEXT_PUBLIC_BASE_PATH is not set", () => {
    it("returns any path unchanged", async () => {
      const { withBasePath } = await import("./base-path.helpers");
      expect(withBasePath("/about")).toBe("/about");
      expect(withBasePath("/data-catalog")).toBe("/data-catalog");
      expect(withBasePath("/resources")).toBe("/resources");
      expect(withBasePath("/tools")).toBe("/tools");
    });
  });

  describe("when NEXT_PUBLIC_BASE_PATH is set", () => {
    beforeEach(() => {
      vi.resetModules();
      vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "/air4us");
    });

    afterEach(() => {
      vi.unstubAllEnvs();
    });

    it("prefixes each app page with the base path", async () => {
      const { withBasePath } = await import("./base-path.helpers");
      expect(withBasePath("/about")).toBe("/air4us/about");
      expect(withBasePath("/data-catalog")).toBe("/air4us/data-catalog");
      expect(withBasePath("/resources")).toBe("/air4us/resources");
      expect(withBasePath("/tools")).toBe("/air4us/tools");
    });

    it("prefixes a dynamic dataset route with the base path", async () => {
      const { withBasePath } = await import("./base-path.helpers");
      expect(withBasePath("/data-catalog/tempo-no2-column-grid-v04-provisional")).toBe(
        "/air4us/data-catalog/tempo-no2-column-grid-v04-provisional",
      );
    });

    it("returns a relative path unchanged", async () => {
      const { withBasePath } = await import("./base-path.helpers");
      expect(withBasePath("about")).toBe("about");
    });

    it("returns a protocol-relative URL unchanged", async () => {
      const { withBasePath } = await import("./base-path.helpers");
      expect(withBasePath("//cdn.example.com/img.png")).toBe("//cdn.example.com/img.png");
    });

    it("does not double-prefix a path that already has the base path", async () => {
      const { withBasePath } = await import("./base-path.helpers");
      expect(withBasePath("/air4us/data-catalog")).toBe("/air4us/data-catalog");
    });

    it("does not prefix a path that is exactly the base path", async () => {
      const { withBasePath } = await import("./base-path.helpers");
      expect(withBasePath("/air4us")).toBe("/air4us");
    });
  });
});
