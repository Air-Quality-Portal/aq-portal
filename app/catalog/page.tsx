import { Section, SectionHeader, ThemeTag } from "@/app/disastersComponents";

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
        <h2 className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-bottom-1">
          Section
        </h2>
        <p className="font-sans-xs text-base margin-bottom-0">Default</p>
      </div>
      <Section>
        <SectionHeader>Example Section Headline</SectionHeader>
        <p>Section content goes here.</p>
      </Section>
      <Section>
        <SectionHeader>Example Section Headline</SectionHeader>
        <p>Section content goes here.</p>
      </Section>
      <div className="grid-container margin-top-4 margin-bottom-2">
        <p className="font-sans-xs text-base margin-bottom-0">greyBackground=true</p>
      </div>
      <Section bgColor="base-lightest">
        <SectionHeader>Example Section Headline</SectionHeader>
        <p>Section content with grey background.</p>
      </Section>

      {/* SectionHeader */}
      <div className="grid-container padding-y-6">
        <h2 className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-bottom-4">
          SectionHeader
        </h2>
        <SectionHeader>Example Section Headline</SectionHeader>
        <SectionHeader>Another Headline</SectionHeader>

        {/* ThemeTag */}
        <h2 className="font-sans-xl text-base-dark border-bottom-2px border-base-light padding-bottom-2 margin-top-6 margin-bottom-4">
          ThemeTag
        </h2>
        <div className="display-flex flex-wrap grid-gap-2">
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">respond</p>
            <ThemeTag theme="respond" />
          </div>
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">build</p>
            <ThemeTag theme="build" />
          </div>
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">prepare</p>
            <ThemeTag theme="prepare" />
          </div>
          <div>
            <p className="font-sans-xs text-base margin-bottom-1">recover</p>
            <ThemeTag theme="recover" />
          </div>
        </div>
      </div>
    </>
  );
}
