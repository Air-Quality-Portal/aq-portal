import { LogoEmblem, Section } from "@/app/components";
import { ContentBlockRenderer } from "@/app/components/ContentBlockRenderer";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about__page";

const EMBLEM_WIDTH = 134;
const EMBLEM_HEIGHT = 138;
const EMBLEM_ARIA_LABEL = "NASA Disasters Program emblem";

export default function AboutPage() {
  return (
    <>
      {/* Hero section: emblem + title */}
      <Section>
        <div className="grid-row">
          <div className="grid-col-12">
            <div className="display-flex flex-row flex-align-center">
              <div className="text-primary margin-right-3">
                <LogoEmblem
                  width={EMBLEM_WIDTH}
                  height={EMBLEM_HEIGHT}
                  ariaLabel={EMBLEM_ARIA_LABEL}
                  className="display-block"
                />
              </div>
              <h1 className="text-primary-dark">
                <span className="display-block">About the</span>
                <span className="display-block">NASA Disasters</span>
                <span className="display-block">Program</span>
              </h1>
            </div>
          </div>
        </div>
      </Section>

      {/* Body content: heading, paragraph, CTAs */}
      {ABOUT_PAGE_BODY.body.map((block, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
        <ContentBlockRenderer key={i} block={block} />
      ))}
    </>
  );
}
