import { Card, CardDetailed, Carousel } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { Section, SectionIntro, ToolCatalogToolbar } from "@/app/components";
import { makePrimaryTag } from "@/app/site-config/content.helpers";
import { AIR4US_TOOL_INTRO, PARTNER_TOOLS_INTRO, TOOLS } from "@/app/site-config/tool";

// Tools shown as full-width slides above the grid; the rest fill the paginated grid.
const FEATURED_COUNT = 3;

const hrefLabel = (href: string) => href.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default async function ToolsPage() {
  // The featured tools are featured in the top carousel
  const featuredTools = TOOLS.slice(0, FEATURED_COUNT);

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
        <SectionIntro {...PARTNER_TOOLS_INTRO} />
        <ToolCatalogToolbar count={TOOLS.length - FEATURED_COUNT} />
        <div className="grid-row grid-gap">
          {TOOLS.map((tool) => (
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
