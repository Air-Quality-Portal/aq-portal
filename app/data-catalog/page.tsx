import { Card, CardDetailed } from "@teamimpact/veda-ui-blocks";
import { CatalogPagination, DatasetCatalogToolbar, Section } from "@/app/components";
import { AppImage } from "@/app/components/AppImage";
import { AppLink, AppLinkStyled } from "@/app/components/AppLink";
import { DATASETS, searchDatasets } from "@/app/site-config/dataset";
import { DATA_CATALOG_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
import { getMetadataFieldTag, makePrimaryTag, makeSimpleTag } from "../site-config/content.helpers";
import { CONTENT_TYPES } from "../site-config/types";

const PER_PAGE = 8;

export default async function DataCatalogPage(props: PageProps<"/data-catalog">) {
  const { page, q = "" } = (await props.searchParams) ?? {};
  const query = typeof q === "string" ? q : "";
  const results = searchDatasets(DATASETS, query);
  const total = results.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  const requestedPage = Number.parseInt(Array.isArray(page) ? page[0] : (page ?? ""), 10);
  const currentPage = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);

  const pageItems = results.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <>
      <Section>
        <Card className="height-masthead" isMastHead title={DATA_CATALOG_CARD_MASTHEAD.title} />
      </Section>
      <Section>
        <DatasetCatalogToolbar count={total} query={query} />
        {total === 0 && (
          <div className="padding-y-6 text-center">
            <p className="margin-0 text-bold">No datasets match “{query}”.</p>
            <p className="margin-top-1 margin-bottom-0">
              <AppLink href={CONTENT_TYPES.dataset.route} className="usa-link">
                Clear search
              </AppLink>
            </p>
          </div>
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
          />
        )}
      </Section>
    </>
  );
}
