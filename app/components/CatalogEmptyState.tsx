import { getEmptyStateType } from "@/app/_utilities/catalog-search.helpers";
import { AppLink } from "./AppLink";

type CatalogEmptyStateProps = {
  /** Query that matched nothing. */
  query: string;
  /** Plural name of the catalog's items, e.g. "tools". */
  itemsLabel: string;
  /** Catalog route without a query string, so following it clears the search. */
  clearHref: string;
  /** Tags currently applied via filters. */
  selectedTags?: string[];
};

/** Shown in place of catalog results when a search matches nothing. */
export const CatalogEmptyState = ({
  query,
  itemsLabel,
  clearHref,
  selectedTags = [],
}: CatalogEmptyStateProps) => {
  const emptyStateType = getEmptyStateType(query, selectedTags);

  let message: string;
  let actionLabel: string;

  switch (emptyStateType) {
    case "filters": {
      message = `No ${itemsLabel} match the selected filters.`;
      actionLabel = "Clear filters";
      break;
    }
    case "query-and-filters": {
      message = `No ${itemsLabel} match "${query}" and the selected filters.`;
      actionLabel = "Clear search and filters";
      break;
    }
    case "query":
      message = `No ${itemsLabel} match "${query}".`;
      actionLabel = "Clear search";
      break;
  }

  return (
    <div className="padding-y-6 text-center">
      <p className="margin-0 text-bold">{message}</p>
      <p className="margin-top-1 margin-bottom-0">
        <AppLink href={clearHref} className="usa-link">
          {actionLabel}
        </AppLink>
      </p>
    </div>
  );
};
