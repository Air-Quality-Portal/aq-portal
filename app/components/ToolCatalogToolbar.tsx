type ToolCatalogToolbarProps = {
  /** Total number of tools in the catalog (shown next to the search field). */
  count: number;
  searchPlaceholder?: string;
};

export const ToolCatalogToolbar = ({
  count,
  searchPlaceholder = "Search tools...",
}: ToolCatalogToolbarProps) => (
  <div className="display-flex flex-justify flex-align-center flex-wrap margin-bottom-3">
    <label className="usa-sr-only" htmlFor="tool-catalog-search">
      Search tools
    </label>
    <div className="usa-input-group radius-md maxw-card-lg padding-left-1">
      <span className="usa-input-prefix text-base" aria-hidden="true">
        <svg className="usa-icon" viewBox="0 0 24 24" focusable="false" role="img">
          <title>Search</title>
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </span>
      <input
        className="usa-input"
        id="tool-catalog-search"
        name="q"
        type="search"
        placeholder={searchPlaceholder}
      />
    </div>
    <p className="font-sans-2xs text-base margin-0">
      {count} {count === 1 ? "tool" : "tools"}
    </p>
  </div>
);
