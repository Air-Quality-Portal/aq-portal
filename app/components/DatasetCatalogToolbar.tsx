type DatasetCatalogToolbarProps = {
  /** Total number of datasets in the catalog (shown as a count badge). */
  count: number;
};

export const DatasetCatalogToolbar = ({ count }: DatasetCatalogToolbarProps) => (
  <div className="display-flex flex-justify flex-align-center flex-wrap margin-y-6 border border-base-lighter radius-lg bg-white padding-y-105 padding-x-205">
    <p className="display-flex flex-align-center margin-0 text-bold">
      Datasets
      <span className="margin-left-1 padding-x-1 padding-y-1 bg-primary text-white radius-md font-sans-2xs">
        {count}
      </span>
    </p>
  </div>
);
