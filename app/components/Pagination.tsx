export type PaginationProps = {
  /** Builds the href for a page. Called for the prev arrow, every page number and the next arrow. */
  getHref: (page: number) => string;
  currentPage: number;
  /** Defaults to `currentPage + maxVisibleSlots` (unbounded pagination). */
  totalPages?: number;
  /** Slots the page list may occupy, including first page, last page and one ellipsis. */
  maxVisibleSlots?: number;
  className?: string;
};

type PageItem = { type: "page"; number: number } | { type: "ellipsis"; id: string };

const make_class_name = (baseClass: string, additionalClasses?: Array<string | undefined>) =>
  [baseClass, ...(additionalClasses ?? [])].filter(Boolean).join(" ");

const getVisiblePages = (currentPage: number, totalPages: number, maxSlots: number): PageItem[] => {
  const items: PageItem[] = [];

  // `- 3` reserves slots for the first page, the last page and one ellipsis.
  const windowSize = Math.max(1, Math.floor((maxSlots - 3) / 2));
  const start = Math.max(1, currentPage - windowSize);
  const end = Math.min(totalPages, currentPage + windowSize);

  if (start > 1) {
    items.push({ type: "page", number: 1 });
    if (start > 2) items.push({ type: "ellipsis", id: "start" });
  }

  for (let page = start; page <= end; page++) {
    items.push({ type: "page", number: page });
  }

  if (end < totalPages) {
    if (end < totalPages - 1) items.push({ type: "ellipsis", id: "end" });
    items.push({ type: "page", number: totalPages });
  }

  return items;
};

export const Pagination = ({
  getHref,
  currentPage,
  totalPages,
  maxVisibleSlots = 4,
  className,
}: PaginationProps) => {
  const total = totalPages ?? currentPage + maxVisibleSlots;
  const pages = getVisiblePages(currentPage, total, maxVisibleSlots);

  return (
    <div
      className={make_class_name("blocks-pagination usa-pagination", [className])}
      data-current-page={currentPage}
      data-total-pages={total}
    >
      <nav aria-label="Pagination" className="usa-pagination">
        <ul className="usa-pagination__list">
          {currentPage > 1 && (
            <li className="usa-pagination__item usa-pagination__arrow">
              <a
                href={getHref(currentPage - 1)}
                className="usa-pagination__link usa-pagination__previous-page"
                aria-label="Previous page"
              >
                <span className="usa-pagination__link-text">Previous</span>
              </a>
            </li>
          )}

          {pages.map((item) =>
            item.type === "ellipsis" ? (
              <li
                key={`ellipsis-${item.id}`}
                className="usa-pagination__item usa-pagination__overflow"
                role="presentation"
              >
                <span>…</span>
              </li>
            ) : (
              <li key={item.number} className="usa-pagination__item usa-pagination__page-no">
                <a
                  href={getHref(item.number)}
                  className={make_class_name("usa-pagination__button", [
                    item.number === currentPage ? "usa-current" : undefined,
                  ])}
                  aria-label={`Page ${item.number}`}
                  aria-current={item.number === currentPage ? "page" : undefined}
                >
                  {item.number}
                </a>
              </li>
            ),
          )}

          {currentPage < total && (
            <li className="usa-pagination__item usa-pagination__arrow">
              <a
                href={getHref(currentPage + 1)}
                className="usa-pagination__link usa-pagination__next-page"
                aria-label="Next page"
              >
                <span className="usa-pagination__link-text">Next</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
