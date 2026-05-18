import { Section, SectionHeading, ThemeTag } from "@/app/disastersComponents";

// biome-ignore lint/style/noDefaultExport: Next.js requires default export for pages
export default function CatalogPage() {
  return (
    <>
      {/* Page header — constrained width */}
      <div className="grid-container padding-y-6">
        <h1 className="font-heading-2xl text-primary-dark margin-bottom-2">Component Catalog</h1>
      </div>

      {/* Section — must be top-level, not inside a grid-container */}
      <div className="grid-container margin-bottom-2">
        <SectionHeading className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-bottom-1">
          Section
        </SectionHeading>

        <p className="font-sans-xs text-base margin-bottom-0">Default</p>
      </div>
      <Section>
        <SectionHeading>Example Section Headline</SectionHeading>
        <p>Section content goes here.</p>
      </Section>
      <div className="grid-container margin-top-4 margin-bottom-2">
        <p className="font-sans-xs text-base margin-bottom-0">greyBackground=true</p>
      </div>
      <Section bgColor="base-lightest">
        <SectionHeading>Example Section Headline</SectionHeading>
        <p>Section content with grey background.</p>
      </Section>

      {/* SectionHeading */}
      <div className="grid-container padding-y-6">
        <SectionHeading className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-bottom-1">
          SectionHeading
        </SectionHeading>
        <SectionHeading>Example Section Headline</SectionHeading>
        <SectionHeading>Another Headline</SectionHeading>

        {/* ThemeTag */}
        <SectionHeading className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-bottom-1">
          ThemeTag
        </SectionHeading>
        <div className="display-flex flex-wrap grid-gap-2">
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">respond</p>
            <div className="blocks-card-simple__tag">
              <ThemeTag theme="respond" />
            </div>
          </div>
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">build</p>
            <div className="blocks-card-simple__tag">
              <ThemeTag theme="build" />
            </div>
          </div>
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">prepare</p>{" "}
            <div className="blocks-card-simple__tag">
              <ThemeTag theme="prepare" />
            </div>
          </div>
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">recover</p>{" "}
            <div className="blocks-card-simple__tag">
              <ThemeTag theme="recover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
