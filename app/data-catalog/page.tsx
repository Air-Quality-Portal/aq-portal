import { Card, CardDetailed } from "@teamimpact/veda-ui-blocks";
import {
  CATALOG_PAGE_PARAM,
  paginateCatalogItems,
} from "@/app/_utilities/catalog-pagination.helpers";
import {
  CatalogEmptyState,
  CatalogPagination,
  DatasetCatalogToolbar,
  Section,
} from "@/app/components";
import { AppImage } from "@/app/components/AppImage";
import { AppLinkStyled } from "@/app/components/AppLink";
import { DATASETS, filterDatasetsByTags, searchDatasets } from "@/app/site-config/dataset";
import { DATA_CATALOG_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
import { normalizeCatalogSearchParams } from "../_utilities/catalog-search.helpers";
import {
  CARD_DETAILED_IMAGE_SIZES,
  getMetadataFieldTag,
  makePrimaryTag,
  makeSimpleTag,
} from "../_utilities/content.helpers";
import { CONTENT_TYPES, type DatasetContent } from "../site-config/types";

const PER_PAGE = 8;

export default async function DataCatalogPage(props: PageProps<"/data-catalog">) {
  const searchParams = (await props.searchParams) ?? {};
  const { q = "", tags } = searchParams;
  const { query, selectedTags } = normalizeCatalogSearchParams({ q, tags });
  const searched = searchDatasets(DATASETS, query);
  const filtered = filterDatasetsByTags(searched, selectedTags);
  const total = filtered.length;
  const { pageItems, currentPage, totalPages } = paginateCatalogItems(
    filtered,
    searchParams[CATALOG_PAGE_PARAM],
    PER_PAGE,
  );

  return (
    <>
      <Section>
        <Card className="height-masthead" isMastHead title={DATA_CATALOG_CARD_MASTHEAD.title} />
      </Section>
      <Section>
        <DatasetCatalogToolbar
          count={total}
          query={query}
          selectedTags={selectedTags}
          pageParam={CATALOG_PAGE_PARAM}
        />
        {total === 0 && (
          <CatalogEmptyState
            query={query}
            selectedTags={selectedTags}
            itemsLabel="datasets"
            clearHref={CONTENT_TYPES.dataset.route}
          />
        )}
        <div className="grid-row grid-gap-4">
          {pageItems.map(({ id, title, description, thumbnailImage, metadata }: DatasetContent) => {
            const tagPrimary = getMetadataFieldTag(metadata, "provider");
            const tags = metadata.tags ?? [];
            return (
              <div key={id} className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-4">
                <CardDetailed
                  className="height-card-md bg-base-lightest"
                  imagePosition="left"
                  image={<AppImage {...thumbnailImage} fill sizes={CARD_DETAILED_IMAGE_SIZES} />}
                  tagPrimary={tagPrimary ? makePrimaryTag(tagPrimary) : undefined}
                  title={
                    <AppLinkStyled
                      key={id}
                      className="font-body-lg text-light"
                      href={`${CONTENT_TYPES.dataset.route}/${id}`}
                      variant="text"
                    >
                      {title}
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
