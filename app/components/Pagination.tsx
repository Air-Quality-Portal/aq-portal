import type { Route } from "next";
import Link from "next/link";

type PaginationProps = {
  /** Route the page links point at; the `?page=` query is appended per link. */
  pathname: Route;
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({ pathname, currentPage, totalPages }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const hrefForPage = (page: number) => ({ pathname, query: { page } });

  return (
    <nav aria-label="Pagination" className="usa-pagination">
      <ul className="usa-pagination__list">
        {currentPage > 1 && (
          <li className="usa-pagination__item usa-pagination__arrow">
            <Link
              href={hrefForPage(currentPage - 1)}
              className="usa-pagination__link usa-pagination__previous-page"
              aria-label="Previous page"
            >
              <span className="usa-pagination__link-text">Previous</span>
            </Link>
          </li>
        )}

        {pages.map((page) => {
          const isCurrent = page === currentPage;
          return (
            <li key={page} className="usa-pagination__item usa-pagination__page-no">
              <Link
                href={hrefForPage(page)}
                className={`usa-pagination__button ${isCurrent ? "usa-current" : ""}`}
                aria-label={`Page ${page}`}
                aria-current={isCurrent ? "page" : undefined}
              >
                {page}
              </Link>
            </li>
          );
        })}

        {currentPage < totalPages && (
          <li className="usa-pagination__item usa-pagination__arrow">
            <Link
              href={hrefForPage(currentPage + 1)}
              className="usa-pagination__link usa-pagination__next-page"
              aria-label="Next page"
            >
              <span className="usa-pagination__link-text">Next</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
