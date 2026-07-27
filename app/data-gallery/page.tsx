import { Card, CardDetailed, Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { DatasetCatalogToolbar, Pagination, Section } from "@/app/components";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
import { getMetadataFieldTag } from "../site-config/content.helpers";
import { DATASETS } from "../site-config/dataset";

const PER_PAGE = 8;

export default async function DataGalleryPage(props: PageProps<"/data-gallery">) {
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
      <Card className=" height-masthead" isMastHead title={DATA_GALLERY_CARD_MASTHEAD.title} />
      <DatasetCatalogToolbar count={total} />
      <div className="grid-row grid-gap">
        {pageItems.map(({ id, title, description, thumbnailImage, metadata, categories }) => {
          const tagPrimary = getMetadataFieldTag(metadata, "provider");
          const tags = categories ?? [];

          return (
            <div key={id} className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-2">
              <CardDetailed
                className="height-card-md bg-base-lightest"
                imagePosition="left"
                image={<Image {...thumbnailImage} fill sizes="194px" />}
                tagPrimary={
                  tagPrimary
                    ? {
                        label: tagPrimary,
                        variant: "solid",
                        color: "base-lighter",
                        textColor: "primary-dark",
                      }
                    : undefined
                }
                title={
                  <Link
                    className="font-body-lg text-light"
                    href={`/data-gallery/${id}`}
                    variant="text-plain"
                  >
                    {title}
                  </Link>
                }
                description={description}
                tags={tags.map((tag) => ({
                  label: tag,
                  variant: "outline",
                  color: "base",
                }))}
              />
            </div>
          );
        })}
      </div>
      <Pagination pathname="/data-gallery" currentPage={currentPage} totalPages={totalPages} />
    </Section>
  );
}
