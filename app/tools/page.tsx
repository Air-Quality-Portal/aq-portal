import { Card, CardDetailed, Carousel } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { Pagination, Section, ToolCatalogToolbar } from "@/app/components";
import { makePrimaryTag, makeSimpleTag } from "@/app/site-config/content.helpers";
import { TOOLS } from "@/app/site-config/tool";

const PER_PAGE = 9;

// Tools shown as full-width slides above the grid; the rest fill the paginated grid.
const FEATURED_COUNT = 3;

const hrefLabel = (href: string) => href.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default async function ToolsPage(props: PageProps<"/tools">) {
  // The leading tools are featured in the carousel on top; the rest fill the grid.
  const featuredTools = TOOLS.slice(0, FEATURED_COUNT);
  const restTools = TOOLS.slice(FEATURED_COUNT);
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
      <Section>
        <Card className="height-masthead" isMastHead title="Air Quality Tools Catalog" />
      </Section>
      {featuredTools.length > 0 && (
        <Section>
          <p className="font-sans-3xs text-base-light text-uppercase margin-y-1">The AIR4US Tool</p>
          <div className="font-sans-lg ">
            Explore air quality data in one{" "}
            <span className="text-accent-cool-darker">interactive map</span>
          </div>

          <Carousel
            className="height-card-lg"
            maxVisibleItems={1}
            items={featuredTools.map((tool) => ({
              image: (
                <Image
                  {...tool.thumbnailImage}
                  fill
                  sizes="(max-width: 880px) 100vw, 880px"
                  style={{ objectFit: "cover" }}
                />
              ),
            }))}
          />
        </Section>
      )}

      <Section>
        <ToolCatalogToolbar count={total} />
        <div className="grid-row grid-gap">
          {pageItems.map((tool) => (
            <div
              key={tool.id}
              className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-y-1 desktop:margin-y-2"
            >
              <CardDetailed
                className="height-full border-1px border-base-lighter"
                imagePosition="top"
                image={
                  <Image
                    {...tool.thumbnailImage}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                }
                tagPrimary={tool.tagPrimary ? makePrimaryTag(tool.tagPrimary) : undefined}
                intro={tool.fullname}
                title={
                  <div className="blocks-card-detailed__title font-sans-lg text-light">
                    {tool.title}
                  </div>
                }
                description={tool.description}
                tags={
                  tool.categories
                    ? tool.categories?.map((label) => makeSimpleTag(label))
                    : undefined
                }
                callToActionSecondary={{
                  href: tool.href,
                  label: hrefLabel(tool.href),
                  variant: "text",
                  isExternal: true,
                }}
              />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            getHref={(page) => `/tools?page=${page}`}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </Section>
    </>
  );
}
