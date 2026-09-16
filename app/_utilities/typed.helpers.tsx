/**
 * Tuple-preserving map. Unlike `Array.prototype.map`, this retains the length
 * and positional structure of the input tuple in the return type.
 *
 * @param arr - The input tuple whose length and structure will be preserved.
 * @param fn - Mapping function applied to each element.
 * @returns A tuple of the same length as `arr` with each element transformed by `fn`.
 *
 * @example
 * const result = typedMap([a, b, c] as [A, A, A], transform);
 * // inferred as [B, B, B], not B[]
 */
export function typedMap<T, U, const Arr extends T[]>(
  arr: [...Arr],
  fn: (item: T) => U,
): { [K in keyof Arr]: U } {
  return arr.map(fn) as { [K in keyof Arr]: U };
}
