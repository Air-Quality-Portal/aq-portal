import { Link } from "@teamimpact/veda-ui-blocks";
import Image from "next/image";
import { ImageComparison, Section, SectionCardSimple, SectionHeading } from "@/app/components";
import type { ContentBlock } from "@/app/site-config/types";
import { makeCardSimpleProps } from "../site-config/content.helpers";
import { typedMap } from "../site-config/typed.helpers";
import { StacCompareBlock, StacSingleLayerBlock } from "./blocks";

function ContentHeading({
  heading,
  headingLevel,
}: {
  heading: string;
  headingLevel?: "h2" | "h3" | "h4";
}) {
  if (headingLevel === "h4") return <h4 className="font-heading-lg margin-bottom-1">{heading}</h4>;
  if (headingLevel === "h3") return <h3 className="font-heading-lg margin-bottom-1">{heading}</h3>;
  return <SectionHeading>{heading}</SectionHeading>;
}

export const ContentBlockRenderer = ({
  block,
  isMultiColumnLayout,
}: {
  block: ContentBlock;
  isMultiColumnLayout?: boolean;
}) => {
  switch (block.type) {
    case "text":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          {block.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
            <p key={i}>{p}</p>
          ))}
        </Section>
      );

    case "list":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <ul className="usa-list">
            {block.items.map((item, i) =>
              typeof item === "string" ? (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
                <li key={i}>{item}</li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ),
            )}
          </ul>
        </Section>
      );

    case "note":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          <div role="note" className="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
            <div className="usa-alert__body">
              <p className="usa-alert__text">{block.text}</p>
            </div>
          </div>
        </Section>
      );

    case "slider":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          <ImageComparison
            before={block.before}
            after={block.after}
            sizes="(max-width: 1024px) 100vw, 768px"
          />
        </Section>
      );

    case "video":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.title && <h3 className="font-heading-xl margin-bottom-1">{block.title}</h3>}
          {block.src ? (
            <video controls className="width-full display-block">
              <source src={block.src} />
              <track kind="captions" />
            </video>
          ) : (
            <div className="width-full bg-base-lightest display-flex flex-align-center flex-justify-center height-card padding-x-4">
              <p className="text-base margin-0">Video coming soon</p>
            </div>
          )}
          {block.caption && <p className="font-body-sm text-base margin-top-1">{block.caption}</p>}
        </Section>
      );

    case "image":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          <figure>
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              style={{ width: block.maxWidth ?? "100%", height: "auto" }}
            />
            <figcaption className="font-body-sm text-base margin-top-1padding-top-2">
              {block.caption}
            </figcaption>
          </figure>
        </Section>
      );
    case "card-simple": {
      return (
        <SectionCardSimple
          cards={typedMap(block.cards, makeCardSimpleProps)}
          sectionHeading={block.sectionHeading}
        />
      );
    }
    case "stacSingleLayer":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <StacSingleLayerBlock block={block} />
        </Section>
      );
    case "stacCompare":
      return (
        <Section isMultiColumnLayout={isMultiColumnLayout}>
          {block.heading && (
            <ContentHeading heading={block.heading} headingLevel={block.headingLevel} />
          )}
          <StacCompareBlock block={block} />
        </Section>
      );
    case "link":
      return (
        <Section>
          <Link
            href={block.href}
            target={block.target}
            rel={block.rel}
            variant="text"
            isExternal={block.target === "_blank"}
          >
            {block.label}
          </Link>
        </Section>
      );
  }
};
