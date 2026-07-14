import { Card, CardDetailed, Link, Tag } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { Pagination, Section, ToolCatalogToolbar } from "@/app/components";
import { TOOLS } from "@/app/site-config/tool";

const PER_PAGE = 8;

export default async function ToolsPage(props: PageProps<"/tools">) {
  // The first tool is featured full-width on top; the rest fill the grid.
  const [primaryTool, ...restTools] = TOOLS;
  const total = TOOLS.length;
  const totalPages = Math.max(1, Math.ceil(restTools.length / PER_PAGE));

  const { page } = (await props.searchParams) ?? {};
  const requestedPage = Number.parseInt(Array.isArray(page) ? page[0] : (page ?? ""), 10);
  const currentPage = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);

  const pageItems = restTools.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <>
      {/* Title-only masthead: the air4us `no-image` masthead variant hides the media and renders
          a serif/light title on the masthead's light background. Image is required but hidden. */}
      <Section>
        <Card
          className="no-image"
          isMastHead
          imagePosition="cover"
          title="Air Quality Tools Catalog"
          image={<svg role="presentation" aria-hidden="true" />}
        />
      </Section>
      {/* Primary (featured) tool */}
      {primaryTool && (
        <Section>
          <CardDetailed
            className="height-card-lg"
            imagePosition="top"
            image={
              <Image
                {...primaryTool.thumbnailImage}
                fill
                sizes="(max-width: 880px) 100vw, 480px"
                style={{ objectFit: "cover" }}
              />
            }
            tagPrimary={
              primaryTool.tagPrimary ? (
                <Tag variant="solid" color="base-lighter" textColor="primary-dark">
                  {primaryTool.tagPrimary}
                </Tag>
              ) : undefined
            }
            title={
              <>
                <Link
                  className="font-body-xl font-light"
                  href={primaryTool.href}
                  isExternal
                  variant="text"
                  style={{ fontWeight: 300 }}
                >
                  {primaryTool.title}
                </Link>

                <hr className="margin-top-2"></hr>
              </>
            }
            description={primaryTool.description}
            tags={primaryTool.categories?.map((tag) => (
              <Tag key={tag} variant="outline">
                {tag}
              </Tag>
            ))}
            callToAction={{ href: primaryTool.href, label: "Open tool", isExternal: true }}
          />
        </Section>
      )}

      <Section>
        <ToolCatalogToolbar count={total} />
        <div className="grid-row grid-gap">
          {pageItems.map(
            ({ id, title, description, href, thumbnailImage, tagPrimary, categories }) => (
              <div key={id} className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-2">
                <CardDetailed
                  className="height-card-lg"
                  imagePosition="top"
                  image={<Image {...thumbnailImage} fill sizes="194px" />}
                  tagPrimary={
                    tagPrimary ? (
                      <Tag variant="solid" color="base-lighter" textColor="primary-dark">
                        {tagPrimary}
                      </Tag>
                    ) : undefined
                  }
                  title={
                    <>
                      <Link
                        className="font-body-xl font-light"
                        href={href}
                        isExternal
                        variant="text"
                        style={{ fontWeight: 300 }}
                      >
                        {title}
                      </Link>

                      <hr className="margin-top-2"></hr>
                    </>
                  }
                  description={description}
                  tags={categories?.map((tag) => (
                    <Tag key={tag} variant="outline">
                      {tag}
                    </Tag>
                  ))}
                />
              </div>
            ),
          )}
        </div>
        <Pagination pathname="/tools" currentPage={currentPage} totalPages={totalPages} />
      </Section>
    </>
  );
}
