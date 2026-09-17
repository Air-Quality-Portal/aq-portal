import { Card } from "@teamimpact/veda-ui-blocks";
import {
  CatalogPagination,
  Section,
  SectionIntro,
  ToolCatalog,
  ToolCatalogToolbar,
  ToolHighlights,
} from "@/app/components";
import { AppLink } from "@/app/components/AppLink";
import {
  AIR4US_TOOL_INTRO,
  FEATURED_TOOLS,
  PARTNER_TOOLS_INTRO,
  searchTools,
  TOOLS,
} from "@/app/site-config/tool";

const PER_PAGE = 9;

export default async function ToolsPage(props: PageProps<"/tools">) {
  const { q = "", page } = await props.searchParams;
  const query = typeof q === "string" ? q : "";

  // Featured tools have the carousel above; the grid lists the whole catalog.
  const results = searchTools(TOOLS, query);

  const totalPages = Math.max(1, Math.ceil(results.length / PER_PAGE));
  const requestedPage = Number.parseInt(Array.isArray(page) ? page[0] : (page ?? ""), 10);
  const currentPage = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);

  const pageItems = results.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <>
      <Section>
        <Card className="height-masthead" isMastHead title="Air Quality Tool Catalog" />
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
              <AppLink href="/tools" className="usa-link">
                Clear search
              </AppLink>
            </p>
          </div>
        )}
        <ToolCatalog tools={pageItems} />
        {totalPages > 1 && (
          <CatalogPagination basePath="/tools" currentPage={currentPage} totalPages={totalPages} />
        )}
      </Section>
    </>
  );
}
