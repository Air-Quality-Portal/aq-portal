import { Card } from "@teamimpact/veda-ui-blocks";
import Link from "next/link";
import {
  Section,
  SectionIntro,
  ToolCatalog,
  ToolCatalogToolbar,
  ToolHighlights,
} from "@/app/components";
import {
  AIR4US_TOOL_INTRO,
  FEATURED_TOOLS,
  PARTNER_TOOLS_INTRO,
  searchTools,
  TOOLS,
} from "@/app/site-config/tool";

export default async function ToolsPage(props: PageProps<"/tools">) {
  const { q = "" } = await props.searchParams;
  const query = typeof q === "string" ? q : "";

  // Featured tools have the carousel above; the grid lists the whole catalog.
  const results = searchTools(TOOLS, query);

  return (
    <>
      <Section>
        <Card className="height-masthead" isMastHead title="Air Quality Tools Catalog" />
      </Section>
      {FEATURED_TOOLS.length > 0 && (
        <Section>
          <ToolHighlights intro={AIR4US_TOOL_INTRO} tools={FEATURED_TOOLS} />
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
