"use client";
import { Pagination } from "@teamimpact/veda-ui-blocks";
import { useSearchParams } from "next/navigation";

import { withBasePath } from "@/app/site-config/base-path.helpers";

type CatalogPaginationProps = {
  /** Route the page links point at, e.g. "/data-catalog". */
  basePath: string;
  /** 1-based index of the page currently being displayed. */
  currentPage: number;
  /** Total number of pages available. */
  totalPages: number;
  /** Search param carrying the page number. */
  pageParam?: string;
};

/**
 * Pagination control for any catalog page.
 * Wraps the blocks `Pagination` in a client component because its `getHref`
 * prop is a function, which cannot be passed from a server component.
 * Page links keep the rest of the query string intact, so paging does not
 * drop an active search or filter.
 * `getHref` returns a plain string that blocks renders into a bare anchor, so
 * next/link never sees it and `withBasePath` has to apply the app base path.
 */
export function CatalogPagination({
  basePath,
  currentPage,
  totalPages,
  pageParam = "page",
}: CatalogPaginationProps) {
  const searchParams = useSearchParams();

  const getHref = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(pageParam, String(page));
    return `${withBasePath(basePath)}?${params}`;
  };

  return <Pagination getHref={getHref} currentPage={currentPage} totalPages={totalPages} />;
}
