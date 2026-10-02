import { describe, expect, it } from "vitest";
import { typedMap } from "./typed.helpers";

describe("typedMap", () => {
  it("applies the function to every element", () => {
    expect(typedMap([1, 2, 3], (n: number) => n * 2)).toEqual([2, 4, 6]);
  });

  it("preserves the length of the input array", () => {
    expect(typedMap(["a", "b", "c"], (s: string) => s.toUpperCase())).toHaveLength(3);
  });

  it("works with an empty array", () => {
    expect(typedMap([], (n: number) => n * 2)).toEqual([]);
  });

  it("maps across types", () => {
    expect(typedMap(["hello", "world"], (s: string) => s.length)).toEqual([5, 5]);
  });
});
