import { describe, expect, it } from "vitest";
import {
  makeContentTypeTag,
  makePrimaryTag,
  makeSimpleTag,
  makeTutorialLevelTag,
} from "./content.helpers";

describe("Tag makers", () => {
  describe("makePrimaryTag", () => {
    it("creates a primary tag with correct properties", () => {
      const tag = makePrimaryTag("NASA");
      expect(tag.label).toBe("NASA");
      expect(tag.variant).toBe("solid");
      expect(tag.color).toBe("white");
      expect(tag.textColor).toBe("primary-dark");
    });

    it("preserves tag text exactly", () => {
      const tag = makePrimaryTag("EPA/NOAA");
      expect(tag.label).toBe("EPA/NOAA");
    });

    it("handles tags with special characters", () => {
      const tag = makePrimaryTag("PM2.5");
      expect(tag.label).toBe("PM2.5");
    });
  });

  describe("makeSimpleTag", () => {
    it("creates a simple tag with correct properties", () => {
      const tag = makeSimpleTag("Air Quality");
      expect(tag.label).toBe("Air Quality");
      expect(tag.variant).toBe("outline");
      expect(tag.color).toBe("base-light");
    });
  });

  describe("makeTutorialLevelTag", () => {
    it("creates beginner tag with correct casing and colors", () => {
      const tag = makeTutorialLevelTag("beginner");
      expect(tag.label).toBe("BEGINNER");
      expect(tag.color).toBe("success-lighter");
      expect(tag.textColor).toBe("success-darker");
    });

    it("creates intermediate tag with correct casing and colors", () => {
      const tag = makeTutorialLevelTag("intermediate");
      expect(tag.label).toBe("INTERMEDIATE");
      expect(tag.variant).toBe("solid");
      expect(tag.color).toBe("info-lighter");
      expect(tag.textColor).toBe("info-darker");
    });

    it("creates advanced tag with correct casing and colors", () => {
      const tag = makeTutorialLevelTag("advanced");
      expect(tag.label).toBe("ADVANCED");
      expect(tag.color).toBe("secondary-lighter");
      expect(tag.textColor).toBe("secondary-darker");
    });
  });

  describe("makeContentTypeTag", () => {
    it("creates a tag for dataset content type", () => {
      const tag = makeContentTypeTag("dataset");
      expect(tag.label).toEqual("product");
      expect(tag.variant).toBe("solid");
      expect(tag.color).toBe("base-light");
    });
  });
});
