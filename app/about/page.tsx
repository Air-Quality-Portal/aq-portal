import Image from "next/image";

import { Section } from "@/app/components";
import { ContentBlockRenderer } from "@/app/components/ContentBlockRenderer";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about__page";

export default function AboutPage() {
  return (
    <>
      {/* Hero section: emblem + title */}
      <Section>
        <div className="grid-row">
          <div className="grid-col-12">
            <div className="display-flex flex-row flex-align-center">
              <div className="margin-right-3">
                <Image
                  src="/img/logo-emblem-primary.svg"
                  alt="NASA Disasters Program emblem"
                  width={134}
                  height={138}
                  className="display-block"
                />
              </div>
              <h1 className="text-primary-dark font-heading-3xl margin-0">
                About the NASA Disasters Program
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
