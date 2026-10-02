import { describe, expect, it } from "vitest";
import { getGridColumnClass } from "./component.helpers";

describe("getGridColumnClass", () => {
  describe("default maxColumns (4)", () => {
    it("returns a 4-column layout when itemCount is divisible by 4", () => {
      expect(getGridColumnClass(4)).toBe("grid-col-12 tablet:grid-col-6 desktop:grid-col-3");
      expect(getGridColumnClass(8)).toBe("grid-col-12 tablet:grid-col-6 desktop:grid-col-3");
    });

    it("returns a 3-column layout when itemCount is divisible by 3 but not 4", () => {
      expect(getGridColumnClass(3)).toBe("grid-col-12 tablet:grid-col-4");
      expect(getGridColumnClass(9)).toBe("grid-col-12 tablet:grid-col-4");
    });

    it("returns a 2-column layout when itemCount is divisible by 2 but not 3 or 4", () => {
      expect(getGridColumnClass(2)).toBe("grid-col-12 tablet:grid-col-6");
      expect(getGridColumnClass(10)).toBe("grid-col-12 tablet:grid-col-6");
    });

    it("returns full width when itemCount has no clean divisor", () => {
      expect(getGridColumnClass(1)).toBe("grid-col-12");
      expect(getGridColumnClass(5)).toBe("grid-col-12");
      expect(getGridColumnClass(7)).toBe("grid-col-12");
    });

    it("4-column check wins when itemCount is divisible by 4, 3, and 2", () => {
      expect(getGridColumnClass(12)).toBe("grid-col-12 tablet:grid-col-6 desktop:grid-col-3");
    });
  });

  describe("maxColumns constrains the layout", () => {
    it("skips 4-column when maxColumns is 3, falls to 2-column for itemCount 4", () => {
      expect(getGridColumnClass(4, 3)).toBe("grid-col-12 tablet:grid-col-6");
    });

    it("skips 4-column and 3-column when maxColumns is 2", () => {
      expect(getGridColumnClass(4, 2)).toBe("grid-col-12 tablet:grid-col-6");
    });

    it("always returns full width when maxColumns is 1", () => {
      expect(getGridColumnClass(4, 1)).toBe("grid-col-12");
      expect(getGridColumnClass(6, 1)).toBe("grid-col-12");
    });
  });
});
