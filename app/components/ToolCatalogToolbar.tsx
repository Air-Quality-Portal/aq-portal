import { SvgSearch } from "@teamimpact/veda-ui-blocks";

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
        <SvgSearch className="usa-icon" />
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
