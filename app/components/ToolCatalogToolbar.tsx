type ToolCatalogToolbarProps = {
  /** Total number of tools in the catalog (shown as a count badge). */
  count: number;
};

export const ToolCatalogToolbar = ({ count }: ToolCatalogToolbarProps) => (
  <div className="display-flex flex-justify flex-align-center flex-wrap margin-bottom-3">
    <p className="display-flex flex-align-center margin-0 text-bold">
      Tools
      <span className="margin-left-1 padding-x-1 bg-primary text-white radius-md font-sans-2xs">
        {count}
      </span>
    </p>
  </div>
);
