import { Card, CardDetailed, Link, Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { DatasetCatalogToolbar, Pagination, Section } from "@/app/components";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
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
    <>
      {/* Title-only masthead: the air4us `no-image` masthead variant hides the media and renders
          a serif/light title on the masthead's light background. Image is required but hidden. */}
      <Card
        className="no-image"
        isMastHead
        imagePosition="cover"
        title={DATA_GALLERY_CARD_MASTHEAD.title}
        image={<svg role="presentation" aria-hidden="true" />}
      />
      <Section>
        <DatasetCatalogToolbar count={total} />
        <div className="grid-row grid-gap">
          {pageItems.map(
            ({ id, title, description, thumbnailImage, category1, category2, category3 }) => (
              <div key={id} className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-2">
                <CardDetailed
                  className="height-card-lg"
                  imagePosition="left"
                  image={<Image {...thumbnailImage} fill sizes="194px" />}
                  tagPrimary={
                    <Tag variant="solid" color="base-lighter" textColor="primary-dark">
                      {category1[0]}
                    </Tag>
                  }
                  title={
                    <>
                      <Link
                        className="font-body-xl font-light"
                        href={`/data-gallery/${id}`}
                        variant="text"
                        style={{ fontWeight: 300 }}
                      >
                        {title}
                      </Link>

                      <hr className="margin-top-2"></hr>
                    </>
                  }
                  description={description}
                  tags={[...category1, ...category2, ...category3].map((tag) => (
                    <Tag key={tag} variant="outline">
                      {tag}
                    </Tag>
                  ))}
                />
              </div>
            ),
          )}
        </div>
        <Pagination pathname="/data-gallery" currentPage={currentPage} totalPages={totalPages} />
      </Section>
    </>
  );
}
