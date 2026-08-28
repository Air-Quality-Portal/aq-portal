import { Card } from "@teamimpact/veda-ui-blocks";
import Link from "next/link";
import { Section, SectionIntro, ToolCatalog, ToolCatalogToolbar } from "@/app/components";
import {
  AIR4US_TOOL_INTRO,
  FEATURED_COUNT,
  PARTNER_TOOLS_INTRO,
  searchTools,
  TOOLS,
} from "@/app/site-config/tool";

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
        </Section>
      )}

      <Section>
        <SectionIntro {...PARTNER_TOOLS_INTRO} />
        <ToolCatalogToolbar count={results.length} query={query} />
        {results.length === 0 && (
          <div className="padding-y-6 text-center">
            <p className="margin-0 text-bold">No tools match "{query}".</p>
            <p className="margin-top-1 margin-bottom-0">
              <Link href="/tools" className="usa-link">
                Clear search
              </Link>
            </p>
          </div>
        )}
        <ToolCatalog tools={results} />
      </Section>
    </>
  );
}
