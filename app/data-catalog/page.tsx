import { Card, CardDetailed, Link } from "@teamimpact/veda-ui-blocks";
// import {Pagination} from "@teamimpact/veda-ui-blocks"
import Image from "next/image";
import { DatasetCatalogToolbar, Section } from "@/app/components";
import { DATA_CATALOG_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
import { getMetadataFieldTag, makePrimaryTag, makeSimpleTag } from "../site-config/content.helpers";
import { DATASETS } from "../site-config/dataset";

const PER_PAGE = 8;

export default async function DataCatalogPage(props: PageProps<"/data-catalog">) {
  const total = DATASETS.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  const { page } = (await props.searchParams) ?? {};
  const requestedPage = Number.parseInt(Array.isArray(page) ? page[0] : (page ?? ""), 10);
  const currentPage = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);

  const pageItems = DATASETS.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <Section>
      <Card className="height-masthead" isMastHead title={DATA_CATALOG_CARD_MASTHEAD.title} />
      <DatasetCatalogToolbar count={total} />
      <div className="grid-row grid-gap-4">
        {pageItems.map(({ id, title, description, thumbnailImage, metadata }) => {
          const tagPrimary = getMetadataFieldTag(metadata, "provider");
          const tags = metadata.tags ?? [];
          return (
            <div key={id} className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-4">
              <CardDetailed
                className="height-card-md bg-base-lightest"
                imagePosition="left"
                image={<Image {...thumbnailImage} fill sizes="194px" />}
                tagPrimary={tagPrimary ? makePrimaryTag(tagPrimary) : undefined}
                title={
                  <Link
                    className="font-body-lg text-light"
                    href={`/data-catalog/${id}`}
                    variant="text"
                  >
                    {title}
                  </Link>
                }
                description={description}
                tags={tags.map((tag) => makeSimpleTag(tag))}
              />
            </div>
          );
        })}
      </div>
      {/* {totalPages > 1 && (
        <Pagination
          getHref={(page) => `/data-catalog?page=${page}`}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )} */}
    </Section>
  );
}
