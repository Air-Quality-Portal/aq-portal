import { AppLink } from "./AppLink";

type CatalogEmptyStateProps = {
  /** Query that matched nothing. */
  query: string;
  /** Plural name of the catalog's items, e.g. "tools". */
  itemsLabel: string;
  /** Catalog route without a query string, so following it clears the search. */
  clearHref: string;
};

/** Shown in place of catalog results when a search matches nothing. */
export const CatalogEmptyState = ({ query, itemsLabel, clearHref }: CatalogEmptyStateProps) => (
  <div className="padding-y-6 text-center">
    <p className="margin-0 text-bold">
      No {itemsLabel} match “{query}”.
    </p>
    <p className="margin-top-1 margin-bottom-0">
      <AppLink href={clearHref} className="usa-link">
        Clear search
      </AppLink>
    </p>
  </div>
);
