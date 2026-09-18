import { Card, CardDetailed } from "@teamimpact/veda-ui-blocks";
import {
  CATALOG_PAGE_PARAM,
  firstSearchParam,
  paginateCatalogItems,
} from "@/app/_utilities/catalog-pagination.helpers";
import { formatPollutants } from "@/app/_utilities/pollutants.helpers";
import {
  CatalogEmptyState,
  CatalogPagination,
  DatasetCatalogToolbar,
  Section,
} from "@/app/components";
import { AppImage } from "@/app/components/AppImage";
import { AppLinkStyled } from "@/app/components/AppLink";
import { DATASETS, searchDatasets } from "@/app/site-config/dataset";
import { DATA_CATALOG_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
import { getMetadataFieldTag, makePrimaryTag, makeSimpleTag } from "../_utilities/content.helpers";
import { CONTENT_TYPES } from "../site-config/types";

const PER_PAGE = 8;

export default async function DataCatalogPage(props: PageProps<"/data-catalog">) {
  const searchParams = (await props.searchParams) ?? {};
  const query = firstSearchParam(searchParams.q);
  const results = searchDatasets(DATASETS, query);
  const total = results.length;
  const { pageItems, currentPage, totalPages } = paginateCatalogItems(
    results,
    searchParams[CATALOG_PAGE_PARAM],
    PER_PAGE,
  );

  return (
    <>
      <Section>
        <Card className="height-masthead" isMastHead title={DATA_CATALOG_CARD_MASTHEAD.title} />
      </Section>
      <Section>
        <DatasetCatalogToolbar count={total} query={query} pageParam={CATALOG_PAGE_PARAM} />
        {total === 0 && (
          <CatalogEmptyState
            query={query}
            itemsLabel="datasets"
            clearHref={CONTENT_TYPES.dataset.route}
          />
        )}
        <div className="grid-row grid-gap-4">
          {pageItems.map(({ id, title, description, thumbnailImage, metadata }) => {
            const tagPrimary = getMetadataFieldTag(metadata, "provider");
            const tags = metadata.tags ?? [];
            return (
              <div key={id} className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-4">
                <CardDetailed
                  className="height-card-md bg-base-lightest"
                  imagePosition="left"
                  image={<AppImage {...thumbnailImage} fill sizes="194px" />}
                  tagPrimary={tagPrimary ? makePrimaryTag(tagPrimary) : undefined}
                  title={
                    <AppLinkStyled
                      key={id}
                      className="font-body-lg text-light"
                      href={`${CONTENT_TYPES.dataset.route}/${id}`}
                      variant="text"
                    >
                      {formatPollutants(title)}
                    </AppLinkStyled>
                  }
                  description={description}
                  tags={tags.map((tag) => makeSimpleTag(tag))}
                />
              </div>
            );
          })}
        </div>
        {totalPages > 1 && (
          <CatalogPagination
            basePath={CONTENT_TYPES.dataset.route}
            currentPage={currentPage}
            totalPages={totalPages}
            pageParam={CATALOG_PAGE_PARAM}
          />
        )}
      </Section>
    </>
  );
}
