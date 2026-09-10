/**
 * Helpers for working with the base path.
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix an app-internal absolute path with {@link BASE_PATH}.
 * Applies only to internal paths, other paths are returned unchanged.
 * @param path - The path to prefix.
 * @returns The prefixed path.
 */
export function withBasePath(path: string): string {
  // no base path provided
  if (!BASE_PATH) return path;
  // not an absolute path from root
  if (!path.startsWith("/")) return path;
  // is a protocol-relative full url path (ex. //domain.com/img/logo.png)
  if (path.startsWith("//")) return path;
  // base path already appended
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
