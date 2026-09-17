/** Search param carrying a catalog's 1-based page number. */
export const CATALOG_PAGE_PARAM = "page";

/** Reads a single value from a Next.js search param, which may repeat or be absent. */
export const firstSearchParam = (value: string | string[] | undefined): string =>
  (Array.isArray(value) ? value[0] : value) ?? "";

export type CatalogPage<T> = {
  pageItems: T[];
  /** 1-based page actually shown, always within `1..totalPages`. */
  currentPage: number;
  /** At least 1, so an empty catalog still has a page to render. */
  totalPages: number;
};

/**
 * Slices catalog items down to one page. The requested page comes straight from
 * the URL, so anything that is not a number falls back to page 1 and numbers out
 * of range clamp to the first or last page.
 */
export const paginateCatalogItems = <T>(
  items: T[],
  requestedPage: string | string[] | undefined,
  perPage: number,
): CatalogPage<T> => {
  if (!Number.isInteger(perPage) || perPage <= 0) {
    throw new TypeError("Catalog pagination requires a positive integer page size");
  }

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const pageValue = firstSearchParam(requestedPage);
  const parsedPage = /^[+-]?\d+$/.test(pageValue) ? Number(pageValue) : Number.NaN;
  const currentPage = Number.isNaN(parsedPage) ? 1 : Math.min(Math.max(parsedPage, 1), totalPages);

  return {
    pageItems: items.slice((currentPage - 1) * perPage, currentPage * perPage),
    currentPage,
    totalPages,
  };
};
