import { Card } from "@teamimpact/veda-ui-blocks";
import {
  CATALOG_PAGE_PARAM,
  firstSearchParam,
  paginateCatalogItems,
} from "@/app/_utilities/catalog-pagination.helpers";
import {
  CatalogEmptyState,
  CatalogPagination,
  Section,
  SectionIntro,
  ToolCatalog,
  ToolCatalogToolbar,
  ToolHighlights,
  VisualizationToolIntro,
} from "@/app/components";
import {
  AIR4US_TOOL_INTRO,
  FEATURED_TOOLS,
  PARTNER_TOOLS_INTRO,
  searchTools,
  TOOLS,
  VISUALIZATION_TOOL_INTRO,
} from "@/app/site-config/tool";

const PER_PAGE = 9;

export default async function ToolsPage(props: PageProps<"/tools">) {
  const searchParams = await props.searchParams;
  const query = firstSearchParam(searchParams.q);

  // Featured tools have the carousel above; the grid lists the whole catalog.
  const results = searchTools(TOOLS, query);
  const { pageItems, currentPage, totalPages } = paginateCatalogItems(
    results,
    searchParams[CATALOG_PAGE_PARAM],
    PER_PAGE,
  );

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
      <Section className="margin-top-0">
        <VisualizationToolIntro {...VISUALIZATION_TOOL_INTRO} />
      </Section>

      <Section>
        <SectionIntro {...PARTNER_TOOLS_INTRO} />
        <ToolCatalogToolbar count={results.length} query={query} pageParam={CATALOG_PAGE_PARAM} />
        {results.length === 0 && (
          <CatalogEmptyState query={query} itemsLabel="tools" clearHref="/tools" />
        )}
        <ToolCatalog tools={pageItems} />
        {totalPages > 1 && (
          <CatalogPagination
            basePath="/tools"
            currentPage={currentPage}
            totalPages={totalPages}
            pageParam={CATALOG_PAGE_PARAM}
          />
        )}
      </Section>
    </>
  );
}
