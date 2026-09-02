import { Card, CardDetailed, Carousel } from "@teamimpact/veda-ui-blocks";
import { Section, SectionIntro, ToolCatalogToolbar } from "@/app/components";
import { AppImage } from "@/app/components/AppImage";
import { AppLink } from "@/app/components/AppLink";
import { makePrimaryTag } from "@/app/site-config/content.helpers";
import { AIR4US_TOOL_INTRO, PARTNER_TOOLS_INTRO, searchTools, TOOLS } from "@/app/site-config/tool";

// Tools shown as full-width slides above the grid; the rest fill the paginated grid.
const FEATURED_COUNT = 3;

const hrefLabel = (href: string) => href.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default async function ToolsPage(props: PageProps<"/tools">) {
  const { q = "" } = await props.searchParams;
  const query = typeof q === "string" ? q : "";

  const featuredTools = TOOLS.slice(0, FEATURED_COUNT); //These are featured in the top carousel
  // The featured tools already have the carousel above; the grid searches the rest.
  const catalogTools = TOOLS.slice(FEATURED_COUNT);
  const results = searchTools(catalogTools, query);

  return (
    <>
      <Section>
        <Card className="height-masthead" isMastHead title="Air Quality Tools Catalog" />
      </Section>
      {featuredTools.length > 0 && (
        <Section>
          <SectionIntro {...AIR4US_TOOL_INTRO} />

          <Carousel
            className="height-card-lg"
            maxVisibleItems={1}
            items={featuredTools.map((tool) => ({
              image: (
                <AppImage
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
        <SectionIntro {...PARTNER_TOOLS_INTRO} />
        <ToolCatalogToolbar count={results.length} query={query} />
        {results.length === 0 && (
          <div className="padding-y-6 text-center">
            <p className="margin-0 text-bold">No tools match “{query}”.</p>
            <p className="margin-top-1 margin-bottom-0">
              <AppLink href="/tools" className="usa-link">
                Clear search
              </AppLink>
            </p>
          </div>
        )}
        <div className="grid-row grid-gap">
          {results.map((tool) => (
            <div
              key={tool.id}
              className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-y-1 desktop:margin-y-2"
            >
              <CardDetailed
                className="height-full border-1px border-base-lighter"
                imagePosition="top"
                image={
                  <AppImage
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
                  tool.additionalTags
                    ? tool.additionalTags?.map((label) => {
                        return {
                          label: label,
                          variant: "text",
                          color: "base",
                          className: "font-mono-2xs",
                        };
                      })
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
      </Section>
    </>
  );
}
